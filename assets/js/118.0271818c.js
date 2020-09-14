(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{470:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#定义"}},[t._v("定义")])]),a("li",[a("a",{attrs:{href:"#匹配规则"}},[t._v("匹配规则")])])])]),a("p"),t._v(" "),a("blockquote",[a("p",[t._v("正则表达式在人们的印象中可能是一堆无法理解的字符，但就是这些符号却实现了字符串的高效操作。通常的情况是，问题本身并不复杂，但没有正则表达式就成了大问题。javascript中的正则表达式作为相当重要的知识，本文将介绍正则表达式的基础语法")])]),t._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("正则表达式(Regular Expression)是一门简单语言的语法规范，是强大、便捷、高效的文本处理工具，它应用在一些方法中，对字符串中的信息实现查找、替换和提取操作")]),t._v(" "),a("p",[t._v("javascript中的正则表达式用RegExp对象表示，有两种写法：一种是字面量写法；另一种是构造函数写法")]),t._v(" "),a("h4",{attrs:{id:"字面量写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字面量写法"}},[t._v("#")]),t._v(" 字面量写法")]),t._v(" "),a("p",[t._v("正则表达式字面量定义为包含在一对斜杠(/)之间的字符，并且可以设置3个标志")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" expression "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("正则表达式的匹配模式支持下列3个标志：")]),t._v(" "),a("ul",[a("li",[t._v("g:表示全局(global)模式，即模式将被应用于所有字符串，而并非在发现第一个匹配项时立即停止")]),t._v(" "),a("li",[t._v("i:表示不区分大小写(case-insensitive)模式，即在确定匹配项时忽略模式与字符串的大小写")]),t._v(" "),a("li",[t._v("m:表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配字符串所有'at'的实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/at/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//test()方法返回一个布尔值表示是否可以找到匹配项")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ata'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aba'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])])]),a("h4",{attrs:{id:"regexp构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp构造函数"}},[t._v("#")]),t._v(" RegExp构造函数")]),t._v(" "),a("p",[t._v("和普通的内置对象一样，RegExp正则表达式对象也支持new RegExp()构造函数的形式")]),t._v(" "),a("p",[t._v("RegExp构造函数接收两个参数：要匹配的字符串模式(pattern)和可选的标志字符串(flags)，标志字符串和字面量的三个标志含义相同：’g’、’i’、’m’。")]),t._v(" "),a("p",[t._v("RegExp构造函数的两个参数都是字符串。且使用字面量形式定义的任何表达式都可使用构造函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配字符串所有'at'的实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/at/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'at'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则"}},[t._v("#")]),t._v(" 匹配规则")]),t._v(" "),a("h4",{attrs:{id:"_1-元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-元字符"}},[t._v("#")]),t._v(" 1.元字符")]),t._v(" "),a("h5",{attrs:{id:"匹配任意字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配任意字符"}},[t._v("#")]),t._v(" 匹配任意字符("),a("code",[t._v(".")]),t._v(")")]),t._v(" "),a("p",[t._v("点字符("),a("code",[t._v(".")]),t._v(")匹配除回车("),a("code",[t._v("\\r")]),t._v(")、("),a("code",[t._v("\\n")]),t._v(")、行分隔符（"),a("code",[t._v("\\u2028")]),t._v("）和段分隔符（"),a("code",[t._v("\\u2029")]),t._v("）以外的所有字符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428152611.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"位置字符-和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置字符-和"}},[t._v("#")]),t._v(" 位置字符("),a("code",[t._v("^和$")]),t._v(")")]),t._v(" "),a("p",[t._v("位置字符用来提示字符所处的位置，主要有两个字符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("^")]),t._v("表示字符串的开始位置")]),t._v(" "),a("li",[a("code",[t._v("$")]),t._v("表示字符串的结束位置")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//hello必须出现在开始的位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//hello必须出现在结束位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("world$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从开始位置到结束位置只有hello")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("hello$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("hello$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])])]),a("h5",{attrs:{id:"选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择符"}},[t._v("#")]),t._v(" 选择符("),a("code",[t._v("|")]),t._v(")")]),t._v(" "),a("p",[t._v("竖线符号（"),a("code",[t._v("|")]),t._v("）在正则表达式中表示“或关系”（OR)。即"),a("code",[t._v("you|me")]),t._v("表示匹配"),a("code",[t._v("you")]),t._v("或"),a("code",[t._v("me")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//正则表达式指定必须匹配11或22")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("yy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),a("p",[t._v("多个选择符可以联合使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配cat、dog、pig之中的一个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/cat|dog|pig/g")]),t._v("\n")])])]),a("h5",{attrs:{id:"匹配数字和字母以及非字母-w和-w"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配数字和字母以及非字母-w和-w"}},[t._v("#")]),t._v(" 匹配数字和字母以及非字母("),a("code",[t._v("\\w和\\W")]),t._v(")")]),t._v(" "),a("p",[a("code",[t._v("\\w")]),t._v("匹配数字和字母")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428162650.png",alt:""}})]),t._v(" "),a("p",[t._v("注意：下划线"),a("code",[t._v("\\w")]),t._v("也匹配到")]),t._v(" "),a("p",[a("code",[t._v("\\W")]),t._v("匹配除数字和字母以及下划线以外的任意字符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428162739.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"匹配数字和非数字-d和-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配数字和非数字-d和-d"}},[t._v("#")]),t._v(" 匹配数字和非数字("),a("code",[t._v("\\d")]),t._v("和"),a("code",[t._v("\\D")]),t._v(")")]),t._v(" "),a("p",[a("code",[t._v("\\d")]),t._v("只匹配数字，0~9之间的数字")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428162808.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("\\D")]),t._v("匹配除数字以外的任意字符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428162840.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"匹配空白字符-s和-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配空白字符-s和-s"}},[t._v("#")]),t._v(" 匹配空白字符"),a("code",[t._v("\\s和\\S")])]),t._v(" "),a("p",[a("code",[t._v("\\s")]),t._v("匹配"),a("strong",[t._v("空白")]),t._v("字符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428163026.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("\\S")]),t._v("匹配"),a("strong",[t._v("非空白")]),t._v("字符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428163100.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"字符集合-a-za-zo-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符集合-a-za-zo-9"}},[t._v("#")]),t._v(" 字符集合"),a("code",[t._v("[a-zA-ZO-9]")])]),t._v(" "),a("p",[a("code",[t._v("[a-zA-Z0-9]")]),t._v("匹配[]里面的任意字符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428163231.png",alt:""}})]),t._v(" "),a("p",[t._v("如果想匹配任意一个中文怎么办？")]),t._v(" "),a("p",[t._v("中文的范围区间为"),a("code",[t._v("[\\u4e00-\\u9fa5]")]),t._v(" ，其实就是[一-龥(yu)]")]),t._v(" "),a("p",[t._v("unicode转中文站点：http://www.bejson.com/convert/unicode_chinese/")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170140.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("[^]")]),t._v("匹配所有不在这范围内的字符")]),t._v(" "),a("p",[t._v("匹配了所有不在[一-龥]的之间的字符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170229.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"重复一次或多次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复一次或多次"}},[t._v("#")]),t._v(" 重复一次或多次("),a("code",[t._v("+")]),t._v(")")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170405.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"匹配重复0个或多个字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配重复0个或多个字符"}},[t._v("#")]),t._v(" 匹配重复0个或多个字符("),a("code",[t._v("*")]),t._v(")")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170532.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"匹配重复0个或一个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配重复0个或一个"}},[t._v("#")]),t._v(" 匹配重复0个或一个("),a("code",[t._v("?")]),t._v(")")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170709.png",alt:""}})]),t._v(" "),a("p",[t._v("如果都想匹配怎么办？")]),t._v(" "),a("p",[t._v("答案：给y后面加个？")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170727.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"指定重复范围-min-max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定重复范围-min-max"}},[t._v("#")]),t._v(" 指定重复范围({min,max})")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170758.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"分组匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组匹配"}},[t._v("#")]),t._v(" 分组匹配()")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.huat.xyz/content/20200428170916.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/w{3}\\.(baidu|goole|mi|apeland)\\.(com|cn)?/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//baidu")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//com")]),t._v("\n")])])]),a("p",[a("strong",[t._v("分组匹配但不捕获(")]),a("code",[t._v("?:")]),a("strong",[t._v(")")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/w{3}\\.(baidu|goole|mi|apeland)\\.(?:com|cn)?/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//baidu")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"正则表达式常用案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式常用案例"}},[t._v("#")]),t._v(" 正则表达式常用案例")]),t._v(" "),a("h5",{attrs:{id:"_1-检查用户账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查用户账号"}},[t._v("#")]),t._v(" 1.检查用户账号")]),t._v(" "),a("p",[t._v("验证规则: 由字母,数字,下划线 组成,以字母开头 4-16位")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-zA-Z]\\w{3,15}$/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'正确'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h111'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"_2-匹配手机号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-匹配手机号"}},[t._v("#")]),t._v(" 2.匹配手机号")]),t._v(" "),a("p",[t._v("验证规则: 11位,以1开头 第二位为3或5或7或8")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkMobild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^1[3|5|7|8]\\d{9}/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'正确'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkMobild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1467654321213'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h5",{attrs:{id:"_3-匹配电话号码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-匹配电话号码"}},[t._v("#")]),t._v(" 3.匹配电话号码")]),t._v(" "),a("p",[t._v("验证规则: 区号 + 号码   - 可有可无 区号可以为3位也可以为4位 号码可以为7位也可以为8位\n如： 01088888888 010-8888888 0536-7777777")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPhone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^0\\d{2,3}-?\\d{7,8}$/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'匹配正确'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'匹配错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPhone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0536-7777777'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"_4-匹配身份证号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-匹配身份证号"}},[t._v("#")]),t._v(" 4.匹配身份证号")]),t._v(" "),a("p",[t._v("18位或者15位,15位全是数字 18位 前17都是数字,最后一位可能是数字或者字符x或X")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("card")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'身份证输入合法'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'身份证输入不合法'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'76499819909876543'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"_5-匹配邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-匹配邮箱"}},[t._v("#")]),t._v(" 5.匹配邮箱")]),t._v(" "),a("p",[t._v("第一部分@第二部分.com|cn|net")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-zA-Z0-9-._]+[@][a-zA-Z0-9-._]+\\.(com|cn|net)$/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'输入邮箱格式正确'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'输入邮箱格式错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1ehjdjh@qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"_6-匹配url地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-匹配url地址"}},[t._v("#")]),t._v(" 6.匹配URL地址")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[a-zA-z]+://[^\\s]*\n")])])]),a("h3",{attrs:{id:"常用工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[t._v("#")]),t._v(" 常用工具")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("在线测试工具    https://regexr.com/\nunicode转中文站点：http://www.bejson.com/convert/unicode_chinese/\n在线工具    https://tool.oschina.net/regex/#\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);