---
title: offset家族、client家族、scroll家族
date: 2020-04-26
author: yxh
isShowComments: false
---

[[toc]]

## offset家族

## 盒模型介绍

再看offset之前在看一下盒模型长什么样子？

<img src="http://qn.huat.xyz/content/20200426212446.png" style="zoom:50%;" />

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。

- **Border(边框)** - 围绕在内边距和内容外的边框。

- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。

- **Content(内容)** - 盒子的内容，显示文本和图像。

##   offset家族

<img src="http://qn.huat.xyz/content/20200426214312.png" style="zoom: 33%;" />

#### offsetParent-定位父级

offsetParent定义:与当前元素最近的**经过定位**的父级元素

- 元素自身有fixed定位，offsetParent是null 
- 元素自身无fixed定位，offsetParent是body
- 元素自身无定位,父级元素存在定位,offsetParent 是以最近的经过定位的父级元素
- body元素的offsetParent是null

#### offsetWidth 

offsetWidth表示：元素在水平方向上占用的空间大小 ，无单位  只读

计算公式：offsetWidth =  内容+边框+内边距

```
offsetWidth = width + border-left-width + border-right-width + padding-left-width + padding-right-width
```



#### offsetHeight

offsetHeight表示：元素在垂直方向上占用的空间大小，无单位   只读

计算公式：offsetHeight = 内容+边框+内边距

```
offsetHeight =  border-top-width + padding-top + height + padding-bottom + border-bottom-width
```

测试：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>offsetWidth和offsetHeight</title>
		<style type="text/css">
			#box{
				width: 200px;
				height: 200px;
				border: 1px solid #000;
				background-color: red;
				padding-left: 10px;
				padding-right: 20px;
				margin: 10px;
			}
		</style>
	</head>
	<body>
		<div id="box" style="width: 100px;height: 100px;"></div>
		<script type="text/javascript">
			// offsetWidth = width + border-left-width + border-right-width + padding-left-width + padding-right-width
			var box = document.getElementById('box');
			console.log(box.offsetWidth,box.offsetHeight);
			// 只能获取行内的属性
			console.log(box.style.width,box.style.height);
			
			// 因为offsetWidth和offsetHeight 它们是只读
			// box.offsetWidth = 500;
			box.style.width = 500 + 'px';
		</script>
	</body>
</html>

```

>  *如果想修改盒子的大小，请使用obj.style.width进行设置。offsetWidth和offsetHeight是只读属性* 



#### offsetTop

　　offsetTop表示：元素的上外边框至offsetParent元素的上内边框之间的像素距离

#### offsetLeft

　　offsetLeft表示：元素的左外边框至offsetParent元素的左内边框之间的像素距离

测试：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>offsetTop和offsetLeft</title>
		<style type="text/css">
			* {
				padding: 0;
				margin: 0;
			}

			#father {
				width: 400px;
				height: 400px;
				/* position: relative; */
				background-color: red;
				margin: 40px;
				border: 5px solid #000;

			}

			#son {
				width: 200px;
				height: 100px;
				background-color: #0000FF;
				border: 5px solid #000;
				margin-left: 20px;
			}
		</style>
	</head>
	<body>
		<div id="father">
			<div id="son"></div>
		</div>
		<script type="text/javascript">
			// 1.offsetTop  当前元素的上边框到offsetParent元素的上边框的距离
			// 1.offsetLeft  当前元素的左边框到offsetParent元素的左边框的距离

			var son = document.getElementById('son');
			// 如果有父元素定位
			console.log(son.offsetParent);
			console.log(son.offsetTop, son.offsetLeft); //0 20
			// 如果没有父元素定位
			// console.log(son.offsetParent);
			// console.log(son.offsetTop,son.offsetLeft); // 40 60

			// 总结: 相对于父元素(看父元素是否有定位，如果有定位，以父元素为基准，如果没有则往上寻找，如果一直找不到，则以body为准)的上边距和下边距
		</script>
	</body>
</html>
```

## client家族

![](http://qn.huat.xyz/content/20200426221701.png)

#### 客户区大小

 客户区大小client指的是元素内容及其内边距所占据的空间大小

#### clientWidth

 clientHeight属性返回元素节点的客户区高度

```
clientHeight = padding-top + height + padding-bottom
```

#### clientHeight

 clientWidth属性返回元素节点的客户区宽度

```
clientWidth = padding-left + width + padding-right
```

#### clientLeft

clientLeft属性返回左边框的宽度

#### clientTop

clientTop属性返回上边框的宽度

**验证**

```html
<div id="box" style="width: 200px;height: 200px;background-color: red; padding: 20px;border: 1px solid orange;"></div>
<script type="text/javascript">
    var box = document.getElementById('box');
    console.log(box.clientWidth);// 200+ 20+ 20 = 240
    console.log(box.clientHeight); //200 + 20 + 20 = 240
    console.log(box.clientLeft);//1
    console.log(box.clientTop);//1
</script>
```

#### 页面大小

常用document.documentElement的client属性来表示页面大小(不包含滚动条宽度)

```js
document.documentElement.clientWidth;
document.documentElement.clientHeight;
```

#### 注意

-  **所有的client属性都是只读的** 
-  **如果给元素设置了display:none，则客户区client属性都为0** 


## scroll家族

### 滚动宽高

#### **scrollHeight**

　　scrollHeight表示元素的总高度，包括由于溢出而无法展示在网页的不可见部分

#### **scrollWidth**

　　scrollWidth表示元素的总宽度，包括由于溢出而无法展示在网页的不可见部分

**没有滚动条时，scrollHeight与clientHeight属性结果相等，scrollWidth与clientWidth属性结果相等**

```html
<div id="test" style="width: 100px;height: 100px;padding: 10px;margin: 10px;border: 1px solid black;"></div>
<script>
    var test = document.getElementById('test');
    //120 120
    console.log(test.scrollHeight,test.scrollWidth);
    //120 120
    console.log(test.clientHeight,test.clientWidth);
</script>
```

### 滚动长度

#### **scrollTop**

 scrollTop属性表示被隐藏在内容区域上方的像素数。元素未滚动时，scrollTop的值为0，如果元素被垂直滚动了，scrollTop的值大于0，表示元素上方不可见内容的像素高度

#### **scrollLeft**

 scrollLeft属性表示被隐藏在内容区域左侧的像素数。元素未滚动时，scrollLeft的值为0，如果元素被水平滚动了，scrollLeft的值大于0，且表示元素左侧不可见内容的像素宽度

**当滚动条滚动到内容底部时，符合以下等式**

```
scrollHeight = scrollTop + clientHight
```

**与scrollHeight和scrollWidth属性不同的是，scrollLeft和scrollTop是可写的**

## 页面滚动

 理论上，大部分的浏览器通过document.documentElement.scrollTop和scrollLeft可以反映和控制页面的滚动；safari浏览器是通过document.body.scrollTop和scrollLeft来控制的

```html
<body style="height: 2000px;width: 2000px;">
    <div id="test" style="width: 100px;height: 100px;padding: 10px;margin: 10px;border: 1px solid black;overflow:scroll;font-size:20px;line-height:200px;">
        内容<br>内容<br>
    </div>
    <script type="text/javascript">
        // 页面滚动
        window.onscroll = function (){
            console.log(document.documentElement.scrollTop,document.documentElement.scrollLeft);
            console.log(document.body.scrollTop,document.body.scrollLeft);
        }
    </script>
</body>
```

所以，页面的滚动高度兼容写法是

```html
var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop
```

