

### HTML5简介

HTML5是HTML最新的修订版版，2014年10月由W3C完成标准制定。它的设计的目的是为了在移动设备上支持多媒体。并且HTML5简单易学。

![](http://qn.huat.xyz/content/20200506174202.png)

#### 什么是HTML5

HTML5是下一代标准。HTML4.01的上个版本诞生于1999年,HTML5目前为止仍然处于完善之中。然而，大部分现代浏览器已经具备了某些HTML5支持

#### HTML5有趣的新特性

- 用于媒介回放的video和audio元素
- 新的特殊内容元素：比如`article`,`footer`,`header`,`nav`,`section`
- 新的表单控件：比如`calendar`、`date`、`time`、`email`、`url`、`search`
- 2D/3D绘图&效果
- 支持对本地离线存储

#### HTML5的文档声明

`<!DOCTYPE> `声明必须位于 HTML5 文档中的第一行,使用非常简单:

```
<!DOCTYPE html>
```

之前我们所编写的网页其实都是HTML5的文档，为了向后兼容。如果我们编写HTML4的文档声明，那么就可能不会兼容HTML5的新的标签支持。

#### HTML5浏览器支持

最新版本的五个主流浏览器都支持某些HTML5特性，IE9以上浏览器支持HTML5新特性。但是IE8以下的浏览器不支持，IE8以下(包含IE8)以下版本浏览器兼容HTML5的方法，我们必须使用**htmlshiv**垫片包，让其支持HTML5新特性。  

```html
<!--[if lt IE 9]>
<script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
<![endif]-->
```

### HTML5新标签

#### 8个新语义元素和新属性

`header`,`section`,`footer`,`aside`,`nav`,`main`,`article`,`figure`所有的这些元素都是**块级**元素

##### 所有的标签都支持HTML5新属性

| 属性            | 描述                                                         | 浏览器支持性                    |
| --------------- | ------------------------------------------------------------ | ------------------------------- |
| contenteditable | 规定是否可编辑元素的内容                                     | All                             |
| contextmenu     | 指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单   | 只有Firefox浏览器支持           |
| data-*          | 嵌入自定义数据                                               | All                             |
| draggable       | 规定元素是否可拖动。链接和图像默认是可拖动的。经常用它实现拖放操作 | ie8以下浏览器都支持，其它不支持 |
| hidden          | 规定对元素进行隐藏。如果使用该属性，则会隐藏元素，隐藏的元素不会被显示，可以通过js来设置hidden属性为true,使得元素变得可见 | All                             |

##### 1.nav标签

`<nav>` 标签定义导航链接的部分。

并不是所有的 HTML 文档都要使用到``元素。``元素只是作为标注一个导航链接的区域。

##### 2.header标签

`header`标签定义文档的头部区域，它是作为网页的头部介绍内容或者是导航链接栏的容器。在一个文档中，你可以定义多个`header`元素

> 注意：header标签不能被放在`footer`、`address`或者另一个`header`元素内部

##### 3.main标签

标签规定文档的主要内容。一个文档中只有一个main元素。

##### 4.aside标签

`aside`标签定义`article`标签外的内容。aside的内容应该与附近的内容相关

##### 5.section标签

section标签定义了文档的某个区域。比如章节、头部、顶部或者文档的其他区域

##### 6.article标签

定义页面独立的内容。必须是独立于文档的其余部分。

article通常都应用在：

- 论坛帖子
- 博客文档
- 新闻故事
- 评论

##### 7.figure标签

`figure`标签规定独立的流内容(图像、图标、照片、代码等)

`figure`元素的内容应该与主内容有关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响

```html
<figure>
  <img src="flower.jpg" alt="My 女神" width="304" height="228">
  <figcaption>我的女神照</figcaption>
</figure>
```

##### 8.footer标签

定义文档或者文档一部分区域的页脚。该元素会包含文档闯作业的姓名、文档的版权信息、使用条款的链接、联系信息等等。在一个文档中，可以定义多个footer。

#### 其它的新语义化标签

##### mark

高亮文本标签

```html
<p><mark> 元素用于 <mark>高亮</mark> 文本</p>
```

##### progress

用来显示一项任务的完成进度。

属性：

- max 最大值
- value 当前进度

```html
<progress value="70" max="100">70 %</progress>
```

##### address

个人或者某个组织的联系信息等等

```
<address>  <a href="mailto:jim@rock.com">mjj67890@163.com</a><br>  <a href="tel:+13115552368">(311) 555-2368</a></address>
```

以上标签都是我们在网页中常见到的。还有很少可以在网页中见到的HTML5新标签，可以参考这个链接去查阅相关资料：[新标签](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)

#### 新的表单特性

HTML5新增了新的表单元素

- datalist
- keygen
- output

##### datalist

该元素规定输入域的选项列表。规定了form或input应该拥有自动完成功能，都能够用户在自动完成域中开始输入是，浏览器应该在该域中显示填写的选项：

```html
<form action="">
    <input type="text" list="class">
    <datalist id="class">
        <option value="hello world"></option>
        <option value="hello web"></option>
        <option value="hello Go"></option>
        <option value="hello python"></option>
    </datalist>
    <input type='submit'/>
</form>
```

> 注意：input中的list跟datalist中的id必须关联。

##### kegen(了解)

是提供一种验证用户的可靠方法，当提交表达时，会生成两个键，一个是私钥，一个是公钥。

私钥存储于客户端，公钥则被发送给服务器。公钥可用于之后验证用户的客户端证书

```html
<form action="hello.asp" method="get">
用户名: <input type="text" name="usr_name">
加密: <keygen name="security">
<input type="submit">
</form>
```

##### output

用于不同类型的输出，比如计算或脚本输出

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
<input type="range" id="a" value="50">100 +
<input type="number" id="b" value="50">=
<output name="x" for="a b"></output>
</form>
```

#### HTML5新的表单属性

##### form新属性

**autocomplete属性**

此属性规定form或input应该拥有自动完成功能

当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项

```html
<form action="" autocomplete="on">
    用户名: <input type="text" name="usr_name" >
    <input type="submit">
</form>
```

当刷新网页，再次输入内容，查看效果

**novalidate属性**

是一个布尔值，当为true时，表示规定在提交表单时，不应该验证form或input域

如果给input的type改成email。则我们在输入邮箱时通常自动验证。如图所示

![](http://qn.huat.xyz/content/20200506191059.png)

 如果将form设置此属性，则可以直接提交。 

```html
<form action="" autocomplete="on" novalidate="">
    用户名: <input type="text" name="usr_name" >
    email: <input type="email">
    <input type="submit">
</form>
```

##### input新属性

**autofocus属性**

在页面加载时，是否自动获得焦点

```html
用户名: <input type="text" name="usr_name" autofocus>
```

![](http://qn.huat.xyz/content/20200506191153.png)

**formaction属性**

该属性用于描述表单提交的URL地址。会覆盖form元素中的action属性。该属性用于`type='submit'`。

```html
<form action="" autocomplete="on" novalidate="">
    用户名: <input type="text" name="usr_name" autofocus>
    email: <input type="email">
    <input type="submit" value='提交到当前服务器'>
    <input type="submit" formaction="http://www.baidu.com" value='提交到百度服务器'>
</form>
```

**formenctype属性**

该属性描述了表单提交到服务器的数据编码(只对form表单中 method=’post‘表单)

第一个提交按钮已默认编码发送表单数据，第二个提交按钮以 “multipart/form-data” 编码格式发送表单数据:

```html
<form action="" autocomplete="on" novalidate="" method='post'>
    用户名: <input type="text" name="usr_name" autofocus>
    email: <input type="email">
    <input type="submit" value='提交到当前服务器'>
    <input type="submit" formenctype="multipart/form-data" value="以 Multipart/form-data 提交">
</form>
```

**formmethod属性**

formmethod 属性定义了表单提交的方式。

formmethod 属性覆盖了 ``元素的 method 属性。

**注意:** 该属性可以与 type=”submit” 和 type=”image” 配合使用。

```html
<form action="" autocomplete="on" novalidate="" method='get'>
    用户名: <input type="text" name="usr_name" autofocus>
    email: <input type="email">
    <input type="submit" value='get提交'>
    <input type="submit" method= 'post' formenctype="multipart/form-data" value="post提交">
</form>
```

**formnovalidate属性**

novalidate 属性是一个 boolean 属性.

novalidate属性描述了 `` 元素在表单提交时无需被验证。

formnovalidate 属性会覆盖 `` 元素的novalidate属性.

**注意:** formnovalidate 属性与type=”submit一起使用

```html
<form action="">
    E-mail: <input type="email" name="userid">
    <input type="submit" value="提交">
    <input type="submit" formnovalidate value="不验证提交">
</form>
```

**formtarget属性**

formtarget属性指定一个名称或一个关键字来指明表单提交数据接收后的展示。

```html
<form action="">
    用户名: <input type="text">
    密码: <input type="password">
    <input type="submit" formtarget="_blank" value="提交到一个新的页面上"> 
</form>
```

**height和width属性**

定义一个图像提交按钮，使用width和height属性

```html
<input type="image" src="img_submit.gif" width="30" height="30">
```

![](http://qn.huat.xyz/content/20200506191608.png)

**list属性**

规定输入域的datalist。datalist是输入域的选项列表。前面有介绍

**multiple属性**

规定`input`元素可以选择多个值。适用于像input标签：file

```html
上传多个文件:
选择图片:<input type='file' name= 'img' multiple>
```

**pattern属性**

描述了一个正则表达式用于验证`input`元素的值

注意：适用于以下类型`input`标签:text,search,url,tel,email,passworld

```html
<form action="">
    请输入正确的账号: <input type="text" style="width: 200px;" placeholder="由字母,数字,下划线 组成,以字母开头 4-16位" pattern="^[a-zA-Z]\w{3,15}$"
                     title="输入的账号不合法">
    <input type="submit" value="提交" />
</form>
```

![](http://qn.huat.xyz/content/20200506192030.png)

**required属性**

规定必须在提交之前输入框不能为空。

```html
用户名: <input type="text" name="usrname" required>
```

##### 新的input类型

HTML5拥有多个表单的输入类型。这些新特性提供了更好的输入控制和验证

新的输入类型

```html
color : 取色
date : 日期选择器
datetime ：选择UTC时间
datetime-local: 选择一个日期和时间(无时区)
email：提交表单时。自动验证email的值是否有效
month：选择月份
number:输入数值
range：包含一定范围内数字值的输入域
search:搜索域
tel:输入电话号码字段
time:选择一个时间
url:输入包含URL地址
week:选择周和年
```

