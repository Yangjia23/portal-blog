import{o as l,c as e,a as n,b as u}from"./app.c1e9f480.js";const d='{"title":"一、什么是 loader","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、什么是 loader","slug":"一、什么是-loader"},{"level":2,"title":"二、开发中常见的 loader","slug":"二、开发中常见的-loader"},{"level":2,"title":"三、loader 的工作原理","slug":"三、loader-的工作原理"},{"level":3,"title":"3.1、loader-runner","slug":"_3-1、loader-runner"},{"level":3,"title":"3.2、loader类型","slug":"_3-2、loader类型"},{"level":3,"title":"3.3、特殊配置","slug":"_3-3、特殊配置"},{"level":3,"title":"3.4、pitch","slug":"_3-4、pitch"},{"level":2,"title":"四、如何手写 loader ？","slug":"四、如何手写-loader-？"}],"relativePath":"frontend-graph/工程化/3、webpack loader机制.md","lastUpdated":1625299595726}',o={},r=n("h2",{id:"一、什么是-loader"},[n("a",{class:"header-anchor",href:"#一、什么是-loader","aria-hidden":"true"},"#"),u(" 一、什么是 loader")],-1),a=n("p",null,[n("code",null,"loader"),u(" 直译加载器。"),n("code",null,"Webpack"),u(" 将一切文件视为模块，但 "),n("code",null,"Webpack"),u(" 原生只支持解析 "),n("code",null,"JS"),u("、"),n("code",null,"JSON"),u(" 文件，如果想打包其它文件，就需要使用的 "),n("code",null,"loader"),u(", 所以说：")],-1),t=n("p",null,[n("strong",null,[n("code",null,"loader"),u(" 的作用是让 "),n("code",null,"webpack"),u(" 拥有了加载和解析非 "),n("code",null,"JS"),u("、"),n("code",null,"JSON"),u(" 文件的能力")])],-1),c=n("h2",{id:"二、开发中常见的-loader"},[n("a",{class:"header-anchor",href:"#二、开发中常见的-loader","aria-hidden":"true"},"#"),u(" 二、开发中常见的 loader")],-1),s=n("p",null,[n("strong",null,[u("处理 "),n("code",null,"less/css")])],-1),h=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"less-loader")]),n("td",null,[u("把 "),n("code",null,"less"),u(" 文件编译成 "),n("code",null,"CSS")])]),n("tr",null,[n("td",null,[n("strong",null,"postcss-loader")]),n("td",null,[u("使用"),n("code",null,"PostCSS"),u(" 处理"),n("code",null,"CSS"),u("，可配合"),n("code",null,"autoprefixer"),u("加前缀")])]),n("tr",null,[n("td",null,[n("strong",null,"css-loader")]),n("td",null,[u("处理 "),n("code",null,"url、@import"),u(" 等语法")])]),n("tr",null,[n("td",null,[n("strong",null,"style-loader")]),n("td",null,[u("（"),n("code",null,"dev"),u("）将"),n("code",null,"CSS"),u("代码通过 "),n("code",null,"style"),u(" 标签以内联方式插入")])]),n("tr",null,[n("td",null,[n("strong",null,"MiniCssExtractPlugin.loader")]),n("td",null,[u("（"),n("code",null,"prod"),u("）将"),n("code",null,"CSS"),u("代码抽离成单独的 "),n("code",null,"CSS"),u(" 文件，有"),n("strong",null,"缓存"),u("作用")])])])],-1),i=n("p",null,[n("strong",null,"处理图片、字体")],-1),p=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"file-loader")]),n("td",null,[u("把文件拷贝到一个文件夹，在代码中通过相对 "),n("code",null,"URL"),u(" 去引用文件内容，通过设置哈希来获得缓存")])]),n("tr",null,[n("td",null,[n("strong",null,"url-loader")]),n("td",null,[u("设置一个"),n("strong",null,"阀值"),u("，当文件大小小于阀值，以 "),n("code",null,"base64"),u(" 的方式把文件内容注入到代码中（减少"),n("code",null,"HTTP"),u("请求）; 大于阀值，使用 "),n("code",null,"file-loader"),u(" 处理")])])])],-1),g=n("p",null,[n("strong",null,"处理JS")],-1),b=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"eslint-loader")]),n("td",null,[u("通过 "),n("code",null,"eslint"),u(" 检查 "),n("code",null,"JS"),u(" 代码")])]),n("tr",null,[n("td",null,[n("strong",null,"babel-loader")]),n("td",null,[u("将 "),n("code",null,"ES6+"),u(" 代码转化成 "),n("code",null,"ES5"),u(" 代码")])])])],-1),S=n("p",null,[n("strong",null,"处理 Vue")],-1),f=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"vue-loader")]),n("td",null,[u("允许使用"),n("strong",null,"单文件组件"),u("(SFCs)的格式撰写vue 组件")])])])],-1),v=n("p",null,[n("strong",null,"优化性能")],-1),_=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"loader"),n("th",null,"作用")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"cache-loader")]),n("td",null,[u("将 "),n("code",null,"loader"),u(" 的结果缓存到磁盘中，有效减少非首次构建时间")])]),n("tr",null,[n("td",null,[n("strong",null,"thread-loader")]),n("td",null,[n("code",null,"thread-loader"),u(" 之后的 "),n("code",null,"loader"),u(" 就会在一个单独的 "),n("code",null,"worker"),u(" 池中运行")])])])],-1),m=n("h2",{id:"三、loader-的工作原理"},[n("a",{class:"header-anchor",href:"#三、loader-的工作原理","aria-hidden":"true"},"#"),u(" 三、loader 的工作原理")],-1),k=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"loader"),u(" 只是一个导出为"),n("strong",null,"函数"),u("的JS模块，"),n("code",null,"loader runner"),u("会调用该函数，该函数接受文件资源或上一个loader的处理结果作为入参，多个 "),n("code",null,"loader"),u(" 可组成 "),n("code",null,"loader chain")])]),n("li",null,[n("p",null,[n("code",null,"complier"),u(" 只需要最后一个 "),n("code",null,"loader"),u(" 的处理结果，结果应该是 "),n("code",null,"String"),u(" 或 "),n("code",null,"Buffer")])])],-1),y=n("h3",{id:"_3-1、loader-runner"},[n("a",{class:"header-anchor",href:"#_3-1、loader-runner","aria-hidden":"true"},"#"),u(" 3.1、"),n("code",null,"loader-runner")],-1),C=n("p",null,[u("一个执行 "),n("code",null,"loader chain"),u(" 的模块")],-1),J=n("h3",{id:"_3-2、loader类型"},[n("a",{class:"header-anchor",href:"#_3-2、loader类型","aria-hidden":"true"},"#"),u(" 3.2、"),n("code",null,"loader"),u("类型")],-1),P=n("p",null,[n("code",null,"post"),u("(后置) + "),n("code",null,"inline"),u("(内联) + "),n("code",null,"normal"),u("(普通) + "),n("code",null,"pre"),u("(前置)")],-1),w=n("p",null,[u("可通过 "),n("code",null,"enforce"),u(" 设置")],-1),x=n("h3",{id:"_3-3、特殊配置"},[n("a",{class:"header-anchor",href:"#_3-3、特殊配置","aria-hidden":"true"},"#"),u(" 3.3、特殊配置")],-1),L=n("p",null,"可通过设置以下特殊字符来忽略某种类型的 loader",-1),W=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"符合"),n("th",null,"含义")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,[n("code",null,"-!")])]),n("td",null,[n("code",null,"noPreAutoLoaders"),u(", 不要前置和普通 loader")])]),n("tr",null,[n("td",null,[n("strong",null,[n("code",null,"!")])]),n("td",null,[n("code",null,"noAutoLoaders"),u(", 不要普通 loader")])]),n("tr",null,[n("td",null,[n("strong",null,[n("code",null,"!!")])]),n("td",null,[n("code",null,"noPrePostAutoLoaders"),u(", 只要内联 loader")])])])],-1),A=n("h3",{id:"_3-4、pitch"},[n("a",{class:"header-anchor",href:"#_3-4、pitch","aria-hidden":"true"},"#"),u(" 3.4、pitch")],-1),E=n("p",null,[u("一个 "),n("code",null,"loader"),u(" 在内部是由 "),n("code",null,"loader"),u(" 和 "),n("code",null,"loader.pitch"),u(" 组成。")],-1),T=n("p",null,[u("比如 "),n("code",null,"a!b!c!module"),u(", loader 的调用顺序是 "),n("code",null,"c -> b -> a"),u(", 但在处理"),n("code",null,"module"),u("之前，其实执行了 "),n("code",null,"a(pitch) -> b(pitch) -> c(pitch)"),u(", 如果其中任何一个 "),n("code",null,"pitching loader"),u(" 有返回值就相当于在它及右侧的 "),n("code",null,"loader"),u(" 都执行完毕了。")],-1),U=n("p",null,[u("例如："),n("code",null,"b(pitch)"),u(" 执行又返回值，接下来"),n("code",null,"c"),u("不会被执行，只有 "),n("code",null,"a"),u(" 会被执行，并且 "),n("code",null,"a loader"),u(" 接受的参数是 "),n("code",null,"b(pitch)"),u(" 的返回值")],-1),F=n("p",null,[n("img",{src:"/portal-blog/images/webpack/loader-pitch.png",alt:"loader pitch"})],-1),N=n("h2",{id:"四、如何手写-loader-？"},[n("a",{class:"header-anchor",href:"#四、如何手写-loader-？","aria-hidden":"true"},"#"),u(" 四、如何手写 loader ？")],-1),O=n("p",null,[u("手写 "),n("code",null,"loader"),u(" 的思路")],-1),j=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"loader"),u(" 支持链式调用，所以需要严格遵循 “单一职责”， 每个 "),n("code",null,"loader"),u(" 只处理自己负责的事情")])]),n("li",null,[n("p",null,[n("code",null,"Webpack"),u(" 传给 "),n("code",null,"loader"),u(" 的原内容都是 "),n("code",null,"UTF-8"),u(" 格式编码的字符串，当某些场景下 "),n("code",null,"loader"),u(" 处理二进制文件时，需要通过 "),n("code",null,"exports.raw = true"),u(" 告诉 "),n("code",null,"Webpack"),u(" 该 "),n("code",null,"loader"),u(" 是否需要二进制数据")])]),n("li",null,[n("p",null,[u("尽可能异步 "),n("code",null,"loader")])]),n("li",null,[n("p",null,[n("code",null,"loader"),u(" 是无状态的，"),n("code",null,"loader"),u(" 内部不应该保留状态")])])],-1);o.render=function(n,u,d,o,B,H){return l(),e("div",null,[r,a,t,c,s,h,i,p,g,b,S,f,v,_,m,k,y,C,J,P,w,x,L,W,A,E,T,U,F,N,O,j])};export default o;export{d as __pageData};
