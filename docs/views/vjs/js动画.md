---
title: JavaScript动画
date: 2020-04-26
author: yxh
isShowComments: false
---

[[toc]]

## 匀速运动

 运动是javascript动画的一个基本操作。通过css3属性的transition和animation可以实现运动。

#### 简单运动

>  让一个元素在页面中运动起来很简单，设置定时器，改变定位元素的left和top值即可
>
>  box.style.left = box.offsetLeft + 10 + 'px';

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>简单运动</title>
		<style>
			*{
				padding: 0;
				margin: 0;
			}
			button{
				width: 80px;
				height: 40px;
			}
			#box{
				width: 200px;
				height: 200px;
				background-color: pink;
				position: absolute;
				top: 50px;
			}
		</style>
	</head>
	<body>
		
		<!-- 如何让物体运动起来？ -->
		<button id="btn">动画</button>
		<div id="box"></div>
		<script type="text/javascript">
			
			// 简单的动画存在的问题: 1.处理边界  2.定时器的管理
			
			// 1.获取事件源
			var btn = document.getElementById('btn');
			var box = document.getElementById('box');
			var timer = null;
			// 2.给按钮绑定事件
			btn.onclick = function (){
				// 先关闭定时器 再开启定时器 防止定时器累加 导致物体加快
				clearInterval(timer);
				// 3.让物体运动起来(定时器)
				timer = setInterval(function (){
					if(box.offsetLeft === 500){
						clearInterval(timer);
					}else{
						box.style.left = box.offsetLeft + 10 + 'px';
					}
					
				},30);
				
			}
		</script>
	</body>
</html>

```

#### 定时器管理

两种定时器管理方式

1. 开启新定时器前，消除旧定时器

2. 当定时器未停止时，不允许开启新定时器

   注意：由于定时器开启时，其返回值是一个不为0的整数，所以可以通过判断其返回值，来确定是否使用return语句

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            #box {
                position: relative;
                width: 200px;
                height: 200px;
                background-color: red;
                left: -200px;
            }
            #box span {
                position: absolute;
                width: 40px;
                height: 60px;
                background-color: #000;
                color: #fff;
                right: -40px;
                top: 50%;
                margin-top: -30px;
                line-height: 60px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div id="box">
            <span>拉开</span>
        </div>
        <script>
            window.onload = function() {
                var oDiv = document.getElementById('box');
                var timer = null;
                oDiv.onmouseover = function() {
                    //1.先清除定时器，再开启定时器
                   // clearInterval(timer);
                    //2.当定时器未停止时，不允许开启新定时器
                    if(timer) return;
                    timer = setInterval(function() {
                        if (oDiv.offsetLeft == 500) {
                            clearInterval(timer);
                        } else {
                            oDiv.style.left = oDiv.offsetLeft + 5 + 'px';
                        }
                    }, 30)
                }
            }
        </script>
    </body>
</html>
```

#### 分享效果

> 做一个类似于”分享到“侧边栏的效果
>
> 鼠标移入移出时候改变宽度：obj.style.left = obj.offsetLeft + speed + 'px';

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>04 侧边栏动画效果</title>
    <style type="text/css">
    * {
        padding: 0;
        margin: 0;
    }

    #box {
        width: 200px;
        height: 200px;
        background-color: red;
        position: relative;
        left: -200px;
    }

    #box span {
        position: absolute;
        width: 40px;
        height: 60px;
        color: #fff;
        background-color: #000000;
        right: -40px;
        top: 50%;
        margin-top: -30px;
        line-height: 60px;
        text-align: center;
    }
    </style>
</head>

<body>
    <div id="box">
        <span>拉开</span>
    </div>
    <script type="text/javascript">
    window.onload = function() {
        var box = document.getElementById('box');
        var timer = null,
            speed = 0;
        box.onmouseover = function() {
            startAnimation(this, 0);

        }
        box.onmouseout = function() {
            startAnimation(this, -200);

        }
        
        function startAnimation(obj, end) {
            // 先关闭定时器
            clearInterval(timer);
            speed = end > obj.offsetLeft ? 5 : -5;
            timer = setInterval(function() {
                if (obj.offsetLeft === end) {
                    clearInterval(timer);
                    return;
                }
                obj.style.left = obj.offsetLeft + speed + 'px';
            }, 30);
        }
    }
    </script>
</body>

</html>
```

## 缓动运动

什么是缓动运动呢？ 举个例子，比如火车在进站的时候，速度是由快到慢的过程，而火车在离站的时候是由慢到快的过程。

缓动动画公式： 速度 = (结束值-起始值) * 缓动系数。

>  speed = (end - box.offsetLeft)
>
>  **//如果速度是大于0，说明是往右走，向上取整。速度小于0，说明往左走，向下取整** 
>
>  speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
>
> obj.style.left = obj.offsetLeft + speed + 'px';

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            #box {
                position: relative;
                width: 200px;
                height: 200px;
                background-color: red;
                left: -200px;
            }
            #box span {
                position: absolute;
                width: 40px;
                height: 60px;
                background-color: #000;
                color: #fff;
                right: -40px;
                top: 50%;
                margin-top: -30px;
                line-height: 60px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div id="box">
            <span>拉开</span>
        </div>
        <script>
            window.onload = function() {
                //获取标签
                var oDiv = document.getElementById('box');
                //定时器变量设置全局，后面要处理
                var timer = null;
                oDiv.onmouseover = function() {
                    slowMove(this,0);
                }
               //
                oDiv.onmouseout= function() {
                    slowMove(this,-200);
                }
                function slowMove(obj,target){
                    clearInterval(timer);
                    timer = setInterval(function() {
                        speed = (target-obj.offsetLeft) / 20;
                        //如果速度是大于0，说明是往右走，向上取整。速度小于0，说明往左走，向下取整
                        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                        if (obj.offsetLeft == target) {
                            clearInterval(timer);
                        } else {
                            obj.style.left = obj.offsetLeft + speed + 'px';
                        }
                    }, 30)
                }
            }
        </script>
    </body>
</html>
```

## 透明度动画

 透明度是一个比较特殊的样式，因为IE8浏览器不支持opacity,只能通过滤镜的方式写成

`filter：alpha(opacity=透明值)`

> - 为什么要定义 alpha ？？
>
>   与物体运动不同的是，透明度的变化时改变的opacity值的变化。css属性中没有像offsetAlpha类似的值。所以我们在全局定义一个初始的alpha = 30的变量，来控制当前透明度数值的变化。 
>
> - 当 不设置边界的时候 会发生什么？

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style type="text/css">
            #box{
                width: 200px;
                height: 200px;
                background-color: red; 
                opacity: 0.3;
                filter: alpha(opactity:30);
            }
        </style>
    </head>
    <body>
        <div id="box"></div>
        <script type="text/javascript">
            window.onload = function (){
                var box = document.getElementById('box');
                box.onmouseover = function (){
                    opacityAnimation(box,100);
                }
                box.onmouseout = function (){
                    opacityAnimation(box,30);
                }
                var alpha = 30,timer = null,speed = 0;
                function opacityAnimation(ele,target){
                    clearInterval(timer);
                    timer = setInterval(function(){
                        // 如果目标值大于当前变化的值,表示为真值,透明度在增大,反之亦然
                        speed = target > alpha ? 10 : -10;
                        // 当前变化的值等于了目标值,清除定时器
                        if(alpha == target){
                            clearInterval(timer);                        
                        }else{
                            // 否则,透明度变化
                            alpha+=speed;
                            ele.style.filter = 'alpha(opactity:'+alpha+')';
                            ele.style.opacity = alpha / 100;
                        }
                    },30)
                }
            }
        </script>
    </body>
</html>
```

## 多物体动画

 如果在页面中有多个元素利用运动函数进行运动。由于定时器返回值在不同元素上时不同的返回值。所以要将全局的定时器挂载到当前的元素之上。

#### Bug版

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            ul{
                list-style: none;
            }
            ul li{
                margin: 20px 0;
                width: 300px;
                height: 150px;
                background-color: yellowgreen;
            }
        </style>
        <script type="text/javascript">
            window.onload = function() {
                var allLis = document.getElementsByTagName('li');
                for (var i = 0; i < allLis.length; i++) {
                    allLis[i].onmouseover = function() {
                        /**
                         * 第一个参数为当前的对象，第二个参数为目标值
                         */
                        startMove(this, 600);
                    }
                    allLis[i].onmouseout = function() {
                        startMove(this, 300);
                    }
                }
                var speed = 0,
                    timer = null;
                function startMove(ele, target) {
                    clearInterval(timer);
                    timer = setInterval(function() {
                        // 1.求出步长
                        speed = (target - ele.offsetWidth) * 0.5;
                        // 2. 判断speed的正负
                        speed = target > ele.offsetWidth ? Math.ceil(speed) : Math.floor(speed);
                        if (ele.offsetWidth == target) {
                            clearInterval(ele.timer);
                        } else {
                            // 3.运动起来
                            ele.style.width = ele.offsetWidth + speed + 'px';
                        }
                    }, 30)
                }
            }
        </script>
    </head>
    <body>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </body>
</html>
```

#### 解决方案

> 原因？
>
> 当我们悬浮的比较快的时候，都会开启定时器。那么`cleartInterVal()`方法清除的定时器，它就很难知道清除的是哪个定时器了。导致出现了意想不到的效果。为了解决这一问题，我们应该**将定时器的变量挂载到当前元素之上** 

```js
window.onload = function() {
    var allLis = document.getElementsByTagName('li');
    for (var i = 0; i < allLis.length; i++) {
        allLis[i].onmouseover = function() {
            /**
            * 第一个参数为当前的对象，第二个参数为目标值
            */
            startMove(this, 600);
        }
        allLis[i].onmouseout = function() {
            startMove(this, 300);
        }
    }
    var speed = 0;
    function startMove(ele, target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function() {
            // 1.求出步长
            speed = (target - ele.offsetWidth) * 0.5;
            // 2. 判断speed的正负
            speed = target > ele.offsetWidth ? Math.ceil(speed) : Math.floor(speed);
            if (speed == target) {
                clearInterval(ele.timer);
            } else {
                // 3.运动起来
                ele.style.width = ele.offsetWidth + speed + 'px';
            }
        }, 30)
    }
}
```

## 获取样式

在多物体运动中，还是存在很多的问题的。比如如果我们给li标签设置`border:4px solid #000;` 不妨看一下效果。(我们希望悬浮时width:600px;离开的时候width:300px)。但是bug由此产生了。这是因为offsetWidth的原因。那接下来我们研究一下它。

![]( http://app.huat.xyz/yundong009.gif )



###  研究offsetWidth的坑

看个例子：

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style type="text/css">
            #box{
                width: 200px;
                height: 200px;
                background-color: red;
                border: 1px solid #000;
            }
        </style>
    </head>
    <body>
        <div id="box"></div>
        <script type="text/javascript">
            window.onload = function (){
                var oBox = document.getElementById('box');
                move(oBox);
            }
            function move(obj){
                setInterval(function (){
                    obj.style.width = obj.offsetWidth-1 + 'px';
                },30)
            }
        </script>
    </body>
</html>
```

  **看一下效果**

![]( http://app.huat.xyz/quyangshi.gif )



我是希望让盒子的宽度逐渐减小。但是，一旦运行以上代码，你会发现匪夷所思的事情，天呢~这到底是为什么？ ？？？？？？？？？？？？？？？？？？

>  尝试一下`alert(obj.offsetWidth);`。会发现得到的结果是202。那`obj.style.width = obj.offsetWidth - 1 + 'px';`得到的width为201px。是要比之前一开始css样式中的width增大了1px。这是因为`offsetWidth = border-left-width + padding-left + width + padding-right + border-right-width;`所以我们不能通过offsetWidth来获取当前盒子的宽度。 
>
> **也就是说offsetWidth不仅获取了 width 还加上 border 的值**

###  解决方案

1.给当前盒子设置行内样式的宽度，并通过obj.style.width来获取当前盒子的宽度。但是我们以后所以的盒子都不可能全写在行内啊。所以不推荐使用。

2.封装自己的获取属性样式函数

```js
/**
 * @param {Object} obj 哪个对象
 * @param {Object} attr 什么属性
*/
function getStyle(obj,attr){
    if(obj.currentStyle){
        // 针对IE浏览器
        return obj.currentStyle[attr];
    }else{
        // 针对于Firefox浏览器
        return getComputedStyle(obj,null)[attr];
    }
}
```

## 多值

 多物体运动同时改变的是同一个属性，如果我想既可以改变一个元素的宽度，又可以改变一个盒子的高度呢？如何去做？

 上述代码中，在最后修改元素的width时，可以有如下书写方式`ele.style['width'] = cur + speed + 'px';`这样的话，就可以将属性当做形参放到封装的函数中。

```js
function startMove(ele,attr,target) {
    //1.先关闭定时器 再开启定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        // 1.1 获取样式属性
        var cur = parseInt(getStyle(ele,attr));
        // 1.2.求出步长
        speed = (target - cur) * 0.5;
        // 1.3 判断speed的正负
        speed = target > cur ? Math.ceil(speed) : Math.floor(speed);
        //1.4 临界值判断
        if (cur == target) {
            clearInterval(ele.timer);
        } else {
            // 1.5 运动起来
            ele.style[attr] = cur + speed + 'px';
        }
    }, 30)
}
```

 外部在调用

```js
var allLis = document.getElementsByTagName('li');
allLis[0].onmouseover = function (){
    startMove(this,'width',600);
}
allLis[0].onmouseout = function (){
    startMove(this,'width',300);
}
allLis[1].onmouseover = function (){
    startMove(this,'height',400);
}
allLis[1].onmouseout = function (){
    startMove(this,'height',150);
}
```



### 透明度样式处理

 在getStyle函数中不可以获取什么属性呢？比如看个bug:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            ul{
                list-style: none;
            }
            ul li{
                margin: 20px 0;
                width: 300px;
                height: 150px;
                background-color: yellowgreen;
                border: 4px solid #000;
                opacity: 0.3;
                filter: alpha(opacity: 30);
            }
        </style>
        <script type="text/javascript">
            window.onload = function() {
                var allLis = document.getElementsByTagName('li');
                allLis[0].onmouseover = function (){
                    startMove(this,'opacity',100);
                }
                allLis[0].onmouseout = function (){
                    startMove(this,'opacity',30);
                }
                var speed = 0;
                function startMove(ele, attr,target) {
                    //1.先关闭定时器 再开启定时器
                    clearInterval(ele.timer);
                    ele.timer = setInterval(function() {
                        // 1.1 获取样式属性
                        var cur = parseInt(getStyle(ele,attr));
                        // 1.2.求出步长
                        speed = (target - cur) * 0.5;
                        // 1.3 判断speed的正负
                        speed = target > cur ? Math.ceil(speed) : Math.floor(speed);
                        //1.4 临界值判断
                        if (cur == target) {
                            clearInterval(ele.timer);
                        } else {
                            // 1.5 运动起来
                            ele.style[attr] = cur + speed + 'px';
                        }
                    }, 30)
                }
                /**
                 * @param {Object} obj 哪个对象
                 * @param {Object} attr 什么属性
                 */
                function getStyle(obj,attr){
                    if(obj.currentStyle){
                        // 针对IE浏览器
                        return obj.currentStyle[attr];
                    }else{
                        // 针对于Firefox浏览器
                        return getComputedStyle(obj,null)[attr];
                    }
                }
            }
        </script>
    </head>
    <body>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </body>
</html>
```



效果如下：

![]( http://app.huat.xyz/bug2.gif )



 发现，opacity属性值根本没有发生变化???????????

![](http://qn.huat.xyz/content/20200427001148.png)



 修改代码如下: 

```js
var speed = 0;
function startMove(ele, attr,target) {
    //1.先关闭定时器 再开启定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        // 1.1 获取样式属性 处理透明度的问题 
        var cur = 0;
        if(attr === 'opacity'){
            cur = Math.round(parseFloat(getStyle(ele,attr))*100);
        }else{
            cur = parseInt(getStyle(ele,attr));
        }
        // 1.2.求出步长
        speed = (target - cur) * 0.5;
        // 1.3 判断speed的正负
        speed = target > cur ? Math.ceil(speed) : Math.floor(speed);
        //1.4 临界值判断
        if (cur == target) {
            clearInterval(ele.timer);
        } else {
            if(attr === 'opacity'){
                ele.style[attr]  = 'alpha(opacity:'+(cur+speed)+')';
                ele.style[attr] = (cur + speed)/100;
            }else{
                // 1.5 运动起来
                ele.style[attr] = cur + speed + 'px';
            }
        }
    }, 30)
}
/**
 * @param {Object} obj 哪个对象
 * @param {Object} attr 什么属性
*/
function getStyle(obj,attr){
    if(obj.currentStyle){
        // 针对IE浏览器
        return obj.currentStyle[attr];
    }else{
        // 针对于Firefox浏览器
        return getComputedStyle(obj,null)[attr];
    }
}
```

>  *注意:由于透明度涉及小数计算，如0.07\*100=> 7.000000000000001，所以需要用Math.round()去掉尾巴* 


## 链式动画

物体的多个属性可能是同时运动，也可能是一个属性运动完成之后，另一个属性再运动。如果要完成这种效果，就需要用到回调函数。

> 如何添加回调函数？什么时候触发回调函数？
>
> 当在临界值判断的时候，添加回调函数的执行，当在一个属性运动完成之后，判断一下有没有属性属性

如果想实现以上效果，现在将封装的运动框架存在一个myAnimation.js文件中，其内容如下：

```js
var speed = 0;
/**
 * @param {Object} ele 当前元素
 * @param {Object} attr 当前元素的某个属性
 * @param {Object} target 目标
 */
function startMove(ele, attr, target,fn) {
    //1.先关闭定时器 再开启定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        // 1.1 获取样式属性
        var cur = 0;
        if (attr === 'opacity') {
            cur = Math.round(parseFloat(getStyle(ele, attr)) * 100);
        } else {
            cur = parseInt(getStyle(ele, attr));
        }
        // 1.2.求出步长
        speed = (target - cur) * 0.5;
        // 1.3 判断speed的正负
        speed = target > cur ? Math.ceil(speed) : Math.floor(speed);
        //1.4 临界值判断
        if (cur == target) {
            clearInterval(ele.timer);
            //修改的地方
            // 结束的时候做判断，调用fn
            if(fn){
                fn();
            }
        } else {
            if (attr === 'opacity') {
                ele.style[attr] = 'alpha(opacity:' + (cur + speed) + ')';
                ele.style[attr] = (cur + speed) / 100;
            } else {
                // 1.5 运动起来
                ele.style[attr] = cur + speed + 'px';
            }
        }
    }, 30)
}
/**
 * @param {Object} obj 哪个对象
 * @param {Object} attr 什么属性
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        // 针对IE浏览器
        return obj.currentStyle[attr];
    } else {
        // 针对于Firefox浏览器
        return getComputedStyle(obj, null)[attr];
    }
}
```

外部引用的时候。

```js
<!--1.先引入外部的模块-->
<script src="js/myAnimation.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    window.onload = function() {
        //2.获取元素
        var oBox = document.getElementById('box');
        //3.监听事件
        oBox.onmouseover = function() {
           //小心回调函数中this的指向。在回调函数中this的指向指向了window对象
            var that = this;
            //3.运动
            startMove(this, 'width', 500,function(){
                startMove(that,'height',400);
            });
        }
        oBox.onmouseout = function() {
            var that = this;
            startMove(this, 'height', 200,function(){
                startMove(that,'width',200);
            });
        }
    }
    </script>
```


## 同时运动

如果之前的运动框架，让元素既可以改变宽度，又可以改变透明度。这个时候需要用到JSON。

 将myAnimation.js进行修改：

```js
var speed = 0;
/**
 * @param {Object} ele 当前元素
 * @param {Object} json 当前元素数值键值对 json数据
 * @param {Object} fn 当前回调函数
 */
function startMove(ele, json,fn) {
    //1.先关闭定时器 再开启定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        for(var attr in json){
            // 1.1 获取样式属性
            var cur = 0;
            if (attr === 'opacity') {
                cur = Math.round(parseFloat(getStyle(ele, attr)) * 100);
            } else {
                cur = parseInt(getStyle(ele, attr));
            }
            // 1.2.求出步长
            speed = (json[attr] - cur) * 0.5;
            // 1.3 判断speed的正负
            speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);
            //1.4 临界值判断
            if (cur == json[attr]) {
                clearInterval(ele.timer);
                // 结束的时候做判断，调用fn
                if(fn){
                    fn();
                }
            } else {
                if (attr === 'opacity') {
                    ele.style[attr] = 'alpha(opacity:' + (cur + speed) + ')';
                    ele.style[attr] = (cur + speed) / 100;
                } else {
                    // 1.5 运动起来
                    ele.style[attr] = cur + speed + 'px';
                }
            }
        }
    }, 30)
}
/**
 * @param {Object} obj 哪个对象
 * @param {Object} attr 什么属性
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        // 针对IE浏览器
        return obj.currentStyle[attr];
    } else {
        // 针对于Firefox浏览器
        return getComputedStyle(obj, null)[attr];
    }
}
```

```js
<script src="js/myAnimation2.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    window.onload = function() {
        var oBox = document.getElementById('box');
        oBox.onmouseover = function() {
            startMove(oBox,{"width":400,"height":400,'opacity': 100})
        }
        oBox.onmouseout = function() {
            startMove(oBox,{"width":200,"height":200,'opacity': 30})
        }
    }
</script>
```

