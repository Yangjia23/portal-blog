import{_ as n,c as a,o as s,a as t}from"./app.bfda52b1.js";const h='{"title":"\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8","slug":"\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8"},{"level":3,"title":"1.1\u3001absolute + \u8D1F margin","slug":"_1-1\u3001absolute-\u8D1F-margin"},{"level":3,"title":"1.2\u3001absolute + margin auto","slug":"_1-2\u3001absolute-margin-auto"},{"level":3,"title":"1.3\u3001absolute + calc","slug":"_1-3\u3001absolute-calc"},{"level":2,"title":"\u4E8C\u3001\u4E0D\u56FA\u5B9A\u5BBD\u9AD8","slug":"\u4E8C\u3001\u4E0D\u56FA\u5B9A\u5BBD\u9AD8"},{"level":3,"title":"2.1\u3001absolute + transform","slug":"_2-1\u3001absolute-transform"},{"level":3,"title":"2.2\u3001lineheight","slug":"_2-2\u3001lineheight"},{"level":3,"title":"2.3\u3001table \u6807\u7B7E","slug":"_2-3\u3001table-\u6807\u7B7E"},{"level":3,"title":"2.4\u3001css-table","slug":"_2-4\u3001css-table"},{"level":3,"title":"2.5\u3001flex","slug":"_2-5\u3001flex"},{"level":3,"title":"2.6\u3001grid","slug":"_2-6\u3001grid"},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3\u63A8\u8350","slug":"\u4E09\u3001\u603B\u7ED3\u63A8\u8350"}],"relativePath":"frontend-graph/CSS/3\u3001\u4E00\u6587\u6C47\u603B\u5143\u7D20\u5C45\u4E2D\u76849\u79CD\u529E\u6CD5.md"}',p={},e=t(`<p>\u5143\u7D20\u5C45\u4E2D\u5728\u5F00\u53D1\u3001\u9762\u8BD5\u4E2D\u90FD\u4F1A\u78B0\u5230\uFF0C\u672C\u6587\u4ECE\u4EE5\u4E0B\u4E24\u4E2A\u5C42\u9762\u6765\u6C47\u603B\u5143\u7D20\u5C45\u4E2D\u7684\u529E\u6CD5</p><ul><li>\u5C45\u4E2D\u5143\u7D20 <strong>\u56FA\u5B9A\u5BBD\u9AD8</strong></li><li>\u5C45\u4E2D\u5143\u7D20 <strong>\u4E0D\u5B9A\u5BBD\u9AD8</strong></li></ul><h2 id="\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8" tabindex="-1">\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8 <a class="header-anchor" href="#\u4E00\u3001\u56FA\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a></h2><p>ps: \u5143\u7D20 <code>child</code> \u56FA\u5B9A\u5BBD\u9AD8\u5C3A\u5BF8\u5982\u4E0B</p><div class="language-css"><pre><code><span class="token selector">child:</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1\u3001absolute-\u8D1F-margin" tabindex="-1">1.1\u3001absolute + \u8D1F margin <a class="header-anchor" href="#_1-1\u3001absolute-\u8D1F-margin" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span> 
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-2\u3001absolute-margin-auto" tabindex="-1">1.2\u3001absolute + margin auto <a class="header-anchor" href="#_1-2\u3001absolute-margin-auto" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3\u3001absolute-calc" tabindex="-1">1.3\u3001absolute + calc <a class="header-anchor" href="#_1-3\u3001absolute-calc" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E8C\u3001\u4E0D\u56FA\u5B9A\u5BBD\u9AD8" tabindex="-1">\u4E8C\u3001<strong>\u4E0D\u56FA\u5B9A\u5BBD\u9AD8</strong> <a class="header-anchor" href="#\u4E8C\u3001\u4E0D\u56FA\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a></h2><h3 id="_2-1\u3001absolute-transform" tabindex="-1">2.1\u3001absolute + transform <a class="header-anchor" href="#_2-1\u3001absolute-transform" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-2\u3001lineheight" tabindex="-1">2.2\u3001lineheight <a class="header-anchor" href="#_2-2\u3001lineheight" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token comment">/* \u4FEE\u590D\u6587\u5B57 */</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-3\u3001table-\u6807\u7B7E" tabindex="-1">2.3\u3001table \u6807\u7B7E <a class="header-anchor" href="#_2-3\u3001table-\u6807\u7B7E" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_2-4\u3001css-table" tabindex="-1">2.4\u3001css-table <a class="header-anchor" href="#_2-4\u3001css-table" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-5\u3001flex" tabindex="-1">2.5\u3001flex <a class="header-anchor" href="#_2-5\u3001flex" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-6\u3001grid" tabindex="-1">2.6\u3001grid <a class="header-anchor" href="#_2-6\u3001grid" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* \u6216
  * margin: auto;
  */</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E09\u3001\u603B\u7ED3\u63A8\u8350" tabindex="-1">\u4E09\u3001\u603B\u7ED3\u63A8\u8350 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3\u63A8\u8350" aria-hidden="true">#</a></h2><ul><li>\u65E0\u517C\u5BB9\u6027\u8981\u6C42\uFF0C\u63A8\u8350\u4F7F\u7528 <code>flex</code> \u5B9E\u73B0\u5C45\u4E2D</li></ul>`,26),o=[e];function c(l,u,i,r,k,d){return s(),a("div",null,o)}var _=n(p,[["render",c]]);export{h as __pageData,_ as default};
