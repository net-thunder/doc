import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "netThunder",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],
    sidebar: [
      {
        text: '简介',
        link: 'doc/intro.md'
      },
      {
        text: 'SD-WAN与VPN区别',
        link: 'doc/sdwan-vpn.md'
      },
      {
        text: '原理',
        link: 'doc/theory.md'
      },
      {
        text: '架构',
        link: 'doc/framework.md'
      },
      {
        text: '部署文档',
        items: [
          {
            text: '部署环境',
            link: 'doc/deploy/index.md'
          },
          {
            text: '服务端部署',
            link: 'doc/deploy/server.md'
          },
          {
            text: 'Mesh网关部署',
            link: 'doc/deploy/mesh.md'
          },
          {
            text: '配置路由',
            link: 'doc/deploy/route.md'
          },
          {
            text: '配置安全规则',
            link: 'doc/deploy/rule.md'
          },
          {
            text: '客户端部署',
            link: 'doc/deploy/client.md'
          }
        ]
      },
      {
        text: '使用场景说明',
        link: 'doc/scene.md'
      },
      {
        text: '代码结构',
        link: 'doc/code.md'
      }
    ],
    socialLinks: [
    ]
  }
})
