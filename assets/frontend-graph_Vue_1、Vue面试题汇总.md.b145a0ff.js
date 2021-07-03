import{o as n,c as e,d as s}from"./app.6ecd6baa.js";const o='{"title":"1、Vue 中模板编译原理？","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、Vue 中模板编译原理？","slug":"_1、vue-中模板编译原理？"},{"level":2,"title":"2、生命周期钩子是如何实现的？","slug":"_2、生命周期钩子是如何实现的？"},{"level":2,"title":"3、Vue.mixin() 的使用场景和原理","slug":"_3、vue-mixin-的使用场景和原理"},{"level":2,"title":"4、nextTick() 的使用场景和原理","slug":"_4、nexttick-的使用场景和原理"},{"level":2,"title":"5、Vue 为什么需要虚拟 DOM？","slug":"_5、vue-为什么需要虚拟-dom？"},{"level":2,"title":"6、Vue 中 diff 的原理？","slug":"_6、vue-中-diff-的原理？"},{"level":2,"title":"7、数据监测与 DOM Diff 的区别?","slug":"_7、数据监测与-dom-diff-的区别"},{"level":2,"title":"8、computed 和 watch 的区别？","slug":"_8、computed-和-watch-的区别？"},{"level":2,"title":"9、Vue.set 方法是如何实现的？","slug":"_9、vue-set-方法是如何实现的？"},{"level":2,"title":"10、Vue 生命周期","slug":"_10、vue-生命周期"},{"level":2,"title":"11、Vue 组件通信","slug":"_11、vue-组件通信"},{"level":2,"title":"12、Vue 指令汇总","slug":"_12、vue-指令汇总"},{"level":2,"title":"13、Vue.use 使用及原理是什么？","slug":"_13、vue-use-使用及原理是什么？"},{"level":2,"title":"14、vue-router","slug":"_14、vue-router"},{"level":2,"title":"15、函数式组件的优势及原理","slug":"_15、函数式组件的优势及原理"},{"level":2,"title":"16、Vue 事件修饰符有哪些？其实现原理是什么？","slug":"_16、vue-事件修饰符有哪些？其实现原理是什么？"},{"level":2,"title":"17、keep-alive 使用场景及原理是?","slug":"_17、keep-alive-使用场景及原理是"},{"level":2,"title":"18、谈一下你对 vuex 的个人理解","slug":"_18、谈一下你对-vuex-的个人理解"},{"level":2,"title":"19、vue 中 slot 是如何实现的？什么时候使用它？","slug":"_19、vue-中-slot-是如何实现的？什么时候使用它？"},{"level":2,"title":"20、如何优化单页面首屏加载白屏体验问题？","slug":"_20、如何优化单页面首屏加载白屏体验问题？"},{"level":2,"title":"21、vue3.0 在响应式方面对 vue2.0 的主要优化点在哪里？","slug":"_21、vue3-0-在响应式方面对-vue2-0-的主要优化点在哪里？"},{"level":2,"title":"22、Vue3.0 与 Vue2.0 的区别","slug":"_22、vue3-0-与-vue2-0-的区别"}],"relativePath":"frontend-graph/Vue/1、Vue面试题汇总.md","lastUpdated":1625299236651}',a={},t=s('<h2 id="_1、vue-中模板编译原理？"><a class="header-anchor" href="#_1、vue-中模板编译原理？" aria-hidden="true">#</a> 1、Vue 中模板编译原理？</h2><p>在初始化数据后，就需要进行模版编译的工作了，模版编译的最终产物是为了得到 <code>render</code> 函数，主要分成以下步骤:</p><ul><li>当存在 <code>el</code> 属性后，会按照优先级判断实例中是否存在 <code>render</code> 、<code>template</code> 属性，以及 <code>el</code> 这个 <code>DOM</code> 元素内容是否存在</li><li>当 <code>render</code> 函数不存在时，会将 <code>template</code> 或 <code>el</code> 元素的 <code>DOM</code> 内容当作模版，然后通过词法解析生成 <code>ast</code> 语法树，内部主要是对模版字符串进行正则匹配</li><li>生成 <code>ast</code> 语法树后，会进行静态节点标记，作用是提高<code>VNode</code> 进行 <code>Diff</code> 比较的性能</li><li>标记结束后，将 <code>ast</code> 转换成字符串 <code>strCode</code>，字符串中存在 <code>_v, _c, _s</code> 等方法分别描述<strong>元素节点</strong>、<strong>文本节点</strong> 以及 <strong>字符串中的变量</strong></li><li>将字符串通过 <code>new Function(`with(this){return ${strCode}}`)</code> 转换成 <code>render</code> 函数</li></ul><h2 id="_2、生命周期钩子是如何实现的？"><a class="header-anchor" href="#_2、生命周期钩子是如何实现的？" aria-hidden="true">#</a> 2、生命周期钩子是如何实现的？</h2><ul><li><p>生命周期钩子由全局生命钩子和实例生命钩子组成。通过 <code>Vue.mixin()</code> 定义全局生命钩子，<code>Vue.mixin()</code> 可调用多次，Vue 在其内部会定义不同属性的合并策略，生命周期钩子的合并策略就是为每个钩子函数创建一个数组，每次定义的钩子函数都保存到对应的数组中，并最终挂载到 <code>Vue.options</code> 上</p></li><li><p>在 Vue 实例初始化时，会将 <code>Vue.options</code> 上的全局生命钩子函数和实例的钩子函数进行合并，挂载到实例的<code>$options</code> 属性上，最后在实例的不同阶段通过 <code>callhook</code> 函数从 <code>$options</code> 中取出对应的生命钩子数组，最后遍历数组，依次执行生命钩子函数</p></li></ul><h2 id="_3、vue-mixin-的使用场景和原理"><a class="header-anchor" href="#_3、vue-mixin-的使用场景和原理" aria-hidden="true">#</a> 3、Vue.mixin() 的使用场景和原理</h2><ul><li>使用场景</li></ul><p><code>Vue.mixin()</code>是一个全局 api, 全局注册一个混入，影响注册之后创建的每一个 Vue 实例，通常用来为自定义选项注入处理逻辑</p><ul><li>原理</li></ul><p><code>Vue.mixin</code> 可调用多次，在其内部会通过方法 <code>mergeOptions</code> 来合并传入的属性，而 <code>mergeOptions</code> 方法内容使用策略模式，对不同的属性采取不同的合并策略，大多数属性的合并策略是覆盖，而像生命周期 <code>hooks</code> 则是使用数组保留每个属性值。当实例初始化的时候，会将实例的 <code>$options</code> 和全局的 <code>options</code> 使用 <code>mergeOptions</code> 方法进行合并，最终合并后属性都放到实例的 <code>$options</code> 上。</p><h2 id="_4、nexttick-的使用场景和原理"><a class="header-anchor" href="#_4、nexttick-的使用场景和原理" aria-hidden="true">#</a> 4、nextTick() 的使用场景和原理</h2><ul><li>使用场景</li></ul><p>在 Vue 中是异步更新数据，默认数据更新后不能立即获取到最新的 DOM 节点，而通过 <code>nextTick</code> 获取到更新数据后的最新 DOM 节点。</p><ul><li>原理</li></ul><p>当多次修改相同的属性值，会导致属性所依赖的渲染 <code>Watcher</code> 执行多次，内部会将每次要执行的 <code>Watcher</code> 通过 <code>id</code> 去重后存放到一个队列中。当所以的同步任务执行完成后，会通过 <code>nextTick</code> 方法异步执行队列中的<code>watcher</code>, 而实例上的 <code>$nextTick()</code> 方法在内部也是调用了 <code>nextTick()</code> 方法，在 <code>nextTick()</code> 方法中，<code>vue 3</code> 使用 <code>Promise.resolve().then()</code> 实现异步，而<code>vue 2.X</code> 版本对异步做了兼容性处理，按照 <code>Promise</code> &gt; <code>MutationObserver</code> &gt; <code>setImmediate</code> &gt; <code>setTimeout</code> 顺序做兼容性处理</p><h2 id="_5、vue-为什么需要虚拟-dom？"><a class="header-anchor" href="#_5、vue-为什么需要虚拟-dom？" aria-hidden="true">#</a> 5、Vue 为什么需要虚拟 DOM？</h2><p>在 <code>JS</code> 中直接操作真实的 <code>DOM</code> 元素是十分耗性能的，所以使用 <code>VNode</code> 对象来描述真实的 <code>DOM</code> 元素，在 <code>JS</code> 中操作的是 <code>VNode</code>, 当数据发生变化后，<code>Vue</code> 会对新旧 <code>VNode</code> 进行 <code>patch</code>, 最后才会更新到真实 <code>DOM</code> 元素上</p><h2 id="_6、vue-中-diff-的原理？"><a class="header-anchor" href="#_6、vue-中-diff-的原理？" aria-hidden="true">#</a> 6、Vue 中 diff 的原理？</h2><p><code>diff</code>比对是为了尽可能找出可以复用的真实 DOM 节点。当新旧 <code>VNode</code> 的 <code>children</code> 都是多个子节点时，核心 <code>diff</code> 算法才会派上用场。<code>Vue2</code> 中核心 <code>diff</code> 算法采用的是<strong>双指针双端比较法</strong>。原理如下</p><ul><li>使用 4 个变量存储新旧 <code>VNode children</code> 前后两个端点的位置索引，再使用 4 个变量存储对应位置上的 <code>VNode</code></li><li>执行双端比较时，会按照 <strong>首首</strong> ，<strong>尾尾</strong>，<strong>首尾</strong>，<strong>首尾</strong> 顺序进行 4 次比较，当找到可复用的节点，就会停止比较，去执行移动真实 DOM 节点、节点之间 patch 、更新索引值等操作</li><li>当前面 4 次对比都没找到可复用节点，就会遍历新 <code>children</code>, 拿每个 <code>VNode</code> 去旧的 <code>children</code> 中查找复用节点，找到就移动 DOM 节点，在旧 <code>children</code> 中被移动的索引位置上使用 null 占位；没找到复用节点，就表示是新增节点，需要创建挂载</li><li>当条件 <code>oldStartIndex &lt;= oldEndIndex &amp;&amp; newStartIndex &lt;= newEndIndex</code> 不成立时，就结束对比，删除旧 <code>children</code> 中未复用到的节点</li></ul><h2 id="_7、数据监测与-dom-diff-的区别"><a class="header-anchor" href="#_7、数据监测与-dom-diff-的区别" aria-hidden="true">#</a> 7、数据监测与 DOM Diff 的区别?</h2><p>既然 Vue 通过数据劫持可以精准探测数据变化,为什么还需要虚拟 DOM 进行 diff 检测差异?</p><p><strong>Vue 中数据监测精度只到组件级别</strong>，每一个组件实例都会创建一个 <code>Watcher</code>, 这样可以知道具体是那个组件发生变化了，而在组件内部，需要通过 <code>VNde Diff</code> 尽可能找出可以复用的真实节点，而不是每次都删除旧节点，创建新节点。这样可以提高性能</p><h2 id="_8、computed-和-watch-的区别？"><a class="header-anchor" href="#_8、computed-和-watch-的区别？" aria-hidden="true">#</a> 8、computed 和 watch 的区别？</h2><p><strong>computed</strong></p><ul><li>computed 中定义的属性，可通过 Vue 实例获取，内部使用 <code>Object.defineProperty</code> 做响应式处理，computed 具有缓存功能，只有当依赖的属性发生变化，才会重新计算属性值</li><li>computed 中定义的属性也会创建一个 Watcher, 当页面上读取该属性时，内部依赖的属性不仅收集这个 Watcher，还会搜集渲染 Watcher, 这样当依赖属性变化，页面读取的属性也会同步变化</li></ul><p><strong>watch</strong></p><ul><li>watch 是用来监听属性的变化，当属性变化时，才会调用对应的回调函数，同时 watch 监听属性时，还可设置 deep 、immediate 两个属性</li><li>当需要深度监听对象内部属性值变化，可设置 deep: true</li><li>immediate 表示在 watch 中首次绑定的时候，是否执行回调函数</li></ul><h2 id="_9、vue-set-方法是如何实现的？"><a class="header-anchor" href="#_9、vue-set-方法是如何实现的？" aria-hidden="true">#</a> 9、Vue.set 方法是如何实现的？</h2><p><strong>使用场景</strong></p><p>给响应式对象中添加一个 <code>property</code>，并确保这个新 <code>property</code> 同样是响应式的，且触发视图更新。</p><p><strong>用法</strong></p><p><code>Vue.set( target, property/index, value )</code></p><p><strong>实现原理</strong></p><p>当 target 是数组，内部调用数组的 splice 方法</p><p>当 target 是对象，</p><ul><li>如果 <code>target</code> 上已经存在 <code>property</code> 属性，且不是 <code>Object.prototype</code> 上属性，直接进行赋值</li><li>判断 <code>target</code> 是否是响应式对象，如果是，调用 <code>defineReactive</code> 监听新属性，并调用 <code>notify</code> 触发更新；如果不是，直接赋值</li></ul><h2 id="_10、vue-生命周期"><a class="header-anchor" href="#_10、vue-生命周期" aria-hidden="true">#</a> 10、Vue 生命周期</h2><blockquote><p>Q1: Vue 的生命周期方法都有哪些？一般在哪一步发起 AJAx 请求及原因？</p></blockquote><ul><li>生命周期方法</li></ul><p><code>beforeCreate</code> 、<code>created</code>、<code>beforeMount</code>、<code>mounted</code>、<code>beforeUpdate</code>、<code>updated</code>、<code>beforeDestroy</code>、<code>destroyed</code></p><ul><li>当 Ajax 请求的数据不需要更新到页面上，可以在 created 阶段发起请求，如果需要更新到页面上，在 mounted 阶段发起，因为在这个阶段能够访问到真实的 DOM 元素</li></ul><blockquote><p>Q2: 移除事件监听使用 <code>beforeDestroy</code> 还是 <code>destroyed</code> 钩子？</p></blockquote><ul><li>移除事件监听使用 <code>beforeDestroy</code>, 因为在 <code>destroyed</code> 被调用后，对应 <code>Vue</code> 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁</li></ul><h2 id="_11、vue-组件通信"><a class="header-anchor" href="#_11、vue-组件通信" aria-hidden="true">#</a> 11、Vue 组件通信</h2><blockquote><p>Q1: Vue 组件间传值的方式及之间区别？</p></blockquote><ul><li><code>props</code> 和 <code>$emit</code> , 父向子传递数据通过 props 实现，子向父传递数据通过 $emit 触发事件实现</li><li><code>$parent</code> 和 <code>$children</code></li><li><code>$refs</code> 获取组件实例</li><li><code>$attrs</code> 和 <code>$listeners</code> , A -&gt; B -&gt; C，在 B 组件中，可通过 <code>v-bind=&quot;$attrs&quot;</code> 将 A 中所有的 attribute 绑定(class ,style 除外) 直接传递给 C, 通过 <code>v-on=&quot;$listeners&quot;</code> 将 A 中的 (不含  <code>.native</code>  修饰器的) <code>v-on</code>  事件监听器传递给 C</li><li><code>provide</code> 和 <code>inject</code> , 允许一个祖先组件向其所有子孙后代注入一个依赖</li><li><code>eventBus</code> ,平级组件数据传递</li><li><code>vuex</code> 状态管理</li></ul><blockquote><p>Q2: $attrs 出现的原因以及应用场景有哪些？provide/inject 不能解决它能解决的问题吗？</p></blockquote><ul><li>A -&gt; B -&gt; C，A 需要传递数据给 C， 同时在 B 组件中不需要使用传递的数据，此时就可使用 <code>v-bind=&quot;$attrs&quot;</code> 将数据直接传递给 C</li><li><code>provide</code>  和  <code>inject</code>  主要在开发高阶插件/组件库时使用，它可以实现跨级数据传递</li></ul><h2 id="_12、vue-指令汇总"><a class="header-anchor" href="#_12、vue-指令汇总" aria-hidden="true">#</a> 12、Vue 指令汇总</h2><blockquote><p>Q1: 请说下 v-if 和 v-show 的区别？</p></blockquote><ul><li><code>v-if</code> 和 <code>v-show</code> 都可以用来控制 DOM 的显示和隐藏，而在内部，<code>v-if</code> 是通过增加、删除 DOM 来实现的，<code>v-show</code> 这是通过 CSS 属性 <code>display</code> 来控制的</li><li><code>v-show</code> 不管初始条件如何，元素都会被渲染，而 <code>v-if </code>只有在条件变为真时，才会渲染</li><li><code>v-if</code>  有更高的切换开销，而  <code>v-show</code>  有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用  <code>v-show</code>  较好；如果在运行时条件很少改变，则使用  <code>v-if</code>  较好</li></ul><blockquote><p>Q2: v-if 与 v-for 的优先级</p></blockquote><p>当 <code>v-if</code> 与<code>v-for</code> 放在同一个标签时, <code>v-for</code>的优先级高于 <code>v-if</code> 所以更推荐的写法是使用 <code>computed</code> 计算属性，先过滤数据再循环渲染</p><blockquote><p>Q3: v-if，v-model，v-for 的实现原理</p></blockquote><p>解析指令是在将 template 解析成 ast 阶段进行的</p><ul><li><code>v-if</code>，会在 el 上增加 if、ifConditions 属性</li></ul><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">processIf</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> exp <span class="token operator">=</span> <span class="token function">getAndRemoveAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">&quot;v-if&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>exp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    el<span class="token punctuation">.</span>if <span class="token operator">=</span> exp<span class="token punctuation">;</span>\n    <span class="token function">addIfCondition</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      exp<span class="token operator">:</span> exp<span class="token punctuation">,</span>\n      block<span class="token operator">:</span> el<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getAndRemoveAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">&quot;v-else&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      el<span class="token punctuation">.</span>else <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> elseif <span class="token operator">=</span> <span class="token function">getAndRemoveAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">&quot;v-else-if&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>elseif<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      el<span class="token punctuation">.</span>elseif <span class="token operator">=</span> elseif<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>v-for, 通过正则匹配出 v-for 指令的内容，通过解析之后，在 el 元素上增加 for、alias、iterator 属性进行标识</li></ul><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">processFor</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token operator">:</span> ASTElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> exp<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>exp <span class="token operator">=</span> <span class="token function">getAndRemoveAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">&quot;v-for&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">parseFor</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">extend</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Invalid v-for expression: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>exp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>rawAttrsMap<span class="token punctuation">[</span><span class="token string">&quot;v-for&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>v-model</li></ul><p>v-model 通常是在表单元素或者自定义组件中使用，以表单为例，<code>v-model</code>会把它关联的响应式数据（如<code>info.message</code>），动态地绑定到表单元素的 value 属性上，然后监听表单元素的<code>input</code>事件：当<code>v-model</code>绑定的响应数据发生变化时，表单元素的 value 值也会同步变化；当表单元素接受用户的输入时，<code>input</code>事件会触发，<code>input</code>的回调逻辑会把表单元素 value 最新值同步赋值给<code>v-model</code>绑定的响应式数据</p><blockquote><p>Q4: 如何理解自定义指令?</p></blockquote><p>当需要对普通 DOM 元素进行底层操作，就可以用到自定义指令，一个指令定义对象可以提供 <code>bind</code> 、<code>inserted</code>、<code>update</code>、<code>componentUpdated</code>、<code>unbind</code> 等几个钩子函数，指令钩子函数接受 <code>el</code>、<code>binding</code>、<code>vnode</code>、<code>oldVNode</code> 等几个对象。</p><blockquote><p>Q5: Vue.directive 源码实现</p></blockquote><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token constant">ASSET_TYPES</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;directive&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;filter&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initAssetRegisters</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token operator">:</span> GlobalAPI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Vue<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>\n      <span class="token parameter">id<span class="token operator">:</span> string<span class="token punctuation">,</span>\n      definition<span class="token operator">:</span> Function <span class="token operator">|</span> Object</span>\n    <span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token operator">|</span> Object <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>definition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&quot;component&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          definition<span class="token punctuation">.</span>name <span class="token operator">=</span> definition<span class="token punctuation">.</span>name <span class="token operator">||</span> id<span class="token punctuation">;</span>\n          definition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>_base<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&quot;directive&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> definition <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          definition <span class="token operator">=</span> <span class="token punctuation">{</span> bind<span class="token operator">:</span> definition<span class="token punctuation">,</span> update<span class="token operator">:</span> definition <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> definition<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Vue.directive 原理是将指令名称和对应的配置放到 Vue.options 属性上</p><h2 id="_13、vue-use-使用及原理是什么？"><a class="header-anchor" href="#_13、vue-use-使用及原理是什么？" aria-hidden="true">#</a> 13、Vue.use 使用及原理是什么？</h2><p>Vue.use() 是用来安装 Vue.js 插件的。原理是</p><ul><li><code>Vue.use()</code> 安装插件必须在 <code>new Vue()</code> 之前完成</li><li>插件是一个对象，必须提供  <code>install</code>  方法。如果插件是一个函数，它会被作为 <code>install</code> 方法。<code>install</code> 方法调用时，会将 <code>Vue</code> 作为参数传入</li><li>当 <code>install</code> 方法被同一个插件多次调用，插件将只会被安装一次</li></ul><h2 id="_14、vue-router"><a class="header-anchor" href="#_14、vue-router" aria-hidden="true">#</a> 14、vue-router</h2><blockquote><p>Q1: vue-router 有几种钩子函数？具体是什么及执行流程是怎样的？</p></blockquote><p><strong>全局路由守卫</strong></p><ul><li><p><strong>router.beforeEach</strong>: 注册一个<strong>全局前置守卫</strong>, 接受 <code>(to, from, next)</code> 三个参数，</p><ul><li>to: 即将要进入的目标；</li><li>from: 当前导航正要离开的路由；</li><li>next: 调用 next 方法来  <strong>resolve</strong>  这个钩子</li></ul></li><li><p><strong>router.beforeResolve</strong>: 注册一个<strong>全局解析守卫</strong>, 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用</p></li><li><p><strong>router.afterEach</strong>: 注册<strong>全局后置钩子</strong>, 不会接受  <code>next</code>  函数也不会改变导航</p></li></ul><p><strong>路由守卫</strong></p><ul><li><strong>beforeEnter</strong>：在每个单独路由中定义，参数和全局前置守卫一样</li></ul><p><strong>组件守卫</strong></p><ul><li><strong>beforeRouteEnter</strong>: 守卫在导航确认前被调用，此时不能访问组件实例 this, 可以通过传一个回调给 next 来访问组件实例</li><li><strong>beforeRouteUpdate</strong>: 当前路由改变，但是该组件被复用时调用, 可以访问 this</li><li><strong>beforeRouteLeave</strong>: 导航离开该组件的对应路由时调用, 可以访问 this , 通常用来禁止用户在还未保存修改前突然离开。该导航可以通过  <code>next(false)</code>  来取消</li></ul><p><strong>完整的解析流程如下</strong></p><ol><li>导航被触发。</li><li>在失活的组件里调用 <code>beforeRouteLeave</code> 守卫。</li><li>调用全局的 <code>beforeEach</code> 守卫。</li><li>在被复用的组件里调用 <code>beforeRouteUpdate</code> 守卫。</li><li>在路由配置里调用 <code>beforeEnter</code>。</li><li>解析异步路由组件。</li><li>在被激活的组件里调用 <code>beforeRouteEnter</code>。</li><li>调用全局的 <code>beforeResolve</code> 守卫。</li><li>导航被确认。</li><li>调用全局的 <code>afterEach</code> 钩子。</li><li>触发 DOM 更新。</li><li>调用 <code>beforeRouteEnter</code> 守卫中传给 <code>next</code> 的回调函数，创建好的组件实例会作为回调函数的参数传入</li></ol><blockquote><p>Q2: vue-router 的两种模式的区别？</p></blockquote><ul><li><strong>hash</strong>: 默认值，使用 URL 的 hash 来模拟一个完整的 URL，hash 改变会触发 <code>hashChange</code> 事件，从而实现更新页面操作，缺点：丑</li><li><strong>history</strong>：通过 <code>history.pushState</code> 和 <code>history.replaceState</code> API 来实现，需要服务端配置，放在页面刷新显示 404</li></ul><h2 id="_15、函数式组件的优势及原理"><a class="header-anchor" href="#_15、函数式组件的优势及原理" aria-hidden="true">#</a> 15、函数式组件的优势及原理</h2><ul><li>当组件仅用于渲染而不需要维护自身响应式数据时，推荐使用函数式组件，此时组件是无状态无实例的，渲染开销也低很多</li><li>原理在于函数式组件并不会增加组件的的钩子方法</li></ul><h2 id="_16、vue-事件修饰符有哪些？其实现原理是什么？"><a class="header-anchor" href="#_16、vue-事件修饰符有哪些？其实现原理是什么？" aria-hidden="true">#</a> 16、Vue 事件修饰符有哪些？其实现原理是什么？</h2><ul><li><code>.stop</code> 阻止单击事件继续传播</li></ul><div class="language-javascript"><pre><code><span class="token punctuation">{</span><span class="token string">&quot;click&quot;</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>$event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">return</span> <span class="token function">a</span><span class="token punctuation">(</span>$event<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre></div><ul><li><code>.prevent</code> 阻止默认事件</li></ul><div class="language-javascript"><pre><code><span class="token punctuation">{</span><span class="token string">&quot;click&quot;</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>$event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">return</span> <span class="token function">a</span><span class="token punctuation">(</span>$event<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre></div><ul><li><p><code>.capture</code> 使用事件捕获模式</p></li><li><p><code>.self</code> 只当在 event.target 是当前元素自身时触发处理函数</p></li></ul><div class="language-javascript"><pre><code><span class="token punctuation">{</span><span class="token string">&quot;click&quot;</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>$event<span class="token punctuation">.</span>target <span class="token operator">!==</span> $event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">a</span><span class="token punctuation">(</span>$event<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre></div><ul><li><p><code>.once</code> 事件仅执行一次</p></li><li><p><code>.passive</code> 能够提升移动端的性能</p></li></ul><h2 id="_17、keep-alive-使用场景及原理是"><a class="header-anchor" href="#_17、keep-alive-使用场景及原理是" aria-hidden="true">#</a> 17、keep-alive 使用场景及原理是?</h2><p><strong>使用场景</strong>：</p><p><code>keep-alive</code> 主要用于保留组件状态或避免重新渲染，当包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。</p><p><strong>原理</strong>：</p><ul><li><code>keep-alive</code> 是一个抽象组件，不会渲染成真实 DOM 元素，内部通过 <code>abstract: true</code> 标识</li><li>定义了 <code>include</code>、<code>exclude</code>、<code>max</code> 三个 <code>props</code>，前两个分别用来匹配要缓存的组件和不需要缓存的组件，最后 <code>max</code> 表示缓存的组件最大个数。</li><li>内部定义 <code>cache</code>, <code>keys</code> 分别用来保存缓存的组件和缓存的每个组件的 <code>key</code></li><li>在 <code>render</code> 阶段，当命中缓存，返回缓存中对应的实例，并将当前 <code>key</code> 放到 <code>keys</code> 数组最后面，这样可以保证数组最后一个元素永远是最近使用的，对应第一个元素就是最久远的；当未命中，则进行存储缓存，同时判断缓存的个数是否超过限制，当超过后，删除 <code>keys[0]</code> 第一个（也就是最早缓存的）</li><li>在 <code>$mounted</code> 挂载后监听了<code>include</code>和<code>exclude</code>, 当属性值发生变化时，处理缓存，将不匹配的缓存删除</li></ul><h2 id="_18、谈一下你对-vuex-的个人理解"><a class="header-anchor" href="#_18、谈一下你对-vuex-的个人理解" aria-hidden="true">#</a> 18、谈一下你对 vuex 的个人理解</h2><ul><li><code>vuex</code> 是采用<strong>单项数据流</strong>的概念，整个运行过程是：在 <code>state</code> 中定义数据源，通过声明的方式映射到视图 <code>view</code> 中，然后通过 <code>actions</code> 响应在 <code>view</code> 上的用户输入导致的状态变化</li><li><code>vuex</code> 通过状态集中管理，实现多组件之间状态共享</li><li><code>vuex</code> 的缺点是无法持久化数据</li></ul><h2 id="_19、vue-中-slot-是如何实现的？什么时候使用它？"><a class="header-anchor" href="#_19、vue-中-slot-是如何实现的？什么时候使用它？" aria-hidden="true">#</a> 19、vue 中 slot 是如何实现的？什么时候使用它？</h2><ul><li><code>slot</code> 分成插槽和作用域插槽，统一使用 <code>v-slot</code> 指令</li><li>创建组件虚拟节点时，会将组件的儿子的虚拟节点保存起来。当初始化组件时,通过插槽属性将儿子进行分类，渲染组件时会拿对应的 <code>slot</code> 属性的节点进行替换操作</li><li>作用域插槽在解析的时候，不会作为组件的孩子节点。会解析成函数，当子组件渲染时，会调用此函数进行渲染</li></ul><h2 id="_20、如何优化单页面首屏加载白屏体验问题？"><a class="header-anchor" href="#_20、如何优化单页面首屏加载白屏体验问题？" aria-hidden="true">#</a> 20、如何优化单页面首屏加载白屏体验问题？</h2><p><strong>原因</strong> 因为一个单页应用，渲染的 html 是靠 js 生成的，需要将所有需要的资源都下载到浏览器端并解析</p><p><strong>解决办法</strong></p><ul><li>使用 webpack 优化打包后的体积大小，具体措施有：code-split 、路由懒加载、异步组件、图片压缩等</li><li>首页采用 SSR 服务端渲染</li><li>减少首屏接口请求数量，例如 chrome 存在同一域名最多同时存在 6 个 TCP 链接，后续的需要排队等候</li><li>静态资源 CDN、同时合理使用缓存策略，对不同的文件采取不同的缓存方式</li><li>gzip 压缩</li><li>体验上，可增加 loading 或 骨架屏</li></ul><h2 id="_21、vue3-0-在响应式方面对-vue2-0-的主要优化点在哪里？"><a class="header-anchor" href="#_21、vue3-0-在响应式方面对-vue2-0-的主要优化点在哪里？" aria-hidden="true">#</a> 21、vue3.0 在响应式方面对 vue2.0 的主要优化点在哪里？</h2><ul><li><strong>数据劫持</strong>: vue2.0 使用 <code>Object.defineProperty</code> 做数据劫持，而 vue3.0 采用 <code>proxy</code> 实现, 不需要改写数组的方法</li></ul><h2 id="_22、vue3-0-与-vue2-0-的区别"><a class="header-anchor" href="#_22、vue3-0-与-vue2-0-的区别" aria-hidden="true">#</a> 22、Vue3.0 与 Vue2.0 的区别</h2><p><strong>代码结构上</strong></p><ul><li>Vue3 代码架构采用 <code>monorepo</code> 策略，将模块拆分到不同的 <code>package</code> 中</li><li>Vue3 使用 ts 做类型监测，Vue2 采用 flow</li><li>Vue3 支持 tree-shaking</li></ul><p><strong>内部代码上</strong></p><ul><li>数据劫持：vue2 采用 <code>defineProperty</code>, 递归遍历每个属性，添加 get、set 方法；vue3 采用 proxy, 不改变原数据</li><li>vue3 采用 <code>compositionApi</code> 进行组织架构，解决编码时反复横跳，优化服用逻辑等（<code>mixin</code>带来的数据来源不清晰，命名冲突等），同时相比于 <code>optionApi</code> 更容易做类型推断</li><li>vue3 对模版编译做了很多优化，编译时生成 <code>Block Tree</code>, 同时对自节点中的动态节点进行收集，可以减少比较，并且采用 <code>patchFlag</code> 标记动态节点</li><li>vue3 增加了 <code>Fragment</code>, <code>Teleport</code>, <code>Suspense</code> 组件</li></ul>',112);a.render=function(s,o,a,c,p,l){return n(),e("div",null,[t])};export default a;export{o as __pageData};
