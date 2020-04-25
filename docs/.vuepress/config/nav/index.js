module.exports = {
  'zh': [
    { text: '笔记', 
      icon: 'reco-api',
      items: [
        { 
          text: '基础', items: [
            { text: 'H5C3', link: '/views/h5c3/' },
            { text: 'JS', link: '/views/vjs/' },
            { text: 'ES6', link: '/views/es6/' }
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
            { text: 'WEUI', link: '/views/xcx/weui/index.md' }
          ]
        },
        {
          text: '工程', items: [
            { text: 'Git', link: '/views/project/git/index.md' },
            { text: 'webpack', link: '/views/project/p_webpack/index.md' }
          ]
        }
      ]
    },
   
    { text: '博客', link: '/categories/业务场景/', icon: 'reco-blog'},
    { text: '团队规范', link: '/views/cooperation/', icon: 'reco-account'},
    {
      text: '项目展示',
      icon: 'reco-category',
      items: [
        { text: '项目', link: '/views/project/project.html' },
        { text: '组件库', link: '/views/project/zujian.html' }
      ]
    },
    {
      text: '面试',
      icon: 'reco-coding',
      items: [
        { text: 'HTML', link: '/views/interview/html.html' },
        { text: 'CSS', link: '/views/interview/css.html' },
        { text: 'Vue', link: '/views/interview/vue.html' }
      ]
    },
    { text: 'Book', link: '/views/book/', icon: 'reco-eye'},
    { text: 'GitHub', link: 'https://github.com/SuYxh/ironBlog', icon: 'reco-github'}
  ]
}