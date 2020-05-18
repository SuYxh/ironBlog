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
    algolia: {
      start_urls: [
        {
          "url": "https://vp.ironc.cn/"
        }
      ],
      apiKey: '17e8939e8832ec7a99b283d10e1435f5',
      indexName: 'iron'
    },
    nav: nav.zh,
    sidebar: sidebar.zh
  }
}