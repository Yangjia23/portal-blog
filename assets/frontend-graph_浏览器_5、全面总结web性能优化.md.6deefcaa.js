import{o as n,c as a,d as s}from"./app.a1522aa7.js";const t='{"title":"一、Web性能指标","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、Web性能指标","slug":"一、web性能指标"},{"level":2,"title":"二、HTTP网络层面优化","slug":"二、http网络层面优化"},{"level":3,"title":"2.1、DNS 解析","slug":"_2-1、dns-解析"},{"level":3,"title":"2.2、TCP 连接","slug":"_2-2、tcp-连接"},{"level":3,"title":"2.3、HTTP2.0","slug":"_2-3、http2-0"},{"level":3,"title":"2.4、HTTP 1.1","slug":"_2-4、http-1-1"},{"level":2,"title":"三、DOM层面优化","slug":"三、dom层面优化"},{"level":3,"title":"3.1、DOM 为什么这么慢？","slug":"_3-1、dom-为什么这么慢？"},{"level":3,"title":"3.2、回流和重绘","slug":"_3-2、回流和重绘"},{"level":3,"title":"3.3、回流的导火索","slug":"_3-3、回流的导火索"},{"level":3,"title":"3.4、避免手段","slug":"_3-4、避免手段"},{"level":2,"title":"四、代码层面优化","slug":"四、代码层面优化"},{"level":3,"title":"4.1、框架","slug":"_4-1、框架"},{"level":3,"title":"4.2、打包工具","slug":"_4-2、打包工具"},{"level":3,"title":"4.3、代码优化","slug":"_4-3、代码优化"}],"relativePath":"frontend-graph/浏览器/5、全面总结web性能优化.md","lastUpdated":1630371462669}',e={},p=[s('<p>Web 性能优化主要是为了提升用户体验，用户最直观的感受就是看页面是否卡顿，是否卡顿是直观感受，所以需要一些 <strong>Web性能指标</strong> 来监测，同时需要掌握浏览器渲染的整个过程，整个过程分成 <strong>页面导航</strong> 和 <strong>页面渲染</strong> 两个部分，可针对不同部分进行优化，具体细节参考文章 <a href="https://yangjia23.github.io/portal-blog/frontend-graph/%E6%B5%8F%E8%A7%88%E5%99%A8/3%E3%80%81%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.html" target="_blank" rel="noopener noreferrer">浏览器的工作原理</a>。 最后性能优化还包括开发时所使用的 <strong>框架、打包工具以及代码层面的优化</strong></p><p>所以，Web 性能优化可大致分成一些部分</p><ul><li>Web 性能指标</li><li>HTTP 网络层面优化（页面导航）</li><li>DOM 层面优化（页面渲染）</li><li>框架、打包工具以及代码层面优化 (开发阶段)</li></ul><h2 id="一、web性能指标"><a class="header-anchor" href="#一、web性能指标" aria-hidden="true">#</a> 一、Web性能指标</h2><h2 id="二、http网络层面优化"><a class="header-anchor" href="#二、http网络层面优化" aria-hidden="true">#</a> 二、HTTP网络层面优化</h2><p>HTTP网络层面优化是指页面导航阶段，也就是浏览器输入URL到服务器返回HTML字符串这个阶段，主要分成以下步骤</p><blockquote><p>URL 解析 -&gt; 缓存检查 -&gt; DNS 解析 -&gt; TCP 连接 -&gt; 数据传输 -&gt; TCP断开连接</p></blockquote><h3 id="_2-1、dns-解析"><a class="header-anchor" href="#_2-1、dns-解析" aria-hidden="true">#</a> 2.1、DNS 解析</h3><ul><li><p>DNS 解析流程及原理</p></li><li><p>优化方案</p></li></ul><p><code>DNS Prefetch</code>, DNS 预解析</p><p>方法一: 在 <code>index.html</code> 的 <code>&lt;head&gt;</code> 中添加👇，(前端控制)</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dns-prefetch<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//d.jd.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> //京东\n</code></pre></div><p>方法二: 在 <code>index.html</code> 的 <code>响应头</code> 中添加👇，(后端控制)</p><div class="language-text"><pre><code>Link: &amp;lt;https://d.jd.com&gt;; rel=dns-prefetch\n</code></pre></div><h3 id="_2-2、tcp-连接"><a class="header-anchor" href="#_2-2、tcp-连接" aria-hidden="true">#</a> 2.2、TCP 连接</h3><p>默认情况下，每个请求都会建立 TCP 连接，十分消耗性能，如何优化？</p><h4 id="_2-2-1、连接复用"><a class="header-anchor" href="#_2-2-1、连接复用" aria-hidden="true">#</a> 2.2.1、连接复用</h4><p><strong><code>http 1.0</code></strong> 阶段，每个请求都会建立单独的 TCP 连接</p><div class="language-text"><pre><code>请求A: 开启TCP -&gt; 请求 -&gt; 响应 -&gt; 断开TCP\n请求B: 开启TCP -&gt; 请求 -&gt; 响应 -&gt; 断开TCP\n</code></pre></div><p><strong><code>http 1.1</code></strong> 阶段，设置请求头 <code>Connection: keep-alive</code> 即可开启连接复用，多个请求使用同一个 TCP 连接，不单独进行创建</p><div class="language-text"><pre><code>开启TCP -&gt; A请求 -&gt; A响应 -&gt; B请求 -&gt; B响应 -&gt; 断开TCP\n</code></pre></div><p>当两个请求的间隔时间过长，TCP 连接一直处于空闲阶段，可通过添加 <code>Keep-Alive</code> 消息头，来指定一个空闲TCP连接需要保持打开状态的最小时长, 例如👇</p><div class="language-"><pre><code>HTTP/1.1 200 OK\nConnection: Keep-Alive\nKeep-Alive: timeout=5, max=1000\n</code></pre></div><p>属性值分别表示：</p><ul><li><code>timeout</code>: 一个空闲TCP连接需要保持打开状态的最小时长（以秒为单位）</li><li><code>max</code>: 在TCP连接关闭之前，在此连接可以发送的请求的最大值 (<strong>HTTP管道连接</strong>则可以用它来限制管道的使用)</li></ul><h4 id="_2-2-2、并行化连接"><a class="header-anchor" href="#_2-2-2、并行化连接" aria-hidden="true">#</a> 2.2.2、并行化连接</h4><p>当 HTML 中需要加载 CSS,JS, 静态文件时，浏览器会同时并行发送多个 TCP 连接，提高页面加载效率，但浏览器对同一域名下的 <strong>TCP连接数</strong> 有限制（Chrome限制数大概是 6 个）</p><p>所以当同一域名下的TCP连接数达到上限后，后面的请求可以复用前面的 TCP连接</p><h4 id="_2-2-3、管道化"><a class="header-anchor" href="#_2-2-3、管道化" aria-hidden="true">#</a> 2.2.3、管道化</h4><p>http 请求总是顺序发送的，下一个请求只有在当前请求的响应被完全接受的时候才会被发送，而 HTTP/1.1 允许多个http请求通过一个套接字同时被发送，然后请求者就会等待各自的响应，这些响应是按照之前请求的顺序依次到达，请求和响应都需要保持一个 <strong><code>FIFO队列</code></strong> 顺序。（ ps: <code>服务器先后收到A，B请求，处理A需要10ms，处理B需要1ms，但 B不能立即返回，需等待A处理完，按照A,B 顺序依次返回</code> ）</p><p>只有幂等的请求才可以被管道化，比如<code>GET</code>和<code>HEAD</code>。<code>POST</code>和<code>PUT</code>不应该被管道化，HTTP管道化本身可能会导致<strong>队头阻塞</strong>的问题，默认情况下，浏览器是关闭了 HTTP管道化</p><blockquote><p>HTTP/方法的幂等性: 是指一次和多次请求某一个资源应该具有同样的副作用, 实际上就是多次操作都不会改变结果的请求</p></blockquote><h3 id="_2-3、http2-0"><a class="header-anchor" href="#_2-3、http2-0" aria-hidden="true">#</a> 2.3、HTTP2.0</h3><p>针对 <code>HTTP1.1</code> 中管道化导致的队头阻塞，可使用 <code>HTTP2</code> 来解决</p><h4 id="_2-3-1、多路复用"><a class="header-anchor" href="#_2-3-1、多路复用" aria-hidden="true">#</a> 2.3.1、多路复用</h4><p><code>HTTP2</code> 中不使用管道化，而是引入<strong>流</strong> (<code>Stream</code>)和 <strong>帧</strong>（<code>Frame</code>）的概念</p><ul><li>一个帧由<code>Length + Type + Flags + StreamID + Payload</code> 五部分组成，前四部分是固定长度，为 9 个字节，第五部分长度为 <code>2^14</code> 至 <code>2^24 - 1</code>, 即 <code>16Kb</code> 到 <code>16Mb</code></li><li>请求头和响应头都会被发送方压缩后，分成几个连续的 <code>Frame</code> 传输，头字段会保存在 <code>Payload</code> 中，接收方拼合这些 <code>Frame</code> 后，解压后即可拿到真正的请求头和响应头</li><li>一个流由双向传输的有序且连续的 <code>Frame</code> 组成，一个TCP连接可以同时包含多个 <code>Stream</code> ，一个 <code>Stream</code> 只用于一次请求和响应。<code>Stream</code> 之间不会相互影响</li></ul><h4 id="_2-3-2、服务器推送"><a class="header-anchor" href="#_2-3-2、服务器推送" aria-hidden="true">#</a> 2.3.2、服务器推送</h4><blockquote><p>服务器推送 Server Push: 服务器可以提前主动将未来将要请求的资源推送到客户端，客户端接收资源后会进行缓存，后面直接读取缓存即可</p></blockquote><p><strong>如何设置 Server Push ？</strong></p><ul><li>使用 nginx 中 <code>http2_push</code> 字段设置推送资源</li></ul><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">http2_push</span> /style.css</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">http2_push</span> /example.png</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>在 nginx 中开启 <code>Server Push</code>, 在响应头中设置推送资源</li></ul><p>开启推送</p><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n  ...\n  <span class="token directive"><span class="token keyword">http2_push_preload</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>在 <code>index.html</code> 响应头中添加</p><div class="language-"><pre><code>Link:&lt;/style.css&gt;; rel=preload; as=style\n</code></pre></div><p><strong>Server Push 的缺陷？</strong></p><ul><li>前端资源通过打包工具打包后，文件名都是带有 <code>hash</code> 值的，每次打包后都更改 nginx 配置，不合实际</li></ul><h3 id="_2-4、http-1-1"><a class="header-anchor" href="#_2-4、http-1-1" aria-hidden="true">#</a> 2.4、HTTP 1.1</h3><p>当我们的服务因为某些原因无法使用 HTTP2.0，那么在 HTTP 1.1 阶段有哪些优化方案？</p><h4 id="_2-4-1-资源合并"><a class="header-anchor" href="#_2-4-1-资源合并" aria-hidden="true">#</a> 2.4.1 资源合并</h4><p>CSS 雪碧图 -&gt; <code>Icon Font</code> -&gt; <code>SVG Symbols</code></p><h4 id="_2-4-2-资源内联"><a class="header-anchor" href="#_2-4-2-资源内联" aria-hidden="true">#</a> 2.4.2 资源内联</h4><div class="language-"><pre><code>小图片 -&gt; data URL\n小 CSS 文件 -&gt; `&lt;style&gt;...&lt;/style&gt;`\n小 JS 文件 -&gt; `&lt;script&gt;...&lt;/script&gt;`\n</code></pre></div><p>以上都可通过 webpack 插件来实现</p><h4 id="_2-4-3-资源压缩"><a class="header-anchor" href="#_2-4-3-资源压缩" aria-hidden="true">#</a> 2.4.3 资源压缩</h4><p>目前最常用的压缩算法是 gzip, 具体实现如下</p><p><strong><code>nginx</code></strong></p><div class="language-"><pre><code>server {\n  gzip on;\n  gzip_types      text/plain application/xml;\n  gzip_proxied    no-cache no-store private expired auth;\n  gzip_min_length 1000;\n  ...\n}\n</code></pre></div><p>nginx 实际提供俩种 gzip 模式: <code>gzip on</code> 和 <code>gzip_static on</code>, 区别如下：</p><ul><li><code>gzip on</code> 会在每次请求时实时压缩文件，耗费性能</li><li><code>gzip_static on</code> 优先级更高，在遇到 <code>path/to/file</code> 的请求时，会优先查看 <code>path/to/file.gz</code> 作为压缩版本，找不到就直接返回未压缩版本。该功能需要在编译 nginx 时添加扩展选项</li><li>可通过 webpack 插件 <code>compression-webpack-plugin</code> 生成 <code>.gz</code> 后缀文件，同时默认保留源文件</li></ul><p><strong><code>Apache</code></strong></p><p>参考文档 <a href="https://ubiq.co/tech-blog/enable-gzip-compression-apache/" target="_blank" rel="noopener noreferrer">How To Enable GZIP Compression in Apache</a></p><p><strong><code>Node.js</code></strong></p><p>参考文档 <a href="https://nodejs.org/api/zlib.html#zlib_compressing_http_requests_and_responses" target="_blank" rel="noopener noreferrer">Node Zlib</a></p><ul><li>核心代码</li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> acceptEncoding <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;accept-encoding&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>acceptEncoding<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  acceptEncoding <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Note: This is not a conformant accept-encoding parser.</span>\n<span class="token comment">// See https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\bdeflate\\b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>acceptEncoding<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&#39;Content-Encoding&#39;</span><span class="token operator">:</span> <span class="token string">&#39;deflate&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">pipeline</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> zlib<span class="token punctuation">.</span><span class="token function">createDeflate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> response<span class="token punctuation">,</span> onError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\bgzip\\b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>acceptEncoding<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&#39;Content-Encoding&#39;</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">pipeline</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> zlib<span class="token punctuation">.</span><span class="token function">createGzip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> response<span class="token punctuation">,</span> onError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\bbr\\b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>acceptEncoding<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&#39;Content-Encoding&#39;</span><span class="token operator">:</span> <span class="token string">&#39;br&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">pipeline</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> zlib<span class="token punctuation">.</span><span class="token function">createBrotliCompress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> response<span class="token punctuation">,</span> onError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">pipeline</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> response<span class="token punctuation">,</span> onError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>缺陷：对压缩的结果没有做缓存</p><h4 id="_2-4-4、资源精简"><a class="header-anchor" href="#_2-4-4、资源精简" aria-hidden="true">#</a> 2.4.4、资源精简</h4><div class="language-"><pre><code>HTML: 删空格，删闭合\nCSS: 删未用 class (不推荐，可能存在动态 class )\nJS:  代码压缩(改名)、tree shaking (通过分析 import)\nSVG: 删除无用标签，属性\n图片： 减少体积（无损和有损）\n</code></pre></div><p>以上操作都可通过 webpack 插件实现</p><h4 id="_2-4-5、cookie-优化"><a class="header-anchor" href="#_2-4-5、cookie-优化" aria-hidden="true">#</a> 2.4.5、Cookie 优化</h4><p>设计 Cookie 是为了校验用户的，但在最开始被滥用，用来存储数据（4KB的大小），由于同一域名下的每个请求都会带上 Cookie, 导致服务端压力大，同时影响带宽性能，所以 Cookie 需要进行优化</p><ul><li>减少对 <code>Cookie</code> 的使用, 存储放到 <code>Storage</code> 中</li><li>启用新域名，新域名的好处在于 <code>Cookie-Free</code></li></ul><h4 id="_2-4-6、缓存"><a class="header-anchor" href="#_2-4-6、缓存" aria-hidden="true">#</a> 2.4.6、缓存</h4><p>不同类型的文件对应不同的缓存策略，具体实现参考 <a href="https://yangjia23.github.io/portal-blog/frontend-graph/%E6%B5%8F%E8%A7%88%E5%99%A8/1%E3%80%81%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.html" target="_blank" rel="noopener noreferrer">浏览器缓存</a> 一文</p><h2 id="三、dom层面优化"><a class="header-anchor" href="#三、dom层面优化" aria-hidden="true">#</a> 三、DOM层面优化</h2><h3 id="_3-1、dom-为什么这么慢？"><a class="header-anchor" href="#_3-1、dom-为什么这么慢？" aria-hidden="true">#</a> 3.1、DOM 为什么这么慢？</h3><p>当在 JS 中操作 DOM 时，本质上是 JS 引擎和渲染引擎之间做交流，对 DOM 的修改本质上触发了<strong>渲染树（<code>render tree</code>）</strong> 的变化，同时可能引发样式上的修改，就会触发<strong>回流</strong>或<strong>重绘</strong></p><h3 id="_3-2、回流和重绘"><a class="header-anchor" href="#_3-2、回流和重绘" aria-hidden="true">#</a> 3.2、回流和重绘</h3><ul><li>回流（<code>reflow</code>）。当我们对DOM的修改引发了 <strong>DOM 几何尺寸的变化</strong>（修改宽、高、隐藏元素、改变位置等）时，浏览器需要重新计算元素的几何属性（同时<strong>可能影响到其它元素的几何属性</strong>），然后再将计算结果绘制出来，这个过程就是回流（也叫重排）</li><li>重绘 (<code>repaint</code>)。对DOM的修改导致了<strong>样式的变化</strong>，却未影响其几何属性（修改颜色、背景色、字体等），浏览器不需要计算其几何属性，只需要直接绘制新的样式，这个过程叫重绘</li></ul><h3 id="_3-3、回流的导火索"><a class="header-anchor" href="#_3-3、回流的导火索" aria-hidden="true">#</a> 3.3、回流的导火索</h3><ul><li>手动修改元素的几何属性</li><li>像获取 <code>[offset | scroll | client][Top | Left | Width | Height]</code> 等属性时，是需要通过<strong>实时计算</strong>得到的，因此浏览器为了获取这些值，也会进行回流</li><li>当调用 <code>getBoundingClientRect、 getComputedStyle</code> 、IE 的 <code>currentStyle</code> 等方法时，为了准确性和及时性，也会触发回流</li></ul><h3 id="_3-4、避免手段"><a class="header-anchor" href="#_3-4、避免手段" aria-hidden="true">#</a> 3.4、避免手段</h3><ul><li><strong>缓存</strong>。当需要多次计算才能得到元素的最终位置，可使用 JS 变量先缓存计算结果，计算结束再去修改</li><li>避免逐条修改 CSS 样式，可使用类名去合并样式，最后添加 <strong>class 类</strong>即可</li><li>避免使用 table 布局，CSS 表达式 calc () 等、使用CSS3 硬件加速、动画效果应用到position属性为absolute或fixed的元素</li><li><strong><code>DOM</code> 离线化</strong>。现将元素设置 display: none; ,将其脱离页面，设置完样式之后，再设置 display:block, 放回页面中</li><li><strong><code>Flush</code>队列</strong>。浏览器并不会每次操作 DOM 都及时的反馈一次回流与重绘，它缓存了一个 flush 队列，把我们触发的回流和重绘任务都塞进队列中，当队列中的<strong>任务多起来</strong>、或者到达<strong>一定的时间间隔</strong>、或者“<strong>不得以</strong>”的时候，将所以任务一次性出队列⚠️注意这个 “不得以”的时候，主要是我们获取上面👆所介绍的一些属性时，浏览器为了即时准确获取属性值，会提前将 flush 队列中的任务出队列</li></ul><h2 id="四、代码层面优化"><a class="header-anchor" href="#四、代码层面优化" aria-hidden="true">#</a> 四、代码层面优化</h2><h3 id="_4-1、框架"><a class="header-anchor" href="#_4-1、框架" aria-hidden="true">#</a> 4.1、框架</h3><p>以 Vue 框架为例，可参考官网中的<a href="https://v3.cn.vuejs.org/style-guide/" target="_blank" rel="noopener noreferrer">风格指南</a></p><h3 id="_4-2、打包工具"><a class="header-anchor" href="#_4-2、打包工具" aria-hidden="true">#</a> 4.2、打包工具</h3><p>以 <code>webpack</code> 为例，其优化点在于如何 <strong>提高构建速度</strong> 和 <strong>减少构建体积</strong> , 具体优化方案可参考 <a href="https://yangjia23.github.io/portal-blog/frontend-graph/%E5%B7%A5%E7%A8%8B%E5%8C%96/5%E3%80%81webpack%20%E4%BC%98%E5%8C%96%E7%AD%96%E7%95%A5.html" target="_blank" rel="noopener noreferrer">webpack 优化策略</a> 一文</p><h3 id="_4-3、代码优化"><a class="header-anchor" href="#_4-3、代码优化" aria-hidden="true">#</a> 4.3、代码优化</h3><h4 id="_4-3-1、代码位置"><a class="header-anchor" href="#_4-3-1、代码位置" aria-hidden="true">#</a> 4.3.1、代码位置</h4><p>CSS 放到 <code>&lt;head&gt;</code> 的原因？</p><ul><li>不阻塞 html 解析，尽早下载</li><li>防止被外部JS阻塞</li></ul><p>JS 放到 <code>&lt;body&gt;</code> 的原因？</p><ul><li>可直接访问 DOM,无需监听 DOM Ready</li><li>避免阻塞 html 的解析</li></ul><h4 id="_4-3-2、代码拆分"><a class="header-anchor" href="#_4-3-2、代码拆分" aria-hidden="true">#</a> 4.3.2、代码拆分</h4><p>使用 <code>webpack optimization.splitChunks</code> 可自行设置 chunks 的拆分规则。</p><p>JS 文件 <code>main.xxx.js</code> 拆分成以下几个文件</p><ul><li><p><code>runtime-xxx.js</code>：webpack 自带的核心文件，例如代码中使用 <code>import</code> 最终会被转换成 webpack 中提供的 <code>require</code> 方法</p></li><li><p><code>vendors-xxx.js</code>：第三方库，Vue, Vuex 会被打包进去</p></li><li><p><code>common-xxx.js</code>：公司基本的业务组件库，公共函数库等</p></li><li><p><code>page-index-xxx.js</code>：对应每个页面</p></li></ul><p>CSS 文件拆分成以下几个文件</p><ul><li><code>reset/normolize.css</code>: 重置样式</li><li><code>verdors-xxx.css</code>: 第三方库样式，Element</li><li><code>common-xxx.css</code>: 业务公共样式库</li><li><code>page-xxx.css</code>: 页面样式</li></ul><h4 id="_4-3-3、js-动态导入"><a class="header-anchor" href="#_4-3-3、js-动态导入" aria-hidden="true">#</a> 4.3.3、JS 动态导入</h4><ul><li><p>第三方JS库动态导入</p><div class="language-js"><pre><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> clone <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p>vue中动态导入路由对应的组件</p><p>高级用法支持设置 <code>loading</code> 和 <code>error</code></p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Home.vue&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n        component<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./About.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        loading<span class="token operator">:</span> LoadingComponent<span class="token punctuation">,</span>\n        error<span class="token operator">:</span> ErrorComponent\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p>react 中动态导入</p><div class="language-jsx"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense<span class="token punctuation">,</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>\n<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/Home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/About&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Router</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>LoadingComponent<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Router</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token punctuation">)</span> \n</code></pre></div></li></ul><h4 id="_4-3-4、图片懒加载"><a class="header-anchor" href="#_4-3-4、图片懒加载" aria-hidden="true">#</a> 4.3.4、图片懒加载</h4><p>实战（todo）</p><h4 id="_4-3-5、css-代码优化"><a class="header-anchor" href="#_4-3-5、css-代码优化" aria-hidden="true">#</a> 4.3.5、CSS 代码优化</h4><ul><li>使用 uncss 删除无用的css （慎用）</li><li>使用更高效的选择器 （不要出现 <code>* *</code> 或者 <code>div *</code> 这种奇怪组合）</li><li>减少重排。例如实现动画时，使用 <code>transform</code> 代替 <code>top、left、bottom、 right</code> 等，因为 <code>transform</code> 不会触发重排</li><li>不要使用 <code>@import url.css</code>; 因为被加载的 CSS 不能与当前文件并行下载</li></ul><h4 id="_4-3-6、js-代码优化"><a class="header-anchor" href="#_4-3-6、js-代码优化" aria-hidden="true">#</a> 4.3.6、JS 代码优化</h4><ul><li>尽量不用全局变量，因为全局变量太多会使变量查找变慢</li><li>尽量少操作 DOM，可以使用 <code>Fragment</code> 一次性插入多个 DOM 节点。</li><li>不要往页面中插入大量的 HTML，一定会卡。</li><li>尽量少触发重排，可以使用节流和防抖来降低重排频率。</li><li>尽量少用闭包，减少内存占用，避免内存泄漏</li></ul>',111)];e.render=function(s,t,e,o,c,l){return n(),a("div",null,p)};export{t as __pageData,e as default};
