### 安装 gitlab

通过 [docker-gitlab](https://github.com/sameersbn/docker-gitlab) 安装 gitlab

```
mkdir -p ~/docker/gitlab
wget https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml
```

### 修改 docker-compose.yml 信息

- 修改 GITLAB_HOST 为服务器地址，GITLAB_PORT 端口改成 8090（ps: 默认 10080，浏览器禁用了 10080 端口）

```
  gitlab:
    restart: always
    image: sameersbn/gitlab:14.4.1
    depends_on:
    - redis
    - postgresql
    ports:
    - "8090:80"
    - "10022:22"

  ...
  - GITLAB_HOST=150.158.84.188
  - GITLAB_PORT=8090

```

- 设置默认邮箱和密码, 密码必须为 8 位

```
  - GITLAB_ROOT_PASSWORD=12345678
  - GITLAB_ROOT_EMAIL=yjxxx@gmail.com
```

### 启动容器

```
docker-compose up -d
```

容器启动有点耗时，当容器状态为 healthy 表示运行成功了

### 疑难排除

若通过浏览器服务访问 ip:8090 , 一方面是服务器没有开放 8090 端口，另一方面关闭服务器的防火墙试试
