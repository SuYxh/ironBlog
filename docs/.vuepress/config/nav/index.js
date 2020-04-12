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
    { text: '组件库', link: '/views/zujian/zujian.html', icon: 'reco-document' },
    { text: '项目展示', link: '/views/project/project.html', icon: 'reco-category'},
    { text: '多人协作', link: '/views/cooperation/', icon: 'reco-account'},
    {
      text: '面试',
      icon: 'reco-coding',
      items: [
        { text: 'HTML', link: '/views/interview/html.html' },
        { text: 'CSS', link: '/views/interview/css.html' }
      ]
    },
    { text: 'Book', link: '/views/book/', icon: 'reco-eye'},
    { text: 'GitHub', link: 'https://github.com/SuYxh/ironBlog', icon: 'reco-github'}
  ]
}