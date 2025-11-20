export default {
  title: '个人主页',
  description: '用 Markdown 写文档，只需几分钟',
  themeConfig: {
    siteTitle: 'Blog',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Go 语言',
        items: [
          { text: 'Go-zero', link: '/go/go-zero/' },
          { text: 'Go-Gin', link: '/go/go-gin/' },
        ]
      },
      {
        text: '分布式系统',
        items: [
          { text: 'MIT 6.824', link: '/distributed/mit-6-824/' }
        ]
      }
    ],
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/youmikuang/youmikuang.github.io' }
    ],

    sidebar: {
      '/distributed/mit-6-824/': { base: '/distributed/mit-6-824/', items: sidebarMit() },
    },

    footer: {
      message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2025-present GAOHENG | <a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">京ICP备16016944号-3</a>',
      copyright: 'Copyright © 2025-present GAOHENG'
    }
  }
}

function sidebarMit(){
  return [
    { text: '简介', base: '/distributed/mit-6-824/', link: 'index' },
    {
      text: 'Lab1',
      collapsed: false,
      items: [
        { text: 'Lesson 1', link: '/lab1/lesson1' },
      ]
    }
  ]
}