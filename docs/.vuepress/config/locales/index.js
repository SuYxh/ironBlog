const nav = require('../nav/')
const sidebar = require('../sidebar/')
module.exports = {
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  '/': {
    // 多语言下拉菜单的标题
    selectText: 'language',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    // 编辑链接文字
    editLinkText: '在 GitHub 上编辑此页',
    // Service Worker 的配置
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    // 当前 locale 的 algolia docsearch 选项
    algolia: {
      start_urls: [
        {
          "url": "https://vp.ironc.cn/"
        }
      ],
      apiKey: '17e8939e8832ec7a99b283d10e1435f5',
      indexName: 'iron'
      // inputSelector: '### REPLACE ME ####',
      // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      // debug: false // Set debug to true if you want to inspect the dropdown
    },
    nav: nav.zh,
    sidebar: sidebar.zh
  }
}