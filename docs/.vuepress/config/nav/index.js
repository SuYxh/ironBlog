module.exports = {
  'zh': [
    { text: '笔记', 
      icon: 'reco-api',
      items: [
        { 
          text: '基础', items: [
            { text: 'H5C3', link: '/views/h5c3/' },
            { text: 'JS', link: '/views/vjs/' }
          ],
        },
        {
          text: '框架', items: [
            { text: 'vue', link: '/views/vue/' },
            { text: 'react', link: '/views/react/' },
            { text: 'bootstrap', link: '/views/bootstrap/' }
          ]
        },
        {
          text: '小程序', items: [
            { text: '小程序', link: '/views/xcx/' },
            { text: '常见问题', link: '/views/other/question.html' }
          ]
        }
      ]
    },
   
    { text: '技术栈', link: '/categories/Github/', icon: 'reco-blog'},
    { text: '组件库', link: '/views/other/recommend.html', icon: 'reco-document' },
    { text: '项目展示', link: '/views/other/theme-example.html', icon: 'reco-category'},
    { text: '多人协作', link: '/views/cooperation/', icon: 'reco-account'},
    { text: 'GitHub', link: 'https://github.com/', icon: 'reco-github'}
  ]
}