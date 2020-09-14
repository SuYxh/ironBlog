(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{440:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"业务场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务场景"}},[t._v("#")]),t._v(" 业务场景")]),t._v(" "),s("p",[t._v("在一些网站的两侧会有些横幅样式的广告信息")]),t._v(" "),s("p",[t._v("演示： "),s("a",{attrs:{href:"https://kkb.huat.xyz/Animation/%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%A8%AA%E5%B9%85%E6%95%88%E6%9E%9C/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kkb.huat.xyz/Animation/%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%A8%AA%E5%B9%85%E6%95%88%E6%9E%9C/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("源码： "),s("a",{attrs:{href:"https://github.com/SuYxh/Web-Study-Record/tree/master/%E6%A1%88%E4%BE%8B/2-%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%A8%AA%E5%B9%85%E6%95%88%E6%9E%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/SuYxh/Web-Study-Record/tree/master/%E6%A1%88%E4%BE%8B/2-%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%A8%AA%E5%B9%85%E6%95%88%E6%9E%9C"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"实现方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方法"}},[t._v("#")]),t._v(" 实现方法")]),t._v(" "),s("h4",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://qn.huat.xyz/content/20200427123557.png",alt:""}})]),t._v(" "),s("p",[t._v("当前的黑色盒子就是侧边栏的横幅，则  横幅的Top = 页面滚动的高度 +  横幅的偏移量  ，即")]),t._v(" "),s("p",[t._v("Top = document.documentElement.scrollTop +  aside.offsetTop   【注意兼容性】")]),t._v(" "),s("h4",{attrs:{id:"页面滚动高度的计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面滚动高度的计算"}},[t._v("#")]),t._v(" 页面滚动高度的计算")]),t._v(" "),s("p",[t._v("var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;")]),t._v(" "),s("blockquote",[s("p",[t._v("注意兼容性！")])]),t._v(" "),s("h4",{attrs:{id:"横幅的偏移量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#横幅的偏移量"}},[t._v("#")]),t._v(" 横幅的偏移量")]),t._v(" "),s("p",[t._v("横幅的偏移量 =  aside.offsetTop")]),t._v(" "),s("h2",{attrs:{id:"核心代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心代码"}},[t._v("#")]),t._v(" 核心代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.获取标签")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aside "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aside'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.获取广告的偏移量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aside_top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aside"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onscroll")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.获取页面滚动的高度")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" docScrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aside"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" docScrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" aside_top "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);