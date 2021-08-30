import{o as t,c as d,d as e}from"./app.a1522aa7.js";const a='{"title":"一、Linux 常见目录","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、Linux 常见目录","slug":"一、linux-常见目录"},{"level":2,"title":"二、文件处理命令","slug":"二、文件处理命令"},{"level":3,"title":"2.1、mkdir","slug":"_2-1、mkdir"},{"level":3,"title":"2.2、cd","slug":"_2-2、cd"},{"level":3,"title":"2.3、pwd","slug":"_2-3、pwd"},{"level":3,"title":"2.4、rmdir","slug":"_2-4、rmdir"},{"level":3,"title":"2.5、rm","slug":"_2-5、rm"},{"level":3,"title":"2.6、cp","slug":"_2-6、cp"},{"level":3,"title":"2.7、mv","slug":"_2-7、mv"},{"level":3,"title":"2.8、ln","slug":"_2-8、ln"},{"level":2,"title":"三、文件搜索命令","slug":"三、文件搜索命令"},{"level":3,"title":"3.1、locate","slug":"_3-1、locate"},{"level":3,"title":"3.2、whereis","slug":"_3-2、whereis"},{"level":3,"title":"3.3、which","slug":"_3-3、which"},{"level":3,"title":"3.4、find","slug":"_3-4、find"},{"level":3,"title":"3.5、grep","slug":"_3-5、grep"},{"level":2,"title":"四、文件压缩与解压","slug":"四、文件压缩与解压"},{"level":3,"title":"4.1、zip","slug":"_4-1、zip"},{"level":3,"title":"4.2、gzip","slug":"_4-2、gzip"},{"level":3,"title":"4.3、tar","slug":"_4-3、tar"},{"level":3,"title":"4.1、tar.gz","slug":"_4-1、tar-gz"},{"level":2,"title":"五、文件查看命令","slug":"五、文件查看命令"},{"level":3,"title":"5.1、cat","slug":"_5-1、cat"},{"level":3,"title":"5.2、more","slug":"_5-2、more"},{"level":3,"title":"5.3、head","slug":"_5-3、head"},{"level":3,"title":"5.4、tail","slug":"_5-4、tail"},{"level":2,"title":"六、登录信息","slug":"六、登录信息"},{"level":3,"title":"6.1、w","slug":"_6-1、w"},{"level":3,"title":"6.2、who","slug":"_6-2、who"},{"level":3,"title":"6.3、last","slug":"_6-3、last"},{"level":3,"title":"6.4、lastlog","slug":"_6-4、lastlog"},{"level":2,"title":"七、用户组和用户","slug":"七、用户组和用户"},{"level":3,"title":"7.1、配置文件","slug":"_7-1、配置文件"},{"level":3,"title":"7.2、命令操作","slug":"_7-2、命令操作"}],"relativePath":"source-analysis/前端运维/1、Linux 命令汇总.md","lastUpdated":1630310567776}',o={},l=[e('<p>前端学习运维，更加倾向于在工作中的实用性，今天汇总了在工作中经常使用的 Linux 命令</p><h2 id="一、linux-常见目录"><a class="header-anchor" href="#一、linux-常见目录" aria-hidden="true">#</a> 一、Linux 常见目录</h2><table><thead><tr><th>目录</th><th>解释</th></tr></thead><tbody><tr><td><code>/</code></td><td>根目录</td></tr><tr><td><code>～</code></td><td>当前用户家目录</td></tr><tr><td><code>/boot</code></td><td>启动目录，启动相关文件</td></tr><tr><td><code>/dev</code></td><td>设备文件</td></tr><tr><td><code>/etc</code></td><td>配置文件</td></tr><tr><td><code>/lib</code></td><td>系统库保存目录</td></tr><tr><td><code>/mnt</code></td><td>移动设备挂载目录</td></tr><tr><td><code>/media</code></td><td>光盘挂载目录</td></tr><tr><td><code>/misc</code></td><td>磁带机挂载目录</td></tr><tr><td><code>/root</code></td><td>超级用户的家目录,可以操作</td></tr><tr><td><code>/home</code></td><td>普通用户的家目录,可以操作</td></tr><tr><td><code>/tmp</code></td><td>临时目录,可以操作</td></tr><tr><td><code>/var</code></td><td>变量</td></tr><tr><td><code>/bin</code></td><td>普通的基本命令，如<code>ls</code>,<code>chmod</code>等, 普通用户都可使用</td></tr><tr><td><code>/sbin</code></td><td>基本的系统命令，如 <code>shutdown</code>，<code>reboot</code>，用于启动系统，修复系统,仅管理员才可运行</td></tr></tbody></table><h2 id="二、文件处理命令"><a class="header-anchor" href="#二、文件处理命令" aria-hidden="true">#</a> 二、文件处理命令</h2><h3 id="_2-1、mkdir"><a class="header-anchor" href="#_2-1、mkdir" aria-hidden="true">#</a> 2.1、<strong>mkdir</strong></h3><ul><li>创建目录，<code>mkdir directory</code></li><li><code>-p</code>, 递归创建目录</li></ul><div class="language-shell"><pre><code><span class="token comment"># 递归创建 b,c 目录</span>\n<span class="token function">mkdir</span> -p b/c \n</code></pre></div><h3 id="_2-2、cd"><a class="header-anchor" href="#_2-2、cd" aria-hidden="true">#</a> 2.2、<strong>cd</strong></h3><ul><li>切换所在目录，<code>change directory</code></li></ul><table><thead><tr><th>目录</th><th>解释</th></tr></thead><tbody><tr><td><code>~</code></td><td>家目录</td></tr><tr><td><code>.</code></td><td>当前目录</td></tr><tr><td><code>..</code></td><td>上级目录</td></tr></tbody></table><h3 id="_2-3、pwd"><a class="header-anchor" href="#_2-3、pwd" aria-hidden="true">#</a> 2.3、<strong>pwd</strong></h3><ul><li>显示当前目录</li></ul><h3 id="_2-4、rmdir"><a class="header-anchor" href="#_2-4、rmdir" aria-hidden="true">#</a> 2.4、<strong>rmdir</strong></h3><ul><li>删除空目录, <code>remove empty directory</code></li><li><code>rmdir [目录名]</code></li></ul><h3 id="_2-5、rm"><a class="header-anchor" href="#_2-5、rm" aria-hidden="true">#</a> 2.5、<strong>rm</strong></h3><ul><li><p>删除文件或者目录, <code>remove</code></p></li><li><p><code>rm [文件或者目录]</code></p><ul><li><code>-r</code> 删除目录</li><li><code>-f</code> 强制删除</li></ul></li><li><p><code>rm -rf [文件或者目录]</code>, 递归强制删除所有目录</p></li></ul><h3 id="_2-6、cp"><a class="header-anchor" href="#_2-6、cp" aria-hidden="true">#</a> 2.6、<strong>cp</strong></h3><ul><li><p>复制命令, <code>copy</code></p></li><li><p><code>copy [源文件或者目录] [目标文件]</code></p><ul><li><code>-r</code> 复制目录,默认是复制文件</li><li><code>-i</code> 会在复制文件的时候给提示,如果复制的目标文件存在,会给你提示是否要覆盖</li></ul><div class="language-shell"><pre><code><span class="token function">mkdir</span> afolder\n<span class="token function">mkdir</span> bfolder\n<span class="token builtin class-name">cd</span> afolder/\n<span class="token function">touch</span> <span class="token number">1</span>.txt\n<span class="token function">cp</span> <span class="token number">1</span>.txt ~/bfolder/\n</code></pre></div></li></ul><h3 id="_2-7、mv"><a class="header-anchor" href="#_2-7、mv" aria-hidden="true">#</a> 2.7、<strong>mv</strong></h3><ul><li>移动文件或者改名, <code>move</code></li><li><code>mv [源文件或者目录] [目标文件]</code></li></ul><div class="language-shell"><pre><code><span class="token comment"># 重命名</span>\n<span class="token function">mv</span> <span class="token number">1</span>.txt <span class="token number">2</span>.txt\n<span class="token comment"># 移动</span>\n<span class="token function">mv</span> <span class="token number">2</span>.txt a/\n</code></pre></div><h3 id="_2-8、ln"><a class="header-anchor" href="#_2-8、ln" aria-hidden="true">#</a> 2.8、<strong>ln</strong></h3><ul><li>链接命令, 生成链接文件, <code>link</code></li><li><code>ln -s [源文件] [目标文件]</code><ul><li><code>-s</code> 创建软链接</li></ul></li><li>修改任意一个文件，另一个都会改变</li><li>删除源文件，软链接不能使用</li><li>软链接源文件必须写绝对路径</li></ul><h2 id="三、文件搜索命令"><a class="header-anchor" href="#三、文件搜索命令" aria-hidden="true">#</a> 三、文件搜索命令</h2><h3 id="_3-1、locate"><a class="header-anchor" href="#_3-1、locate" aria-hidden="true">#</a> 3.1、locate</h3><p>安装</p><div class="language-"><pre><code>yum  -y install mlocate\n</code></pre></div><p>特点</p><ul><li>在后台数据库中按文件名搜索，速度比较快</li><li>数据保存在<code>/var/lib/mlocate/mlocate.db</code> 后台数据库，默认每天更新一次</li><li>可以<code>updatedb</code>命令立刻更新数据库</li><li>只能搜索文件名</li></ul><h3 id="_3-2、whereis"><a class="header-anchor" href="#_3-2、whereis" aria-hidden="true">#</a> 3.2、whereis</h3><p>搜索命令所在路径以及帮助文档所在位置</p><p><code>whereis 命令名</code></p><ul><li><code>-b</code> 只查找可执行文件</li><li><code>-m</code> 只查找帮助文件</li></ul><div class="language-shell"><pre><code><span class="token comment"># whereis cd</span>\n<span class="token comment"># cd: /usr/bin/cd /usr/share/man/man1/cd.1.gz</span>\n</code></pre></div><h3 id="_3-3、which"><a class="header-anchor" href="#_3-3、which" aria-hidden="true">#</a> 3.3、which</h3><ul><li>可以看到别名 <code>which ls</code></li></ul><div class="language-shell"><pre><code><span class="token comment"># which ls</span>\n<span class="token comment"># alias ls=&#39;ls --color=auto&#39;</span>\n<span class="token comment">#  /usr/bin/ls</span>\n</code></pre></div><h3 id="_3-4、find"><a class="header-anchor" href="#_3-4、find" aria-hidden="true">#</a> 3.4、find</h3><p>文件搜索命令, <code>find [搜索范围] [搜索条件]</code></p><h4 id="_3-4-1、按名称搜索"><a class="header-anchor" href="#_3-4-1、按名称搜索" aria-hidden="true">#</a> 3.4.1、按名称搜索</h4><div class="language-shell"><pre><code><span class="token comment"># find / -name 11.txt</span>\n</code></pre></div><p>注意：避免大范围的搜索，会非常消耗系统资源</p><h4 id="_3-4-2、通配符"><a class="header-anchor" href="#_3-4-2、通配符" aria-hidden="true">#</a> 3.4.2、通配符</h4><table><thead><tr><th>通配符</th><th>解释</th></tr></thead><tbody><tr><td><code>*</code></td><td>匹配任意内容</td></tr><tr><td><code>?</code></td><td>匹配任意一个字符</td></tr><tr><td><code>[]</code></td><td>匹配中括号内任意一个字符</td></tr></tbody></table><div class="language-shell"><pre><code><span class="token comment"># touch abc.txt</span>\n<span class="token comment"># find . -name &quot;ab[cdef].txt&quot;</span>\n</code></pre></div><h4 id="_3-4-3、-i"><a class="header-anchor" href="#_3-4-3、-i" aria-hidden="true">#</a> 3.4.3、-i</h4><p>不区分大小写</p><div class="language-shell"><pre><code><span class="token comment"># find . -iname &quot;Ab[cdef].txt&quot;</span>\n</code></pre></div><h4 id="_3-4-4、按时间搜索"><a class="header-anchor" href="#_3-4-4、按时间搜索" aria-hidden="true">#</a> 3.4.4、按时间搜索</h4><div class="language-shell"><pre><code><span class="token comment"># find . -mtime +5</span>\n</code></pre></div><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td><code>atime</code></td><td>文件访问时间</td></tr><tr><td><code>ctime</code></td><td>创建文件时间</td></tr><tr><td><code>mtime</code></td><td>修改文件时间</td></tr></tbody></table><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td><code>-5</code></td><td>5天前之内修改的文件</td></tr><tr><td><code>5</code></td><td>5天前当天修改的文件</td></tr><tr><td><code>+5</code></td><td>5天前之前修改的文件</td></tr></tbody></table><h4 id="_3-4-5、按大小搜索"><a class="header-anchor" href="#_3-4-5、按大小搜索" aria-hidden="true">#</a> 3.4.5、按大小搜索</h4><div class="language-shell"><pre><code><span class="token comment"># find . -size +0k</span>\n</code></pre></div><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td><code>-8k</code></td><td>小于8K</td></tr><tr><td><code>8k</code></td><td>等于8K</td></tr><tr><td><code>+8k</code></td><td>大于8K</td></tr><tr><td><code>+8M</code></td><td>大于8M</td></tr></tbody></table><h4 id="_3-4-6、综合搜索"><a class="header-anchor" href="#_3-4-6、综合搜索" aria-hidden="true">#</a> 3.4.6、综合搜索</h4><div class="language-shell"><pre><code><span class="token comment"># find /tmp -size +10k -a -size -20k</span>\n</code></pre></div><ul><li>查找 <code>/tmp</code> 目录下，大于10KB并且小于20KB的文件</li><li><code>-a and</code> 逻辑与，两个条件都满足</li><li><code>-o or</code> 逻辑或，两个条件满足一个就可以</li></ul><h3 id="_3-5、grep"><a class="header-anchor" href="#_3-5、grep" aria-hidden="true">#</a> 3.5、grep</h3><p>在文件当中匹配符合条件的字符串</p><ul><li><code>-i</code> 忽略大小写</li><li><code>-v</code> 排除指定字符串</li></ul><div class="language-shell"><pre><code><span class="token comment"># a.txt</span>\n<span class="token number">123</span>\nabc\nXYZ\n\n<span class="token comment"># grep b a.txt</span>\nabc\n<span class="token comment"># grep -v b a.txt</span>\n<span class="token number">123</span>\nXYZ\n<span class="token comment"># grep -i x a.txt</span>\nXYZ\n</code></pre></div><h2 id="四、文件压缩与解压"><a class="header-anchor" href="#四、文件压缩与解压" aria-hidden="true">#</a> 四、文件压缩与解压</h2><h3 id="_4-1、zip"><a class="header-anchor" href="#_4-1、zip" aria-hidden="true">#</a> 4.1、zip</h3><p>一种压缩格式, 支持<strong>压缩文件或目录</strong></p><ul><li>安装</li></ul><div class="language-"><pre><code>yum install -y unzip zip\n</code></pre></div><ul><li>命令</li></ul><table><thead><tr><th>功能</th><th>命令</th></tr></thead><tbody><tr><td>压缩文件</td><td><code>zip 压缩后文件名.zip 源文件</code></td></tr><tr><td>压缩文件</td><td><code>zip -r 压缩后文件名.zip 源文件</code></td></tr><tr><td>解压</td><td><code>unzip 压缩后目录名.zip</code></td></tr></tbody></table><ul><li>缺点</li></ul><p>压缩效率低</p><h3 id="_4-2、gzip"><a class="header-anchor" href="#_4-2、gzip" aria-hidden="true">#</a> 4.2、gzip</h3><p><code>gzip</code> 为高压，可以把文件压缩得更小</p><ul><li>命令</li></ul><table><thead><tr><th>命令</th><th>示例</th><th>含义</th></tr></thead><tbody><tr><td><code>gzip 源文件</code></td><td>gzip book.txt</td><td>压缩为.gz格式，删除源文件</td></tr><tr><td><code>gzip -c 源文件 &gt; 压缩文件</code></td><td>gzip -c book.txt &gt; book.txt.gz</td><td>压缩为.gz格式，不会删除源文件</td></tr><tr><td><code>gzip -r 目录</code></td><td>gzip -r book</td><td>把目录下的<strong>每个层级的子文件</strong>都压缩，并删除原文件，当前目录无变化</td></tr><tr><td><code>gzip -d 压缩文件名</code></td><td>gzip -d 1.txt.gz</td><td>解压缩文件,不保留压缩包</td></tr><tr><td><code>gunzip 压缩文件</code></td><td>gunzip 2.txt.gz</td><td>解压缩文件,也不保留压缩包</td></tr></tbody></table><ul><li>缺点</li></ul><p>不支持压缩目录</p><h3 id="_4-3、tar"><a class="header-anchor" href="#_4-3、tar" aria-hidden="true">#</a> 4.3、tar</h3><p><code>tar</code> 打包命令,<strong>只打包并不压缩</strong></p><ul><li>命令 <ul><li><code>-c</code> 打包</li><li><code>-v</code> 显示过程</li><li><code>-f</code> 指定打包后的文件名</li><li><code>-x</code> 解开包</li></ul></li></ul><div class="language-shell"><pre><code><span class="token comment"># 打包</span>\n<span class="token function">tar</span> -cvf 打包文件名 源文件\n<span class="token comment"># 解开包</span>\n<span class="token function">tar</span> -xvf 打包文件名\n</code></pre></div><h3 id="_4-1、tar-gz"><a class="header-anchor" href="#_4-1、tar-gz" aria-hidden="true">#</a> 4.1、tar.gz</h3><p>先打包为<code>.tar</code>格式，再压缩为<code>.gz</code>格式</p><table><thead><tr><th>命令</th><th>示例</th><th>含义</th></tr></thead><tbody><tr><td><code>tar -zcvf 压缩包名.tar.gz 源文件</code></td><td>tar -zcvf book.tar.gz book</td><td>先打包，再压缩</td></tr><tr><td><code>tar -zxvf 压缩包名.tar.gz</code></td><td>tar -zxvf book.tar.gz</td><td>解压tar.gz压缩包</td></tr></tbody></table><h2 id="五、文件查看命令"><a class="header-anchor" href="#五、文件查看命令" aria-hidden="true">#</a> 五、文件查看命令</h2><h3 id="_5-1、cat"><a class="header-anchor" href="#_5-1、cat" aria-hidden="true">#</a> 5.1、cat</h3><p>用于连接文件并打印到标准输出设备上</p><ul><li>命令</li></ul><div class="language-shell"><pre><code><span class="token function">cat</span> <span class="token punctuation">[</span>-AbeEnstTuv<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> fileName\n</code></pre></div><ul><li>参数 <ul><li><code>-n</code> 或 <code>--number</code>：从 1 开始对所有输出的行数进行编号</li></ul></li></ul><h3 id="_5-2、more"><a class="header-anchor" href="#_5-2、more" aria-hidden="true">#</a> 5.2、more</h3><p>类似 cat ，不过会以一页一页的形式显示，更方便使用者逐页阅读</p><ul><li>命令</li></ul><div class="language-shell"><pre><code><span class="token function">more</span> fileName\n</code></pre></div><ul><li>指令 <ul><li>按空白键（<code>space</code>）, 显示下一页</li><li>按b键（<code>back</code>）, 显示上一页</li></ul></li></ul><h3 id="_5-3、head"><a class="header-anchor" href="#_5-3、head" aria-hidden="true">#</a> 5.3、head</h3><ul><li>命令</li></ul><div class="language-shell"><pre><code><span class="token function">head</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>\n</code></pre></div><ul><li>参数 <ul><li><code>-n&lt;行数&gt;</code>: 显示文件的头部前 n 行内容</li></ul></li></ul><h3 id="_5-4、tail"><a class="header-anchor" href="#_5-4、tail" aria-hidden="true">#</a> 5.4、tail</h3><p>用于查看文件的内容</p><ul><li>命令</li></ul><div class="language-shell"><pre><code><span class="token function">tail</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>\n</code></pre></div><ul><li>参数 <ul><li><code>-n&lt;行数&gt;</code>: 显示文件的尾部 n 行内容</li><li><code>-f</code>: 循环读取，<strong>跟踪文件变化</strong></li></ul></li></ul><h2 id="六、登录信息"><a class="header-anchor" href="#六、登录信息" aria-hidden="true">#</a> 六、登录信息</h2><h3 id="_6-1、w"><a class="header-anchor" href="#_6-1、w" aria-hidden="true">#</a> 6.1、w</h3><p>查看登录用户信息</p><table><thead><tr><th>输出Title</th><th>含义</th></tr></thead><tbody><tr><td><code>USER</code></td><td>登录的用户名</td></tr><tr><td><code>TTY</code></td><td>登录的终端, <code>tty1</code> 本地终端; <code>pts/0</code> 远程终端</td></tr><tr><td><code>FROM</code></td><td>登录的IP</td></tr><tr><td><code>LOGIN</code></td><td>登录时间</td></tr><tr><td><code>IDLE</code></td><td>用户闲置时间</td></tr><tr><td><code>JCPU</code></td><td>该终端所有进程占用的时间</td></tr><tr><td><code>PCPU</code></td><td>当前进程所占用的时间</td></tr><tr><td><code>WHAT</code></td><td>正在执行的命令</td></tr></tbody></table><h3 id="_6-2、who"><a class="header-anchor" href="#_6-2、who" aria-hidden="true">#</a> 6.2、who</h3><p>查看登录用户信息</p><table><thead><tr><th>输出Title</th><th>含义</th></tr></thead><tbody><tr><td><code>USER</code></td><td>登录的用户名</td></tr><tr><td><code>TTY</code></td><td>登录的终端, <code>tty1</code> 本地终端; <code>pts/0</code> 远程终端</td></tr><tr><td><code>LOGIN</code></td><td>登录时间（登录的IP）</td></tr></tbody></table><h3 id="_6-3、last"><a class="header-anchor" href="#_6-3、last" aria-hidden="true">#</a> 6.3、last</h3><p>查看当前登录和过去登录的用户信息, 默认读取 <code>/var/log/wtmp</code> 文件</p><h3 id="_6-4、lastlog"><a class="header-anchor" href="#_6-4、lastlog" aria-hidden="true">#</a> 6.4、lastlog</h3><p>查看所有用户的最后一次登录时间</p><h2 id="七、用户组和用户"><a class="header-anchor" href="#七、用户组和用户" aria-hidden="true">#</a> 七、用户组和用户</h2><p>使用操作系统的人都是用户，用户组是具有相同系统权限的一组用户</p><h3 id="_7-1、配置文件"><a class="header-anchor" href="#_7-1、配置文件" aria-hidden="true">#</a> 7.1、配置文件</h3><ul><li><code>/etc/group</code>: 存储当前系统中所有用户组信息</li><li><code>/etc/gshadow</code>: 存放当前系统中用户组的密码信息, 与 <code>etc/group</code> 中的记录一一对应</li><li><code>/etc/passwd</code>: 存储当前系统中所有用户的信息</li><li><code>/etc/shadow</code>: 存放当前系统中所有用户的密码信息</li></ul><h3 id="_7-2、命令操作"><a class="header-anchor" href="#_7-2、命令操作" aria-hidden="true">#</a> 7.2、命令操作</h3><p><strong>用户组</strong></p><table><thead><tr><th>命令</th><th>示例</th><th>含义</th></tr></thead><tbody><tr><td><strong><code>groupadd xxx</code></strong></td><td><code>groupadd stu</code></td><td>添加用户组</td></tr><tr><td><strong><code>groupadd -g num xxx</code></strong></td><td><code>groupadd -g 666 teacher</code></td><td>添加用户组并指定编号</td></tr><tr><td><strong><code>groupmod -n newX oldX</code></strong></td><td><code>groupmod -n student stu</code></td><td>用户组重命名</td></tr><tr><td><strong><code>groupmod -g 999 xxx</code></strong></td><td><code>groupadd -g 999 student</code></td><td>修改用户组编号</td></tr><tr><td><strong><code>groupdel xxx</code></strong></td><td><code>groupdel student</code></td><td>删除用户组</td></tr></tbody></table><p><strong>用户</strong></p><table><thead><tr><th>命令</th><th>示例</th><th>含义</th></tr></thead><tbody><tr><td><strong><code>useradd -g &lt;group&gt; &lt;name&gt;</code></strong></td><td><code>useradd -g student Bob</code></td><td>创建用户并指定用户组</td></tr><tr><td><strong><code>useradd -d &lt;path&gt; &lt;name&gt;</code></strong></td><td><code>useradd -d /home/Jack Jack</code></td><td>创建用户并指定Home目录</td></tr><tr><td><strong><code>passwd &lt;name&gt;</code></strong></td><td><code>passwd Bob</code></td><td>root用户可以设置用户的密码</td></tr><tr><td><strong><code>usermod -d &lt;path&gt; &lt;name&gt;</code></strong></td><td><code>usermod -d /home/Jack2 Jack</code></td><td>修改个人Home目录</td></tr><tr><td><strong><code>usermod -g &lt;group&gt; &lt;name&gt;</code></strong></td><td><code>usermod -g teacher Bob</code></td><td>修改用户组</td></tr><tr><td><strong><code>userdel &lt;name&gt;</code></strong></td><td><code>userdel Bob</code></td><td>删除用户</td></tr><tr><td><strong><code>userdel -r &lt;name&gt;</code></strong></td><td><code>userdel -r Bob</code></td><td>删除用户并删除对应的Home目录</td></tr><tr><td><strong><code>id &lt;name&gt;</code></strong></td><td><code>id Bob</code></td><td>显示用户的组信息</td></tr></tbody></table>',124)];o.render=function(e,a,o,r,c,s){return t(),d("div",null,l)};export{a as __pageData,o as default};
