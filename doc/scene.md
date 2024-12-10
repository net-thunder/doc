# 使用场景说明

# 子公司A前端与子公司B后端联调
![画板](/resource/scene1.jpeg)

子公司A和子公司B本地启动node，根据controller分配的虚拟IP可以相互通信。

# 机房A同步数据到机房B
![画板](/resource/scene2.jpeg)

机房A和机房B部署mesh，本地启动node后可以同时访问两个机房的数据库。

# 接入K8S网络开发
![画板](/resource/scene3.jpeg)

k8s中部署mesh，本地启动node可以直接访问k8s中的服务。



