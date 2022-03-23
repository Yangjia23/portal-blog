import{_ as e,c as a,o as t,a as r}from"./app.bfda52b1.js";const m='{"title":"\u5B89\u88C5 gitlab","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5B89\u88C5 gitlab","slug":"\u5B89\u88C5-gitlab"},{"level":3,"title":"\u4FEE\u6539 docker-compose.yml \u4FE1\u606F","slug":"\u4FEE\u6539-docker-compose-yml-\u4FE1\u606F"},{"level":3,"title":"\u542F\u52A8\u5BB9\u5668","slug":"\u542F\u52A8\u5BB9\u5668"},{"level":3,"title":"\u7591\u96BE\u6392\u9664","slug":"\u7591\u96BE\u6392\u9664"}],"relativePath":"project-develop/CICD/Jenkins\u4E0EGitlab\u7ED3\u5408.md"}',o={},l=r(`<h3 id="\u5B89\u88C5-gitlab" tabindex="-1">\u5B89\u88C5 gitlab <a class="header-anchor" href="#\u5B89\u88C5-gitlab" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 <a href="https://github.com/sameersbn/docker-gitlab" target="_blank" rel="noopener noreferrer">docker-gitlab</a> \u5B89\u88C5 gitlab</p><div class="language-"><pre><code>mkdir -p ~/docker/gitlab
wget https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml
</code></pre></div><h3 id="\u4FEE\u6539-docker-compose-yml-\u4FE1\u606F" tabindex="-1">\u4FEE\u6539 docker-compose.yml \u4FE1\u606F <a class="header-anchor" href="#\u4FEE\u6539-docker-compose-yml-\u4FE1\u606F" aria-hidden="true">#</a></h3><ul><li>\u4FEE\u6539 GITLAB_HOST \u4E3A\u670D\u52A1\u5668\u5730\u5740\uFF0CGITLAB_PORT \u7AEF\u53E3\u6539\u6210 8090\uFF08ps: \u9ED8\u8BA4 10080\uFF0C\u6D4F\u89C8\u5668\u7981\u7528\u4E86 10080 \u7AEF\u53E3\uFF09</li></ul><div class="language-"><pre><code>  gitlab:
    restart: always
    image: sameersbn/gitlab:14.4.1
    depends_on:
    - redis
    - postgresql
    ports:
    - &quot;8090:80&quot;
    - &quot;10022:22&quot;

  ...
  - GITLAB_HOST=150.158.84.188
  - GITLAB_PORT=8090

</code></pre></div><ul><li>\u8BBE\u7F6E\u9ED8\u8BA4\u90AE\u7BB1\u548C\u5BC6\u7801, \u5BC6\u7801\u5FC5\u987B\u4E3A 8 \u4F4D</li></ul><div class="language-"><pre><code>  - GITLAB_ROOT_PASSWORD=12345678
  - GITLAB_ROOT_EMAIL=yjxxx@gmail.com
</code></pre></div><h3 id="\u542F\u52A8\u5BB9\u5668" tabindex="-1">\u542F\u52A8\u5BB9\u5668 <a class="header-anchor" href="#\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-"><pre><code>docker-compose up -d
</code></pre></div><p>\u5BB9\u5668\u542F\u52A8\u6709\u70B9\u8017\u65F6\uFF0C\u5F53\u5BB9\u5668\u72B6\u6001\u4E3A healthy \u8868\u793A\u8FD0\u884C\u6210\u529F\u4E86</p><h3 id="\u7591\u96BE\u6392\u9664" tabindex="-1">\u7591\u96BE\u6392\u9664 <a class="header-anchor" href="#\u7591\u96BE\u6392\u9664" aria-hidden="true">#</a></h3><p>\u82E5\u901A\u8FC7\u6D4F\u89C8\u5668\u670D\u52A1\u8BBF\u95EE ip:8090 , \u4E00\u65B9\u9762\u662F\u670D\u52A1\u5668\u6CA1\u6709\u5F00\u653E 8090 \u7AEF\u53E3\uFF0C\u53E6\u4E00\u65B9\u9762\u5173\u95ED\u670D\u52A1\u5668\u7684\u9632\u706B\u5899\u8BD5\u8BD5</p>`,13),i=[l];function n(s,d,c,p,_,h){return t(),a("div",null,i)}var u=e(o,[["render",n]]);export{m as __pageData,u as default};
