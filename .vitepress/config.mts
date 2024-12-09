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
        text: '项目简介',
        link: 'doc/index.md'
      },
      {
        text: 'SD-WAN与VPN区别',
        link: 'doc/sdwan-vpn.md'
      },
      {
        text: '技术原理',
        link: 'doc/theory.md'
      },
      {
        text: '技术架构',
        link: 'doc/framework.md'
      },
      {
        text: '部署文档',
        link: 'doc/deploy.md'
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
