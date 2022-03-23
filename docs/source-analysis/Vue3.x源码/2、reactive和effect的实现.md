这是 Vue3.x 源码实现的第二篇，将深入 vue3 中 @vue/reactivity 模块，介绍其中 reactive、 effect、ref 等方法的实现

## 一、reactive

`reactive` 方法接收一个普通对象将其转换成响应式对象，内部通过 `Proxy` 拦截对象属性的**读取**和**设置**操作

- 在读取属性时，收集依赖
- 在设置属性时，通知依赖更新

```ts
// path: packages/reactivity/src/reactive.ts
import { isObject } from '@vue/shared'

const mutableHandlers: ProxyHandler<Record<any, any>> = {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    // todo 收集依赖
    return res
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    // todo 触发依赖执行
    return res
  },
}

function createReactiveObject(target: object) {
  if (!isObject(target)) return false
  const proxy = new Proxy(target, mutableHandlers)
  return proxy
}

export function reactive(target: object) {
  return createReactiveObject(target)
}
```

注意 👆 代码，在 get 和 set 拦截函数中，并没有直接使用原始对象 target 来完成属性的读取和设置操作，而是借用 `Reflect` 对象，有以下原因

- `Reflect.set` 会返回 `boolean` 值, 标识是否操作成功
- this 的问题

```js
let obj = {
  foo: 1,
  get bar() {
    return this.foo
  },
}
let p = new Proxy(obj, {
  get(target, key) {
    return target[key]
  },
  //...
})
```

例如，当在组件 `template` 中使用 `p.bar` 属性时，该属性是个访问器属性，它返回 `this.foo` 的值，读取了 `foo` 属性值，那么 组件 `template` 应该与属性 `foo` 建立联系，当设置 `p.foo` 的值时，组件 `template` 应该重新渲染

然而， 组件 `template` 并没有重新渲染，原因在于，当访问 `p.bar` 属性时，其 `getter` 函数内的 this 指向 `target`, 也就是原始对象 obj, 在 `template` 中读取原始对象的值是不会建立响应式的

而使用 `Reflect.get` 方法，可以接收第三个参数，代表谁在读取属性, 确保 this 指向正确

上面代码还存在缺陷

1、同一个对象，多次代理的响应式对象应该相同

2、不能代理响应式对象

所以，需要对代理对象添加个缓存，以及添加个判断条件，如果一个对象是响应式对象，直接返回不进行处理

```ts {1-3,6-8,17,20-25,28}
// path: packages/reactivity/src/reactive.ts

const enum ReactioveFlags {
  IS_REACTIVE = '__v_isReacttive',
}
const mutableHandlers: ProxyHandler<Record<any, any>> = {
  get(target, key, receiver) {
    if (key === ReactioveFlags.IS_REACTIVE) {
      return true
    }
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    return res
  },
}

const reactiveMap = new WeakMap()
function createReactiveObject(target: object) {
  if (!isObject(target)) return false
  // target 已经是个被代理的 proxy 对象
  if ((target as any)[ReactioveFlags.IS_REACTIVE]) {
    return target
  }
  // 同一个 target 被代理多次
  if (reactiveMap.has(target)) return reactiveMap.get(target)

  const proxy = new Proxy(target, mutableHandlers)
  reactiveMap.set(target, proxy)
  return proxy
}
```

接着，先介绍 effect 函数的实现，然后在介绍依赖收集和触发依赖执行

## 二、effect

effect 函数是用来注册副作用函数，例如

```js
let obj = { num: 10 }
let state = reactive(obj)

effect(() => {
  document.body.innerText = state.num
})

setTimeout(() => {
  state.num = 20
}, 1000)
```

通过 `effect` 注册的函数，默认会执行一次，读取 `state.num`。
当 `state.num` 发生变化后，注册的副作用函数需要重新执行, 这样就实现了响应式数据

```ts
// path: packages/reactivity/src/effect.ts
let activeEffect

export class ReactiveEffect {
  constructor(public fn) {}
  run() {
    activeEffect = this
    return this.fn()
  }
}

export function effect<T = any>(fn: () => T) {
  const _effect = new ReactiveEffect(fn)
  _effect.run() // 默认 执行一次 fn
}
```

此时，当 state.num 发生变化后，页面并没有发生改变，接下来看下如何收集依赖和触发依赖执行

### 2.1、track 与 trigger

在 `effect.ts` 文件中定义 track 函数收集依赖，定义 trigger 函数触发依赖执行，首先需要分析清楚依赖关系

```ts
effect(function effectFn() {
  document.body.innerText = state.num
})
```

以这段代码为例，存在三个角色：

- 被操作的代理对象 state;
- 被读取的字段名 num;
- effect 注册的副作用函数 effectFn;

三者的关系应该是一个树形结构

```
  state
    -- num
      -- effectFn
```

为啥树型结构，可以看下面两个例子

一个副作用函数中同时读取同一对象的两个不同属性

```js
effect(function effectFn() {
  document.body.innerText = state.num + state.name
})
```

此时关系为

```
state
  -- num
    -- effectFn
  -- name
    -- effectFn
```

两个副作用函数中同时读取同一对象的属性值

```js
effect(function effectFn1() {
  console.log(state.num)
})

effect(function effectFn2() {
  console.log(state.num)
})
```

此时关系为

```
state
  -- num
    -- effectFn1
    -- effectFn2
```

```ts
// path: packages/reactivity/src/effect.ts
const targetMap = new WeakMap()

/**
 * 是否需要收集
 * @returns boolean
 */
export function isTracking() {
  return activeEffect !== undefined
}

export function track(target, key) {
  if (!isTracking()) return
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  let shouldTrack = !deps.has(activeEffect)
  if (shouldTrack) {
    // deps 与 activeEffect 相互关联
    deps.add(activeEffect)
  }
}

export function trigger(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) return
  let deps = depsMap.get(key)
  if (!deps) return

  const effectsToRun = new Set()
  deps &&
    deps.forEach((item) => {
      if (item !== activeEffect) {
        effectsToRun.add(item)
      }
    })

  effectsToRun.forEach((effect) => {
    effect.run() // 执行 effectFn
  })
}
```

构建树形数据结构，分别使用了 WeakMap, Map, 和 Set。

- WeakMap 由 target --> Map 组成
- Map 由 key -> Set 组件
- Set 里面存储的就是注册的副作用函数

导出的方法就可以在 reactive.ts 文件中使用了

```ts
// path: packages/reactivity/src/reactive.ts
import { track, trigger } from './effect'

const mutableHandlers: ProxyHandler<Record<any, any>> = {
  get(target, key, receiver) {
    // ...
    const res = Reflect.get(target, key, receiver)
    track(target, key) // 收集依赖
    return res
  },
  set(target, key, value, receiver) {
    // ...
    const res = Reflect.set(target, key, value, receiver)
    trigger(target, key) // 触发依赖执行
    return res
  },
}
```

### 2.2、effect 嵌套和 effect 执行栈

目前，在 effect 内部，会将当前正在执行的 `_effect` 实例挂载在全局变量 `activeEffect` 上， 收集依赖时，之间收集 `activeEffect` 变量即可，

但当 effect 出现嵌套时，就会出现问题

```js
effect(function effectFn1() {
  console.log(state.num)
  effect(function effectFn2() {
    console.log(state.num)
  })
  console.log(state.name)
})
```

当 `effectFn2` 执行时, `activeEffect` 变量跟 `effectFn2` 相关联，但执行完成后，代码中读取 `state.name` 属性值，此时 `activeEffect` 应该跟 `effectFn1` 进行相关联，而不是跟 `effectFn2` 关联

所以，需要创建一个 `effect` 执行栈，注册新副作用函数时，入栈，执行结束出栈，而 `activeEffect` 时钟执行 栈顶原始即可

```ts
// path: packages/reactivity/src/effect.ts
let effectStack: any = [] // 执行栈
let activeEffect

export class ReactiveEffect {
  constructor(public fn) {}
  run() {
    // 屏蔽一个 effect 多次执行
    if (effectStack.includes(this)) return false
    try {
      effectStack.push((activeEffect = this))
      return this.fn()
    } finally {
      effectStack.pop()
      activeEffect = effectStack[effectStack.length - 1]
    }
  }
}
```

### 2.3、遗留的 effect

```js
const obj = { ok: true, text: 'Hi' }
const state = reactive(obj)

effect(function effectFn() {
  document.body.innerText = state.ok ? state.text : 'not'
})
```

上面代码执行完成后，属性 ok , text 都会收集这个副作用函数 `effectFn`, 当设置 `state.ok = false` , effectFn 函数会再次执行，
而此时不会读取 `state.text` 的值，换句话就是，`state.text` 属性和 副作用函数 `effectFn` 没有关联了，无论怎么修改 `state.text` 的值，`effectFn` 都不会执行

然而真实情况是 `state.text` 发生改变，`effectFn` 都也会执行，只是页面没变化。所以，在每次执行副作用函数之间，应该将该函数与其依赖的属性之间切段联系，因此，副作用函数也需要存储其依赖的属性的属性，这样就形成了相互存储，相互绑定

```js {4-10,13,20,33}
// path: packages/reactivity/src/effect.ts

// ...
function cleanupEffect(effect) {
  const { deps } = effect // [ set, set ]
  for (let dep of deps) {
    dep.delete(effect)
  }
  effect.deps.length = 0
}

export class ReactiveEffect {
  deps = []; // effect 需要记录它依赖了哪些属性
  constructor(public fn, public options?) {

  }
  run() {
    try {
      effectStack.push(activeEffect = this)
      cleanupEffect(this)
      return this.fn()
    } finally {
      effectStack.pop()
      activeEffect = effectStack[effectStack.length - 1]
    }
  }
}

export function trackEffects(deps) {
  let shouldTrack = !deps.has(activeEffect)
  if (shouldTrack) {
    deps.add(activeEffect)
    activeEffect.deps.push(deps) // 存储
  }
}
```

至此，`reactive`、 `effect` 等方法已初步实现，拜 👋
