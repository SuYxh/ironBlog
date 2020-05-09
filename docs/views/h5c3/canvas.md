### Canvas画布

#### 基本用法

```html
<canvas id='canvas' width="150" height="150"></canvas>
```

看起来跟`img`标签有点像，唯一不同的是它没有src属性和alt属性。实际上，canvas标签只有两个属性:`width`和`height`。

如果没有设置宽度和高度，默认的canvas会初始化`width：300px,height:150px`

##### 渲染上下文对象

`canvas`标签创造了一个固定大小的画布，它有一个或者多个**渲染上下文对象**，用它可以绘制和处理要展示的内容。接下来我们把注意力放在2D渲染上下文中。

canvas起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。`canvas`元素有一个叫做 `getContext()`的方法，这个方法是用来获得渲染上下文和它的绘画功能。`getContext()`只有一个参数，上下文的格式。

```html
var canvas = document.getElementById('myCanvas');
//获取绘画上下文对象
var ctx = canvas.getContext('2d');
```

 打印结果： 

![](http://qn.huat.xyz/content/20200506193924.png)

#### 绘制形状

在这里你将学会如何绘制矩形、三角形、直线、圆弧和曲线。如果想绘制比较复杂的图形，我们需要掌握路径。

##### 栅格(了解)

![](http://qn.huat.xyz/content/20200506193957.png)

##### 绘制矩形常用API

绘制一个填充的矩形

```js
fillRect(x,y,width,height);
```

绘制一个矩形的边框

```js
strokeRect(x, y, width, height)
```

清除指定矩形区域，让清除部分完全透明。

```js
clearRect(x, y, width, height)
```

上面提供的方法之中每个都包含了相同的参数。x和y指定了canvas画布上所绘制的矩形的左上角(相对于原点)的坐标。width和height设置矩形的尺寸。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="myCanvas" width="300" height="300" style="border:1px solid #666;"></canvas>
        <script type="text/javascript">
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
             ctx.fillRect(25, 25, 100, 100);
             ctx.clearRect(45, 45, 60, 60);
             ctx.strokeRect(50, 50, 50, 50);
        </script>
    </body>
</html>
```

 效果显示: 

![](http://qn.huat.xyz/content/20200506194049.png)

##### 填充颜色和描边颜色设置

```js
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';//填充颜色
ctx.strokeStyle = 'green';//描边颜色
```

#### 使用路径绘制图形

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形我们需要做以下几步。

1. **创建路径起始点**
2. **使用画布的各种方法划出路径**
3. **然后把路径封闭**
4. **一旦路径生成，你就能通过描边或填充路径区域来渲染图形**

##### 绘制路径常用api

###### beginPath()

```
新建一条路径，生成之后，图形绘制api被指向到路径上生成路径。无参数
```

###### closePath()

```
闭合路径之后图形绘制api又重新指向了上下文中
```

###### stroke()

```
 通过线条来绘制图形轮廓
```

###### fill()

```
通过填充路径的内容区域生成实心的图形
```

###### moveTo(x,y)

```
:将画笔移动到指定的坐标x以及y上
```

当canvas初始化或者`beginPath()`调用后，你通常会使用`moveTo()`函数设置起点。我们也能够使用`moveTo()`绘制一些不连续的路径

###### lineTo(x,y)

```
:绘制直线，绘制一条从当前位置到指定x以及y位置的直线
```

该方法有两个参数：x以及y ，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，等等。。。开始点也可以通过`moveTo()`函数改变。

看个例子：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="myCanvas" width="300" height="300" style="border:1px solid #666;"></canvas>
        <script type="text/javascript">
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            // 填充三角形
            ctx.beginPath();
            ctx.moveTo(25, 25);
            ctx.lineTo(105, 25);
            ctx.lineTo(25, 105);
            ctx.fill();
            // 描边三角形
            ctx.beginPath();
            ctx.moveTo(125, 125);
            ctx.lineTo(125, 45);
            ctx.lineTo(45, 125);
            ctx.closePath();
            ctx.stroke();
        </script>
    </body>
</html>
```

 效果展示： 

![](http://qn.huat.xyz/content/20200506194224.png)

###### arc()

绘制圆弧或者圆

```
arc(x,y,radius,startAngle,endAngle,anticlockwise);
```

圆心在 (x, y) 位置，半径为 radius ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。

anticlockwise:可选的，布尔值，如果为true，逆时针绘制圆弧，反之，顺时针绘制

**笑脸例子**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="myCanvas" width="300" height="300" style="border:1px solid #666;"></canvas>
        <script type="text/javascript">
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
            ctx.stroke();
        </script>
    </body>
</html>
```

 效果展示： 

![](http://qn.huat.xyz/content/20200506194301.png)

###### quadraticCurveTo(cp1x,cp1y,x,y)

```
绘制二次贝塞尔曲线,cp1x,cp1y为一个控制点，x,y为结束点
```

###### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

```
绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
```

看图：

![](http://qn.huat.xyz/content/20200506194316.png)

参数x、y在两个方法中都是结束点坐标。cp1x,cp1y为坐标的第一个控制点(上图中的红色点)，cp2x,cp2y为坐标中的第二个控制点

**二次贝赛尔曲线绘制对话气泡**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="myCanvas" width="300" height="300" style="border:1px solid #666;"></canvas>
        <script type="text/javascript">
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(75, 25);
            ctx.quadraticCurveTo(25, 25, 25, 62.5);
            ctx.quadraticCurveTo(25, 100, 50, 100);
            ctx.quadraticCurveTo(50, 120, 30, 125);
            ctx.quadraticCurveTo(60, 120, 65, 100);
            ctx.quadraticCurveTo(125, 100, 125, 62.5);
            ctx.quadraticCurveTo(125, 25, 75, 25);
            ctx.stroke();
        </script>
    </body>
</html>
```

 效果展示: 

![](http://qn.huat.xyz/content/20200506194353.png)

 三次贝塞尔曲线绘制 

```js
//三次贝塞尔曲线
 ctx.beginPath();
 ctx.moveTo(75,40);
 ctx.bezierCurveTo(75,37,70,25,50,25);
 ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
 ctx.bezierCurveTo(20,80,40,102,75,120);
 ctx.bezierCurveTo(110,102,130,80,130,62.5);
 ctx.bezierCurveTo(130,62.5,130,25,100,25);
 ctx.bezierCurveTo(85,25,75,37,75,40);
 ctx.fill();
```

 效果展示: 

![](http://qn.huat.xyz/content/20200506194513.png)

###### rect(x,y,width,height)

```
绘制矩形
```

> 注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你需要调用closePath()函数。但是调用stroke()时不会自动闭包

#### 样式和颜色

- fillStyle = color:设置图形的填充颜色
- strokeStyle = color: 设置图形边框的颜色
- globalAlpha :设置透明度值，取值范围为0~1之间的数值
- lineWidth = value:设置线条宽度，数值无单位
- lineCap = type 设置线段末端的样式
  - type:butt 默认值，方形
  - type:round 圆形
  - type:square 以方形结束，但是增加一个宽度和线段相同，宽度是线段宽度一半的矩形区域
- lineJoin = type:设定线条和线条连接的样式
  - type:round 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
  - type:bevel 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
  - type: miter 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域

#### 绘制文本

canvas提供了两种方法来渲染文本

- `filleText(text,x,y,[,maxWidth])`

在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的

- `strokeText(text,x,y,[,maxWidth])`

在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="canvas" width="500" height="200" style="border: 1px solid #666;"></canvas>
        <script type="text/javascript">
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            // 设置字体大小和字体
            ctx.font = '30px 微软雅黑';
            ctx.fillText('hello world',50,50);
            ctx.strokeText('hello world',50,80);
        </script>
    </body>
</html>
```

效果：

![](http://qn.huat.xyz/content/20200506194609.png)

##### 有样式的文本

- `font = value`

当前我们用来绘制文本的样式. 这个字符串使用和 `CSS font`属性相同的语法. 默认的字体是 `10px sans-serif`。

- `textAlign = value`

文本对齐选项. 可选的值包括：`start`, `end`, `left`, `right` or `center`. 默认值是 `start`。

- `textBaseline = value`

基线对齐选项. 可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。默认值是 `alphabetic。`

- `direction = value`

文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit。`

#### 使用图片

canvas更有意思的一项特性就是图像操作能力。可以用于动态的图像合成或者作为图形的背景，以及游戏界面（Sprites）等等。浏览器支持的任意格式的外部图片都可以使用，比如PNG、GIF或者JPEG。 你甚至可以将同一个页面中其他canvas元素生成的图片作为图片源。

引入图像到canvas里需要以下两步基本操作：

1. 获得一个指向`HTMLImageElement`的对象或者另一个canvas元素的引用作为源，也可以通过提供一个URL的方式来使用图片
2. 使用`drawImage()`函数将图片绘制到画布上

##### 核心方法

```
drawImage(imgObj,x,y,width,height,dx,dy,dWith,dHeight)
```

其中imgObj是image或者canvas对象，x和y是在canvas里的起始坐标。后面两个参数是可选的，默认是当前画布设置的大小。这两个参数用来控制当前canvas缩放的大小。

如果是8个参数，用来控制做切片显示，前四个参数是定义图像源后的切片位置和大小，后四个参数是定义切片的目标显示的位置和大小

![](http://qn.huat.xyz/content/20200506194634.png)

**例子：一个简单的线图**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="canvas" width="500" height="500"></canvas>
        <script type="text/javascript">
            var ctx = document.getElementById('canvas').getContext('2d');
            var img = new Image();
            img.onload = function() {
                ctx.drawImage(img, 0, 0);
                ctx.beginPath();
                ctx.moveTo(123, 400);
                ctx.lineTo(198, 350);
                ctx.lineTo(300, 200);
                ctx.lineTo(500, 150);
                ctx.stroke();
            }
            img.src = 'image-20190703114102416.png';
        </script>
    </body>
</html>
```

效果演示：

![](http://qn.huat.xyz/content/20200506194707.png)

#### 状态的保存和恢复

```
save()
```

保存画布的所有状态

```
restore()
```

save和restore方法是用来保存和恢复canvas状态的。都没有参数。

**栗子**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="canvas" width="200" height="200"></canvas>
        <script type="text/javascript">
            function draw(){
                var ctx = document.getElementById('canvas').getContext('2d');
                ctx.fillRect(0,0,150,150);//默认绘制一个矩形
                ctx.save();//保存当前状态
                ctx.fillStyle = 'red'; //在原有配置基础上对颜色发生改变
                ctx.fillRect(15,15,120,120);
                ctx.save();//保存当前状态
                ctx.fillStyle = 'green'; //再次改变颜色
                ctx.globalAlpha = 0.5; //改变透明度
                ctx.fillRect(30,30,90,90);//使用新的配置绘制一个矩形
                ctx.restore(); //重载之前的颜色状态 (红色)
                ctx.fillRect(45,45,60,60); //使用上一次的配置绘制一个矩形
                ctx.restore(); //加载默认的颜色配置
                ctx.fillRect(60,60,30,30); //使用默认配置绘制矩形
            }
            draw();
        </script>
    </body>
</html>
```

 效果展示： 

![](http://qn.huat.xyz/content/20200506194750.png)

##### 移动translate

```
translate(x,y)
```

translate方法接收两个参数。x是左右偏移量，y是上下偏移量。**在做变形之前先保存状态是良好的一个习惯**

**例子**

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
```

效果：

![](http://qn.huat.xyz/content/20200506194828.png)

##### 旋转

```
rotate(angle)
```

只接受一个参数：选装的角度。顺时针方向

#### 基本动画

如何通过canvas来制作动画呢？

步骤：

1. **清空canvas**

   通过`clearReact()`来清空canvas，保证自己的画布是干净的

2. **保存canvas状态**

3. **绘制动画图形**

4. **恢复canvas**状态

##### 操控动画的方法

```
setInterval(functuon,delay)
```

在设定好间隔时间后，function会定期执行

```
setTimeout(function,delay)
```

在设定好的时间之后执行函数

```
requestAnimationFrame(callback)
```

此方法一般每秒钟回到函数执行60次。告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

**做三个案例效果**

**1.太阳系动画**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="canva" width="500" height="500"></canvas>
        <script type="text/javascript">
            window.onload = function() {
                var sun = new Image();
                var moon = new Image();
                var earth = new Image();
                /* 初始化方法 */
                function init() {
                    sun.src = "sun.png";
                    moon.src = "moon.png";
                    earth.src = "earth.png";
                    window.requestAnimationFrame(draw);
                }
                function draw() {
                    // 1.获取上下文
                    var ctx = document.getElementById('canva').getContext('2d');
                    ctx.globalCompositeOperation = 'destination-over';
                    // 2.清空canvas
                    ctx.clearRect(0, 0, 500, 500);
                    // 3.设置背景填充色和边框色
                    ctx.fillStyle = "rgba(0,0,0,0.4)";
                    ctx.strokeStyle = "rgba(0,153,255,0.4)";
                    // 4.保存状态
                    ctx.save();
                    // 5.设置位移
                    ctx.translate(150, 150);
                    // 6.地球
                    var time = new Date();
                    // 6.1 地球选装
                    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
                    // 6.2 地球位移
                    ctx.translate(105, 0);
                    // 6.3 填充图形
                    ctx.fillRect(0, -12, 50, 24); // Shadow
                    ctx.drawImage(earth, -12, -12);
                    // Moon
                    ctx.save();
                    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
                    ctx.translate(0, 28.5);
                    ctx.drawImage(moon,-2.5,-2.5);
                    ctx.restore();
                    ctx.restore();//恢复到初始的状态
                    // 开始画圆
                    ctx.beginPath();
                    // 画圆
                    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
                    // 描边
                    ctx.stroke();
                    ctx.drawImage(sun, 0, 0, 300, 300);
                    window.requestAnimationFrame(draw);
                }
                init();
            }
        </script>
    </body>
</html>
```

 效果展示： 

![]( http://app.huat.xyz/taiyangxi.gif )

#### 高级动画

**制作高级动画小球**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <canvas id="canvas" width="600" height="300" style="border: 1px solid #000000;"></canvas>
        <script type="text/javascript">
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            var raf;
            var running = false;
            var ball = {
                x: 100, //x坐标
                y: 100, //y坐标
                vx: 5, //x轴方向步伐
                vy: 2, //y轴方向步伐
                radius: 25, //半径
                color: 'blue', //颜色
                drawBall: drawBall // 画的动作
            }
            // 画球的方法
            function drawBall() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            function clear() {
                ctx.fillStyle = 'rgb(255,255,255,0.3)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            function draw() {
                clear();
                // 之前用clearReact()方法来清除前一帧动画,换成filleReact()方法来实现长尾效果
                // ctx.clearRect(0, 0, canvas.width, canvas.height);
                ball.drawBall();
                ball.x += ball.vx;
                ball.y += ball.vy;
                // 处理边界
                if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
                    ball.vy = -ball.vy;
                }
                if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
                    ball.vx = -ball.vx;
                }
                raf = window.requestAnimationFrame(draw);
            }
            // canvas.addEventListener('mouseover', function() {
            //     raf = window.requestAnimationFrame(draw);
            // });
            canvas.addEventListener('mousemove', function(e) {
                if(!running){
                    clear();
                    ball.x = e.clientX;
                    ball.y = e.clientY;
                    ball.drawBall();
                }
            });
            canvas.addEventListener('click', function() {
                if(!running){
                    window.requestAnimationFrame(draw);
                    running = true;
                }
            });
            canvas.addEventListener('mouseout', function() {
                window.cancelAnimationFrame(raf);
                running = false;
            });
            ball.drawBall();
        </script>
    </body>
</html>
```

 效果显示: 

![]( http://app.huat.xyz/xiaoqiu.gif )