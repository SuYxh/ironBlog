---
title: CSS实现三角形
date: 2020-03-19
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - H5C3
---


![](http://qn.huat.xyz/content/20200401163525.png)

## 新建一个div

```
<div class="triangle"></div>
```

##  为盒子添加样式

1.向上

```css
.triangle{
	width:0;
    height:0;
	border-right:50px solid transparent;
	border-left:50px solid transparent;
	border-bottom:50px solid red;
}
```

2.向下

 ```css
.triangle{
	width:0;
	height:0;
	border-right:50px solid transparent;
	border-left:50px solid transparent;
	border-top:50px solid red;
}
 ```

3.向左

```css
.triangle{
    width:0;
    height:0;
    border-top:50px solid transparent;
    border-bottom:50px solid transparent;
    border-right:50px solid red;
}
```

4.向右

```css
.triangle{
    width:0;
    height:0;
    border-top:50px solid transparent;
    border-bottom:50px solid transparent;
    border-left:50px solid red;
}
```


实际上就是边框的使用，可以拓展制作七巧板！ [CSS实现三角形](https://suyxh.github.io/iron/show/CSS%E5%AE%9E%E7%8E%B0%E4%B8%89%E8%A7%92%E5%BD%A2.html)

