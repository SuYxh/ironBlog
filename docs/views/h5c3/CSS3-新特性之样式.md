### CSS3简介

CSS3是层叠样式表语言的最新版本。它带来许多期待已久的新特性，另外CSS3带来的新特性被分为”模块“。例如新的选择器、圆角、阴影、渐变、过渡、动画。以及新的布局方式

### 新特性之样式

#### css3之背景

##### 1.background-image

通过此属性添加背景图片。不同的背景图像和图像用逗号隔开，第一个设置的永远显示在最顶端

```css
body{
background-image: url(images/hello2.jpeg),url(images/timg.jpeg);
background-repeat: no-repeat,repeat;
background-position: center top,center top;  
}
```

 可以给不同的图片设置多个不同的属性 

```css
body{
    background: url(images/hello2.jpeg) no-repeat center top,url(images/timg.jpeg) repeat center top;
}
```

##### 2.background-size

该属性指定背景图像的大小。CSS3之前，背景图像大小由图像的实际大小决定。

CSS3中可以指定背景图片的大小，指定的大小是父元素的宽度和高度的百分比的大小

语法：

```css
background-size: cover|contain;
```

- cover 将背景图片按照原来的缩放比，将整个容器铺满
- contain 将背景图片按照原来的缩放比，完整的显示到容器中

背景图像完全填充内容区域

```css
div{
    width: 400px;
    height: 400px;
    background: url(images/hello2.jpeg) no-repeat;
    background-size: 100% 100%;
}
```

 例子:设置大的背景图，并且随着拉伸浏览器背景图跟着等比例缩放 

```css
body{
    background-image: url(images/hello.jpeg);
    background-size: cover;
}
```

##### 3.background-origin

该属性指定背景图像的位置区域

`content-box`,`padding-box`和`border-box`区域内可以放置背景图像。

```css
div{
    width: 400px;
    height: 400px;
    padding: 20px;
    border: 10px solid #ff0000;
    background: url(images/hello2.jpeg) no-repeat;
    background-size: 100% 100%;
    background-origin: content-box;
}
```

 效果显示： 

![](http://qn.huat.xyz/content/20200506205332.png)

##### 4.background-clip

指定绘图区域的背景

```css
div{
    width: 400px;
    height: 400px;
    padding: 20px;
    border: 10px solid #ff0000;
    background-clip: content-box;
    background-color: yellow;
}
```

 效果显示：会发现只有内容区域有背景色。 

![](http://qn.huat.xyz/content/20200506205432.png)

#### css3之边框

##### box-shadow 阴影

为元素添加阴影

语法

```css
box-shodow: 水平阴影的位置 垂直阴影的位置 模糊程度 阴影大小 颜色 内阴影|外阴影
```

```css
.box{
    width: 200px;
    height: 200px;
    background-color: red;
    margin: 100px auto;
    box-shadow: 20px 30px 50px 20px #008B8B;
}
```

 效果显示: 

![](http://qn.huat.xyz/content/20200506205719.png)

##### border-radius 圆角

给元素添加圆角的边框

```css
border-radius: 10px 20px 30px 40px;
```

每个半径的四个值的顺序是：左上角，右上角，右下角，左下角

效果：

![](http://qn.huat.xyz/content/20200506205741.png)

##### border-image 边框图片

```css
border-image-source:url('');//用于指定要勇于绘制边框的图像的位置
border-image-slice:10; //图像边界向内偏移
border-image-repeat: repeat(重复)|round(铺满)
```

```css
/* 边框图片设置 */
border-image-source: url(images/border-img.jpeg);
/* 图像边界向内偏移 */
border-image-slice: 20;
/* 铺满 */
border-image-repeat: round;
/* 重复 */
border-image-repeat: repeat;
```

效果：

![](http://qn.huat.xyz/content/20200506205836.png)

#### css3之文本效果

##### text-shadow 文本阴影

语法：

```css
text-shadow: h-shadow v-shadow blur(可选) color(可选);
```

```css
h1{
    text-shadow: 2px 2px #ff0000;
}
```

##### text-overflow 如何显示溢出内容

语法:

```css
text-overflow:clip(修剪文本)|ellipsis(超出显示省略符号)
```

如何显示如下效果：

![](http://qn.huat.xyz/content/20200506210040.png)

 首先先让**文本不换行**，然后**超出部分隐藏**掉，最后再**设置省略号** 

```css
p{
    width: 100px;
    height: 40px;
    line-height: 40px;
    border: 1px solid red;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```