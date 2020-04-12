---
title: Chrom下input的故事
date: 2020-03-24
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - H5C3
---


## 出现问题

chrom浏览器的自动填充表单功能Autofill 在使用时，填充的表单输入框会变成奇葩默认的黄色底色，这对网页整体的观感造成了很大影响，而且处理起来很麻烦。 之所以会出现这种情况是因为 chrom会自动为 input 增加以下样式： 

```css
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
	background-color: rgb(250, 255, 189);
	background-image: none;
	color: rgb(0, 0, 0);
}
```

**这个样式无法被覆盖，加 important 也不行**

## 解决方案

 1.使用 box-shadow 覆盖 

```css
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 1000px white inset; // 背景设为白色
	-webkit-text-fill-color: #fff; // 字体颜色
}
input[type=text]:focus, input[type=password]:focus, textarea:focus {
	-webkit-box-shadow: 0 0 0 1000px white inset; // 获得焦点时背景设为白色
	-webkit-text-fill-color: #fff; // 字体颜色
}
```

这样就把背景改为白色了。不过这种方式的缺陷是只能将背景改为纯色，而不能改成透明。如果需要透明背景的请看如下方法。



 2.使用 animation 动画  

```css
input:-webkit-autofill {
	-webkit-animation: autofill-fix 1s infinite;
	-webkit-text-fill-color: #fff;
}
@-webkit-keyframes autofill-fix {
	from {
		background-color: transparent
	}
	to {
		background-color: transparent
	}
}
```

这样的意思是让颜色永远在 transparent 到 transparent 进行循环动画。

 3.关闭 autocomplete 功能  

```html
<form autocomplete="off"></form>
<!-- OR -->
<input autocomplete="off">
```



## 修改input标签输入样式

- 修改input输入的文字样式和背景色： 

  ```css
  input{
      font-size: 24px;
      color:#5d6494;
      background-color: aqua;
  }
  ```

- 修改input框中占位符的样式： 

  ```css
      input::-webkit-input-placeholder { color:#9195ad; }
      inout::-moz-placeholder { color:#9195ad; } /* firefox 19+ */
      input:-ms-input-placeholder { color:#9195ad; } /* Internet Explorer 10+ */
      input:-moz-placeholder { color:#9195ad; }
  ```

  