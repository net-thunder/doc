# 规则管理

如果内网中部分主机是财务、k8s管理端等禁止访问，可以配置安全规则

* 例：192.168.1.10-192.168.1.100 为公司财务、k8s管理端

- 创建一个分组

![](/resource/add-group.png)

- 将客户端节点加入分组

![](/resource/node-group.png)

- 创建安全策略，将安全策略加入分组

![](/resource/rule-group.png)

- 查看节点详情，配置成功
![](/resource/node-detail.png)