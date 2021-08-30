## 1、Vue 中模板编译原理？

在初始化数据后，就需要进行模版编译的工作了，模版编译的最终产物是为了得到 `render` 函数，主要分成以下步骤:

- 当存在 `el` 属性后，会按照优先级判断实例中是否存在 `render` 、`template` 属性，以及 `el` 这个 `DOM` 元素内容是否存在
- 当 `render` 函数不存在时，会将 `template` 或 `el` 元素的 `DOM` 内容当作模版，然后通过词法解析生成 `ast` 语法树，内部主要是对模版字符串进行正则匹配
- 生成 `ast` 语法树后，会进行静态节点标记，作用是提高`VNode` 进行 `Diff` 比较的性能
- 标记结束后，将 `ast` 转换成字符串 `strCode`，字符串中存在 `_v, _c, _s` 等方法分别描述**元素节点**、**文本节点** 以及 **字符串中的变量**
- 将字符串通过 `` new Function(`with(this){return ${strCode}}`) `` 转换成 `render` 函数

## 2、生命周期钩子是如何实现的？

- 生命周期钩子由全局生命钩子和实例生命钩子组成。通过 `Vue.mixin()` 定义全局生命钩子，`Vue.mixin()` 可调用多次，Vue 在其内部会定义不同属性的合并策略，生命周期钩子的合并策略就是为每个钩子函数创建一个数组，每次定义的钩子函数都保存到对应的数组中，并最终挂载到 `Vue.options` 上

- 在 Vue 实例初始化时，会将 `Vue.options` 上的全局生命钩子函数和实例的钩子函数进行合并，挂载到实例的`$options` 属性上，最后在实例的不同阶段通过 `callhook` 函数从 `$options` 中取出对应的生命钩子数组，最后遍历数组，依次执行生命钩子函数

## 3、Vue.mixin() 的使用场景和原理

- 使用场景

`Vue.mixin()`是一个全局 api, 全局注册一个混入，影响注册之后创建的每一个 Vue 实例，通常用来为自定义选项注入处理逻辑

- 原理

`Vue.mixin` 可调用多次，在其内部会通过方法 `mergeOptions` 来合并传入的属性，而 `mergeOptions` 方法内容使用策略模式，对不同的属性采取不同的合并策略，大多数属性的合并策略是覆盖，而像生命周期 `hooks` 则是使用数组保留每个属性值。当实例初始化的时候，会将实例的 `$options` 和全局的 `options` 使用 `mergeOptions` 方法进行合并，最终合并后属性都放到实例的 `$options` 上。

## 4、nextTick() 的使用场景和原理

- 使用场景

在 Vue 中是异步更新数据，默认数据更新后不能立即获取到最新的 DOM 节点，而通过 `nextTick` 获取到更新数据后的最新 DOM 节点。

- 原理

当多次修改相同的属性值，会导致属性所依赖的渲染 `Watcher` 执行多次，内部会将每次要执行的 `Watcher` 通过 `id` 去重后存放到一个队列中。当所以的同步任务执行完成后，会通过 `nextTick` 方法异步执行队列中的`watcher`, 而实例上的 `$nextTick()` 方法在内部也是调用了 `nextTick()` 方法，在 `nextTick()` 方法中，`vue 3` 使用 `Promise.resolve().then()` 实现异步，而`vue 2.X` 版本对异步做了兼容性处理，按照 `Promise` > `MutationObserver` > `setImmediate` > `setTimeout` 顺序做兼容性处理

## 5、Vue 为什么需要虚拟 DOM？

在 `JS` 中直接操作真实的 `DOM` 元素是十分耗性能的，所以使用 `VNode` 对象来描述真实的 `DOM` 元素，在 `JS` 中操作的是 `VNode`, 当数据发生变化后，`Vue` 会对新旧 `VNode` 进行 `patch`, 最后才会更新到真实 `DOM` 元素上

## 6、Vue 中 diff 的原理？

`diff`比对是为了尽可能找出可以复用的真实 DOM 节点。当新旧 `VNode` 的 `children` 都是多个子节点时，核心 `diff` 算法才会派上用场。`Vue2` 中核心 `diff` 算法采用的是**双指针双端比较法**。原理如下

- 使用 4 个变量存储新旧 `VNode children` 前后两个端点的位置索引，再使用 4 个变量存储对应位置上的 `VNode`
- 执行双端比较时，会按照 **首首** ，**尾尾**，**首尾**，**首尾** 顺序进行 4 次比较，当找到可复用的节点，就会停止比较，去执行移动真实 DOM 节点、节点之间 patch 、更新索引值等操作
- 当前面 4 次对比都没找到可复用节点，就会遍历新 `children`, 拿每个 `VNode` 去旧的 `children` 中查找复用节点，找到就移动 DOM 节点，在旧 `children` 中被移动的索引位置上使用 null 占位；没找到复用节点，就表示是新增节点，需要创建挂载
- 当条件 `oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex` 不成立时，就结束对比，删除旧 `children` 中未复用到的节点

## 7、数据监测与 DOM Diff 的区别?

既然 Vue 通过数据劫持可以精准探测数据变化,为什么还需要虚拟 DOM 进行 diff 检测差异?

**Vue 中数据监测精度只到组件级别**，每一个组件实例都会创建一个 `Watcher`, 这样可以知道具体是那个组件发生变化了，而在组件内部，需要通过 `VNde Diff` 尽可能找出可以复用的真实节点，而不是每次都删除旧节点，创建新节点。这样可以提高性能

## 8、computed 和 watch 的区别？

**computed**

- computed 中定义的属性，可通过 Vue 实例获取，内部使用 `Object.defineProperty` 做响应式处理，computed 具有缓存功能，只有当依赖的属性发生变化，才会重新计算属性值
- computed 中定义的属性也会创建一个 Watcher, 当页面上读取该属性时，内部依赖的属性不仅收集这个 Watcher，还会搜集渲染 Watcher, 这样当依赖属性变化，页面读取的属性也会同步变化

**watch**

- watch 是用来监听属性的变化，当属性变化时，才会调用对应的回调函数，同时 watch 监听属性时，还可设置 deep 、immediate 两个属性
- 当需要深度监听对象内部属性值变化，可设置 deep: true
- immediate 表示在 watch 中首次绑定的时候，是否执行回调函数

## 9、Vue.set 方法是如何实现的？

**使用场景**

给响应式对象中添加一个 `property`，并确保这个新 `property` 同样是响应式的，且触发视图更新。

**用法**

`Vue.set( target, property/index, value )`

**实现原理**

当 target 是数组，内部调用数组的 splice 方法

当 target 是对象，

- 如果 `target` 上已经存在 `property` 属性，且不是 `Object.prototype` 上属性，直接进行赋值
- 判断 `target` 是否是响应式对象，如果是，调用 `defineReactive` 监听新属性，并调用 `notify` 触发更新；如果不是，直接赋值

## 10、Vue 生命周期

> Q1: Vue 的生命周期方法都有哪些？一般在哪一步发起 AJAx 请求及原因？

- 生命周期方法

`beforeCreate` 、`created`、`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeDestroy`、`destroyed`

- 当 Ajax 请求的数据不需要更新到页面上，可以在 created 阶段发起请求，如果需要更新到页面上，在 mounted 阶段发起，因为在这个阶段能够访问到真实的 DOM 元素

> Q2: 移除事件监听使用 `beforeDestroy` 还是 `destroyed` 钩子？

- 移除事件监听使用 `beforeDestroy`, 因为在 `destroyed` 被调用后，对应 `Vue` 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁

## 11、Vue 组件通信

> Q1: Vue 组件间传值的方式及之间区别？

- `props` 和 `$emit` , 父向子传递数据通过 props 实现，子向父传递数据通过 \$emit 触发事件实现
- `$parent` 和 `$children`
- `$refs` 获取组件实例
- `$attrs` 和 `$listeners` , A -> B -> C，在 B 组件中，可通过 `v-bind="$attrs"` 将 A 中所有的 attribute 绑定(class ,style 除外) 直接传递给 C, 通过 `v-on="$listeners"` 将 A 中的 (不含  `.native`  修饰器的) `v-on`  事件监听器传递给 C
- `provide` 和 `inject` , 允许一个祖先组件向其所有子孙后代注入一个依赖
- `eventBus` ,平级组件数据传递
- `vuex` 状态管理

> Q2: \$attrs 出现的原因以及应用场景有哪些？provide/inject 不能解决它能解决的问题吗？

- A -> B -> C，A 需要传递数据给 C， 同时在 B 组件中不需要使用传递的数据，此时就可使用 `v-bind="$attrs"` 将数据直接传递给 C
- `provide`  和  `inject`  主要在开发高阶插件/组件库时使用，它可以实现跨级数据传递

## 12、Vue 指令汇总

> Q1: 请说下 v-if 和 v-show 的区别？

- `v-if` 和 `v-show` 都可以用来控制 DOM 的显示和隐藏，而在内部，`v-if` 是通过增加、删除 DOM 来实现的，`v-show` 这是通过 CSS 属性 `display` 来控制的
- `v-show` 不管初始条件如何，元素都会被渲染，而 `v-if `只有在条件变为真时，才会渲染
- `v-if`  有更高的切换开销，而  `v-show`  有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用  `v-show`  较好；如果在运行时条件很少改变，则使用  `v-if`  较好

> Q2: v-if 与 v-for 的优先级

当 `v-if` 与`v-for` 放在同一个标签时, `v-for`的优先级高于 `v-if`
所以更推荐的写法是使用 `computed` 计算属性，先过滤数据再循环渲染

> Q3: v-if，v-model，v-for 的实现原理

解析指令是在将 template 解析成 ast 阶段进行的

- `v-if`，会在 el 上增加 if、ifConditions 属性

```javascript
function processIf(el) {
  const exp = getAndRemoveAttr(el, "v-if");
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el,
    });
  } else {
    if (getAndRemoveAttr(el, "v-else") != null) {
      el.else = true;
    }
    const elseif = getAndRemoveAttr(el, "v-else-if");
    if (elseif) {
      el.elseif = elseif;
    }
  }
}
```

- v-for, 通过正则匹配出 v-for 指令的内容，通过解析之后，在 el 元素上增加 for、alias、iterator 属性进行标识

```javascript
export function processFor(el: ASTElement) {
  let exp;
  if ((exp = getAndRemoveAttr(el, "v-for"))) {
    const res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== "production") {
      warn(`Invalid v-for expression: ${exp}`, el.rawAttrsMap["v-for"]);
    }
  }
}
```

- v-model

v-model 通常是在表单元素或者自定义组件中使用，以表单为例，`v-model`会把它关联的响应式数据（如`info.message`），动态地绑定到表单元素的 value 属性上，然后监听表单元素的`input`事件：当`v-model`绑定的响应数据发生变化时，表单元素的 value 值也会同步变化；当表单元素接受用户的输入时，`input`事件会触发，`input`的回调逻辑会把表单元素 value 最新值同步赋值给`v-model`绑定的响应式数据

> Q4: 如何理解自定义指令?

当需要对普通 DOM 元素进行底层操作，就可以用到自定义指令，一个指令定义对象可以提供 `bind` 、`inserted`、`update`、`componentUpdated`、`unbind` 等几个钩子函数，指令钩子函数接受 `el`、`binding`、`vnode`、`oldVNode` 等几个对象。

> Q5: Vue.directive 源码实现 

```javascript
const ASSET_TYPES = ["component", "directive", "filter"];

export function initAssetRegisters(Vue: GlobalAPI) {
  ASSET_TYPES.forEach((type) => {
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + "s"][id];
      } else {
        if (type === "component" && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === "directive" && typeof definition === "function") {
          definition = { bind: definition, update: definition };
        }
        this.options[type + "s"][id] = definition;
        return definition;
      }
    };
  });
}
```

Vue.directive 原理是将指令名称和对应的配置放到 Vue.options 属性上

## 13、Vue.use 使用及原理是什么？

Vue.use() 是用来安装 Vue.js 插件的。原理是

- `Vue.use()` 安装插件必须在 `new Vue()` 之前完成
- 插件是一个对象，必须提供  `install`  方法。如果插件是一个函数，它会被作为 `install` 方法。`install` 方法调用时，会将 `Vue` 作为参数传入
- 当 `install` 方法被同一个插件多次调用，插件将只会被安装一次

## 14、vue-router

> Q1: vue-router 有几种钩子函数？具体是什么及执行流程是怎样的？

**全局路由守卫**

- **router.beforeEach**: 注册一个**全局前置守卫**, 接受 `(to, from, next)` 三个参数，

  - to: 即将要进入的目标；
  - from: 当前导航正要离开的路由；
  - next: 调用 next 方法来  **resolve**  这个钩子

- **router.beforeResolve**: 注册一个**全局解析守卫**, 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
- **router.afterEach**: 注册**全局后置钩子**, 不会接受  `next`  函数也不会改变导航

**路由守卫**

- **beforeEnter**：在每个单独路由中定义，参数和全局前置守卫一样

**组件守卫**

- **beforeRouteEnter**: 守卫在导航确认前被调用，此时不能访问组件实例 this, 可以通过传一个回调给 next 来访问组件实例
- **beforeRouteUpdate**: 当前路由改变，但是该组件被复用时调用, 可以访问 this
- **beforeRouteLeave**: 导航离开该组件的对应路由时调用, 可以访问 this , 通常用来禁止用户在还未保存修改前突然离开。该导航可以通过  `next(false)`  来取消

**完整的解析流程如下**

1. 导航被触发。
1. 在失活的组件里调用 `beforeRouteLeave` 守卫。
1. 调用全局的 `beforeEach` 守卫。
1. 在被复用的组件里调用 `beforeRouteUpdate` 守卫。
1. 在路由配置里调用 `beforeEnter`。
1. 解析异步路由组件。
1. 在被激活的组件里调用 `beforeRouteEnter`。
1. 调用全局的 `beforeResolve` 守卫。
1. 导航被确认。
1. 调用全局的 `afterEach` 钩子。
1. 触发 DOM 更新。
1. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入

> Q2: vue-router 的两种模式的区别？

- **hash**: 默认值，使用 URL 的 hash 来模拟一个完整的 URL，hash 改变会触发 `hashChange` 事件，从而实现更新页面操作，缺点：丑
- **history**：通过 `history.pushState` 和 `history.replaceState` API 来实现，需要服务端配置，放在页面刷新显示 404

## 15、函数式组件的优势及原理

- 当组件仅用于渲染而不需要维护自身响应式数据时，推荐使用函数式组件，此时组件是无状态无实例的，渲染开销也低很多
- 原理在于函数式组件并不会增加组件的的钩子方法

## 16、Vue 事件修饰符有哪些？其实现原理是什么？

- `.stop` 阻止单击事件继续传播

```javascript
{"click":function($event){$event.stopPropagation();return a($event)}}
```

- `.prevent` 阻止默认事件

```javascript
{"click":function($event){$event.preventDefault();return a($event)}}
```

- `.capture` 使用事件捕获模式

- `.self` 只当在 event.target 是当前元素自身时触发处理函数

```javascript
{"click":function($event){
  if($event.target !== $event.currentTarget)return null;
  return a($event)}}
```

- `.once` 事件仅执行一次

- `.passive` 能够提升移动端的性能




## 17、keep-alive 使用场景及原理是?

**使用场景**：

`keep-alive` 主要用于保留组件状态或避免重新渲染，当包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

**原理**：

- `keep-alive` 是一个抽象组件，不会渲染成真实 DOM 元素，内部通过 `abstract: true` 标识
- 定义了 `include`、`exclude`、`max` 三个 `props`，前两个分别用来匹配要缓存的组件和不需要缓存的组件，最后 `max` 表示缓存的组件最大个数。
- 内部定义 `cache`, `keys` 分别用来保存缓存的组件和缓存的每个组件的 `key`
- 在 `render` 阶段，当命中缓存，返回缓存中对应的实例，并将当前 `key` 放到 `keys` 数组最后面，这样可以保证数组最后一个元素永远是最近使用的，对应第一个元素就是最久远的；当未命中，则进行存储缓存，同时判断缓存的个数是否超过限制，当超过后，删除 `keys[0]` 第一个（也就是最早缓存的）
- 在 `$mounted` 挂载后监听了`include`和`exclude`, 当属性值发生变化时，处理缓存，将不匹配的缓存删除


## 18、谈一下你对 vuex 的个人理解

- `vuex` 是采用**单项数据流**的概念，整个运行过程是：在 `state` 中定义数据源，通过声明的方式映射到视图 `view` 中，然后通过 `actions` 响应在 `view` 上的用户输入导致的状态变化
- `vuex` 通过状态集中管理，实现多组件之间状态共享
- `vuex` 的缺点是无法持久化数据

## 19、vue 中 slot 是如何实现的？什么时候使用它？

- `slot` 分成插槽和作用域插槽，统一使用 `v-slot` 指令
- 创建组件虚拟节点时，会将组件的儿子的虚拟节点保存起来。当初始化组件时,通过插槽属性将儿子进行分类，渲染组件时会拿对应的 `slot` 属性的节点进行替换操作
- 作用域插槽在解析的时候，不会作为组件的孩子节点。会解析成函数，当子组件渲染时，会调用此函数进行渲染

## 20、如何优化单页面首屏加载白屏体验问题？

**原因**
因为一个单页应用，渲染的 html 是靠 js 生成的，需要将所有需要的资源都下载到浏览器端并解析

**解决办法**

- 使用 webpack 优化打包后的体积大小，具体措施有：code-split 、路由懒加载、异步组件、图片压缩等
- 首页采用 SSR 服务端渲染
- 减少首屏接口请求数量，例如 chrome 存在同一域名最多同时存在 6 个 TCP 链接，后续的需要排队等候
- 静态资源 CDN、同时合理使用缓存策略，对不同的文件采取不同的缓存方式
- gzip 压缩
- 体验上，可增加 loading 或 骨架屏

## 21、vue3.0 在响应式方面对 vue2.0 的主要优化点在哪里？

- **数据劫持**: vue2.0 使用 `Object.defineProperty` 做数据劫持，而 vue3.0 采用 `proxy` 实现, 不需要改写数组的方法

## 22、Vue3.0 与 Vue2.0 的区别

**代码结构上**
- Vue3 代码架构采用 `monorepo` 策略，将模块拆分到不同的  `package` 中
- Vue3 使用 ts 做类型监测，Vue2 采用 flow 
- Vue3 支持 `tree-shaking`

**内部代码上**
- 数据劫持：vue2 采用 `defineProperty`, 递归遍历每个属性，添加 get、set 方法；vue3 采用 `proxy`, 不改变原数据
- vue3 采用 `compositionApi` 进行组织架构，解决编码时反复横跳，优化服用逻辑等（`mixin`带来的数据来源不清晰，命名冲突等），同时相比于 `optionApi` 更容易做类型推断
- vue3 对模版编译做了很多优化，编译时生成 `Block Tree`, 同时对子节点中的动态节点进行收集，可以减少比较，并且采用 `patchFlag` 标记动态节点
- vue3 增加了 `Fragment`, `Teleport`, `Suspense` 等组件
