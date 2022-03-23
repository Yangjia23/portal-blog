import{_ as n,c as s,o as a,a as p}from"./app.bfda52b1.js";var t="/portal-blog/images/vue3/vue3-core-part.png";const y='{"title":"1\u3001\u9879\u76EE\u521D\u59CB\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u9879\u76EE\u521D\u59CB\u5316","slug":"_1\u3001\u9879\u76EE\u521D\u59CB\u5316"},{"level":2,"title":"2\u3001monorepo \u67B6\u6784","slug":"_2\u3001monorepo-\u67B6\u6784"},{"level":2,"title":"3\u3001\u5B89\u88C5\u4F9D\u8D56","slug":"_3\u3001\u5B89\u88C5\u4F9D\u8D56"},{"level":2,"title":"4\u3001\u521B\u5EFA reactivity \uFF0C shared \u6A21\u5757","slug":"_4\u3001\u521B\u5EFA-reactivity-\uFF0C-shared-\u6A21\u5757"},{"level":2,"title":"5\u3001\u6253\u5305\u914D\u7F6E","slug":"_5\u3001\u6253\u5305\u914D\u7F6E"}],"relativePath":"source-analysis/Vue3.x\u6E90\u7801/1\u3001\u642D\u5EFA\u5F00\u53D1\u73AF\u5883.md"}',o={},e=p(`<p>\u8FD9\u662F Vue3.x \u6E90\u7801\u5B9E\u73B0\u7684\u7B2C\u4E00\u7BC7\uFF0C\u4ECB\u7ECD vue3 \u5F00\u53D1\u73AF\u5883\u7684\u642D\u5EFA\u5DE5\u4F5C</p><h2 id="_1\u3001\u9879\u76EE\u521D\u59CB\u5316" tabindex="-1">1\u3001\u9879\u76EE\u521D\u59CB\u5316 <a class="header-anchor" href="#_1\u3001\u9879\u76EE\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token function">mkdir</span> mini-vue3-core
<span class="token function">pnpm</span> init -y
</code></pre></div><h2 id="_2\u3001monorepo-\u67B6\u6784" tabindex="-1">2\u3001monorepo \u67B6\u6784 <a class="header-anchor" href="#_2\u3001monorepo-\u67B6\u6784" aria-hidden="true">#</a></h2><p>vue3 \u6E90\u7801\u91C7\u7528 monorepo \u67B6\u6784\uFF0C\u5728\u4E00\u4E2A\u4ED3\u5E93\u91CC\u9762\u7BA1\u7406\u591A\u4E2A\u5305\uFF0C\u6BCF\u4E2A\u5305\u53EF\u4F5C\u4E3A\u5355\u72EC\u4F9D\u8D56\u5B58\u5728</p><p><img src="`+t+`" alt=""></p><p>\u6839\u76EE\u5F55\u521B\u5EFA <code>pnpm-workspace.yaml</code> \u6587\u4EF6</p><div class="language-"><pre><code>packages:
  - &#39;packages/*&#39;
</code></pre></div><h2 id="_3\u3001\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">3\u3001\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#_3\u3001\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token function">pnpm</span> <span class="token function">install</span>
typescript
rollup
rollup-plugin-typescript2
@rollup/plugin-json
@rollup/plugin-node-resolve
@rollup/plugin-commonjs
minimist
execa@4 -D -w
</code></pre></div><p>\u521B\u5EFA ts \u914D\u7F6E: <code>pnpm tsc --init</code>, \u4FEE\u6539\u914D\u7F6E\u5982\u4E0B</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2016&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u76EE\u6807\u8BED\u6CD5</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u5757\u683C\u5F0F</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u5757\u89E3\u6790\u65B9\u5F0F</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u89E3\u6790 json \u6A21\u5757</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5141\u8BB8\u901A\u8FC7 es6 \u8BED\u6CD5\u5F15\u5165 commonjs \u6A21\u5757</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span> <span class="token comment">// jsx \u4E0D\u8F6C\u8BD1</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DOM&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u6301\u7684\u7C7B\u5E93</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@vue/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*/src&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_4\u3001\u521B\u5EFA-reactivity-\uFF0C-shared-\u6A21\u5757" tabindex="-1">4\u3001\u521B\u5EFA reactivity \uFF0C shared \u6A21\u5757 <a class="header-anchor" href="#_4\u3001\u521B\u5EFA-reactivity-\uFF0C-shared-\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A\u6A21\u5757\u90FD\u662F\u5355\u72EC\u7684\u4E00\u4E2A\u9879\u76EE</p><div class="language-json"><pre><code><span class="token comment">// packages/reactivity/package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/reactivity&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/reactivity.esm-bundler.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7ED9 webpack \u4F7F\u7528</span>
  <span class="token property">&quot;upkg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/reactivity.global.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5168\u5C40\u4F7F\u7528</span>
  <span class="token property">&quot;buildOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VueReactivity&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esm-bundler&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-json"><pre><code><span class="token comment">// packages/shared/package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/shared&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/shared.esm-bundler.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;buildOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esm-bundler&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6A21\u5757 <code>@vue/shared</code> \u4E2D\u96C6\u6210\u4E00\u4E9B\u516C\u5171\u65B9\u6CD5\u7B49\uFF0C\u53EF\u5728\u5176\u5B83\u6A21\u5757\u4E2D\u4F7F\u7528</p><div class="language-js"><pre><code><span class="token comment">// packages/shared/src/index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6A21\u5757 <code>@vue/reactivity</code> \u4E2D\u60F3\u8981\u4F7F\u7528\u6A21\u5757 <code>@vue/shared</code> \u4E2D\u5BFC\u51FA\u7684\u65B9\u6CD5\u524D\uFF0C\u9700\u8981\u5B89\u88C5 <code>@vue/shared</code> \u6A21\u5757</p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C</p><div class="language-shell"><pre><code><span class="token function">pnpm</span> <span class="token function">install</span> @vue/shared@workspace --filter @vue/reactivity
</code></pre></div><ul><li><code>@workspace</code>: \u6307\u5411\u5F53\u524D\u7A7A\u95F4</li><li><code>--filter</code>: \u6307\u5B9A\u5B89\u88C5\u76EE\u5F55</li></ul><p>\u5728 <code>@vue/reactivity</code> \u6A21\u5757\u4E2D\u4E4B\u95F4\u5BFC\u5165\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86</p><div class="language-"><pre><code>import { isObject } from &quot;@vue/shared&quot;;
</code></pre></div><h2 id="_5\u3001\u6253\u5305\u914D\u7F6E" tabindex="-1">5\u3001\u6253\u5305\u914D\u7F6E <a class="header-anchor" href="#_5\u3001\u6253\u5305\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/dev.js reactivity -f global -s&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u65B0\u589E <code>dev</code> \u547D\u4EE4, \u6267\u884C <code>scripts/dev.js</code>, \u5E76\u4F20\u9012\u53C2\u6570</p><ul><li>\u53EA\u6253\u5305 reactivity \u6A21\u5757,</li><li>-f\uFF1A\u8F93\u51FA\u683C\u5F0F global,</li><li>-s: \u5F00\u542F sourceMap</li></ul><div class="language-js"><pre><code><span class="token comment">// path: scripts/dev.js</span>
<span class="token keyword">const</span> minimist <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;minimist&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> execa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;execa&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token function">minimist</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u6267\u884C\u547D\u4EE4\u65F6\u5019\u7684\u6253\u5305\u53C2\u6570</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> args<span class="token punctuation">.</span>_<span class="token punctuation">.</span>length <span class="token operator">?</span> args<span class="token punctuation">.</span>_<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;reactivity&#39;</span>
<span class="token keyword">const</span> formats <span class="token operator">=</span> args<span class="token punctuation">.</span>f <span class="token operator">||</span> <span class="token string">&#39;global&#39;</span>
<span class="token keyword">const</span> sourceMap <span class="token operator">=</span> args<span class="token punctuation">.</span>s <span class="token operator">||</span> <span class="token boolean">false</span>

<span class="token function">execa</span><span class="token punctuation">(</span>
  <span class="token string">&#39;rollup&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token string">&#39;-wc&#39;</span><span class="token punctuation">,</span> <span class="token comment">// --watch --config</span>
    <span class="token string">&#39;--environment&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F20\u53C2</span>
    <span class="token punctuation">[</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">TARGET:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">FORMATS:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>formats<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      sourceMap <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SOURCE_MAP:true</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">&#39;inherit&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B50\u8FDB\u7A0B\u7684\u8F93\u51FA\u5728\u5F53\u524D\u547D\u4EE4\u884C\u4E2D\u8F93\u51FA</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><p>\u811A\u672C <code>dev.js</code> \u6587\u4EF6\u4E2D\u4F1A\u901A\u8FC7 execa \u5F00\u542F\u5355\u72EC\u7EBF\u7A0B\u6267\u884C <code>rollup</code> \u8FDB\u884C\u6253\u5305\uFF0C\u5E76\u4F20\u9012\u4E86\u53C2\u6570\uFF0C <code>rollup</code>\u914D\u7F6E\u4F1A\u9ED8\u8BA4\u4ECE\u6839\u76EE\u5F55\u67E5\u627E</p><div class="language-js"><pre><code><span class="token comment">// rollup.config.js</span>

<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> ts <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-json&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> nodeResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-commonjs&#39;</span>

<span class="token keyword">const</span> packageFormats <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FORMATS</span> <span class="token operator">&amp;&amp;</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FORMATS</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sourcemap <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SOURCE_MAP</span>

<span class="token comment">// 1\u3001\u9700\u8981\u6839\u636E target \u627E\u5230\u8981\u6253\u5305\u7684\u6A21\u5757</span>
<span class="token keyword">const</span> packagesDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;packages&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u6253\u5305\u5165\u53E3</span>
<span class="token keyword">const</span> packageDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>packagesDir<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TARGET</span><span class="token punctuation">)</span>
<span class="token comment">// \u5165\u53E3\u6587\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>packageDir<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>packageDir<span class="token punctuation">)</span>

<span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> outputConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;esm-bundler&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.esm-bundler.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cjs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.cjs.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.global.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;iife&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> pkgConfigs <span class="token operator">=</span> packageFormats <span class="token operator">||</span> pkg<span class="token punctuation">.</span>buildOptions<span class="token punctuation">.</span>formats
<span class="token keyword">function</span> <span class="token function">createConfig</span><span class="token punctuation">(</span><span class="token parameter">format<span class="token punctuation">,</span> output</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  output<span class="token punctuation">.</span>sourcemap <span class="token operator">=</span> sourcemap
  output<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">&#39;named&#39;</span>
  <span class="token keyword">let</span> external <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>format <span class="token operator">===</span> <span class="token string">&#39;global&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    output<span class="token punctuation">.</span>name <span class="token operator">=</span> pkg<span class="token punctuation">.</span>buildOptions<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    external <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>pkg<span class="token punctuation">.</span>dependencies<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/index.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    output<span class="token punctuation">,</span>
    external<span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD4\u56DE\u6570\u7EC4\uFF0C\u4F1A\u4F9D\u6B21\u8FDB\u884C\u6253\u5305</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> pkgConfigs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">format</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">createConfig</span><span class="token punctuation">(</span>format<span class="token punctuation">,</span> outputConfig<span class="token punctuation">[</span>format<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><p>\u6B64\u65F6\uFF0C\u6267\u884C <code>npm run dev</code> \u5C31\u4F1A\u5728 <code>packages/reactivity/dist/</code> \u76EE\u5F55\u4E0B\u751F\u6210 <code>reactivity.global.js</code> \u6587\u4EF6</p><p>\u81EA\u6B64\uFF0Cvue3 \u6E90\u7801\u5F00\u53D1\u73AF\u5883\u521D\u6B65\u642D\u5EFA\u5B8C\u6210\uFF0C\u62DC \u{1F44B}</p>`,33),c=[e];function l(u,r,i,k,d,g){return a(),s("div",null,c)}var q=n(o,[["render",l]]);export{y as __pageData,q as default};
