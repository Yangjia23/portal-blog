import{o as n,c as s,d as a}from"./app.6ecd6baa.js";const p='{"title":"一、new 的实现原理","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、new 的实现原理","slug":"一、new-的实现原理"},{"level":2,"title":"二、JS对象的两类属性","slug":"二、js对象的两类属性"},{"level":3,"title":"2.1 数据属性","slug":"_2-1-数据属性"},{"level":3,"title":"2.2 访问器属性","slug":"_2-2-访问器属性"},{"level":2,"title":"三、实现继承的解决方案","slug":"三、实现继承的解决方案"},{"level":3,"title":"3.1 原型链继承","slug":"_3-1-原型链继承"},{"level":3,"title":"3.2 借用构造函数继承","slug":"_3-2-借用构造函数继承"},{"level":3,"title":"3.3 组合继承","slug":"_3-3-组合继承"},{"level":3,"title":"3.4 原型式继承","slug":"_3-4-原型式继承"},{"level":3,"title":"3.5 寄生式继承","slug":"_3-5-寄生式继承"},{"level":3,"title":"3.6 寄生式组合继承","slug":"_3-6-寄生式组合继承"}],"relativePath":"frontend-graph/JavaScript/2、面向对象和原型.md","lastUpdated":1625299236651}',t={},o=a('<blockquote><p>js 面向对象的实质是 <strong>基于原型</strong> 的对象系统，而不是基于类</p></blockquote><h2 id="一、new-的实现原理"><a class="header-anchor" href="#一、new-的实现原理" aria-hidden="true">#</a> 一、new 的实现原理</h2><p><code>new</code> 关键字具体操作如下</p><ul><li>首先创建一个空对象，这个对象将作为执行构造函数后返回的对象实例</li><li>使创建的空对象的原型(<code>__proto__</code>)指向构造函数的<code>prototype</code>属性</li><li>将空对象赋值给构造函数内部的 <code>this</code>, 并执行构造函数逻辑</li><li>根据构造函数逻辑，返回第一步创建的对象或者构造函数显式返回值</li></ul><p>实现 <code>newFunc</code> 函数来模拟 <code>new</code> 关键字的操作</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">newFunc</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">)</span>\nperson<span class="token punctuation">.</span>name <span class="token comment">// &#39;tom&#39;</span>\n\n<span class="token keyword">function</span> <span class="token function">newFunc</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// 取出构造函数</span>\n  <span class="token keyword">const</span> constructor <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n  <span class="token comment">// 实现 obj.__proto__ = constructor.prototype</span>\n  <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>\n  <span class="token comment">// 执行构造函数逻辑,this = obj</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n  <span class="token comment">// 判断函数执行结果是否为对象类型</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> result <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="二、js对象的两类属性"><a class="header-anchor" href="#二、js对象的两类属性" aria-hidden="true">#</a> 二、JS对象的两类属性</h2><p>为了提高抽象能力，<code>JS</code> 的属性被设计成更加复杂的形式，它提供了<strong>数据属性</strong>和<strong>访问器属性</strong>（<code>getter/setter</code>）两类。</p><p>JS 中的属性并非简单的名称和值，JS 用一组 <strong>特征</strong>(<code>attribute</code>) 来描述<strong>属性</strong> (<code>property</code>)</p><h3 id="_2-1-数据属性"><a class="header-anchor" href="#_2-1-数据属性" aria-hidden="true">#</a> 2.1 数据属性</h3><p>数据属性的 4 个特征</p><ul><li><code>value</code>: 属性值</li><li><code>writable</code>: 决定属性能否被赋值</li><li><code>enumerable</code>: 决定 for in 能否枚举该属性</li><li><code>configurable</code>: 决定该属性能否被删除或者改变特征值</li></ul><p>默认给对象设置属性，都会产生数据属性，其中的 <code>writable</code>，<code>enumerable</code>，<code>configurable</code> 默认都为 <code>true</code></p><ul><li><code>Object.getOwnPropertyDescriptor</code>: 查看数据属性</li><li><code>Object.definedProperty</code>: 设置修改数据属性</li></ul><h3 id="_2-2-访问器属性"><a class="header-anchor" href="#_2-2-访问器属性" aria-hidden="true">#</a> 2.2 访问器属性</h3><p>访问器属性（<code>getter/setter</code>）的 4 个特征</p><ul><li><code>getter</code>: 函数或 undefined, 在取属性值时被调用</li><li><code>setter</code>: 函数或 undefined, 在设置属性值时被调用</li><li><code>enumerable</code>: 决定 for in 能否枚举该属性</li><li><code>configurable</code>: 决定该属性能否被删除或者改变特征值</li></ul><h2 id="三、实现继承的解决方案"><a class="header-anchor" href="#三、实现继承的解决方案" aria-hidden="true">#</a> 三、实现继承的解决方案</h2><h3 id="_3-1-原型链继承"><a class="header-anchor" href="#_3-1-原型链继承" aria-hidden="true">#</a> 3.1 原型链继承</h3><p>将子类 <code>SubType</code> 的原型对象替换成父类 <code>SuperType</code> 的实例。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>父类中私有和公有的属性方法，最后都变成子类实例公有的</p></div><p><strong>关键代码</strong></p><div class="language-js"><pre><code><span class="token class-name">SubType</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>缺点</strong></p><ul><li>原型中存在引用值，一个实例的修改会影响其它实例</li><li>基类 <code>SubType</code> 在实例化时不能给超类 <code>SuperType</code> 的构造函数传参</li></ul><h3 id="_3-2-借用构造函数继承"><a class="header-anchor" href="#_3-2-借用构造函数继承" aria-hidden="true">#</a> 3.2 借用构造函数继承</h3><p>为了解决<strong>原型中包含引用值</strong>、<strong>无法传参数</strong>等导致的继承问题, 在子类的构造函数中，调用父类的构造函数</p><p><strong>关键代码</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">SubType</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">SuperType</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>缺点</strong></p><ul><li>子类只能继承父类中的私有属性，不能继承父类原型上的公有方法</li></ul><h3 id="_3-3-组合继承"><a class="header-anchor" href="#_3-3-组合继承" aria-hidden="true">#</a> 3.3 组合继承</h3><p>综合了原型链和借用构造函数，将二者优点进行结合</p><p><strong>关键代码</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">SubType</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token comment">// 继承属性</span>\n   <span class="token function">SuperType</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 继承方法</span>\n<span class="token class-name">SubType</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>缺点</strong></p><ul><li>父类构造函数 SuperType 调用了两次，影响性能</li><li>调用俩次，导致子类的实例，以及子类的原型对象上都存在 父类实例的属性, 而子类的原型上并不需要的父类实例的属性</li></ul><h3 id="_3-4-原型式继承"><a class="header-anchor" href="#_3-4-原型式继承" aria-hidden="true">#</a> 3.4 原型式继承</h3><p>创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型， 然后返回这个临时类型的一个实例</p><p><strong>关键代码</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>本质及适应场景</strong> 该继承方法本质是对传入的对象进行一次浅拷贝，ES6 通过 <code>Object.create()</code> 方法将原型式继承的概念规范化</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>可以看出 <code>Object.create()</code> 的本质就是创建某个类的空实例</p></div><p>适应场景主要是：适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合</p><p><strong>缺点</strong></p><ul><li>引用值始终在相关对象之间共享</li></ul><h3 id="_3-5-寄生式继承"><a class="header-anchor" href="#_3-5-寄生式继承" aria-hidden="true">#</a> 3.5 寄生式继承</h3><p>寄生构造函数和工厂模式：创建一个实现继承的函数，以某种 方式增强对象，然后返回这个对象</p><p><strong>关键代码</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createAnother</span><span class="token punctuation">(</span><span class="token parameter">original</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token function">object</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 通过调用函数创建一个新对象</span>\n  clone<span class="token punctuation">.</span><span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// 以某种方式增强这个对象</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> clone<span class="token punctuation">;</span>     <span class="token comment">// 返回这个对象</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>适应场景</strong></p><p>只关注对象，不关注类型和构造函数的场景</p><p><strong>缺点</strong></p><ul><li>增强函数无法复用</li></ul><h3 id="_3-6-寄生式组合继承"><a class="header-anchor" href="#_3-6-寄生式组合继承" aria-hidden="true">#</a> 3.6 寄生式组合继承</h3><p>使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。解决组合继承中父类构造函数调用多次</p><p><strong>关键代码</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">inheritPrototype</span><span class="token punctuation">(</span><span class="token parameter">subType<span class="token punctuation">,</span> superType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> prototype <span class="token operator">=</span> <span class="token function">object</span><span class="token punctuation">(</span>superType<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建对象</span>\n  prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> subType<span class="token punctuation">;</span> <span class="token comment">// 增强对象</span>\n  subType<span class="token punctuation">.</span>prototype <span class="token operator">=</span> prototype<span class="token punctuation">;</span> <span class="token comment">// 赋值对象</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">SubType</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">SuperType</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">inheritPrototype</span><span class="token punctuation">(</span>SubType<span class="token punctuation">,</span> SuperType<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>这样，子类原型上就不存在父类实例属性了</p>',59);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
