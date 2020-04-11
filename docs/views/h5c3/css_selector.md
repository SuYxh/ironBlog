# CSS 选择器

### CSS中常⽤选择器
(1) 关联选择符（包含选择符）
格式： 选择符1 选择符2 选择符3 ...{样式....}
```css
table a{....} /*table标签⾥的a标签才采⽤此样式*/
h1 p{color:red} /*只有h1标签中的p标签才采⽤此样式*/
```

(2) 组合选择符（选择符组）
格式： 选择符1,选择符2,选择符3 ...{样式....}
```css
h3,h4,h5{color:green;} /*h3、h4和h5都采⽤此样式*/
```

(3) 伪类选(伪元素)择符
格式： 标签名:伪类名{样式....}
```css
a:link {color: #FF0000; text-decoration: none} /* 未访问的链接 */
a:visited {color: #00FF00; text-decoration: none} /* 已访问的链接 */
a:hover {color: #FF00FF; text-decoration: underline} /* ⿏标在链接上 */
a:active {color: #0000FF; text-decoration: underline} /* 激活链接 */
```

### CSS3中的选择器
(1) 关系选择器
```css
div>p 选择所有作为div元素的⼦元素p
div+p 选择紧贴在div元素之后p元素
div~p 选择div元素后⾯的所有兄弟元素p
```
(2) 属性选择器
```css
[attribute]选择具有attribute属性的元素。
[attribute=value]选择具有attribute属性且属性值等于value的元素。
[attribute~=value]选择具有attribute属性且属性值为⼀⽤空格分隔的字词列表，其中⼀个等于
value的元素。
[attribute|=value]选择具有att属性且属性值为以val开头并⽤连接符"-"分隔的字符串的E元素。
[attibute^=value]匹配具有attribute属性、且值以valule开头的E元素
[attribute$=value]匹配具有attribute属性、且值以value结尾的E元素
[attribute*=value]匹配具有attribute属性、且值中含有value的E元素
```

(3) *状态伪类选择器
```css
:link 设置超链接a在未被访问前的样式。
:visited 设置超链接a在其链接地址已被访问过时的样式
:active 设置元素在被⽤户激活（在⿏标点击与释放之间发⽣的事件）时的样式
*:hover 设置元素在其⿏标悬停时的样式
*:focus 设置元素在其获取焦点时的样式
:target 匹配相关URL指向的E元素
:enabled 匹配⽤户界⾯上处于可⽤状态的元素
:disabled 匹配⽤户界⾯上处于禁⽤状态的元素
:checked 匹配⽤户界⾯上处于选中状态的元素
:not(selector)匹配不含有selector选择符的元素
::selection 设置对象被选择时的样式
```

(4)结构性伪类选择器
```css
*:nth-child(n)匹配⽗元素的第n个⼦元素
*:first-child 匹配⽗元素的第⼀个⼦元素
*:last-child 匹配⽗元素的最后⼀个⼦元素

::first-letter设置对象内的第⼀个字符的样式。
::first-line设置对象内的第⼀⾏的样式。
:before设置在对象前（依据对象树的逻辑结构）发⽣的内容。
:after设置在对象后（依据对象树的逻辑结构）发⽣的内容。
:lang(language)匹配使⽤特殊语⾔的E元素。
:element1~element2:
:first-of-type匹配同类型中的第⼀个同级兄弟元素
:last-of-type匹配同类型中的最后⼀个同级兄弟元素
:only-of-type匹配同类型中的唯⼀的⼀个同级兄弟元素
:only-child匹配⽗元素仅有的⼀个⼦元素
:nth-last-child(n)匹配同类型中的倒数第n个同级兄弟元素
:root匹配元素在⽂档的根元素。在HTML中，根元素永远是HTML
:empty匹配没有任何⼦元素（包括text节点）的元素
```

(5)其他伪类选择器
```css
E:not(s) ： {attribute}
匹配所有不匹配简单选择符s的元素E
p:not(.bg) {background-color:#00FF00;}
```