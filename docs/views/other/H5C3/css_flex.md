---
title: CSS3弹性布局
date: 2020-03-14
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - H5C3
---

![](http://qn.huat.xyz/content/20200329180829.png)

## 一、CSS3弹性盒子

弹性盒子是CSS3的一种新布局模式。

CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。

## 二、浏览器支持

表格中的数字表示支持该属性的第一个浏览器的版本号。紧跟在数字后面的 -webkit- 或 -moz- 为指定浏览器的前缀。
![](http://qn.huat.xyz/content/20200401111931.png)

## 三、CSS3 弹性盒子内容

弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。

弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。

弹性容器内包含了一个或多个弹性子元素。

注意：弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局。

弹性子元素通常在弹性盒子内一行显示。默认情况每个容器只有一行。

以下元素展示了弹性子元素在一行内显示，从左到右:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>FLEX</title>
    <style>
        .flex-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 1200px;
            height: 640px;
            background-color: lightsteelblue;
        }
        .flex-container .flex-item {
            width: 320px;
            height: 240px;
            margin: 10px;
            background-color:lightsalmon;
        }
</style>
</head>
<body>
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>
</html>
```

![](http://qn.huat.xyz/content/20200329181125.png)

## 四、CSS3 弹性盒子常用属性

|      属性       |                             描述                             |
| :-------------: | :----------------------------------------------------------: |
| flex-direction  |                 指定弹性容器中子元素排列方式                 |
|    flex-wrap    |           设置弹性盒子的子元素超出父容器时是否换行           |
|    flex-flow    |              flex-direction 和 flex-wrap 的简写              |
|   align-items   |        设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式        |
|  align-content  | 修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐 |
| justify-content |        设置弹性盒子元素在主轴（横轴）方向上的对齐方式        |

**1. flex-direction 属性**

决定项目的方向。

注意：如果元素不是弹性盒对象的元素，则 flex-direction 属性不起作用。

` .flex-container { flex-direction: row | row-reverse | column | column-reverse; } `

![](http://qn.huat.xyz/content/20200329181346.png)

**属性值**

|       值       |                   描述                   |
| :------------: | :--------------------------------------: |
|      row       | 默认值。元素将水平显示，正如一个行一样。 |
|  row-reverse   |     与 row 相同，但是以相反的顺序。      |
|     column     |     元素将垂直显示，正如一个列一样。     |
| column-reverse |    与 column 相同，但是以相反的顺序。    |

**2. flex-wrap 属性**

flex-wrap 属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。

|      值      |                        描述                        |
| :----------: | :------------------------------------------------: |
|    nowrap    |          默认值。规定元素不拆行或不拆列。          |
|     wrap     |          规定元素在必要的时候拆行或拆列。          |
| wrap-reverse | 规定元素在必要的时候拆行或拆列，但是以相反的顺序。 |

```
.flex-container { flex-wrap: nowrap | wrap | wrap-reverse; }
```

可以取三个值：

（1） nowrap (默认)：不换行。

![](http://qn.huat.xyz/content/20200329181441.png)

 （2）wrap：换行，第一行在上方。 

![](http://qn.huat.xyz/content/20200329181524.png)

 （3）wrap-reverse：换行，第一行在下方。 

![](http://qn.huat.xyz/content/20200329181608.png)

**3. flex-flow 属性**

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```
.flex-container { flex-flow: <flex-direction> <flex-wrap> }
```

**4. align-items属性**

align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。

|     值     |              描述              |
| :--------: | :----------------------------: |
|  stretch   | 默认值。项目被拉伸以适应容器。 |
|   center   |      项目位于容器的中心。      |
| flex-start |      项目位于容器的开头。      |
|  flex-end  |      项目位于容器的结尾。      |
|  baseline  |     项目位于容器的基线上。     |

![](http://qn.huat.xyz/content/20200329182036.png)

**5. justify-content属性**

justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。

|      值       |                       描述                       |
| :-----------: | :----------------------------------------------: |
|  flex-start   |           默认值。项目位于容器的开头。           |
|   flex-end    |               项目位于容器的结尾。               |
|    center     |               项目位于容器的中心。               |
| space-between |        项目位于各行之间留有空白的容器内。        |
| space-around  | 项目位于各行之前、之间、之后都留有空白的容器内。 |

![](http://qn.huat.xyz/content/20200329182141.png)

## 五、弹性子元素属性

![](http://qn.huat.xyz/content/20200401112315.png)

**1.order属性**

```css
.flex-container .flex-item { order: <integer>; }
```

`<integer>`：用整数值来定义排列顺序，数值小的排在前面。可以为负值，默认为0。
![](http://qn.huat.xyz/content/20200329182216.png)

**2. flex-grow属性**

```css
.flex-container .flex-item { flex-grow: <integer>; }
```

`<integer>`：一个数字，规定项目将相对于其他灵活的项目进行扩展的量。默认值是 0。

![](http://qn.huat.xyz/content/20200329182245.png)

**3. flex-shrink属性**

```css
.flex-container .flex-item { flex-shrink: <integer>; }
```

`<integer>`：一个数字，规定项目将相对于其他灵活的项目进行收缩的量。默认值是 1。

![](http://qn.huat.xyz/content/20200329182327.png)

**4. flex-basis属性**

```css
.flex-container .flex-item { flex-basis: <integer> | auto; }
```

`<integer>`：一个长度单位或者一个百分比，规定元素的初始长度。

auto：默认值。长度等于元素的长度。如果该项目未指定长度，则长度将根据内容决定。

**5. flex属性**

flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。

flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。

```css
.flex-container .flex-item {
flex:flex-grow flex-shrink flex-basis|auto|initial|inherit;
}
```

|     值      |                             描述                             |
| :---------: | :----------------------------------------------------------: |
|  flex-grow  |       一个数字，规定项目将相对于其他元素进行扩展的量。       |
| flex-shrink |       一个数字，规定项目将相对于其他元素进行收缩的量。       |
| flex-basis  | 项目的长度。合法值："auto"、"inherit" 或一个后跟 "%"、"px"、"em" 或任何其他长度单位的数字。 |
|    auto     |                      与 1 1 auto 相同。                      |
|    none     |                      与 0 0 auto 相同。                      |
|   initial   |           设置该属性为它的默认值，即为 0 1 auto。            |
|   inherit   |                     从父元素继承该属性。                     |

**6. align-self属性**

```css
.flex-container .flex-item {
align-self: auto|stretch|center|flex-start|flex-end|baseline|initial|inherit;
}

```

|     值     |                             描述                             |
| :--------: | :----------------------------------------------------------: |
|    auto    | 默认值。元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。 |
|  stretch   |                    元素被拉伸以适应容器。                    |
|   center   |                     元素位于容器的中心。                     |
| flex-start |                     元素位于容器的开头。                     |
|  flex-end  |                     元素位于容器的结尾。                     |
|  baseline  |                    元素位于容器的基线上。                    |
|  initial   |                   设置该属性为它的默认值。                   |
|  inherit   |                     从父元素继承该属性。                     |

![](http://qn.huat.xyz/content/20200329182611.png)

