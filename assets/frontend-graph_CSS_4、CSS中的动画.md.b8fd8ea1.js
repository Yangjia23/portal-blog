import{o as n,c as l,a,b as s}from"./app.6ecd6baa.js";const t='{"title":"一、为什么需要动画","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、为什么需要动画","slug":"一、为什么需要动画"},{"level":2,"title":"二、CSS 中的动画","slug":"二、css-中的动画"},{"level":3,"title":"2.1、Transition","slug":"_2-1、transition"},{"level":3,"title":"2.2、Animation","slug":"_2-2、animation"},{"level":2,"title":"三、总结","slug":"三、总结"}],"relativePath":"frontend-graph/CSS/4、CSS中的动画.md","lastUpdated":1625299236647}',e={},o=a("h2",{id:"一、为什么需要动画"},[a("a",{class:"header-anchor",href:"#一、为什么需要动画","aria-hidden":"true"},"#"),s(" 一、为什么需要动画")],-1),u=a("p",null,"人们对会动的东西更加关注，所以在网站的设计和开发中，如果能适当地添加一些动画，不仅可以丰富网站的视觉和交互体验，还能更有效地抓住用户的眼球，吸引他们的注意力，从而更加关注和沉浸在我们的网站里，这可比只用简单的文字好多了。而且现代浏览器的性能越来越高，对动画地支持也越来越好，更有利于我们使用动画了。",-1),i=a("div",{class:"warning custom-block"},[a("p",{class:"custom-block-title"},"WARNING"),a("p",null,"不能滥用动画，滥用反而会造成用户注意力的分散")],-1),c=a("hr",null,null,-1),p=a("h2",{id:"二、css-中的动画"},[a("a",{class:"header-anchor",href:"#二、css-中的动画","aria-hidden":"true"},"#"),s(" 二、CSS 中的动画")],-1),r=a("p",null,[s("使用 "),a("code",null,"flash"),s("、"),a("code",null,"canvas"),s("、"),a("code",null,"javascript"),s(" 都可以在浏览器中制作动画，今天我们主要讲 "),a("code",null,"CSS"),s(" 中的动画")],-1),d=a("p",null,"CSS 中的动画主要由以下2个属性决定的",-1),k=a("ul",null,[a("li",null,[a("strong",null,"Transition Property")]),a("li",null,[a("strong",null,"Animation Property"),s(" & "),a("strong",null,"keyframes")])],-1),m=a("h3",{id:"_2-1、transition"},[a("a",{class:"header-anchor",href:"#_2-1、transition","aria-hidden":"true"},"#"),s(" 2.1、Transition")],-1),g=a("p",null,[s("啥是 "),a("code",null,"transition"),s(" ? "),a("code",null,"transition"),s(" 指从一个“状态”到另一个“状态”的动画模拟, 直译过来就是 “过渡”")],-1),h=a("p",null,[a("img",{src:"/images/css/css-transition.png",alt:"Transition"})],-1),f=a("h4",{id:"_2-1-1、-语法"},[a("a",{class:"header-anchor",href:"#_2-1-1、-语法","aria-hidden":"true"},"#"),s(" 2.1.1、 语法")],-1),y=a("p",null,[a("code",null,"transition"),s(" 的语法如下")],-1),b=a("div",{class:"language-css"},[a("pre",null,[a("code",null,[a("span",{class:"token selector"},".element"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token property"},"transition"),a("span",{class:"token punctuation"},":"),s(" [property] [duration] [timing-function] [delay]\n"),a("span",{class:"token punctuation"},"}"),s("\n")])])],-1),S=a("p",null,[s("上面的写法是缩写形式，就像 "),a("code",null,"padding"),s(", "),a("code",null,"margin"),s("一样，可以将缩写进行展开")],-1),v=a("div",{class:"language-css"},[a("pre",null,[a("code",null,[a("span",{class:"token selector"},".element"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token property"},"transition-property"),a("span",{class:"token punctuation"},":"),s(" [property]"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token property"},"transition-duration"),a("span",{class:"token punctuation"},":"),s(" [duration]"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token property"},"transition-timing-function"),a("span",{class:"token punctuation"},":"),s(" [property]"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token property"},"transition-delay"),a("span",{class:"token punctuation"},":"),s(" [delay]"),a("span",{class:"token punctuation"},";"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")])])],-1),_=a("p",null,"实际代码写法如下",-1),C=a("div",{class:"language-css"},[a("pre",null,[a("code",null,[a("span",{class:"token selector"},".element"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token property"},"transition"),a("span",{class:"token punctuation"},":"),s(" opacity 3s ease-in-out 0s"),a("span",{class:"token punctuation"},";"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")])])],-1),z=a("h4",{id:"_2-1-2、-transition-properties"},[a("a",{class:"header-anchor",href:"#_2-1-2、-transition-properties","aria-hidden":"true"},"#"),s(" 2.1.2、 Transition properties")],-1),A=a("ul",null,[a("li",null,[a("p",null,[a("code",null,"transition-property"),s(": 过渡的CSS 属性名称")]),a("p",null,"如果要修改 background, 这里就可以写上 background, 如何有多个属性的修改， 这里可以写 all")]),a("li",null,[a("p",null,[a("code",null,"transition-duration"),s(": 过渡的持续时间，单位可以是 s 或者 ms")])]),a("li",null,[a("p",null,[a("code",null,"transition-timing-function"),s(": 时间函数, 和"),a("code",null,"animation"),s("中相同，后续展开介绍")])]),a("li",null,[a("p",null,[a("code",null,"transition-delay"),s(": 过渡效果的延迟时间 (效果开始前的等待时间)， 单位可以设置成 s 或者 ms")])])],-1),w=a("h4",{id:"_2-1-3、-transition-property"},[a("a",{class:"header-anchor",href:"#_2-1-3、-transition-property","aria-hidden":"true"},"#"),s(" 2.1.3、 Transition property")],-1),x=a("p",null,[s("当然，不是所有的属性都可以设置不是所有的属性变化都可以设置 过渡效果，常见的，我们可以设置 "),a("code",null,"color"),s(", "),a("code",null,"background"),s(", "),a("code",null,"opacity"),s(", "),a("code",null,"font-size"),s(" 等属性")],-1),T=a("p",null,[s("还有一些我们常用的属性，不能够设置 过渡效果， 像 "),a("code",null,"position"),s(" (fix => absolute) , "),a("code",null,"display"),s(" (inline => block), "),a("code",null,"background-image"),s(" (渐变色背景) ， "),a("code",null,"font-family"),s(" 等")],-1),N=a("p",null,[a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties",target:"_blank",rel:"noopener noreferrer"},"Animatable CSS properties")],-1),W=a("h4",{id:"_2-1-4、-triggering"},[a("a",{class:"header-anchor",href:"#_2-1-4、-triggering","aria-hidden":"true"},"#"),s(" 2.1.4、 Triggering")],-1),D=a("p",null,[a("code",null,"transition"),s(" 通常是由某种“动作”触发，比如鼠标 Hover 悬停，或者用 JavaScript 添加或删除样式类")],-1),H=a("ul",null,[a("li",null,"Hover"),a("li",null,"Class Change")],-1),P=a("h4",{id:"_2-1-5-demo"},[a("a",{class:"header-anchor",href:"#_2-1-5-demo","aria-hidden":"true"},"#"),s(" 2.1.5 Demo")],-1),j=a("h3",{id:"_2-2、animation"},[a("a",{class:"header-anchor",href:"#_2-2、animation","aria-hidden":"true"},"#"),s(" 2.2、Animation")],-1),B=a("p",null,"animation 属性可以将编写的 keyframes 应用到元素上",-1),M=a("h4",{id:"_2-2-1、keyframes"},[a("a",{class:"header-anchor",href:"#_2-2-1、keyframes","aria-hidden":"true"},"#"),s(" 2.2.1、keyframes")],-1),U=a("blockquote",null,[a("p",null,[a("code",null,"@keyframes"),s(" 规则通过在动画序列中定义关键帧（或waypoints）的样式来控制CSS动画序列中的中间步骤")])],-1),q=a("ul",null,[a("li",null,"语法")],-1),G=a("div",{class:"language-css"},[a("pre",null,[a("code",null,[a("span",{class:"token atrule"},[a("span",{class:"token rule"},"@keyframes"),s(" [name]")]),s(),a("span",{class:"token punctuation"},"{"),s("\n  "),a("span",{class:"token selector"},"from"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token comment"},"/* [styles] */"),s("\n  "),a("span",{class:"token punctuation"},"}"),s("\n  "),a("span",{class:"token selector"},"to"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token comment"},"/* [styles] */"),s("\n  "),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")])])],-1),I=a("ul",null,[a("li",null,"code")],-1),J=a("div",{class:"language-css"},[a("pre",null,[a("code",null,[a("span",{class:"token atrule"},[a("span",{class:"token rule"},"@keyframes"),s(" myframes")]),s(),a("span",{class:"token punctuation"},"{"),s("\n  "),a("span",{class:"token selector"},"from"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),s(" 200px"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token property"},"background"),a("span",{class:"token punctuation"},":"),s(" pink"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token punctuation"},"}"),s("\n\n  "),a("span",{class:"token selector"},"to"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),s(" 400px"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token property"},"background"),a("span",{class:"token punctuation"},":"),s(" yellow"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")])])],-1),R=a("p",null,[a("code",null,"@keyframes"),s(" 规则级中的 "),a("code",null,"from"),s(", "),a("code",null,"to"),s(" 还可以用 0% , 100% 来代替，如果需要定义更多的帧, 还可以加入像 20%， 50% 等等")],-1),E=a("h4",{id:"_2-2-2、animation"},[a("a",{class:"header-anchor",href:"#_2-2-2、animation","aria-hidden":"true"},"#"),s(" 2.2.2、Animation")],-1),F=a("p",null,[a("code",null,"Animation"),s(" 可以是多个“状态”间的变化")],-1),K=a("p",null,[a("img",{src:"/images/css/css-animation.png",alt:"css-animation.png"})],-1),L=a("ul",null,[a("li",null,"语法")],-1),O=a("div",{class:"language-css"},[a("pre",null,[a("code",null,[a("span",{class:"token selector"},".element"),a("span",{class:"token punctuation"},"{"),s("\n  "),a("span",{class:"token property"},"animation"),a("span",{class:"token punctuation"},":"),s(" [name] [duration] [timing-function] [delay] \n    [iteration-count] [direction] [fill-model] [play-state]\n"),a("span",{class:"token punctuation"},"}"),s("\n")])])],-1),Q=a("p",null,"非缩写",-1),V=a("div",{class:"language-css"},[a("pre",null,[a("code",null,[a("span",{class:"token selector"},".element"),a("span",{class:"token punctuation"},"{"),s("\n  "),a("span",{class:"token property"},"animation-name"),a("span",{class:"token punctuation"},":"),s(" [name]"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token property"},"animation-duration"),a("span",{class:"token punctuation"},":"),s(" [duration]"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token property"},"animation-timing-function"),a("span",{class:"token punctuation"},":"),s(" [timing-function]"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token property"},"animation-delay"),a("span",{class:"token punctuation"},":"),s(" [delay]"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token property"},"animation-iteration-count"),a("span",{class:"token punctuation"},":"),s(" [iteration-count]"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token property"},"animation-direction"),a("span",{class:"token punctuation"},":"),s(" [direction]"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token property"},"animation-fill-model"),a("span",{class:"token punctuation"},":"),s(" [fill-model]"),a("span",{class:"token punctuation"},";"),s("\n  "),a("span",{class:"token property"},"animation-play-state"),a("span",{class:"token punctuation"},":"),s(" [play-state]"),a("span",{class:"token punctuation"},";"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")])])],-1),X=a("h4",{id:"_2-2-3、-animation-properties"},[a("a",{class:"header-anchor",href:"#_2-2-3、-animation-properties","aria-hidden":"true"},"#"),s(" 2.2.3、 Animation properties")],-1),Y=a("ul",null,[a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-name")])]),a("p",null,[s("指定应用的一系列动画，每个名称代表一个由 "),a("code",null,"@keyframes"),s(" 定义的动画序列，可以同时设置多个动画序列，中间用逗号分隔")])]),a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-duration")])]),a("p",null,[s("动画完成一个周期所需要的时间, 和 "),a("code",null,"transition-duration"),s(" 类似，单位是 s 或者 ms")])]),a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-timing-function")])]),a("p",null,[s("控制动画播放的速度与加速度，让动画效果更佳生动，默认值是 "),a("code",null,"ease"),s(",")]),a("p",null,[a("strong",null,"ease 与 linear 比较")]),a("p",null,[a("img",{src:"/images/css/linear.png",alt:"linear.png"})]),a("ul",null,[a("li",null,[a("strong",null,"ease"),s(": 慢进 -> 加速 -> 减速 -> 结束")]),a("li",null,[a("strong",null,"linear"),s(": 匀速")])]),a("p",null,[a("strong",null,"ease-in、ease-out、ease-in-out 比较")]),a("p",null,[a("img",{src:"/images/css/ease.png",alt:"linear.png"})]),a("ul",null,[a("li",null,[a("strong",null,"ease-in"),s(": 慢进 -> 加速 -> 结束")]),a("li",null,[a("strong",null,"ease-out"),s(": 快进 -> 减速 -> 结束")]),a("li",null,[a("strong",null,"ease-in-out"),s(": 慢进 -> 加速 -> 减速 -> 结束")])]),a("p",null,[s("上面的 "),a("code",null,"ease"),s(" 与 "),a("code",null,"ease-in-out"),s(" 效果都是慢进 -> 加速 -> 减速 -> 结束，为啥会设计出俩个呢？")]),a("p",null,[s("其实上面所有的属性值都是别名，其核心都是通过 "),a("code",null,"cubic-bezier"),s(" 函数(贝塞尔曲线) 来实现的")]),a("p",null,[a("strong",null,"linear"),s(" 相当于: "),a("code",null,"cubic-bezier(0,0,1,1)")]),a("p",null,[a("strong",null,"ease"),s(" 相当于: "),a("code",null,"cubic-bezier(0.25, 0.1, 0.25, 1.0)")]),a("p",null,[a("strong",null,"ease-in-out"),s(" 相当于: "),a("code",null,"cubic-bezier(0.0, 0.0, 0.58, 1.0)")]),a("p",null,[s("其它属性值，可参考 "),a("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function",target:"_blank",rel:"noopener noreferrer"},"css timing-function"),s(" MDN文档")]),a("p",null,[s("在线生成网站: "),a("a",{href:"https://cubic-bezier.com/#.17,.67,.83,.67",target:"_blank",rel:"noopener noreferrer"},"cubic-bezier.com")]),a("hr"),a("p",null,[a("strong",null,"steps(steps_number, direction)")]),a("p",null,[s("除去"),a("code",null,"cubic-bezier()"),s(", timing-function 还可以使用 "),a("code",null,"steps(steps_number, direction)"),s("函数来实现，动画会通过跳跃来展示(ps: 有点像僵尸)")]),a("p",null,[a("code",null,"steps_number"),s(": 整数，表示将一个周期的动画分成几段")]),a("p",null,[a("code",null,"direction"),s(": 属性值可设定成 "),a("code",null,"start"),s(" 或 "),a("code",null,"end"),s(" (默认);")]),a("div",{class:"language-less"},[a("pre",null,[a("code",null,[a("span",{class:"token atrule"},"@keyframes move"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token selector"},"from"),s(),a("span",{class:"token punctuation"},"{"),s("\n        "),a("span",{class:"token property"},"left"),a("span",{class:"token punctuation"},":"),s(" 10px"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token punctuation"},"}"),s("\n    "),a("span",{class:"token selector"},"to"),s(),a("span",{class:"token punctuation"},"{"),s("\n        "),a("span",{class:"token property"},"left"),a("span",{class:"token punctuation"},":"),s(" 560px"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n\n"),a("span",{class:"token selector"},".circle"),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token property"},"animation-name"),a("span",{class:"token punctuation"},":"),s(" move"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token property"},"animation-duration"),a("span",{class:"token punctuation"},":"),s(" 5s"),a("span",{class:"token punctuation"},";"),s("\n\n    "),a("span",{class:"token selector"},"&.steps-start"),a("span",{class:"token punctuation"},"{"),s("\n        "),a("span",{class:"token property"},"animation-timing-function"),a("span",{class:"token punctuation"},":"),s(),a("span",{class:"token function"},"steps"),a("span",{class:"token punctuation"},"("),s("5"),a("span",{class:"token punctuation"},","),s(" start"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token punctuation"},"}"),s("\n    "),a("span",{class:"token selector"},"&.steps-end"),a("span",{class:"token punctuation"},"{"),s("\n        "),a("span",{class:"token property"},"animation-timing-function"),a("span",{class:"token punctuation"},":"),s(),a("span",{class:"token function"},"steps"),a("span",{class:"token punctuation"},"("),s("5"),a("span",{class:"token punctuation"},","),s(" end"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s("\n    "),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token comment"},"// 代码解读："),s("\n"),a("span",{class:"token comment"},"// 动画运行一次周期的时间是 5s, 一个分成 5 步，每步运行时间为 1s"),s("\n"),a("span",{class:"token comment"},"// 动画运行一次向右移动 550px, 相当于 1s 移动 110px"),s("\n"),a("span",{class:"token comment"},"// start 与 end 是针对 1s 这个时间端而言的"),s("\n"),a("span",{class:"token comment"},"// start 代表在 1s 开始前就移动"),s("\n"),a("span",{class:"token comment"},"// end 代表在接近 1s 结束后再移动"),s("\n")])])])]),a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-delay")])]),a("p",null,[s("和 "),a("code",null,"transition-delay"),s(" 类似, 动画开始前的等待时间，单位是 s 或者 ms，当存在多个动画时很管用")]),a("p",null,[s("注意：如果定义的动画是循环的，"),a("code",null,"delay"),s(" 属性并不是在每个周期内都生效 (ps: 只有第一个循环存在等待时间，后面就没有)")]),a("p",null,"属性值还可以是负数，例如 -2 s, 动画会直接从第 2s 开始执行")]),a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-iteration-count")])]),a("p",null,[s("定义动画结束前运行的次数， 默认值为 1, 可以设置成 "),a("code",null,"infinite"),s(", 无限循环动画，也可以设置成小数 0.5， 播放动画的一半，但不可以设置成负数")])]),a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-direction")])]),a("p",null,[s("动画默认从 0% 开始， 100% 结束, 该属性值可以是: "),a("code",null,"normal"),s(", "),a("code",null,"reverse"),s(", "),a("code",null,"alternate"),s(", "),a("code",null,"alternate-reverse")]),a("ul",null,[a("li",null,[a("code",null,"normal"),s(": 默认值")]),a("li",null,[a("code",null,"reverse"),s(": 从 100% 到 0%")]),a("li",null,[a("code",null,"alternate"),s(": 动画轮流反复播放，即从 0% 播放到 100% 然后再播放到 0%")]),a("li",null,[a("code",null,"alternate-reverse"),s(": 动画轮流反复播放，即从 100% 播放到 0% 然后再播放到 100%")])])]),a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-fill-model")])]),a("p",null,[s("设置CSS动画在执行之前和之后如何将样式应用于其目标。属性值: "),a("code",null,"normal"),s(", "),a("code",null,"forwards"),s(", "),a("code",null,"backwards"),s(", "),a("code",null,"both")]),a("ul",null,[a("li",null,[a("code",null,"normal"),s(": 默认值, 通过已有的CSS规则来显示目标元素")]),a("li",null,[a("code",null,"forwards"),s(": 动画结束之后，保留由执行期间遇到的最后一个关键帧计算值，最后一帧取决与 "),a("code",null,"animation-direction"),s(" 和 "),a("code",null,"animation-iteration-count"),s(", 具体参考 "),a("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode",target:"_blank",rel:"noopener noreferrer"},"MDN")]),a("li",null,[a("code",null,"backwards"),s(": 动画开始之前，立即应用第一个关键帧中定义的值，第一个关键帧取决于"),a("code",null,"animation-direction"),s("的值")]),a("li",null,[a("code",null,"both"),s(": 同时遵循"),a("code",null,"forwards"),s(" 和 "),a("code",null,"backwards"),s(" 规则")])])]),a("li",null,[a("p",null,[a("strong",null,[a("code",null,"animation-play-state")])]),a("p",null,[s("动画是否暂停或运行， 属性值 "),a("code",null,"running"),s("(默认值), "),a("code",null,"paused")])])],-1),Z=a("hr",null,null,-1),$=a("h2",{id:"三、总结"},[a("a",{class:"header-anchor",href:"#三、总结","aria-hidden":"true"},"#"),s(" 三、总结")],-1),nn=a("p",null,[a("strong",null,"何时使用动画？")],-1),ln=a("p",null,"动画可以吸引用户，但不可滥用动画，导致用户抓不住重点",-1),an=a("p",null,[a("strong",null,"Animation 、Transition 区别")],-1),sn=a("ul",null,[a("li",null,[a("p",null,[a("code",null,"Transition"),s(" (过渡)：")]),a("p",null,"从状态A 过渡到 状态 B, 相当于只有 开始状态 和 结束状态，不能插入中间状态，需要通过 Hover, Class Change 等方式才能触发")]),a("li",null,[a("p",null,[a("code",null,"Animation"),s(" (动画)：")]),a("p",null,"从状态A 过渡到状态 C, 再到 状态 B，也就是可以插入任意个中间状态，同时动画可以自动开始、循环、暂停等")])],-1);e.render=function(a,s,t,e,tn,en){return n(),l("div",null,[o,u,i,c,p,r,d,k,m,g,h,f,y,b,S,v,_,C,z,A,w,x,T,N,W,D,H,P,j,B,M,U,q,G,I,J,R,E,F,K,L,O,Q,V,X,Y,Z,$,nn,ln,an,sn])};export default e;export{t as __pageData};
