## 一、JS数据类型及其判断

### 1.1、数据类型种类

js 中一共内置了8种数据类型，可以分成 **基本数据类型** 和 **引用数据类型**，具体如下

- **基本数据类型 (7)**：`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigInt`

- **引用数据类型 (1)**： `object`


### 1.2、数据类型判断

数据类型的判断方法，常见的有：
`typeof`、`instanceof`、`Object.prototype.toString`

#### 1.2.1、typeof 运算符

**用法**

```js
typeof 1      // 'number'
typeof null   // 'object'
typeof Symbol('foo')  // 'symbol'
typeof console.log // 'function'
```

**总结**
- `typeof` 运算符的返回值为 **字符串**
- `typeof` 能判断出除 `null` 以为的基本数据类型，以及 `function` 类型
- `null` 会被判断为 `object`,

::: tip
为什么 `typeof null === 'object'`, 参考 [浅谈 instanceof 和 typeof 的实现原理](https://juejin.cn/post/6844903613584654344)
:::


#### 1.2.2、instanceof

**用法**

`a instanceof B`，**对象`a`是否为`B`的实例**，即 `a` 的原型链上是否存在 `B` 的构造函数
```js
[] instanceof Array  // true
[] instanceof Object // true
5 instanceof Number  // false
new Number(5) instanceof Number  // true
```
**实现**

```js
const instanceofMock = (L, R) => {
  if (typeof L !== 'object'){
    return false
  }
  while(true){
    if (L === null) {
      return false
    }
    if (R.prototype === L.__proto__){
      return true
    }
    L = L.__proto__
  }
}
instanceofMock([], Array) // true
instanceofMock(5, Number) // false
```

#### 1.2.4、终极办法 Object.prototype.toString

**用法**
```js
Object.prototype.toString.call(1) // [object Number]
Object.prototype.toString.call(undefined) // [object Undefined]
Object.prototype.toString.call([]) // [object Array]
Object.prototype.toString.call(null) // [object Null]
// ...
```

### 1.3、实现 getType 方法

```js
const getType = (x) => {
  if (x === null) return 'null'
  const t = typeof x
  if (t !== 'object'){
    return t
  }
  let cls = Object.prototype.toString.call(x).slice(8, -1)
  return cls.toLowerCase()
}
```

## 二、JS数据类型的转化

js 是一种弱类型，或者说一种动态语言，不用提前声明变量的数据类型，在程序运行时自动被确定。

### 2.1、`+` 运算符

对于`+` 运算符，当左右两侧数据类型不同时，转化规则不尽相同，具体规则如下

#### 2.1.1、运算符两侧都是 `number` 类型

- 两边若存在 `NaN`, 则结果为 `NaN`
- `Infinity + Infinity`, 结果为 `Infinity`
- `Infinity + (-Infinity)`, 结果为 `-Infinity`
- `-Infinity + (-Infinity)`, 结果为 `NaN`

#### 2.1.1、运算符两侧有至少一个是 `string` 类型
- 两边都是字符串，执行字符串拼接
- 只有一边为字符串，则将另外的值转换成字符串，再进行拼接操作
- 两边有一个是对象，则调用 `valueOf` 或 `toString` 方法获取值，将其转换成基本数据类型再进行字符串拼接

::: tip
ES 规范规定，对象会根据对象内置的 **`ToPrimitive`** 函数，来决定对象转化成基本数据类型时，是倾向于调用 `valueOf` 还是 `toString`
:::

