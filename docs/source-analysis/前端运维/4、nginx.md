学习掌握好 `nginx`,  

## 一、初识 nginx 

### 1.1、安装
以 centos 为例，通过 yum 进行安装
```shell
# 安装nginx
yum install nginx -y
# 查看安装的版本
nginx -v
# 查看编译时的参数
nginx -V 
```


### 1.2 操作
**命令**
```shell
systemctl [option] nginx.server
```

**option**
- `start`: 启动
- `stop`: 停止
- `status`: 状态
- `restart`: 重启
- `reload`: 重新读取配置

### 1.3、配置文件

上面安装的 nginx 版本为 `nginx/1.20.1`，以此为例，nginx 配置文件如下

- `/etc/nginx/nginx.conf`: 主配置文件

- `/etc/nginx/conf.d/*.conf`: 包含`conf.d`目录下面的所有配置文件

- `/etc/nginx/default.d/*.conf`: 包含`default.d`目录下面的所有配置文件

#### 1.3.1、nginx配置语法

主配置文件 `/etc/nginx/nginx.conf` 配置如下

```shell
# 全局配置 
user nginx; # user: 设置nginx服务的系统使用用户
worker_processes auto; # 工作进程数,一般和CPU数量相同
error_log /var/log/nginx/error.log; # nginx的错误日志
pid /run/nginx.pid; # nginx服务启动时的pid

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

# 事件配置 
events {
    worker_connections 1024; # 每个进程允许的最大连接数 
}

# http 配置
http {

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"'; # 日志记录格式

    access_log  /var/log/nginx/access.log  main; # 默认访问日志

    sendfile            on;  # 启动 sendfile
    tcp_nopush          on;  # tcp_nopush: 懒发送
    tcp_nodelay         on;  
    keepalive_timeout   65;  # 超时时间
    types_hash_max_size 4096; 

    include             /etc/nginx/mime.types; # 文件后缀和类型类型的对应关系
    default_type        application/octet-stream; # 默认content-type

    include /etc/nginx/conf.d/*.conf; # 包含的子配置文件

    # server 配置
    server {
        listen       80; # 监听端口
        listen       [::]:80; 
        server_name  _; # 用域名方式访问的地址
        root         /usr/share/nginx/html; # 静态文件根目录

        location / {
          root /usr/share/nginx/html;
          index index.html index.htm; # 首页的索引文件
        }

        error_page 404 /404.html; # 指定错误页面 🙅‍♂️
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html; # 把后台错误重定向到静态的50x.html页面
        location = /50x.html {
        }
    }
}
```




