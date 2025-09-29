export default {
  themeConfig: {
    siteTitle: 'Homepage',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Golang',
        items: [
          { text: '基础', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      { text: '变更历史', link: 'https://github.com/...' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present GAOHENG | <a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">京ICP备16016944号-3</a>'
    }
  }
}
