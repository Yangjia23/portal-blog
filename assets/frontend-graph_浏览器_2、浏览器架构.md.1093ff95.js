import{_ as o,c as e,o as r,a as t}from"./app.bfda52b1.js";var l="/portal-blog/images/browser/process-thread.png",s="/portal-blog/images/browser/process-thread-02.png",a="/portal-blog/images/browser/browser-arch.png",i="/portal-blog/images/browser/browser-arch-02.png",p="/portal-blog/images/browser/browser-arch-03.png";const w='{"title":"\u4E00\u3001\u8FDB\u7A0B VS \u7EBF\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u8FDB\u7A0B VS \u7EBF\u7A0B","slug":"\u4E00\u3001\u8FDB\u7A0B-vs-\u7EBF\u7A0B"},{"level":2,"title":"\u4E8C\u3001\u5355\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3","slug":"\u4E8C\u3001\u5355\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3"},{"level":2,"title":"\u4E09\u3001\u591A\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3","slug":"\u4E09\u3001\u591A\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3"},{"level":3,"title":"3.1\u3001\u65E9\u671FChrome \u67B6\u6784(08\u5E74)","slug":"_3-1\u3001\u65E9\u671Fchrome-\u67B6\u6784-08\u5E74"},{"level":3,"title":"3.2\u3001\u76EE\u524DChrome \u67B6\u6784","slug":"_3-2\u3001\u76EE\u524Dchrome-\u67B6\u6784"},{"level":2,"title":"\u56DB\u3001\u672A\u6765 Chrome \u67B6\u6784","slug":"\u56DB\u3001\u672A\u6765-chrome-\u67B6\u6784"}],"relativePath":"frontend-graph/\u6D4F\u89C8\u5668/2\u3001\u6D4F\u89C8\u5668\u67B6\u6784.md"}',c={},n=t('<p>\u4ECE\u5B8F\u89C2\u89C6\u89D2\u4E0B\u7684\u63A2\u7D22\u6D4F\u89C8\u5668\u67B6\u6784</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u95EE\u9898\uFF1A\u4EC5\u6253\u5F00\u4E00\u4E2A Tab \u9875\u9762\uFF0C\u4E3A\u4EC0\u4E48\u6709 4 \u4E2A\u8FDB\u7A0B\uFF1F</p></div><h2 id="\u4E00\u3001\u8FDB\u7A0B-vs-\u7EBF\u7A0B" tabindex="-1">\u4E00\u3001\u8FDB\u7A0B VS \u7EBF\u7A0B <a class="header-anchor" href="#\u4E00\u3001\u8FDB\u7A0B-vs-\u7EBF\u7A0B" aria-hidden="true">#</a></h2><ul><li><p><strong>\u5E76\u884C\u5904\u7406</strong>\uFF1A\u8BA1\u7B97\u673A\u5728\u540C\u4E00\u4E2A\u65F6\u523B\u5904\u7406\u591A\u4E2A\u4EFB\u52A1\u4F7F\u7528\u5E76\u884C\u5904\u7406\u80FD\u5927\u5927\u63D0\u5347\u6027\u80FD\u3002</p></li><li><p>\u591A\u7EBF\u7A0B\u53EF\u4EE5\u5E76\u884C\u5904\u7406\u4EFB\u52A1\uFF0C\u4F46\u7EBF\u7A0B\u4E0D\u80FD\u5355\u72EC\u5B58\u5728\uFF0C\u9700\u8981\u7531\u8FDB\u7A0B\u6765\u542F\u52A8\u548C\u7BA1\u7406\u7684\u3002</p></li><li><p>\u7EBF\u7A0B\u4F9D\u9644\u4E8E\u8FDB\u7A0B\uFF0C\u5728\u8FDB\u7A0B\u4E2D\u53EF\u4EE5\u4F7F\u7528\u591A\u7EBF\u7A0B\u6765\u63D0\u4F9B\u6548\u7387</p></li></ul><p><img src="'+l+'" alt=""></p><p><strong>\u56DB\u4E2A\u7279\u70B9</strong></p><ul><li>1\u3001\u8FDB\u7A0B\u4E2D\u4EFB\u610F\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u51FA\u9519\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u8FDB\u7A0B\u7684\u5D29\u6E83</li><li>2\u3001\u7EBF\u7A0B\u4E4B\u95F4\u53EF\u4EE5\u5171\u4EAB\u8FDB\u7A0B\u4E2D\u7684\u6570\u636E <img src="'+s+'" alt=""></li><li>3\u3001\u5F53\u4E00\u4E2A\u8FDB\u7A0B\u5173\u95ED\u4E4B\u540E\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u56DE\u6536\u8FDB\u7A0B\u6240\u5360\u7528\u7684\u5185\u5B58\uFF08\u5373\u4F7F\u7EBF\u7A0B\u56E0\u64CD\u4F5C\u53D1\u751F<strong>\u5185\u5B58\u6CC4\u6F0F</strong>\uFF0C\u8FDB\u7A0B\u9000\u51FA\u65F6\uFF0C\u4E5F\u80FD\u6B63\u786E\u56DE\u6536\u5185\u5B58\uFF09</li><li>4\u3001\u8FDB\u7A0B\u4E4B\u95F4\u7684\u5185\u5BB9\u76F8\u4E92\u9694\u79BB</li></ul><blockquote><p>\u6269\u5C55: \u6BD4\u7EBF\u7A0B\u66F4\u5C0F\u7684\u5B58\u5728\u5C31\u662F<strong>\u534F\u7A0B</strong>\uFF0C\u800C\u534F\u6210\u662F\u8FD0\u884C\u5728\u7EBF\u7A0B\u4E2D\u66F4\u5C0F\u7684\u5355\u4F4D\u3002<code>async/await</code> \u5C31\u662F\u57FA\u4E8E\u534F\u7A0B\u5B9E\u73B0\u7684</p></blockquote><h2 id="\u4E8C\u3001\u5355\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3" tabindex="-1">\u4E8C\u3001\u5355\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3 <a class="header-anchor" href="#\u4E8C\u3001\u5355\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3" aria-hidden="true">#</a></h2><p><img src="'+a+'" alt=""><strong>\u7279\u70B9</strong>\uFF1A\u6D4F\u89C8\u5668\u6240\u6709\u7684\u529F\u80FD\u6A21\u5757\u90FD\u8FD0\u884C\u5728\u540C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D \uFF08<code>2007</code>\u4E4B\u524D\uFF09</p><p><strong>\u5B58\u5728\u7684\u95EE\u9898</strong></p><ul><li><strong>\u4E0D\u7A33\u5B9A</strong></li></ul><p>\u65E9\u671F\u662F\u901A\u8FC7\u63D2\u4EF6\u6765\u5B9E\u73B0\u6D4F\u89C8\u5668\u7684\u9AD8\u7EA7\u529F\u80FD\uFF0C\u50CF\u89C6\u9891\u3001\u97F3\u9891\u7B49\uFF0C\u63D2\u4EF6\u7684\u5D29\u6E83\u4F1A\u5BFC\u81F4\u6574\u4E2A\u6D4F\u89C8\u5668\u5D29\u6E83</p><ul><li><strong>\u4E0D\u6D41\u7545</strong></li></ul><p>\u9875\u9762\u6E32\u67D3\u3001<code>JS</code>\u6267\u884C\u3001\u63D2\u4EF6\u540C\u5904\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u610F\u5473\u7740\u540C\u4E00\u65F6\u523B\u53EA\u6709\u4E00\u4E2A\u6A21\u5757\u53EF\u4EE5\u6267\u884C\uFF0C\u82E5\u9047\u5230 <code>JS</code>\u4E2D\u7684\u6B7B\u5FAA\u73AF\uFF0C\u4F1A\u5BFC\u81F4\u9875\u9762\u5361\u6B7B</p><ul><li><strong>\u4E0D\u5B89\u5168</strong></li></ul><p>\u63D2\u4EF6\u53EF\u4EE5\u4F7F\u7528 <code>C++</code> \u8BED\u8A00\u7F16\u5199\uFF0C\u8FD9\u6837\u901A\u8FC7\u63D2\u4EF6\u53EF\u4EE5\u8BBF\u95EE\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4EFB\u610F\u8D44\u6E90\uFF0C\u540C\u65F6\u811A\u672C\u4E5F\u5B58\u5728\u6076\u610F\u4EE3\u7801\u6CE8\u5165\u7B49\u95EE\u9898</p><h2 id="\u4E09\u3001\u591A\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3" tabindex="-1">\u4E09\u3001\u591A\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3 <a class="header-anchor" href="#\u4E09\u3001\u591A\u8FDB\u7A0B\u6D4F\u89C8\u5668\u65F6\u4EE3" aria-hidden="true">#</a></h2><h3 id="_3-1\u3001\u65E9\u671Fchrome-\u67B6\u6784-08\u5E74" tabindex="-1">3.1\u3001\u65E9\u671FChrome \u67B6\u6784(08\u5E74) <a class="header-anchor" href="#_3-1\u3001\u65E9\u671Fchrome-\u67B6\u6784-08\u5E74" aria-hidden="true">#</a></h3><p><img src="'+i+'" alt=""></p><blockquote><p>\u8FDB\u7A0B\u95F4\u901A\u4FE1 <code>Inter Process Communication (IPC)</code>\uFF1A\u8FDB\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F</p></blockquote><p>\u5982\u4F55\u89E3\u51B3\u5355\u8FDB\u7A0B\u6D4F\u89C8\u5668\u5B58\u5728\u7684\u95EE\u9898\uFF1F</p><ul><li><strong>\u4E0D\u7A33\u5B9A</strong> \uFF1F</li></ul><p>\u6BCF\u4E2A\u63D2\u4EF6\u3001\u9875\u9762\u811A\u672C\u90FD\u6709\u5355\u72EC\u7684\u8FDB\u7A0B\uFF0C\u4E00\u4E2A\u63D2\u4EF6\u7684\u5D29\u6E83\u4E0D\u4F1A\u5BFC\u81F4\u6574\u4E2A\u6D4F\u89C8\u5668\u5D29\u6E83</p><ul><li><strong>\u4E0D\u6D41\u7545</strong> \uFF1F</li></ul><p>JS \u811A\u672C\u7684\u963B\u585E\u53EA\u4F1A\u5F71\u54CD\u5F53\u524D\u9875\u9762\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u6240\u6709\u9875\u9762</p><ul><li><strong>\u4E0D\u5B89\u5168</strong> \uFF1F</li></ul><p>\u91C7\u7528<strong>\u6C99\u7BB1\u673A\u5236</strong>\uFF0C\u76F8\u5F53\u4E8E\u7ED9\u8FDB\u7A0B\u52A0\u4E0A\u4E00\u628A\u9501\uFF0C\u6C99\u7BB1\u91CC\u7684\u7A0B\u5E8F\u53EF\u4EE5\u6267\u884C\uFF0C\u4F46\u4E0D\u80FD\u8BFB\u5199\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u7684\u4EFB\u4F55\u6570\u636E</p><h3 id="_3-2\u3001\u76EE\u524Dchrome-\u67B6\u6784" tabindex="-1">3.2\u3001\u76EE\u524DChrome \u67B6\u6784 <a class="header-anchor" href="#_3-2\u3001\u76EE\u524Dchrome-\u67B6\u6784" aria-hidden="true">#</a></h3><p><img src="'+p+'" alt=""></p><p>\u6240\u4EE5\uFF0C\u6253\u5F00\u4E00\u4E2ATab\u9875\u9762\uFF0C\u6709\u4E00\u4E2A\u6D4F\u89C8\u5668\u4E3B\u8FDB\u7A0B\u3001\u4E00\u4E2A\u7F51\u7EDC\u8FDB\u7A0B\u3001\u4E00\u4E2AGPU \u8FDB\u7A0B\u3001\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u51714\u4E2A\u8FDB\u7A0B</p><blockquote><p>\u6269\u5C55\u95EE\u9898\uFF1A\u867D\u7136\u662F\u591A\u8FDB\u7A0B\u67B6\u6784\uFF0C\u8FD8\u662F\u4F1A\u53D1\u751F\u5355\u4E2A\u9875\u9762\u5361\u6B7B\u6700\u7EC8\u5D29\u6E83\u5BFC\u81F4\u6240\u6709\u9875\u9762\u5D29\u6E83\uFF1F</p></blockquote><p>\u901A\u5E38\u662F\u4E00\u4E2A\u9875\u9762\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u4F46\u5B58\u5728\u4E00\u4E2A <strong>\u201C\u540C\u4E00\u7AD9\u70B9(<code>same-site</code>)\u201D</strong> \u60C5\uFF0C\u5177\u4F53\u662F\u6307\u62E5\u6709\u76F8\u540C\u7684<strong>\u6839\u57DF\u540D</strong>\u3001<strong>\u534F\u8BAE</strong>(<code>http://</code> \u6216 <code>https://</code> )\uFF0C\u5305\u542B\u4E86\u8BE5\u6839\u57DF\u540D\u4E0B\u7684\u6240\u6709\u5B50\u57DF\u540D\u548C\u4E0D\u540C\u7684\u7AEF\u53E3</p><ul><li><code>https://www.yangjay.com</code></li><li><code>https://blog.yangjay.com</code></li><li><code>https://www.yangjay.com:8080</code></li></ul><p>\u4E0A\u9762 \u{1F446}\u4E09\u4E2A\u5C31\u5C5E\u4E8E\u540C\u4E00\u7AD9\u70B9\u3002\u6D4F\u89C8\u5668\u89C4\u5B9A\uFF1A\u5F53\u4ECE <code>A</code> \u9875\u9762\u65B0\u5F00\u4E00\u4E2A <code>Tab</code> \u9875\uFF0C\u5C55\u793A\u540C\u4E00\u7AD9\u70B9\u4E0B\u7684 <code>B</code> \u9875\u9762\uFF0C<code>B</code> \u9875\u9762\u4F1A\u590D\u7528 <code>A</code> \u9875\u9762\u7684<strong>\u6E32\u67D3\u8FDB\u7A0B</strong>\u3002\u5B98\u65B9\u628A\u8FD9\u4E2A\u9ED8\u8BA4\u7B56\u7565\u53EB <code>process-per-site-instance</code>, \u5176\u4F18\u70B9\u662F <strong>\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\u91CC\u9762\uFF0C\u5404\u4E2A\u9875\u9762\u5C31\u4F1A\u5171\u4EABJS\u7684\u6267\u884C\u73AF\u5883</strong></p><ul><li><strong>\u6D4F\u89C8\u5668\u4E3B\u8FDB\u7A0B</strong></li></ul><p>\u8D1F\u8D23\u754C\u9762\u663E\u793A(\u5730\u5740\u680F\u3001\u4E66\u7B7E\u3001\u524D\u8FDB\u548C\u540E\u9000\u6309\u94AE)\u3001\u7528\u6237\u4EA4\u4E92\u3001\u5B50\u8FDB\u7A0B\u7BA1\u7406\uFF0C\u540C\u65F6\u63D0\u4F9B\u5B58\u50A8\u7B49</p><ul><li><strong>GPU\u8FDB\u7A0B</strong></li></ul><p>\u521D\u8877\u662F\u4E3A\u4E86\u5B9E\u73B0 CSS 3D \u6548\u679C\uFF0C\u540E\u9762\u7F51\u9875\u3001\u754C\u9762\u90FD\u91C7\u7528 GPU \u6765\u7ED8\u5236</p><ul><li><strong>\u7F51\u7EDC\u8FDB\u7A0B</strong></li></ul><p>\u8D1F\u8D23\u52A0\u8F7D\u9875\u9762\u7684\u7F51\u7EDC\u8D44\u6E90</p><ul><li><strong>\u6E32\u67D3\u8FDB\u7A0B</strong></li></ul><p>\u8D1F\u8D23\u5C06HTML\u3001CSS\u3001JS \u6E32\u67D3\u6210\u53EF\u4EA4\u4E92\u4F7F\u7528\u7684\u7F51\u9875\uFF0C\u540C\u65F6\u6392\u7248\u5F15\u64CE Blink \u548CJavascript V8\u5F15\u64CE\u90FD\u8FD0\u884C\u5728\u8BE5\u8FDB\u7A0B\u4E2D</p><ul><li><strong>\u63D2\u4EF6\u8FDB\u7A0B</strong> \u8D1F\u8D23\u63D2\u4EF6\u7684\u8FD0\u884C\uFF0C\u6BCF\u4E2A\u63D2\u4EF6\u90FD\u6709\u5355\u72EC\u8FDB\u7A0B</li></ul><p>\u76EE\u524D\u67B6\u6784\u7F3A\u70B9\uFF1A</p><p>1\u3001\u5360\u7528\u66F4\u591A\u7684\u8D44\u6E90\uFF0C\u4E3A\u4E86\u8282\u7701\u5185\u5B58\uFF0CChrome \u9650\u5236\u4E86\u6700\u5927\u8FDB\u7A0B\u6570\uFF0C\u6700\u5927\u8FDB\u7A0B\u6570\u53D6\u51B3\u4E8E\u786C\u4EF6\u7684\u80FD\u529B;</p><p>2\u3001\u66F4\u52A0\u590D\u6742\u7684\u4F53\u7CFB\u67B6\u6784</p><h2 id="\u56DB\u3001\u672A\u6765-chrome-\u67B6\u6784" tabindex="-1">\u56DB\u3001\u672A\u6765 Chrome \u67B6\u6784 <a class="header-anchor" href="#\u56DB\u3001\u672A\u6765-chrome-\u67B6\u6784" aria-hidden="true">#</a></h2><p>\u9762\u5411\u670D\u52A1\u7684\u67B6\u6784\uFF08SOA\uFF09\uFF0C\u6784\u5EFA\u4E00\u4E2A\u9AD8\u5185\u805A\u3001\u4F4E\u8026\u5408\u3001\u6613\u4E8E\u7EF4\u62A4\u4E0E\u6269\u5C55\u7684\u7CFB\u7EDF</p><ul><li><p>\u5F53 Chrome \u8FD0\u884C\u5728\u62E5\u6709\u5F3A\u5927\u786C\u4EF6\u7684\u8BA1\u7B97\u673A\u4E0A\u65F6\uFF0C\u4F1A\u5C06\u4E00\u4E2A\u670D\u52A1\u4EE5\u591A\u4E2A\u8FDB\u7A0B\u7684\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u63D0\u9AD8\u7A33\u5B9A\u6027</p></li><li><p>\u5F53\u8BA1\u7B97\u673A\u786C\u4EF6\u8D44\u6E90\u7D27\u5F20\u65F6\uFF0C\u5219\u53EF\u4EE5\u5C06\u591A\u4E2A\u670D\u52A1\u653E\u5728\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u8282\u7701\u8D44\u6E90</p></li></ul>',50),d=[n];function g(h,u,_,m,b,v){return r(),e("div",null,d)}var C=o(c,[["render",g]]);export{w as __pageData,C as default};
