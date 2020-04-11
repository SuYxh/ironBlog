# CSS 笔记
### 字体属性：font
```css
 font: 简写
*font-size: 字体⼤⼩：20px，60%基于⽗对象的百分⽐取值
*font-family： 字体：宋体，Arial
 font-style： normal正常；italic斜体； oblique倾斜的字体
*font-weight： 字体加粗 ：bold
 font-variant: small-caps ⼩型的⼤写字⺟字体
 font-stretch: [了解]⽂字的拉伸是相对于浏览器显示的字体的正常宽度（⼤部分浏览器不⽀持）。 
 ```
 - 可以通过js中escape()编码函数来测试属于什么字体。
 ![](http://qn.huat.xyz/content/20200401110148.png)

 ### ⽂本属性
 ```css
text-indent: ⾸⾏缩进：text-indent:2em;
text-overflow： ⽂本的溢出是否使⽤省略标记（...）。clip|ellipsis（显示省略标记）
*text-align: ⽂本的位置：left center right
text-transform：对象中的⽂本的⼤⼩写：capitalize(⾸字⺟)|uppercase⼤写|lowercase⼩写
*text-decoration: 字体画线：none⽆、underline下画线，line-through贯穿线
text-decoration-line：[了解]⽂本装饰线条的位置（浏览器不兼容）
*text-shadow: ⽂本的⽂字是否有阴影及模糊效果
vertical-align: ⽂本的垂直对⻬⽅式
direction：⽂字流⽅向。ltr | rtl
white-space:nowrap; /* 强制在同⼀⾏内显示所有⽂本*/
*letter-spacing: ⽂字或字⺟的间距
word-spacing：单词间距
*line-height：⾏⾼
*color： 字体颜⾊
```
![](http://qn.huat.xyz/content/20200401110513.png)

### 背景属性：background
```css
 background：简写
*background-color: 背景颜⾊
*background-image: 背景图⽚
*background-repeat：是否重复，如何重复?(平铺)
*background-position：定位
 background-attachment： 是否固定背景，
 scroll:默认值。背景图像是随对象内容滚动
 fixed:背景图像固定
css3的属性:
*background-size: 背景⼤⼩，如 background-size:100px 140px;
多层背景：
 background:url(test1.jpg) no-repeat scroll 10px 20px,
 url(test2.jpg) no-repeat scroll 50px 60px,
 url(test3.jpg) no-repeat scroll 90px 100px;
 background-origin:content-box,content-box,content-box;
 background-clip:padding-box,padding-box,padding-box;
 background-size:50px 60px,50px 60px,50px 60px;
 ```

### Position定位
```css
*position: 定位⽅式：absolute(绝对定位)、fixed(固定)（relative定位参考，可对内部相对
absolute定位）
*z-index: 层叠顺序，值越⼤越在上⽅。
*top: 检索或设置对象与其最近⼀个定位的⽗对象顶部相关的位置
 right: 检索或设置对象与其最近⼀个定位的⽗对象右边相关的位置
 bottom: 检索或设置对象与其最近⼀个定位的⽗对象下边相关的位置
*left: 检索或设置对象与其最近⼀个定位的⽗对象左边相关的位置
```

### Layout布局
```css
*display： 是否及如何显示：none隐藏，block块状显示...
*float: 指出了对象是否及如何浮动:值none | left | right
*clear： 清除浮动：none | left | right | both两侧
 visibility：设置或检索是否显示对象。visible|hidden|collapse。
 与display属性不同，此属性为隐藏的对象保留其占据的物理空间
 clip: 检索或设置对象的可视区域。区域外的部分是透明的。 rect(上-右-下-左)
 如：clip:rect(auto 50px 20px auto);上和左不裁剪，右50，下20.
*overflow: 超出隐藏：hidden，visible：不剪切内容
 overflow-x：内容超过其指定宽度时如何管理内容: visible | hidden | scroll | auto
 overflow-y：内容超过其指定⾼度时如何管理内容
 ```

 ### ⽤户界⾯ User Interface
 ```css
*cursor ⿏标指针采⽤何种系统预定义的光标形状。pointer⼩⼿，url⾃定义
zoom 设置或检索对象的缩放⽐例： normal|5倍|200%百分⽐
box-sizing 设置或检索对象的盒模型组成模式。content-box | border-box
 content-box： padding和border不被包含在定义的width和height之内。
 border-box： padding和border被包含在定义的width和height之内。

resize 设置或检索对象的区域是否允许⽤户缩放，调节元素尺⼨⼤⼩。
 none： 不允许⽤户调整元素⼤⼩。
 both： ⽤户可以调节元素的宽度和⾼度。
 horizontal： ⽤户可以调节元素的宽度
 vertical： ⽤户可以调节元素的⾼度。

outline 复合属性：设置或检索对象外的线条轮廓
outline-width 设置或检索对象外的线条轮廓的宽度
outline-style 设置或检索对象外的线条轮廓的样式
outline-color 设置或检索对象外的线条轮廓的颜⾊
outline-offset 设置或检索对象外的线条轮廓偏移位置的数值
nav-index 设置或检索对象的导航顺序。
nav-up 设置或检索对象的导航⽅向。
nav-right 设置或检索对象的导航⽅向。
 ```

 ### 过渡 Transition
 ```css
transition 检索或设置对象变换时的过渡效果
transition-property 检索或设置对象中的参与过渡的属性
transition-duration 检索或设置对象过渡的持续时间
transition-timing-function 检索或设置对象中过渡的类型
transition-delay 检索或设置对象延迟过渡的时间
 ```

 ### 变换 Transform
 ```css
transform 检索或设置对象的变换
transform-origin 检索或设置对象中的变换所参照的原点
 ```

 ### Media Queries Properties媒体查询
 ```css
 width 定义输出设备中的⻚⾯可⻅区域宽度
height 定义输出设备中的⻚⾯可⻅区域⾼度
device-width 定义输出设备的屏幕可⻅宽度
device-height 定义输出设备的屏幕可⻅⾼度
orientation 定义'height'是否⼤于或等于'width'。值portrait代表是，landscape代表否
aspect-ratio 定义'width'与'height'的⽐率
device-aspect-ratio 定义'device-width'与'device-height'的⽐率。
 如常⻅的显示器⽐率：4/3, 16/9, 16/10
device-aspect-ratio 定义'device-width'与'device-height'的⽐率。
 如常⻅的显示器⽐率：4/3, 16/9, 16/10
color 定义每⼀组输出设备的彩⾊原件个数。如果不是彩⾊设备，则值等于0
color-index 定义在输出设备的彩⾊查询表中的条⽬数。如果没有使⽤彩⾊查询表，则值等于0
monochrome 定义在⼀个单⾊框架缓冲区中每像素包含的单⾊原件个数。如果不是单⾊设备，则值等于0
resolution 定义设备的分辨率。如：96dpi, 300dpi, 118dpcm
scan 定义电视类设备的扫描⼯序
grid ⽤来查询输出设备是否使⽤栅格或点阵。只有1和0才是有效值，1代表是，0代表否
```