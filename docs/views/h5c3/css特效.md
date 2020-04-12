---
title: 常见CSS特效
date: 2020-03-14
lang: 'zh-CN'
sidebar: 'auto'
---

## 常用CSS属性

[transform属性:应用于元素的2D或3D转换](https://www.w3cschool.cn/cssref/css3-pr-transform.html)

[transition属性:是一个简写属性，用于设置四个过渡属性](https://www.w3cschool.cn/cssref/pr-transition.html)

## 图片放大效果

先设置图片的过度属性`transition: all 0.5s;`,所有属性均发生改变；在设置需要如何发生改变`transform: scale(1.1);`,2D缩放变化；设置一下 hover ，当鼠标移入的时候即可发生变化。

[效果演示](https://kkb.huat.xyz/css_tx/01-%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7%E6%95%88%E6%9E%9C.html)

## 京东多图效果

先设置图片的过度属性`transition: margin-left 0.4s;`；在设置需要如何发生改变？`margin-left: -10px;`,2D缩放变化；设置一下 hover ，当鼠标移入的时候即可发生变化。

[效果演示](https://kkb.huat.xyz/css_tx/02-%E4%BA%AC%E4%B8%9C%E5%A4%9A%E5%9B%BE%E6%95%88%E6%9E%9C.html)

## 两面翻转的图片

**单页图片的翻转**：先设置图片的过度属性`transition: all 1s;`,所有属性均发生改变；在设置需要如何发生改变` transform: rotateY(180deg);`,沿着 Y 轴的 3D 旋转180度，到此时简单的反转效果已经完成；设置一下 hover ，当鼠标移入的时候即可发生变化。

**两个图片翻转**：当第一个图片翻转下去后，应该让他不再可见，使用属性 ` backface-visibility:定义当元素不面向屏幕时是否可见。` ,代码：` backface-visibility: hidden;` ; 最开始的时候第一张图片应该在最上方，使用代码` z-index: 1; `使其保持在最上方，因此需要在第一个图片上新增如下代码即可实 **现两面翻转的图片**。   [效果演示](https://kkb.huat.xyz/css_tx/03-两面翻转的图片.html)

```css
z-index: 1;                       /* 红色K 显示在上方 */
backface-visibility: hidden;    /* backface-visibility 属性定义当元素不面向屏幕时是否可见 */
```

## 6张图片共旋转一周

先设置图片的过度属性` transition: all 0.6s; `；在设置需要如何发生改变？在这里6张图片每张旋转60度，得有一个旋转点，通过[transform-origin](https://www.w3cschool.cn/cssref/css3-pr-transform-origin.html)属性来设置，代码：`transform-origin: top right;`然后在对每个图片进行分别设置，其中选择器使用`*:nth-child(n)匹配⽗元素的第n个⼦元素`，在给每个图片设置属性` transform: rotate(60deg); /* 定义 2D 旋转 */`, 且每个图片旋转角度递增 **60度**；最后设置一下hover,部分代码如下。  [效果演示](https://kkb.huat.xyz/css_tx/04-%E6%97%8B%E8%BD%AC%E7%9A%84%E6%A5%9A%E4%B9%94%E4%BC%A0.html)

```css
transition: all 0.6s;       
transform-origin: top right;
div:hover img:nth-child(1){transform: rotate(60deg);}
```

## 会翻转的文字

先设置文字（例如：前端全栈）和基本样式；在设置其翻转起来的文字（前端全栈）和样式；设置其翻转起来的文字内容，使用属性 `content: attr(data-zhi);` 其中`content`后面也可以直接跟字符串，这里使用的是使用`attr()`获取自定义属性的值；使用`:before`和`:after`来插入翻转起来的文字和其影子；注意使用 `z-index`来调整图层的顺序！ [效果演示](https://kkb.huat.xyz/css_tx/06-%E4%BC%9A%E7%BF%BB%E8%BD%AC%E7%9A%84%E6%96%87%E5%AD%97.html)


::: details  代码展示

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>会翻转的文字</title>
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;
			}

			body {
				font: 80px "微软雅黑";
				padding: 200px;
			}

			.zhi {
				margin: 20px;
				color: #369;
				position: relative;
			}

			.zhi:before,
			.zhi:after {      /*  .zhi 之前、之后插入内容的内容的公共样式。 */
				/* 获取插入的内容，使用的了 自定义属性  attr(attribute)	设置Content作为选择器的属性之一。 */
				content: attr(data-zhi);
				position: absolute;
				top: 0;
				left: 0;
				transform-origin: left top;
				-webkit-transform-origin: left top;
				-o-transform-origin: left top;
				-ms-transform-origin: left top;
				transition: all 0.3s ease 0s;

			}

			.zhi:before {          /* .zhi 之前插入内容的内容的独有样式  表面看到的*/
				/* color:#fff; */
				color: #000000;
				z-index: 3;
				transform: rotateX(0deg) rotateY(-15deg) rotateZ(0deg);
			}

			.zhi:after {        /* .zhi 之后插入内容的内容的独有样式，即 后面的影子*/  
				color: rgba(0, 0, 0, 0.2);
				transform: scale(1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
				z-index: 2;
			}

			.zhi:hover:before {        /* 当鼠标移入的时候改变 .zhi 之前插入内容的内容的独有样式 */
				/* color:#fafafa; */
				color: #FF0000;
				transform: rotateX(0deg) rotateY(-40deg) rotateZ(0deg) skew(0deg, 1deg);
			}

			.zhi:hover:after {      /* 当鼠标移入的时候改变 .zhi 之后插入内容的内容的独有样式 */
				transform: scale(1.1, 1) rotateX(0deg) rotateY(-40deg) rotateZ(0deg) skew(0deg, 20deg);
			}
		</style>

	</head>
	<body>
		<span class="zhi" data-zhi="前努">前</span>
		<span class="zhi" data-zhi="端力">端</span>
		<span class="zhi" data-zhi="全学">全</span>
		<span class="zhi" data-zhi="栈习">栈</span>
	</body>
</html>

```

:::

