(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{297:function(e,s,t){},354:function(e,s,t){"use strict";var n=t(297);t.n(n).a},361:function(e,s,t){"use strict";t.r(s);t(18),t(21),t(46);var n=[{name:"Button 按钮",desc:"常用按钮样式",user:"SuYxh",repo:"ironBlog",feature:"base",scenes:"independent"},{name:"Grid 宫格",desc:"九宫格",user:"SuYxh",repo:"ironBlog",feature:"nav",scenes:"develop"},{name:"输入框",desc:"常用输入框的样式",user:"SuYxh",repo:"ironBlog",feature:"form",scenes:"develop"},{name:"Dialog 弹出框",desc:"弹窗",user:"SuYxh",repo:"ironBlog",feature:"feedback",scenes:"develop"},{name:"Progress 进度条",desc:"进度条默认为蓝色",user:"SuYxh",repo:"ironBlog",feature:"show",scenes:"develop"},{name:"Area 省市区选择",desc:"省市区三级联动选择",user:"SuYxh",repo:"ironBlog",feature:"business",scenes:"develop"},{name:"Popup 弹出层",desc:"弹出层容器，用于展示弹窗、信息提示等内容",user:"SuYxh",repo:"ironBlog",feature:"base",scenes:"independent"},{name:"Layout 布局",desc:"Layout 提供了i-row和i-col两个组件来进行行列布局",user:"SuYxh",repo:"ironBlog",feature:"base",scenes:"independent"}],a={data:function(){return{pluginsData:n,feature:"",scenes:"",currentPage:1,screenOptions:[[{label:"全部",value:""},{label:"基础组件",value:"base"},{label:"导航组件",value:"nav"},{label:"表单组件",value:"form"},{label:"反馈组件",value:"feedback"},{label:"展示组件",value:"show"},{label:"业务组件",value:"business"}],[{label:"全部",value:""},{label:"独立开发",value:"independent"},{label:"团队开发",value:"develop"}]]}},filters:{featureFilter:function(e){switch(e){case"base":return"基础组件";case"nav":return"导航组件";case"form":return"表单组件";case"feedback":return"反馈组件";case"show":return"展示组件";case"business":return"业务组件"}},scenesFilter:function(e){return"independent"===e?"独立开发":"团队开发"}},computed:{formatData:function(){var e=this.pluginsData,s=this.feature,t=this.scenes;return e.filter((function(e){return""===s&&""===t||""!==s&&""===t&&s===e.feature||""===s&&""!==t&&t===e.scenes||s===e.feature&&t===e.scenes?e:void 0}))},currentPageData:function(){var e=10*this.currentPage-10,s=10*this.currentPage;return this.formatData.slice(e,s)}},methods:{getCurrentPage:function(e){this.currentPage=e,setTimeout((function(){window.scrollTo(0,0)}),100)},screenClick:function(e,s){this[e]=s,this.currentPage=1}}},r=(t(354),t(4)),i=Object(r.a)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"plugins-recommend"},[t("div",{staticClass:"screen"},[t("ul",{staticClass:"screen-wrapper"},[e._m(0),e._v(" "),e._l(e.screenOptions[0],(function(s,n){return t("li",{key:n,staticClass:"screen-item",class:e.feature===s.value?"active":"",on:{click:function(t){return e.screenClick("feature",s.value)}}},[e._v("\n        "+e._s(s.label)+"\n      ")])}))],2),e._v(" "),t("ul",{staticClass:"screen-wrapper"},[e._m(1),e._v(" "),e._l(e.screenOptions[1],(function(s,n){return t("li",{key:n,staticClass:"screen-item",class:e.scenes===s.value?"active":"",on:{click:function(t){return e.screenClick("scenes",s.value)}}},[e._v("\n        "+e._s(s.label)+"\n      ")])}))],2)]),e._v(" "),t("hr",{staticStyle:{"margin-bottom":"1.2rem"}}),e._v(" "),t("div",{staticClass:"plugin-list-wrapper"},e._l(e.currentPageData,(function(s,n){return t("div",{key:n,staticClass:"plugin-item"},[t("div",{staticClass:"info"},[t("h3",{staticClass:"title"},[t("span",{staticClass:"name"},[e._v(e._s(s.name))]),e._v(" "),t("GitHubLink",{staticClass:"link",attrs:{repo:s.user+"/"+s.repo}})],1),e._v(" "),t("p",{staticClass:"desc"},[t("span",{staticClass:"tag"},[e._v(e._s(e._f("featureFilter")(s.feature)))]),e._v(" "),t("span",{staticClass:"tag"},[e._v(e._s(e._f("scenesFilter")(s.scenes)))]),t("br"),e._v("\n          "+e._s(s.desc)+"\n        ")])])])})),0),e._v(" "),t("pagation",{staticClass:"pagation",attrs:{total:e.formatData.length,currentPage:e.currentPage},on:{getCurrentPage:e.getCurrentPage}})],1)}),[function(){var e=this.$createElement,s=this._self._c||e;return s("li",[s("h4",[this._v("插件分类：")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("li",[s("h4",[this._v("开发模式：")])])}],!1,null,"770322ca",null);s.default=i.exports}}]);