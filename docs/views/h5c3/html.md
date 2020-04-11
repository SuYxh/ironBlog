# HTML笔记

### ⽂本标签
```html
<cite>作品的标题（引⽤）</cite> 
<sub>下标</sub>  <sup>上标</sup> 
```

- HTML 中有⽤的字符实体【实体名称对⼤⼩写敏感！】
![](http://qn.huat.xyz/content/20200331234240.png)


### 格式化标签
```html
列表：
<ul>...</ul> ⽆序列表
<ol>...</ol> 有序列表 其中type类型值：A a I i 1 start属性表示起始值
<li>...</li> 列表项
<dl>...</dl> ⾃定义列表
<dt>...</dt> ⾃定义列表头
<dd>...</dd> ⾃定义列表内容
```

### 超级链接标签a
```html
a标签的属性：
    target: 表示链接的打开⽅式：
        _blank 新窗⼝
        _parent ⽗窗⼝
        _self 本窗⼝（默认）
        _top 顶级窗⼝
        framename 窗⼝名
        title：⽂字提示属性（详情）
锚点链接： <a href="#a1">跳到a1处</a>
```

### 表格中的标签
![](http://qn.huat.xyz/content/20200331235134.png)

### HTML表单标签
(1)  `<input>` 表单项标签input定义输⼊字段，⽤户可在其中输⼊数据
:::details type属性详情
```html
*type属性:表示表单项的类型:值如下:
 text:单⾏⽂本框
 password:密码输⼊框
 checkbox:多选框 注意要提供value值
 radio:单选框 注意要提供value值
 file:⽂件上传选择框
 button:普通按钮
 submit:提交按钮
 image:图⽚提交按钮
 reset:重置按钮, 还原到开始(第⼀次打开时)的效果
 hidden:主表单隐藏域,要是和表单⼀块提交的信息,但是不需要⽤户修改
 email ⽤于应该包含 e-mail 地址的输⼊域
 url ⽤于应该包含 URL 地址的输⼊域
 number ⽤于应该包含数值的输⼊域。
 max 规定允许的最⼤值
 min 规定允许的最⼩值
 step 规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）
 value 规定默认值
 range ⽤于应该包含⼀定范围内数字值的输⼊域，显示为滑动条
 max 规定允许的最⼤值
 min 规定允许的最⼩值
 step 规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）
 value 规定默认值
 ⽇期选择器 Date pickers
 date - 选取⽇、⽉、年
 month - 选取⽉、年
 week - 选取周和年
 time - 选取时间（⼩时和分钟）
 datetime - 选取时间、⽇、⽉、年（UTC 时间）
 datetime-local - 选取时间、⽇、⽉、年（本地时间）
 search ⽤于搜索域，⽐如站点搜索或 Google 搜索
 color 颜⾊选择
 *name属性: 表单项名,⽤于存储内容值的
 *value属性: 输⼊的值(默认指定值)
 *placeholder: 预期值的简短的提示信息
 size属性: 输⼊框的宽度值
 maxlength属性: 输⼊框的输⼊内容的最⼤⻓度
 readonly属性: 对输⼊框只读属性
 *disabled属性: 禁⽤属性
 *checked属性: 对选择框指定默认选项
 accesskey属性: 指定快捷键(不常⽤) (IE:alt+键 ⽕狐:alt+shift+键)
 tabindex属性: 通过数字指定tab键的切换顺序(不常⽤)

 src和alt是为图⽚按钮设置的

 注意：reset重置按钮是将表单数据恢复到第⼀次打开时的状态，并不是清空
 image图⽚按钮，默认具有提交表单功能。
```
:::

(2) `<select>...</select>` 标签创建下拉列表。
```html
 name属性:定义名称,⽤于存储下拉值的
 size：定义菜单中可⻅项⽬的数⽬，html5不⽀持
 disabled 当该属性为 true 时，会禁⽤该菜单。
 multiple 多选
 <option>... </option> 下拉选择项标签,⽤于嵌⼊到<select>标签中使⽤的;
 *value属性:下拉项的值
 *selected属性:默认下拉指定项. 
```

(3)  `<textarea>...</textarea>` 多⾏的⽂本输⼊区域
```html
 name :定义名称,⽤于存储⽂本区域中的值。
 cols ：规定⽂本区内可⻅的列数。
 rows ：规定⽂本区内可⻅的⾏数。
 disabled： 是否禁⽤
 readonly： 只读
 ...
 默认值是在两个标签之间
```

(4)`<fieldset>` --`fieldset` 元素可将表单内的相关元素分组;

 `<legend></legend>` -- 标签为 `<fieldset>` 、 `<figure>` 以及 `<details>` 元素定义标题
    [示例](http://kkb.huat.xyz/chapter2/fieldset.html)    
```html
 disabled属性：定义 fieldset 是否可⻅。
 form属性： 定义该 fieldset 所属的⼀个或多个表单。
 ```
:::details 示例代码
```html
<form>
    <fieldset>
        <legend>个人信息：</legend>
        姓名：<input type="text" /><br />
        年龄：<input type="text" /><br />
    </fieldset>
    <br /><br />
    <fieldset>
        <legend>健康信息：</legend>
        身高：<input type="text" /><br />
        体重：<input type="text" /><br />
        </fieldse>
</form>
```        
:::

(5) `<optgroup>` html5标签-- `<optgroup>` 标签定义选项组。此元素允许您组合选项  [示例](http://kkb.huat.xyz/chapter2/optgroup.html)    
```html
城市：
<select name="city">
    <optgroup label="河北省">
        <option>石家庄</option>
        <option>保定</option>
        <option>廊坊</option>
    </optgroup>
    <optgroup label="河南省">
        <option>郑州</option>
        <option>安阳</option>
        <option>周口</option>
    </optgroup>
</select>
```

### HTML框架标签
```html
属性：src：规定在 iframe 中显示的⽂档的 URL
 name：规定 iframe 的名称
 height：规定 iframe 的⾼度。
 width：定义 iframe 的宽度。
 frameborder：规定是否显示框架周围的边框。
例如：<iframe src="1.html" name="myframe" width="700" height="500"></iframe>
```







