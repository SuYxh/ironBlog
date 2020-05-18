module.exports = {
  // type: 'blog',
  type: 'HomePageOne',
  // logo: '/icon_iron.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'iron',
  authorAvatar: '/head.png',
  // 备案号
  record: '鄂ICP备18031450号-2',
  // 项目开始时间
  startYear: '2018',
  algolia: {
    apiKey: '17e8939e8832ec7a99b283d10e1435f5',
    indexName: 'iron'
  },
  // valine 设置
  valineConfig: {
    appId: 'K43mcpid3oR2UioYzX0lA1BJ-gzGzoHsz',
    appKey: 'BeCyyStM96TKWCWBt6F9gItO',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    recordIP: true
  },

  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'SuYxh/ironBlog',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  // docsBranch: 'gh-pages',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'light'
}