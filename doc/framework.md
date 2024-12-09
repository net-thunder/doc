![画板](/resource/mind3.jpeg)

系统为C/S架构

服务端由SD-WAN Server、STUN Server、Relay Server组成。

**SD-WAN Server**

负责租户管理、虚拟IP的分配、P2P通信协商信令、节点组网。

**STUN Server**

负责客户端获取公网IP

**Relay Server**

负责在P2P打洞失败时，使用中继网络完成组网。



客户端由TUN Device、VRouter、NodeCluster、ICE、SDClient、P2PClient、RelayClient组成。

**TUN Device**

负责TUN设备的启动/停止、配置虚拟IP、接收/发送TUN设备的三层网络IP数据包。

**VRouter**

是一个虚拟路由器，负责处理、转发IP数据包。

**NodeCluster**

管理虚拟网络下各个节点的状态和连接信息。

**ICE**

负责P2P打洞流程的实现。

**SDClient**

负责连接SD-WAN server，完成配置、状态的同步，参与P2P打洞流程协商。

**P2PClient**

负责与STUN Server通信，获取公网IP，参与P2P打洞、发送/接收P2P通信的IP数据包。

**RelayClient**

负责P2P失败的情况下，使用Relay转发IP数据包。



SD-WAN角色分类

![画板](/resource/role.jpeg)

**Controller**

负责IP资源、访问权限的控制

**Mesh**

部署在机房、公司的服务器上作为内部网络打通的网关。

**Node**

运行在Windows、MacOS上的客户端，作为接入网络的终端。

