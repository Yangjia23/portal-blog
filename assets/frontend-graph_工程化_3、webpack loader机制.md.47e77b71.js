import{o as l,c as e,a as n,b as d}from"./app.6ecd6baa.js";const u='{"title":"一、什么是 loader","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、什么是 loader","slug":"一、什么是-loader"},{"level":2,"title":"二、开发中常见的 loader","slug":"二、开发中常见的-loader"},{"level":2,"title":"三、loader 的工作原理","slug":"三、loader-的工作原理"},{"level":3,"title":"3.1、loader-runner","slug":"_3-1、loader-runner"},{"level":3,"title":"3.2、loader类型","slug":"_3-2、loader类型"},{"level":3,"title":"3.3、特殊配置","slug":"_3-3、特殊配置"},{"level":3,"title":"3.4、pitch","slug":"_3-4、pitch"},{"level":2,"title":"四、如何手写 loader ？","slug":"四、如何手写-loader-？"}],"relativePath":"frontend-graph/工程化/3、webpack loader机制.md","lastUpdated":1625299236651}',o={},r=n("h2",{id:"一、什么是-loader"},[n("a",{class:"header-anchor",href:"#一、什么是-loader","aria-hidden":"true"},"#"),d(" 一、什么是 loader")],-1),a=n("p",null,[n("code",null,"loader"),d(" 直译加载器。"),n("code",null,"Webpack"),d(" 将一切文件视为模块，但 "),n("code",null,"Webpack"),d(" 原生只支持解析 "),n("code",null,"JS"),d("、"),n("code",null,"JSON"),d(" 文件，如果想打包其它文件，就需要使用的 "),n("code",null,"loader"),d(", 所以说：")],-1),t=n("p",null,[n("strong",null,[n("code",null,"loader"),d(" 的作用是让 "),n("code",null,"webpack"),d(" 拥有了加载和解析非 "),n("code",null,"JS"),d("、"),n("code",null,"JSON"),d(" 文件的能力")])],-1),c=n("h2",{id:"二、开发中常见的-loader"},[n("a",{class:"header-anchor",href:"#二、开发中常见的-loader","aria-hidden":"true"},"#"),d(" 二、开发中常见的 loader")],-1),s=n("p",null,[n("strong",null,[d("处理 "),n("code",null,"less/css")])],-1),h=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"less-loader")]),n("td",null,[d("把 "),n("code",null,"less"),d(" 文件编译成 "),n("code",null,"CSS")])]),n("tr",null,[n("td",null,[n("strong",null,"postcss-loader")]),n("td",null,[d("使用"),n("code",null,"PostCSS"),d(" 处理"),n("code",null,"CSS"),d("，可配合"),n("code",null,"autoprefixer"),d("加前缀")])]),n("tr",null,[n("td",null,[n("strong",null,"css-loader")]),n("td",null,[d("处理 "),n("code",null,"url、@import"),d(" 等语法")])]),n("tr",null,[n("td",null,[n("strong",null,"style-loader")]),n("td",null,[d("（"),n("code",null,"dev"),d("）将"),n("code",null,"CSS"),d("代码通过 "),n("code",null,"style"),d(" 标签以内联方式插入")])]),n("tr",null,[n("td",null,[n("strong",null,"MiniCssExtractPlugin.loader")]),n("td",null,[d("（"),n("code",null,"prod"),d("）将"),n("code",null,"CSS"),d("代码抽离成单独的 "),n("code",null,"CSS"),d(" 文件，有"),n("strong",null,"缓存"),d("作用")])])])],-1),i=n("p",null,[n("strong",null,"处理图片、字体")],-1),p=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"file-loader")]),n("td",null,[d("把文件拷贝到一个文件夹，在代码中通过相对 "),n("code",null,"URL"),d(" 去引用文件内容，通过设置哈希来获得缓存")])]),n("tr",null,[n("td",null,[n("strong",null,"url-loader")]),n("td",null,[d("设置一个"),n("strong",null,"阀值"),d("，当文件大小小于阀值，以 "),n("code",null,"base64"),d(" 的方式把文件内容注入到代码中（减少"),n("code",null,"HTTP"),d("请求）; 大于阀值，使用 "),n("code",null,"file-loader"),d(" 处理")])])])],-1),g=n("p",null,[n("strong",null,"处理JS")],-1),b=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"eslint-loader")]),n("td",null,[d("通过 "),n("code",null,"eslint"),d(" 检查 "),n("code",null,"JS"),d(" 代码")])]),n("tr",null,[n("td",null,[n("strong",null,"babel-loader")]),n("td",null,[d("将 "),n("code",null,"ES6+"),d(" 代码转化成 "),n("code",null,"ES5"),d(" 代码")])])])],-1),S=n("p",null,[n("strong",null,"处理 Vue")],-1),f=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"vue-loader")]),n("td",null,[d("允许使用"),n("strong",null,"单文件组件"),d("(SFCs)的格式撰写vue 组件")])])])],-1),v=n("p",null,[n("strong",null,"优化性能")],-1),_=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"cache-loader")]),n("td",null,[d("将 "),n("code",null,"loader"),d(" 的结果缓存到磁盘中，有效减少非首次构建时间")])]),n("tr",null,[n("td",null,[n("strong",null,"thread-loader")]),n("td",null,[n("code",null,"thread-loader"),d(" 之后的 "),n("code",null,"loader"),d(" 就会在一个单独的 "),n("code",null,"worker"),d(" 池中运行")])])])],-1),m=n("h2",{id:"三、loader-的工作原理"},[n("a",{class:"header-anchor",href:"#三、loader-的工作原理","aria-hidden":"true"},"#"),d(" 三、loader 的工作原理")],-1),k=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"loader"),d(" 只是一个导出为"),n("strong",null,"函数"),d("的JS模块，"),n("code",null,"loader runner"),d("会调用该函数，该函数接受文件资源或上一个loader的处理结果作为入参，多个 "),n("code",null,"loader"),d(" 可组成 "),n("code",null,"loader chain")])]),n("li",null,[n("p",null,[n("code",null,"complier"),d(" 只需要最后一个 "),n("code",null,"loader"),d(" 的处理结果，结果应该是 "),n("code",null,"String"),d(" 或 "),n("code",null,"Buffer")])])],-1),y=n("h3",{id:"_3-1、loader-runner"},[n("a",{class:"header-anchor",href:"#_3-1、loader-runner","aria-hidden":"true"},"#"),d(" 3.1、"),n("code",null,"loader-runner")],-1),C=n("p",null,[d("一个执行 "),n("code",null,"loader chain"),d(" 的模块")],-1),J=n("h3",{id:"_3-2、loader类型"},[n("a",{class:"header-anchor",href:"#_3-2、loader类型","aria-hidden":"true"},"#"),d(" 3.2、"),n("code",null,"loader"),d("类型")],-1),P=n("p",null,[n("code",null,"post"),d("(后置) + "),n("code",null,"inline"),d("(内联) + "),n("code",null,"normal"),d("(普通) + "),n("code",null,"pre"),d("(前置)")],-1),w=n("p",null,[d("可通过 "),n("code",null,"enforce"),d(" 设置")],-1),x=n("h3",{id:"_3-3、特殊配置"},[n("a",{class:"header-anchor",href:"#_3-3、特殊配置","aria-hidden":"true"},"#"),d(" 3.3、特殊配置")],-1),L=n("p",null,"可通过设置以下特殊字符来忽略某种类型的 loader",-1),W=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"符合"),n("th",null,"含义")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,[n("code",null,"-!")])]),n("td",null,[n("code",null,"noPreAutoLoaders"),d(", 不要前置和普通 loader")])]),n("tr",null,[n("td",null,[n("strong",null,[n("code",null,"!")])]),n("td",null,[n("code",null,"noAutoLoaders"),d(", 不要普通 loader")])]),n("tr",null,[n("td",null,[n("strong",null,[n("code",null,"!!")])]),n("td",null,[n("code",null,"noPrePostAutoLoaders"),d(", 只要内联 loader")])])])],-1),A=n("h3",{id:"_3-4、pitch"},[n("a",{class:"header-anchor",href:"#_3-4、pitch","aria-hidden":"true"},"#"),d(" 3.4、pitch")],-1),E=n("p",null,[d("一个 "),n("code",null,"loader"),d(" 在内部是由 "),n("code",null,"loader"),d(" 和 "),n("code",null,"loader.pitch"),d(" 组成。")],-1),T=n("p",null,[d("比如 "),n("code",null,"a!b!c!module"),d(", loader 的调用顺序是 "),n("code",null,"c -> b -> a"),d(", 但在处理"),n("code",null,"module"),d("之前，其实执行了 "),n("code",null,"a(pitch) -> b(pitch) -> c(pitch)"),d(", 如果其中任何一个 "),n("code",null,"pitching loader"),d(" 有返回值就相当于在它及右侧的 "),n("code",null,"loader"),d(" 都执行完毕了。")],-1),U=n("p",null,[d("例如："),n("code",null,"b(pitch)"),d(" 执行又返回值，接下来"),n("code",null,"c"),d("不会被执行，只有 "),n("code",null,"a"),d(" 会被执行，并且 "),n("code",null,"a loader"),d(" 接受的参数是 "),n("code",null,"b(pitch)"),d(" 的返回值")],-1),F=n("p",null,[n("img",{src:"/images/webpack/loader-pitch.png",alt:"loader pitch"})],-1),N=n("h2",{id:"四、如何手写-loader-？"},[n("a",{class:"header-anchor",href:"#四、如何手写-loader-？","aria-hidden":"true"},"#"),d(" 四、如何手写 loader ？")],-1),O=n("p",null,[d("手写 "),n("code",null,"loader"),d(" 的思路")],-1),j=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"loader"),d(" 支持链式调用，所以需要严格遵循 “单一职责”， 每个 "),n("code",null,"loader"),d(" 只处理自己负责的事情")])]),n("li",null,[n("p",null,[n("code",null,"Webpack"),d(" 传给 "),n("code",null,"loader"),d(" 的原内容都是 "),n("code",null,"UTF-8"),d(" 格式编码的字符串，当某些场景下 "),n("code",null,"loader"),d(" 处理二进制文件时，需要通过 "),n("code",null,"exports.raw = true"),d(" 告诉 "),n("code",null,"Webpack"),d(" 该 "),n("code",null,"loader"),d(" 是否需要二进制数据")])]),n("li",null,[n("p",null,[d("尽可能异步 "),n("code",null,"loader")])]),n("li",null,[n("p",null,[n("code",null,"loader"),d(" 是无状态的，"),n("code",null,"loader"),d(" 内部不应该保留状态")])])],-1);o.render=function(n,d,u,o,B,H){return l(),e("div",null,[r,a,t,c,s,h,i,p,g,b,S,f,v,_,m,k,y,C,J,P,w,x,L,W,A,E,T,U,F,N,O,j])};export default o;export{u as __pageData};
