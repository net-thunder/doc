# 服务端部署

## 启动服务端

```shell
docker run -d \
--name net-thunder-server \
--restart=always \
--network=host \
# api/web端口
-e server.port=11805 \
# controllerServer外网地址
-e sdwan.httpServer.controllerAddress=127.0.0.1:1800 \
# controllerServer tcp端口
-e sdwan.controllerServer.port=1800 \
# stunServer外网IP
-e sdwan.stunServer.bindHost=127.0.0.1 \
# stunServer udp端口
-e sdwan.stunServer.bindPort=3478 \
# relayServer udp端口
-e sdwan.relayServer.bindPort=2478 \
jaspercloud/net-thunder server
```

## 配置管理端

- 创建租户
![](/resource/add-tenant.png)

- 关闭认证选项
![](/resource/tenant.png)
