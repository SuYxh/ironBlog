---
title: JavaScript杂记1
date: 2020-03-14
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
---


## 一、**window.onload()** 

### 1、为什么要使用window.onload()?

因为 JavaScript 中的函数方法需要在 HTML 文档渲染完成后才可以使用，如果没有渲染完成，此时的 DOM 树是不完整的，这样在调用一些 JavaScript 代码时就可能报出"undefined"错误。 

### 2、**window.onload()** 

 **window.onload()** 方法用于在网页加载完毕后立刻执行的操作，即当 HTML 文档加载完毕后，立刻执行某个方法。 

```javascript
window.onload=function(){
    Func1();
    Func2();
    Func3();
    .....
}
```

 在页面加载完成后依次执行 Func1、Func2、Func3。 



### 3、window.onload 与 jQuery ready() 区别

```javascript
window.onload = function () {};    // JavaScript 
$(document).ready(function () {}); // jQuery
```

![](http://qn.huat.xyz/content/20200403105225.png)





## 二、document.querySelector

### 1、定义和用法

querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。

**注意：** querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。

### 2、语法

`document.querySelector(CSS selectors)`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<h2> h2 元素</h2>
<h3> h3 元素</h3>
<script>
document.querySelector("h2, h3").style.backgroundColor = "red";
</script>
</body>
</html>
```



## 三、onblur 事件

### 1、定义和用法

**onblur 事件会在对象失去焦点时发生。**

Onblur 经常用于Javascript验证代码，一般用于表单输入框。

**提示：**onblur 相反事件为 [onfocus](https://www.runoob.com/jsref/event-onfocus.html) 事件 。

### 2、语法

HTML 中:

`<element onblur="SomeJavaScriptCode">`

JavaScript 中:

`object.onblur=function(){SomeJavaScriptCode};`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script>
function myFunction(){
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
</script>
</head>
<body>
输入你的名字: <input type="text" id="fname" onblur="myFunction()">
<p>当你离开输入框, 函数将被触发将输入文字转换成大写。</p>
</body>
</html>
```





## 四、onfocus事件 。

### 1、定义和用法

**onfocus 事件在对象获得焦点时发生。**

Onfocus 通常用于 `<input>`, `<select>`, 和`<a>`.

**提示：** onfocus 事件的相反事件为 [onblur](https://www.runoob.com/jsref/event-onblur.html) 事件。

### 2、语法

HTML 中:

`<element onfocus="SomeJavaScriptCode">`

JavaScript 中:

`object.onfocus=function(){SomeJavaScriptCode}`

JavaScript 中, 使用 addEventListener() 方法:

`object.addEventListener("focus", myScript);`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<head>
<script>
function myFunction(x){
	x.style.background="yellow";
}
</script>
</head>
<body>
输入你的名字: <input type="text" onfocus="myFunction(this)">
<p>当输入框获取焦点时，修改背景色（background-color属性） 将被触发。</p>
</body>
</html>
```



## 五、JSON.parse()



#### 1、定义和用法

JSON 通常用于与服务端交换数据。在接收服务器数据时一般是字符串。可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

#### 2、语法

```
JSON.parse(text[, reviver])
```

**参数说明：**

- **text:**必需， 一个有效的 JSON 字符串。
- **reviver:** 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

