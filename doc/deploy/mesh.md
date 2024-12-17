# Mesh网关部署

## 启动mesh端
```shell
docker run -d \
--privileged \
--name net-thunder-mesh \
--restart=always \
--mac-address 42:ac:bd:00:00:00 \
-e tenantId=default \
# controllerServer外网地址
-e controllerServer=127.0.0.1:1800 \
-e netMesh=true \
-e showVRouterLog=true \
-e showICELog=true \
-e showElectionLog=true \
-e showRouteRuleLog=true \
jaspercloud/net-thunder mesh
```

- 查看节点管理端
![](/resource/click-node.png)

- 网关部署成功，网关节点上线
![](/resource/node-manage.png)