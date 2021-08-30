Web 性能优化主要是为了提升用户体验，用户最直观的感受就是看页面是否卡顿，是否卡顿是直观感受，所以需要一些 **Web性能指标** 来监测，同时需要掌握浏览器渲染的整个过程，整个过程分成 **页面导航** 和 **页面渲染** 两个部分，可针对不同部分进行优化，具体细节参考文章 [浏览器的工作原理](./3、浏览器的工作原理.html)。
最后性能优化还包括开发时所使用的 **框架、打包工具以及代码层面的优化**

所以，Web 性能优化可大致分成一些部分
- Web 性能指标
- HTTP 网络层面优化（页面导航）
- DOM 层面优化（页面渲染）
- 框架、打包工具以及代码层面优化 (开发阶段)

## 一、Web性能指标

## 二、HTTP网络层面优化
HTTP网络层面优化是指页面导航阶段，也就是浏览器输入URL到服务器返回HTML字符串这个阶段，主要分成以下步骤

> URL 解析 -> 缓存检查 -> DNS 解析 -> TCP 连接 -> 数据传输 -> TCP断开连接

### 2.1、DNS 解析

- DNS 解析流程及原理

- 优化方案

`DNS Prefetch`, DNS 预解析

方法一: 在 `index.html` 的 `<head>` 中添加👇，(前端控制)
```html
<link rel="dns-prefetch"  href="//d.jd.com"> //京东
```

方法二: 在 `index.html` 的 `响应头` 中添加👇，(后端控制)
```text
Link: <https://d.jd.com>; rel=dns-prefetch
```

### 2.2、TCP 连接
默认情况下，每个请求都会建立 TCP 连接，十分消耗性能，如何优化？

#### 2.2.1、连接复用

**`http 1.0`** 阶段，每个请求都会建立单独的 TCP 连接
```text
请求A: 开启TCP -> 请求 -> 响应 -> 断开TCP
请求B: 开启TCP -> 请求 -> 响应 -> 断开TCP
```

**`http 1.1`** 阶段，设置请求头 `Connection: keep-alive` 即可开启连接复用，多个请求使用同一个 TCP 连接，不单独进行创建

```text
开启TCP -> A请求 -> A响应 -> B请求 -> B响应 -> 断开TCP
```
当两个请求的间隔时间过长，TCP 连接一直处于空闲阶段，可通过添加 `Keep-Alive` 消息头，来指定一个空闲TCP连接需要保持打开状态的最小时长, 例如👇

```
HTTP/1.1 200 OK
Connection: Keep-Alive
Keep-Alive: timeout=5, max=1000
```
属性值分别表示：
- `timeout`: 一个空闲TCP连接需要保持打开状态的最小时长（以秒为单位）
- `max`: 在TCP连接关闭之前，在此连接可以发送的请求的最大值 (**HTTP管道连接**则可以用它来限制管道的使用)

#### 2.2.2、并行化连接

当 HTML 中需要加载 CSS,JS, 静态文件时，浏览器会同时并行发送多个 TCP 连接，提高页面加载效率，但浏览器对同一域名下的 **TCP连接数** 有限制（Chrome限制数大概是 6 个）

所以当同一域名下的TCP连接数达到上限后，后面的请求可以复用前面的 TCP连接

#### 2.2.3、管道化

http 请求总是顺序发送的，下一个请求只有在当前请求的响应被完全接受的时候才会被发送，而 HTTP/1.1 允许多个http请求通过一个套接字同时被发送，然后请求者就会等待各自的响应，这些响应是按照之前请求的顺序依次到达，请求和响应都需要保持一个 **`FIFO队列`** 顺序。（ ps: `服务器先后收到A，B请求，处理A需要10ms，处理B需要1ms，但 B不能立即返回，需等待A处理完，按照A,B 顺序依次返回` ）

只有幂等的请求才可以被管道化，比如`GET`和`HEAD`。`POST`和`PUT`不应该被管道化，HTTP管道化本身可能会导致**队头阻塞**的问题，默认情况下，浏览器是关闭了 HTTP管道化

> HTTP/方法的幂等性: 是指一次和多次请求某一个资源应该具有同样的副作用, 实际上就是多次操作都不会改变结果的请求

### 2.3、HTTP2.0
针对 `HTTP1.1` 中管道化导致的队头阻塞，可使用 `HTTP2` 来解决

#### 2.3.1、多路复用

`HTTP2` 中不使用管道化，而是引入**流** (`Stream`)和 **帧**（`Frame`）的概念

- 一个帧由`Length + Type + Flags + StreamID + Payload` 五部分组成，前四部分是固定长度，为 9 个字节，第五部分长度为 `2^14` 至 `2^24 - 1`, 即 `16Kb` 到 `16Mb`
- 请求头和响应头都会被发送方压缩后，分成几个连续的 `Frame` 传输，头字段会保存在 `Payload` 中，接收方拼合这些 `Frame` 后，解压后即可拿到真正的请求头和响应头
- 一个流由双向传输的有序且连续的 `Frame` 组成，一个TCP连接可以同时包含多个 `Stream` ，一个 `Stream` 只用于一次请求和响应。`Stream` 之间不会相互影响

#### 2.3.2、服务器推送
> 服务器推送 Server Push: 服务器可以提前主动将未来将要请求的资源推送到客户端，客户端接收资源后会进行缓存，后面直接读取缓存即可

**如何设置 Server Push ？**

- 使用 nginx 中 `http2_push` 字段设置推送资源
```nginx
location / {
  root /usr/share/nginx/html;
  index index.html index.htm;
  http2_push /style.css;
  http2_push /example.png;
}
```

- 在 nginx 中开启 `Server Push`, 在响应头中设置推送资源

开启推送
```nginx
location / {
  ...
  http2_push_preload on;
}
```
在 `index.html` 响应头中添加
```
Link:</style.css>; rel=preload; as=style
```

**Server Push 的缺陷？**

- 前端资源通过打包工具打包后，文件名都是带有 `hash` 值的，每次打包后都更改 nginx 配置，不合实际

### 2.4、HTTP 1.1

当我们的服务因为某些原因无法使用 HTTP2.0，那么在 HTTP 1.1 阶段有哪些优化方案？

#### 2.4.1 资源合并

CSS 雪碧图 -> `Icon Font` -> `SVG Symbols`

#### 2.4.2 资源内联

```
小图片 -> data URL
小 CSS 文件 -> `<style>...</style>`
小 JS 文件 -> `<script>...</script>`
```

以上都可通过 webpack 插件来实现

#### 2.4.3 资源压缩

目前最常用的压缩算法是 gzip, 具体实现如下

**`nginx`**

```
server {
  gzip on;
  gzip_types      text/plain application/xml;
  gzip_proxied    no-cache no-store private expired auth;
  gzip_min_length 1000;
  ...
}
```
nginx 实际提供俩种 gzip 模式: `gzip on` 和 `gzip_static on`, 区别如下：

  - `gzip on` 会在每次请求时实时压缩文件，耗费性能
  - `gzip_static on` 优先级更高，在遇到 `path/to/file` 的请求时，会优先查看 `path/to/file.gz` 作为压缩版本，找不到就直接返回未压缩版本。该功能需要在编译 nginx 时添加扩展选项
  - 可通过 webpack 插件 `compression-webpack-plugin` 生成 `.gz` 后缀文件，同时默认保留源文件


**`Apache`**

参考文档 [How To Enable GZIP Compression in Apache](https://ubiq.co/tech-blog/enable-gzip-compression-apache/)

**`Node.js`**

参考文档 [Node Zlib](https://nodejs.org/api/zlib.html#zlib_compressing_http_requests_and_responses)

-  核心代码
```js
let acceptEncoding = request.headers['accept-encoding'];
if (!acceptEncoding) {
  acceptEncoding = '';
}

// Note: This is not a conformant accept-encoding parser.
// See https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
if (/\bdeflate\b/.test(acceptEncoding)) {
  response.writeHead(200, { 'Content-Encoding': 'deflate' });
  pipeline(raw, zlib.createDeflate(), response, onError);
} else if (/\bgzip\b/.test(acceptEncoding)) {
  response.writeHead(200, { 'Content-Encoding': 'gzip' });
  pipeline(raw, zlib.createGzip(), response, onError);
} else if (/\bbr\b/.test(acceptEncoding)) {
  response.writeHead(200, { 'Content-Encoding': 'br' });
  pipeline(raw, zlib.createBrotliCompress(), response, onError);
} else {
  response.writeHead(200, {});
  pipeline(raw, response, onError);
}
```

缺陷：对压缩的结果没有做缓存 

#### 2.4.4、资源精简

```
HTML: 删空格，删闭合
CSS: 删未用 class (不推荐，可能存在动态 class )
JS:  代码压缩(改名)、tree shaking (通过分析 import)
SVG: 删除无用标签，属性
图片： 减少体积（无损和有损）
```
以上操作都可通过 webpack 插件实现

#### 2.4.5、Cookie 优化

 设计 Cookie 是为了校验用户的，但在最开始被滥用，用来存储数据（4KB的大小），由于同一域名下的每个请求都会带上 Cookie, 导致服务端压力大，同时影响带宽性能，所以 Cookie 需要进行优化

 - 减少对 `Cookie` 的使用, 存储放到 `Storage` 中
 - 启用新域名，新域名的好处在于 `Cookie-Free`


## 三、DOM层面优化

## 四、框架、打包工具以及代码层面优化

### 4.1 框架

### 4.2 打包工具