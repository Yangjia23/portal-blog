前端团队 Q4 阶段需要开发一个前端监控系统，有些小伙伴可能并不太清楚其相关内容，本专题会介绍其出现的原因、工作原理等，本文会重点介绍监控系统中的 SDK 核心功能，包括数据采集、自动上报、手动上报等

## 一、前端监控系统

在开发之前，我们需要了解我们为什么需要前端监控系统，它将会帮助我们解决什么问题？

- 保存记录线上 bug 出现的现场环节，利用 Bug 堆栈信息来定位 bug
- 统计分析用户所使用的系统分布、浏览器分布、设备分布等，找出我们的主要用户
- 统计前端优化前后的页面性能来判断某次性能优化方案是否成功
- 统计用户访问量、在线时长，以及业务模块的使用情况，为产品后续发展提供参考

监控系统可以做的还有很多，而最主要的就是 “**比用户更早发现问题，在用户发现问题之前解决问题**"

## 二、SDK 核心功能

![linear.png](/images/sdk/framework.png)

### 2.1、自动上报数据

自动上报的数据不会破坏业务逻辑代码，只需要引入 SDK 即可

#### 2.1.1、错误类型数据

错误类型数据指的是运行过程中的前端报错，如 JS 语法错误、JS 解析报错、Vue 和 React 等常见框架的报错等，而每个错误对象都是 JS 中 Error 这个构造函数的实例，其具有 messgae 和 stack 两个属性

所以的报错可归纳成以下几种

- SyntaxError: 语法错误

  ```js
  function fn(){
    var a =
  }
  fn()
  ```

  SyntaxError（语法错误）发生在代码解析过程中，一般在开发阶段就会发现

- TypeError: 类型错误

  ```js
  let a = 123
  a.push(5)
  ```

  TypeError (类型错误) 是变量不是预期的类型时发生错误

- RangeError: 范围错误

  ```js
  let a = new Array(-1)
  ```

  RangeError (范围错误) 是一个值超过了有效的范围时发生错误

- ReferenceError: 引用错误

  ```js
  console.log(aaa)
  ```

  ReferenceError (引用错误) 是引用一个不存在的变量时发生错误

* Failed to load resource: 资源加载错误

  资源加载错误是指以下标签加载资源出错时发生错误

  ```
  <img>, <input type="image">, <object>, <script>, <style>, <audio>, <video>
  ```

如何收集报错信息，有两种方案: 通过 `try...catch...` 捕获，以及 `window.onerror` 监听

- `try...catch...` 方案

  ```js
  try {
    // 代码
  } catch (e) {
    // 错误处理
    // 上报错误
  }
  ```

  通过自动化工具可对每个函数添加 try catch, 对错误进行兜底处理，但也存在局限性

  - 无法处理语法错误和异步错误

  ```js
  try {
    let a =\ 'a'
  } catch(e){
    console.log(e)
  }

  try {
    setTimeout(() => {
      a
    })
  } catch(e){
    console.log(e)
  }
  ```

  - 对代码的侵入性较强

- `window.onerror` 方案

  使用 `window.onerror` 监听也存在局限性，因为 `window.onerror` 是通过事件冒泡获取 error 信息，而网络资源加载错误是不会进行冒泡的，而 `window.addEventListener` 是通过事件捕获获取 error 信息的，

  同时 `window.onerror` 可以通过赋值进行覆盖掉，而 `addEventListener` 可以绑定多个回调，所以最终使用 `addEventListener` 进行错误收集

```js
window.addEventListener('error', handlerError, true)
```

除了上面的报错，我们还需要捕获未处理的 `Promise` 错误，可通过绑定 `unhandledrejection` 事件来监听

```js
window.addEventListener('unhandledrejection', handlerError, true)
```

而针对于 React 和 Vue 框架中的保持，以 Vue 为例，官方提供`Vue.config.errorHandler` 来处理捕获的错误，如何开发者没配置，捕获的错误会以 `console.error` 的方式输出，所以可以劫持 `console.error` 来捕获框架中的错误

```js
console.error = (function(origin) {
  return function(info) {
    var errorLog = {
      type: 'xxx',
      desc: info,
    }
    handlerError(errorLog) // 进行上报
    origin.call(console, info)
  }
})(console.error)
```

#### 2.1.2、性能相关数据

性能监控常用指标

- 首次绘制时间（FP）：页面发生第一次绘制的时间点
- 首次有内容绘制时间（FCP）：浏览器完成渲染 DOM 中第一部分内容的时间点
- 首次有意义绘制时间（FMP）：页面关键元素的渲染时间，何为“关键元素”可自行定义
- 首屏时间：进入页面之后，应用渲染完成整个屏幕(未滚动)内容的时间
- 用户可交互时间：通常指 `DOMReady` 时间
- 总下载时间: 可统计称 `window.onload` 时间

以上指标可通过浏览器控制台中 `Lighthouse` 进行分析得出

性能数据获取

- `window.preformance`：强大有缺点

`window.preformance.timing` 会返回一个对象，包含页面加载和渲染的各个时间节点

![linear.png](/images/sdk/timing.png)

而根据这些时间节点选择相对于的两个做差值，即可计算出一些典型指标

```js
const calcTime = () => {
  let times = {}
  let t = window.preformance.timing

  // 重定向时间
  times.redirectTime = t.redirectEnd - t.redirectStart
  // DNS 查询耗时
  times.dnsTime = t.domainLookupEnd - t.domainLookupStart
  // TCP 连接耗时
  times.tcpTime = t.connectEnd - t.connectStart
  // request 请求耗时
  times.reqTime = t.responseStart - t.requestStart
  // response 响应耗时
  times.resTime = t.responseEnd - t.responseStart
  // 解析 DOM 树耗时
  times.analysisTime = t.domComplete - t.domInteractive
  // 白屏时间
  times.blackTime = t.domLoading - t.fetchStart
  // 用户可交互时间
  times.domReadyTime = t.domContentLoadedEventEnd - t.fetchStart
  // 页面完全可用时间
  times.loadPageTime = t.loadEventEnd - t.navigationStart

  return times
}
```

局限性

单页应用改变 URL 但不刷新页面，导致 `window.preformance` 所获取的数据不能更新

- 自定义时间计算

```
// [todo]
```

### 2.2、手动上报数据

手动上报数据适合用户行为收集、自定义错误收集等场景，只需要将手动上报数据的方法暴露出去即可

### 2.3、何时上报以及如何上报

对应报错和异常数据的上报，当日志量很大，就有必要将日志合并，在同一时间进行上报。

而对于页面性能数据，在以下场景下可以上报

- 页面加载和重新刷新
- 页面切换路由
- 页面所在的 Tab 标签重新变得可见
- 页面关闭

对于单页应用，如果是 hash 模式，可监听 `hashchange` 事件, 如果是 `history` 模式，则需要重写 `history.pushState` 和 `history.replaceState` 方法

对呀非单页应用，可在页面离开的时候上报数据，监听 `unload` 事件并使用 `navigation.sendBeacon` 方法保障数据发送

```js
window.addEventListener('unload', logData, false)
const logData = () => {
  navigation.sendBeacon('/log', data)
}
```

`sendBeacon` 方法相比于直接发送 Ajax 请求，有以下特性

- 它是异步的，请求的发送不会阻塞跳转到下一个页面
- 它在没有极限数据量和队列总数的现在下，会优先返回 true 以保障请求成功发送

除了发送请求，还可以通过动态创建 img 标签，将数据拼接到 URL 上进行上报，不存在跨域限制，但 URL 有长度限制

所以可以对 URL 进行判断，使用不同上报方式

```js
const reportLog = url => {
  // ...
  if (urlLen < 2083>) {
    imgReport(url, times)
  } else if(navigation.sendBeacon){
    sendBeacon(url, times)
  } else {
    xmlReport(url, times)
  }
}
```

### 2.4 总结

SDK 除了上面介绍的数据采集和上报功能后，还需要提供通过**配置**可开启或关闭某个指标的日志是否进行上报
