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