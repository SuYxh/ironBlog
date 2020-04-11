---
title: FAQ
date: 2020-03-17
sidebar: 'auto'
---

::: tip
学习过程中遇到的一些常见问题，在这里记录！
:::

## 1. 有一个`<div>`标签，然后，里面有一张`<img>`图片，代码如下，会发现图片下面有一段空白空间？？？

**问题代码:**
```html
<div style="background-color:#e5edff;"><img src="mm1.jpg"></div>
```
**效果展示**

![mark](http://qn.huat.xyz/win/20200321/OwPt5XoWIkkI.png)
![mark](http://qn.huat.xyz/win/20200321/rvPEryYF2dFE.png)


**问题原因**

```css
就是`vertical-align`和`line-height`背地里造成的
```

**解决方案：**
`vertical-align`和`line-height`我们随便搞定一个就可以了。

::: details 1. 让`vertical-align`失效
图片默认是inline水平的，而vertical-align对块状水平的元素无感。因此，我们只要让图片display水平为block就可以了，我们可以直接设置display或者浮动、绝对定位等（如果布局允许）。例如：`img { display: block; }`, 下方的空隙就会不见！
![mark](http://qn.huat.xyz/win/20200321/sDvy1vVJ5C1e.png)
:::

::: details 2. 使用其他`vertical-align`值
告别`baseline`, 取用其他属性值，比方说`bottom`/`middle`/`top`都是可以的。
:::

::: details 3.直接修改`line-height`值
`div { line-height: 5px; }`
:::

::: details 4. `line-height`为相对单位，`font-size`间接控制
如果line-height是相对单位，例如line-height:1.6或者line-height:160%之类，也可以使用font-size间接控制，比方说来个狠的，font-size设为大鸡蛋0, 本质上还是改变line-height值. `div { font-size: 0; }`
:::

**参考文档** ：[CSS深入理解vertical-align和line-height的基友关系](https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)