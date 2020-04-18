---
title: CSS常用代码
date: 2020-03-28
lang: 'zh-CN'
sidebar: 'auto'
---

[[toc]]

## 1、垂直水平居中

- **绝对定位方式且已知宽高**

```css

position: absolute;
top: 50%;
left: 50%;
margin-top: -3em;
margin-left: -7em;
width: 14em;
height: 6em;
```

- **绝对定位 ＋ 未知宽高 ＋ translate **

```css
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
//需要补充浏览器前缀
```

- **flex 轻松搞定水平垂直居中(未知宽高) **

```css
display: flex;
align-items: center;
justify-content: center;
```



## 2、文本末尾添加省略号

当文本的内容超出容器的宽度的时候，我们希望在其默认添加省略号以达到提示用户内容省略显示的效果。 

**宽度固定，适合单行显示...**

 ```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
 ```

**宽度不固定，适合多行以及移动端显示 **

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
```



## **3、顶角贴纸效果** 

有时候我们会有这样的需求，在一个列表展示页面，有一些列表项是新添加的、或者热度比较高的，就会要求在其上面添加一个贴纸效果的小条就像 hexo 默认博客的 fork me on github 那个效果一样。

![](http://qn.huat.xyz/content/20200329211220.png)

```html
<style type="text/css">
			/* 外层容器几本设置  */
			.wrap {
				width: 160px;
				height: 160px;
				overflow: hidden;
				position: relative;
				background-color: #f3f3f3;
			}

			.ribbon {
				background-color: #a00;
				overflow: hidden;
				white-space: nowrap;
				position: absolute;
				/* shadom */
				-webkit-box-shadow: 0 0 10px #888;
				-moz-box-shadow: 0 0 10px #888;
				box-shadow: 0 0 10px #888;
				/* rotate */
				-webkit-transform: rotate(-45deg);
				-moz-transform: rotate(-45deg);
				-ms-transform: rotate(-45deg);
				-o-transform: rotate(-45deg);
				transform: rotate(-45deg);
				/* position */
				left: -50px;
				top: 40px;
			}

			.ribbon a {
				border: 1px solid #faa;
				color: #fff;
				display: block;
				font: bold 81.25% "Helvetica Neue", Helvetica, Arial, sans-serif;
				margin: 1px 0;
				padding: 10px 50px;
				text-align: center;
				text-decoration: none;
				/* shadow */
				text-shadow: 0 0 5px #444;
			}
		</style>
	</head>
	<body>
		<div class="wrap">
			<div class="ribbon">
				<a href="#">Fork me on GitHub</a>
			</div>
		</div>
	</body>
```



## **4、input 占位符** 

当我们给部分 input 类型的设置 placeholder 属性的时候，有的时候需要修改其默认的样式。

```html
	<style type="text/css">	
		input::-webkit-input-placeholder {
		  color: green;
		  background-color: pink;
		  font-size: 14px;
		}
		input::-moz-input-placeholder {
		  color: green;
		  background-color: #f9f7f7;
		  font-size: 14px;
		}
		input::-ms-input-placeholder {
		  color: green;
		  background-color: #f9f7f7;
		  font-size: 14px;
		}
	</style>
</head>
<body>
	姓名：<input type="text" id="" value="" placeholder="name"/>
</body>
```

## **5、移动端可点击元素去处默认边框** 

在移动端浏览器上，当你点击一个链接或者通过 Javascript 定义的可点击元素的时候，会出现蓝色边框，说实话，这是很恶心的，怎么去掉呢?

` -webkit-tap-highlight-color: rgba(255, 255, 255, 0); `

## **6、首字下沉** 

要实现类似 word 中首字下沉的效果可以使用以下代码

```css
element:first-letter {
  float: left;
  color: green;
  font-size: 30px;
}
```

## **7、鼠标手型**

一般情况下，我们希望在以下元素身上添加鼠标手型

- a
- submit
- input[type="iamge"]
- input[type="button"]
- button
- label
- select
```css
a[href],
input[type="submit"],
input[type="image"],
input[type="button"],
label[for],
select,
button {
  cursor: pointer;
}
```

## **8、屏蔽 Webkit 移动浏览器中元素高亮效果** 

在访问移动网站时，你会发现，在选中的元素周围会出现一些灰色的框框，使用以下代码屏蔽这种样式

```css
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
```

## 9、**取消超链接元素的默认文字装饰** 

另外 del、ins 标签的中划线、下划线还是挺好的，就不去掉

```css
a {
  text-decoration: none;
}

ol,
ul {
  /*开发中 UI 设计的列表都是和原生的样式差太多，所以直接给取消 ol，ul 默认列表样式*/
  list-style: none;
}

button,
input[type="submit"],
input[type="button"] {
  /*鼠标经过是「小手」形状表示可点击*/
  cursor: pointer;
}

input::-moz-focus-inner {
  /*取消火狐浏览器部分版本 input 聚焦时默认的「padding、border」*/
  padding: 0;
  border: 0;
}
```
