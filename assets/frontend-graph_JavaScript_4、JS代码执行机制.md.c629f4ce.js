import{o as n,c as s,d as a}from"./app.a1522aa7.js";const t='{"title":"优秀文章","description":"","frontmatter":{},"headers":[{"level":3,"title":"优秀文章","slug":"优秀文章"}],"relativePath":"frontend-graph/JavaScript/4、JS代码执行机制.md","lastUpdated":1630310567752}',p={},o=[a('<h3 id="优秀文章"><a class="header-anchor" href="#优秀文章" aria-hidden="true">#</a> 优秀文章</h3><ul><li><a href="https://github.com/kuitos/kuitos.github.io/issues/18" target="_blank" rel="noopener noreferrer">一道js面试题引发的思考 </a></li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;global scope&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">checkScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;local scope&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> scope<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">checkScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',3)];p.render=function(a,t,p,e,c,u){return n(),s("div",null,o)};export{t as __pageData,p as default};
