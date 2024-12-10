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
