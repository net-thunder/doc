# 服务端部署
配置文件

```yaml
server:
  # web/api服务端口
  port: 11805

sa-token:
  # token 名称（同时也是 cookie 名称）
  token-name: Access-Token
  # token 有效期（单位：秒） 默认30天，-1 代表永久有效
  timeout: -1
  # token 最低活跃频率（单位：秒），如果 token 超过此时间没有访问系统就会被冻结，默认-1 代表不限制，永不冻结
  active-timeout: -1
  # 是否允许同一账号多地同时登录 （为 true 时允许一起登录, 为 false 时新登录挤掉旧登录）
  is-concurrent: true
  # 在多人登录同一账号时，是否共用一个 token （为 true 时所有登录共用一个 token, 为 false 时每次登录新建一个 token）
  is-share: false
  # token 风格（默认可取值：uuid、simple-uuid、random-32、random-64、random-128、tik）
  token-style: uuid
  # 是否输出操作日志
  is-log: true

spring:
  servlet:
    multipart:
      enabled: true
      max-file-size: 1GB
      max-request-size: 1GB
  datasource:
    # derby数据库存放路径
    path: ${user.dir}/derby
mybatis-plus:
  configuration:
    map-underscore-to-camel-case: true
    auto-mapping-behavior: full
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  mapper-locations: classpath:mapper/*.xml

sdwan:
  httpServer:
    # sdwanServer公网地址
    controllerServer: 127.0.0.1:11800
    # 客户端版本库存放路径
    storage: ${user.dir}/storage
  sdwanServer:
    enable: true
    # sdwanServer tcp端口
    port: 11800
    heartTimeout: 30000
  relayServer:
    enable: true
    # relayServer dup端口
    bindPort: 11800
    heartTimeout: 15000
  stunServer:
    enable: true
    # stunServer公网地址
    bindHost: 127.0.0.1
    # stunServer udp端口
    bindPort: 13478
```

启动服务端

```shell
java -jar sdwan-controller.jar
```

配置管理端

创建租户，关闭认证选项

![](/resource/tenant.png)

# Mesh部署
dockerfile

```dockerfile
FROM centos:7

# COPY CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo

RUN yum install net-tools -y
RUN yum install iproute -y 
RUN yum install wget -y

RUN wget https://download.oracle.com/graalvm/21/latest/graalvm-jdk-21_linux-x64_bin.tar.gz -o /opt/graalvm-jdk-21_linux-x64_bin.tar.gz
RUN tar -xvf /opt/graalvm-jdk-21_linux-x64_bin.tar.gz -C /opt/
ENV JAVA_HOME=/opt/graalvm-jdk-21.0.4+8.1
ENV PATH=$PATH:$JAVA_HOME/bin

RUN mkdir -p /app/
WORKDIR /app/

COPY sdwan-node-bootstrap.jar /app

CMD java -jar sdwan-node-bootstrap.jar
```

application.yaml文件配置

```yaml
# 租户code
tenantId: default
# sdwanServer地址
controllerServer: 127.0.0.1:11800
# 开启linux路由转发
netMesh: true
# 开启路由日志
showVRouterLog: true
# 开启ICE发送日志
showICELog: true
# 开启P2P协商日志
showElectionLog: true
# 开启路由规则日志
showRouteRuleLog: true
```

启动docker脚本

```shell
docker run -d \
--name net-thunder \
--privileged \
-v $(pwd)/application.yaml:/app/application.yaml \
net-thunder
```

# 配置路由
新增路由项，节点配置mesh节点

![](/resource/route.png)

# 客户端启动
## Windows、Macos启动
application.yaml文件配置

```yaml
# 租户code
tenantId: default
# api服务地址
httpServer: 127.0.0.1:11805
```



