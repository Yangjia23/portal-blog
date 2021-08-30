import{o as e,c as s,d as a}from"./app.a1522aa7.js";const o='{"title":"一、文件权限","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、文件权限","slug":"一、文件权限"},{"level":3,"title":"1.1、基本权限格式","slug":"_1-1、基本权限格式"},{"level":3,"title":"1.2、修改基本权限","slug":"_1-2、修改基本权限"},{"level":3,"title":"1.3、其它权限","slug":"_1-3、其它权限"},{"level":2,"title":"二、默认权限","slug":"二、默认权限"},{"level":3,"title":"2.1、umask","slug":"_2-1、umask"},{"level":3,"title":"2.2、文件默认权限","slug":"_2-2、文件默认权限"},{"level":3,"title":"2.3、目录默认权限","slug":"_2-3、目录默认权限"},{"level":3,"title":"2.4、修改 umask 值","slug":"_2-4、修改-umask-值"},{"level":2,"title":"三、总结","slug":"三、总结"}],"relativePath":"source-analysis/前端运维/3、文件权限.md","lastUpdated":1630310567776}',n={},c=[a('<p>相信大家都执行过 <code>chomd 777 xxx</code> 命令来设置权限，那数字 <code>777</code> 有何含义？</p><h2 id="一、文件权限"><a class="header-anchor" href="#一、文件权限" aria-hidden="true">#</a> 一、文件权限</h2><p>在任意目录下，执行 <code>ll</code> 命令，即可查看该目录下所有文件和目录的权限</p><div class="language-shell"><pre><code><span class="token punctuation">[</span>root@VM-0-15-centos ~<span class="token punctuation">]</span><span class="token comment"># ll</span>\n-rw-r--r-- <span class="token number">1</span> root root    <span class="token number">0</span> <span class="token number">7</span>月   <span class="token number">5</span> <span class="token number">23</span>:26 <span class="token number">1</span>.txt\ndrwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">7</span>月   <span class="token number">5</span> <span class="token number">23</span>:26 book\n</code></pre></div><p>默认创建的文件和文件夹权限分别是 <code>-rw-r--r--</code> 和 <code>drwxr-xr-x</code>, 具体有哪些含义？</p><h3 id="_1-1、基本权限格式"><a class="header-anchor" href="#_1-1、基本权限格式" aria-hidden="true">#</a> 1.1、基本权限格式</h3><p>以 <code>-rw-r--r--</code> 为例，权限一共有 10 个字符，从左到右，</p><p>第一个字符表示<strong>文件类型</strong>，具体区分是：</p><ul><li><code>-</code> 表示是文件</li><li><code>d</code> 表示是目录</li><li><code>l</code> 表示软链接文件</li></ul><p>后面每三个字符组成一组，共三组分别是：<strong>文件所有者</strong>、<strong>文件所有组</strong>、<strong>其他人</strong>。每一组中的三个字符分别表示 <strong><code>read</code>(可读)</strong>、<strong><code>write</code>(可写)</strong>、<strong><code>execute</code>(可执行)</strong> 这三个权限。</p><p>所以，权限<code>-rw-r--r--</code> 表示</p><ul><li>文件所有者 对该文件可读可写，不能执行 <code>rw-</code></li><li>文件所有组 和 其他用户 对该文件仅可读，不能写入，不能执行 <code>r--</code></li></ul><h3 id="_1-2、修改基本权限"><a class="header-anchor" href="#_1-2、修改基本权限" aria-hidden="true">#</a> 1.2、修改基本权限</h3><ul><li><p>命令</p><div class="language-shell"><pre><code><span class="token function">chmod</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 模式 文件名\n</code></pre></div></li><li><p>选项</p><ul><li><code>-R</code>: 递归</li></ul></li><li><p>模式</p><div class="language-"><pre><code>[ugoa][+-=][rwx]\n</code></pre></div><p>三个<code>[]</code> 中字符代表什么意思呢？</p><p><strong>[ugoa]</strong>:</p><ul><li><code>u(user)</code>: 所有者</li><li><code>g(group)</code>: 所有组</li><li><code>o(other)</code>: 其他人</li><li><code>a(all)</code>: 所有人</li></ul><p><strong>[+-=]</strong>:</p><ul><li><code>+</code>: 添加权限</li><li><code>-</code>: 减少权限</li><li><code>=</code>: 直接赋值</li></ul><p><strong>[rwx]</strong>:</p><ul><li><code>r(read)</code>: 可读</li><li><code>w(write)</code>: 可写</li><li><code>x(execute)</code>: 可执行</li></ul><p>要修改的权限除了使用👆方法表示，还可以直接使用数字来表示，例如 <code>777</code>, 那么 <code>777</code> 啥意思？</p><p>以(<code>read</code>)为例，可读或不可读，内部使用二进制 <code>0</code>、<code>1</code> 来标识，那么最高权限 <code>rwx</code> 对应的二进制就是 <code>111</code>, 转换成十进制就是 <code>7</code>, 那么 <code>777</code> 表示所有者，所有组，以及其他人对文件都可以读、写、执行</p><p><code>rwx</code> 对应的二进制就是 <code>111</code>，每个权限对应的数字是</p><ul><li><code>r</code>: 4</li><li><code>w</code>: 2</li><li><code>x</code>: 1</li></ul><div class="language-shell"><pre><code><span class="token comment"># 所有者添加可写权限</span>\n<span class="token function">chmod</span> u+w <span class="token number">1</span>.txt\n<span class="token comment"># 其他人去除可写权限</span>\n<span class="token function">chmod</span> o-w <span class="token number">1</span>.txt\n<span class="token comment"># 最高权限</span>\n<span class="token function">chmod</span> <span class="token number">777</span> <span class="token number">1</span>.txt\n</code></pre></div></li></ul><h3 id="_1-3、其它权限"><a class="header-anchor" href="#_1-3、其它权限" aria-hidden="true">#</a> 1.3、其它权限</h3><h4 id="_1-3-1、chown"><a class="header-anchor" href="#_1-3-1、chown" aria-hidden="true">#</a> 1.3.1、chown</h4><p><code>chown(change owner)</code>, 修改文件所有者</p><ul><li>命令<div class="language-"><pre><code>chown 用户名 文件名\n</code></pre></div></li></ul><h4 id="_1-3-2、chgrp"><a class="header-anchor" href="#_1-3-2、chgrp" aria-hidden="true">#</a> 1.3.2、chgrp</h4><p><code>chgrp(change group)</code>, 修改文件所有组</p><ul><li>命令<div class="language-"><pre><code>chown 组名 文件名\n</code></pre></div></li></ul><h2 id="二、默认权限"><a class="header-anchor" href="#二、默认权限" aria-hidden="true">#</a> 二、默认权限</h2><p>文件和目录在创建时，都有默认的权限，具体是什么，以及如何修改默认权限呢？</p><h3 id="_2-1、umask"><a class="header-anchor" href="#_2-1、umask" aria-hidden="true">#</a> 2.1、umask</h3><div class="language-shell"><pre><code><span class="token builtin class-name">umask</span> <span class="token comment"># 0022</span>\n</code></pre></div><p><code>umask</code> 命令指定在建立文件时预设的<strong>权限掩码</strong>, 默认值为 <code>0022</code></p><ul><li>第一位 0 表示文件的特殊权限</li><li>后面 <code>022</code> 才是我们需要的</li></ul><h3 id="_2-2、文件默认权限"><a class="header-anchor" href="#_2-2、文件默认权限" aria-hidden="true">#</a> 2.2、文件默认权限</h3><p>默认创建的文件是不可执行文件，必须手工赋予执行权限，所以文件默认权限最大值为 <code>666</code>, 而默认创建的文件权限为 666 减去 <code>umask</code> 值</p><div class="language-shell"><pre><code><span class="token number">666</span> - 022 <span class="token operator">=</span> <span class="token number">644</span> <span class="token comment"># 655 =&gt; `rw-r--r--`</span>\n</code></pre></div><p>也就是 <code>rw-r--r--</code></p><h3 id="_2-3、目录默认权限"><a class="header-anchor" href="#_2-3、目录默认权限" aria-hidden="true">#</a> 2.3、目录默认权限</h3><p>目录默认权限最大值为 777, 所以默认创建的目录权限为 777 减去 <code>umask</code> 值</p><div class="language-shell"><pre><code><span class="token number">777</span> - 022 <span class="token operator">=</span> <span class="token number">755</span> <span class="token comment"># 755 =&gt; `rwxr-xr-x`</span>\n</code></pre></div><h3 id="_2-4、修改-umask-值"><a class="header-anchor" href="#_2-4、修改-umask-值" aria-hidden="true">#</a> 2.4、修改 umask 值</h3><ul><li><p>临时修改</p><div class="language-shell"><pre><code><span class="token builtin class-name">umask</span> 0002\n</code></pre></div></li><li><p>永久修改</p><div class="language-shell"><pre><code><span class="token function">vi</span> /etc/profile\n</code></pre></div></li></ul><h2 id="三、总结"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><ul><li><p>共有三组角色可以操作一份文件，分别是<strong>文件所有者</strong>、<strong>文件所有组</strong>、<strong>其他人</strong></p></li><li><p>对文件可执行 <strong><code>read</code>(读)</strong>、<strong><code>write</code>(写)</strong>、<strong><code>execute</code>(执行)</strong> 这三种操作，分别对应三个权限<code>rwx</code></p></li><li><p>最高权限<code>777</code>, 最低权限<code>000</code>,可通过 <code>chmod</code> 命令修改权限</p></li><li><p><code>umask</code> 值决定了创建文件、目录时的默认权限</p></li></ul>',38)];n.render=function(a,o,n,l,d,r){return e(),s("div",null,c)};export{o as __pageData,n as default};
