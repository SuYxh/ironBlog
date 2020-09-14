---
title: css的两种盒模型
date: 2020-09-17
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - H5C3
tags:
 - 盒模型
---


> （1）有两种： IE 盒子模型、W3C 盒子模型；
> （2）盒模型： 内容(content)、填充(padding)、 边框(border)、边界(margin)；
> （3）区 别： IE的content部分把 padding 和 border 计算了进去；

> margin(外边距) - 清除边框外的区域，外边距是透明的。
> border(边框) - 围绕在内边距和内容外的边框。
> padding(内边距) - 清除内容周围的区域，内边距是透明的。
> content(内容) - 盒子的内容，显示文本和图像。

### 1. W3C的标准盒模型

```
在标准的盒子模型中，width指 content 部分的宽度
```

 ![](http://qn.huat.xyz/content/20200914145247.jpg)

### 2. IE的盒模型

```
在IE盒子模型中，width表示 content + padding + border 这三个部分的宽度
```

![](http://qn.huat.xyz/content/20200914145301.jpg)

 

### 3. box-sizing的使用

如果想要切换盒模型也很简单，这里需要借助css3的box-sizing属性

> box-sizing: content-box 是W3C盒子模型
> box-sizing: border-box 是IE盒子模型

box-sizing的默认属性是content-box