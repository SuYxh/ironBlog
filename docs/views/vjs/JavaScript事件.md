---
title: JavaScript事件
date: 2020-05-03
author: yxh
isShowComments: false
---

[[toc]]

## 事件流
JavaScript操作css称为脚本化CSS,而JavaScript与HTML的交互是通过事件实现的。事件就是文档或浏览器窗口中发生的一些特定的交互瞬间，而事件流(又叫事件传播)描述的是从页面中接收事件的顺序。

### 历史
当浏览器发展到第四代时(IE4及Netscape4)，浏览器开发团队遇到了一个很有意思的问题：页面的哪一部分会拥有某个特定的事件？想象画在一张纸上的一组同心圆。如果把手指放在圆心上，那么手指指向的不是一个圆，而是纸上的所有圆

　　两家公司的浏览器开发团队在看待浏览器事件方面还是一致的。如果单击了某个按钮，他们都认为单击事件不仅仅发生在按钮上，甚至也单击了整个页面

　　但有意思的是，IE和Netscape开发团队居然提出了差不多是完全相反的事件流的概念。IE的事件流是事件冒泡流，而Netscape的事件流是事件捕获流

### 事件冒泡
IE的事件流叫做事件冒泡(eventy bubbling),即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到较为不具体的节点(文档)

以下列HTML结构为例，说明事件冒泡、事件捕获及事件流
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
            }
        </style>
    </head>
    <body>
        <div id="box">
        </div>
        <script type="text/javascript">
            var box = document.getElementById('box');
            box.onclick = function(){
                box.innerHTML += 'div\n';
            }
            document.body.onclick = function(){
                box.innerHTML += 'body\n';
            }
            document.documentElement.onclick = function(){
                box.innerHTML += 'html\n';
            }
            document.onclick = function(){
                box.innerHTML += 'body\n';
            }
            window.onclick = function(){
                box.innerHTML += 'window\n';
            }
        </script>
    </body>
</html>
```
如果单击了页面中的元素，那么这个click事件沿DOM树向上传播，在每一级节点上都会发生，按照如下顺序传播：
![](http://qn.huat.xyz/content/20200503000846.png)
> 注意：所有现代浏览器都支持冒泡，但在具体实现还是有一些差别。IE9以上、Firfox、Chrome、safari 将事件一直冒泡到window对象
![](http://qn.huat.xyz/content/20200503000915.png)

### 事件捕获
​ 事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在事件到达预定目标之前捕获它

以同样的HTML结构为例，说明事件捕获

​ 在事件捕获过程中，document对象首先接收到click事件，然后事件沿DOM树依次向下，一直传播到事件的实际目标，即元素
![](http://qn.huat.xyz/content/20200503001051.png)
> 注意：IE9、Firefox、Chrome、safari等现代浏览器都支持事件捕获，但从window对象开始获取
![](http://qn.huat.xyz/content/20200503001112.png)

addEventListener(eventType,eventListener,useCapture)方法中的第三个参数设置为true时，即为事件捕获阶段

### 事件流
​ 事件流又称为事件传播，DOM2级事件规定的事件流包括三个阶段：事件捕获阶段(capture phase)、处于目标阶段(target phase)和事件冒泡阶段(bubbling phase)

　　首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件，最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应
![](http://qn.huat.xyz/content/20200503001200.png)

## 事件处理程序
事件处理程序又叫事件侦听器，实际上就是事件的绑定函数。事件发生时会执行函数中相应代码。事件处理程序：

1、HTML事件处理程序
2、DOM0级事件处理程序
3、DOM2级事件处理程序
4、IE事件处理程序
下面将详细介绍该部分内容

### HTML事件处理程序
​ 某个元素支持的每种事件，都可以使用一个与相应事件处理程序同名的HTML特性来指定。这个特性的值应该是能够执行的javascript代码

​ 在事件处理程序函数内部，this等于事件的目标元素
```html
<div id="box" style="height:30px;width:200px;background-color:pink;" onclick = "this.innerHTML+= '1';"></div>
```

​ 在HTML中定义的事件处理程序也可以调用在页面其它地方定义的脚本
```html
<div id="box" style="height:30px;width:200px;background-color:pink;" onclick = "test()"></div>
<script>
    function test(){document.getElementById('box').innerHTML+= '1';}    
</script>
```

HTML事件处理程序会创建一个封装着元素属性值的函数。这个函数中有一个局部变量event，也就是事件对象。通过event变量，可以直接访问事件对象，不用自己定义它，也不用从函数的参数列表中获取。（下节会重点讲事件对象上的属性）
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"onclick = "this.innerHTML+= event.type;"></div>
```

在事件处理程序函数内部，可以像访问局部变量一样访问document及该元素本身的成员。如此一来，事件处理程序要访问自己的属性就简单多了
```html
<button id="box" value="test" style="height:30px;width:200px;background-color:pink;"onclick = "this.innerHTML+= value;"></button>
```

#### 缺点
耦合问题

​ 客户端编程的通用风格是保持HTML内容和javaScript行为分离，所以应该避免使用HTML事件处理程序属性，因为这些属性直接混合了javascript和HTML，且不易扩展

### DOM0级事件处理程序
​ 通过javascript指定事件处理程序的传统方式，就是将一个函数赋值给一个事件处理程序属性。这种为事件处理程序赋值的方法是在第四代Web浏览器中出现的，而且至今仍然为所有现代浏览器所支持。原因一是简单，二是具有跨浏览器的优势

　　每个元素都有自己的事件处理程序属性，这些属性通常全部小写，将这种属性的值设置为一个函数，就可以指定事件处理程序

> 注意：以DOM0级方式添加的事件处理程序会在事件流的冒泡阶段被处理
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
document.getElementById('box').onclick = function(){this.innerHTML += '1';}    
</script>
```
​ 可以通过将事件处理程序属性设置为null来删除事件处理程序
```js
box.onclick = null;
```

#### 缺点
​ 围绕着每个事件目标对于每种事件类型只能添加一个事件处理程序

### DOM2级事件处理程序
​ DOM2级事件处理程序定义了两个方法用于处理指定和删除事件处理程序的操作：`addEventListener()`和`removeEventListener()`。

​ 所有DOM节点中都包含这两个方法，并且它们都接受3个参数：**要处理的事件名**、**作为事件处理程序的函数**和**一个布尔值**。最后的布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。若最后的布尔值不填写，则和false效果一样
> 注意： IE8浏览器不支持DOM2级事件处理程序

​ 使用DOM2级事件处理程序的好处是可以添加多个事件处理程序，并按照他们添加的顺序触发
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.addEventListener('click',function(){this.innerHTML += '1'},false);
    box.addEventListener('click',function(){this.innerHTML += '2'},false);    
</script>
```
得到输出结果为： 12

可以做个延迟操作来验证：
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    setTimeout(function(){
        box.addEventListener('click',function(){this.innerHTML += '1'},false);    
    },10);
    box.addEventListener('click',function(){this.innerHTML += '2'},false);    
</script>
```
得到输出的结果为：21

参数
​ 如果希望向监听函数传递参数，可以用匿名函数包装一个监听函数
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.addEventListener("click",function(){
        test('123');
    },false);
    function test(x){box.innerHTML += x;}
</script>
```
移除
​ 通过addEventListener()添加的事件处理程序只能使用removeEventListener()来移除，移除时传入的参数与添加处理程序时使用的参数相同。这意味着，addEventListener()添加的匿名函数将无法移除。　

**以下无效**
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.addEventListener("click",function(){
        this.innerHTML += '1'
    },false);
    box.removeEventListener('click',function(){
        this.innerHTML += '1'
    },false);    
</script>
```

**以下有效**
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
    var handle = function(){this.innerHTML += '1'};
    box.addEventListener("click",handle,false);
    box.removeEventListener('click',handle,false);    
</script>
```

### IE事件处理程序
​ IE实现了与DOM中类似的两个方法：`attachEvent()`和`detachEvent()`。这两个方法接受相同的两个参数：事件处理程序名称与事件处理程序函数。由于IE8-浏览器只支持事件冒泡，所以通过`attachEvent()`添加的事件处理程序都会被添加到事件冒泡阶段

​ `attachEvent()`方法的第一个参数是”onclick”，而非DOM的`addEventListener()`方法中的”click”
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.attachEvent('onclick',function(){this.innerHTML += '1';});
</script>
```
> 注意：attachEvent()方法只冒泡到document，且IE10-浏览器支持

**this**
​ 与其他三个事件处理程序不同，IE事件处理程序的this指向了window,而非被绑定事件的元素。

```html
<!--<div>-->
<div id="box" style="height:100px;width:300px;background-color:pink;"
onclick = "console.log(this)"></div>
```

```html
<div id="box" style="height:100px;width:300px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.onclick= function(){
        console.log(this);//<div>
    }
</script>
```

```html
<div id="box" style="height:100px;width:300px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.addEventListener('click',function(){
        console.log(this);//<div>
    });
</script>
```

```html
<div id="box" style="height:100px;width:300px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.attachEvent('onclick',function(){
        console.log(this);//window
    });
</script>
```

**顺序**
​ 　使用`attachEvent()`方法添加的事件处理程序的触发顺序是有区别的。IE9、10浏览器是按正序执行的，而IE8-浏览器则是按倒序执行的　　
```html
<div id="box" style="height:30px;width:100px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.attachEvent('onclick',function(){
        box.innerHTML += '1';
    });
    box.attachEvent('onclick',function(){
        box.innerHTML += '2';
    });
</script>
```

 **移除**
​ 使用`attachEvent()`添加的事件可以通过`detachEvent()`来移除，条件是必须提供相同的参数。与DOM方法一样，这也意味着添加的匿名函数将不能被移除。不过，只要能够将对相同函数的引用传给`detachEvent()`，就可以移除相应的事件处理程序　

**以下无效**
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
    var box = document.getElementById('box');
    box.attachEvent("onclick",function(){
        box.innerHTML += '1'
    },false);
    box.detachEvent('onclick',function(){
        box.innerHTML += '1'
    },false);    
</script>
```

**以下有效**
```html
<div id="box" style="height:30px;width:200px;background-color:pink;"></div>
<script>
var handle = function(){box.innerHTML += '1'};
box.attachEvent("onclick",handle,false);
box.detachEvent('onclick',handle,false);
```

**总结**
​ 由于IE8-浏览器不支持`addEventListener()`方法，所以需要配合`attachEvent()`方法来实现全浏览器的事件绑定兼容写法。同时，由于`attachEvent()`方法中的this指向window，所以需要对this进行显式修改。
```js
function addEvent(target,type,handler){
    if(target.addEventListener){
        target.addEventListener(type,handler,false);
    }else{
        target.attachEvent('on'+type,function(event){
            return handler.call(target,event);
        });
    }
}
```

**调用顺序**

​ 如果浏览器同时出现这四种事件处理程序，那么它们的调用顺序在各浏览器中表现并不一致
```html
<div id="box" style="height:100px;width:100px;background:pink;" onclick = "this.innerHTML +='html\n'"></div>
<script>
    var box = document.getElementById('box');
    if(box.addEventListener){
        box.addEventListener('click',function(){this.innerHTML += 'DOM2级\n'})
    }    
    if(box.attachEvent){
        box.attachEvent('onclick',function(){box.innerHTML +='IE\n'})
    }
    box.onclick = function(){
        this.innerHTML += 'DOM0级\n';
    }
</script>
```

【相同点】

　　如果同时出现HTML事件处理程序和DOM0级事件处理程序，DOM0级会覆盖HTML事件处理程序

【不同点】

　　chrome/safari/FF以及IE11浏览器结果为：DOM0级 DOM2级

　　IE9、10浏览器结果为：DOM0级 DOM2级 IE

　　IE8-浏览器结果为：DOM0级 IE

## 事件对象
　　在触发DOM上的某个事件时，会产生一个事件对象event，这个对象中包含着所有与事件有关的信息。所有浏览器都支持event对象，但支持方式不同。本文将详细介绍事件对象

### 获取事件对象
1) event对象是事件程序的第一个参数

> 注意： IE8 浏览器不支持　
```html
<!--IE8-浏览器输出undefined，其他浏览器则输出事件对象[object MouseEvent]-->
<div id="box" style="height:30px;width:200px;background:pink;"></div>
<script>
var oBox = document.getElementById('box');
oBox.onclick = function(e){
    box.innerHTML = e;
}
```

2) 另外一种方法是直接使用event变量

> Firefox浏览器不支持

```html
<!--firefox浏览器输出undefined,其他浏览器则输出事件对象[object MouseEvent] -->
<div id="box" style="height:30px;width:200px;background:pink;"></div>
<script>
var oBox = document.getElementById('box');
oBox.onclick = function(){
    box.innerHTML = event;
}
</script>
```

#### 兼容
​ 于是，获取事件对象的常见兼容性写法如下
```html
<div id="box" style="height:30px;width:200px;background:pink;"></div>
<script>
var oBox = document.getElementById('box');
oBox.onclick = function(e){
    e = e || event;
    box.innerHTML = e;
}
</script>
```

​ 通过点击按tab键将焦点切换到button按钮上可以出发focus事件

```html
<button id="box" style="height:30px;width:200px;background:pink;"></button>
<script>
var oBox = document.getElementById('box');
oBox.onfocus = function(e){
    e = e || event;
    box.innerHTML = e.type;
}
</script>
```


### 事件目标
​ 关于事件目标，共有`currentTarget`、`target`、`srcElement`这三个属性

#### currentTarget
​ currentTarget属性返回事件当前所在的节点，即正在执行的监听函数所绑定的那个节点

> IE8 浏览器不支持

currentTarget属性返回事件当前所在的节点，即正在执行的监听函数所绑定的那个节点

```html
<style>
.in{height: 30px;background-color: lightblue;margin:0 10px;}
</style>
<ul id="box">
    <li class="in">1</li>
    <li class="in">2</li>
</ul>
<script>
    var box = document.getElementById('box');
    box.onclick = function(e){
    e = e || event;
    var tags =  box.getElementsByTagName('li');
    tags[0].innerHTML = e.currentTarget;
    tags[1].innerHTML = (e.currentTarget === this);
}
</script>
```

#### target
​ `currentTarget`属性返回事件正在执行的监听函数所绑定的节点，而`target`属性返回事件的实际目标节点

> IE8 浏览器不支持

以下代码中，点击该实际目标节点时，颜色变红；移出，颜色变浅蓝
```html
<style>
    #box{background-color: lightblue;}
    .in{height: 30px;}
</style>
<ul id="box">
    <li class="in">1</li>
    <li class="in">2</li>
</ul>
<script>
    box.onclick = function(e){
        e = e || event;
        e.target.style.backgroundColor = 'pink';
    }
    box.onmouseout = function(e){
        e = e || event;
        e.target.style.backgroundColor = 'lightblue';
    }
</script>
```
#### srcElement
​ `srcElement`属性与`target`属性功能一致

> 注意：Firefox浏览器不支持

```html
<style>
#box{background-color: lightblue;}
.in{height: 30px;}
</style>
<ul id="box">
    <li class="in">1</li>
    <li class="in">2</li>
</ul>
<script>
box.onclick = function(e){
    e = e || event;
    e.srcElement.style.backgroundColor = 'pink';
}
box.onmouseout = function(e){
    e = e || event;
    e.srcElement.style.backgroundColor = 'lightblue';
}
</script>
```


#### 兼容
```js
var handler = function(e){
    e = e || event;
    var target = e.target || e.srcElement;
}
```


### 事件代理
　由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理(delegation)，也叫事件委托

　　事件代理应用事件目标的target和srcElement属性完成。利用事件代理，可以提高性能及降低代码复杂度。

​ 举个列子：有三个同事预计会在周一收到快递。为签收快递，有两种办法：一是三个人在公司门口等快递；二是委托给前台MM代为签收。现实当中，我们大都采用委托的方案（公司也不会容忍那么多员工站在门口就为了等快递）。前台MM收到快递后，她会判断收件人是谁，然后按照收件人的要求签收，甚至代为付款。这种方案还有一个优势，那就是即使公司里来了新员工（不管多少），前台MM也会在收到寄给新员工的快递后核实并代为签收。

需求：一个ul中有5个li，移入时变蓝，移出时变红

下面分别用常规方法和事件代理方法来实现
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style type="text/css">
            * {
                padding: 0;
                margin: 0;
            }
            ul {
                list-style: none;
            }
        </style>
    </head>
    <body>
        <ul id="box">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <script type="text/javascript">
            // 1.常规方法实现
            /* var lis = document.getElementsByTagName('li');
            for(var i = 0; i < lis.length; i ++){
                lis[i].onmouseover = function (){
                    this.style.backgroundColor = 'blue';
                }
                lis[i].onmouseout = function (){
                    this.style.backgroundColor = 'red';
                }
            } */
            // 2.事件代理方式实现
            ul.onmouseover = function(e) {
                e = e || event;
                var target = e.target || e.srcElement;
                target.style.backgroundColor = 'blue';
            }
        </script>
    </body>
</html>
```

需求：**给未来添加的元素添加事件**
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <style type="text/css">
            * {
                padding: 0;
                margin: 0;
            }
            ul {
                list-style: none;
            }
        </style>
    </head>
    <body>
        <ul id="box">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <script type="text/javascript">
            // 模拟未来的某个事件添加了对应的数据
            var ul = document.getElementById('box');
            setTimeout(function(){
                var item = document.createElement('li');
                item.innerHTML = '6';
                ul.appendChild(item);
            },100)
            /*
            //1.原生方式添加事件 不能触发未来添加元素的事件
            var lis = document.getElementsByTagName('li');
            for(var i = 0; i < lis.length; i ++){
                lis[i].onmouseover = function (){
                    this.style.backgroundColor = 'blue';
                }
                lis[i].onmouseout = function (){
                    this.style.backgroundColor = 'red';
                }
            }
            */
            // 2.事件代理方式实现，可以触发未来添加元素的事件
            ul.onmouseover = function(e) {
                e = e || event;
                var target = e.target || e.srcElement;
                target.style.backgroundColor = 'blue';
            }
        </script>
    </body>
</html>
```

### 事件冒泡
​ 事件冒泡是事件流的第三个阶段，通过事件冒泡可以在这个阶段对事件做出响应

​ 关于冒泡，事件对象中包含`bubbles`、`cancelBubble`、`stopPropagation()`和`stopImmediatePropagation()`这四个相关的属性和方法。

#### bubbles
​ bubbles属性返回一个布尔值，表示当前事件是否会冒泡。该属性为只读属性

​ 发生在文档元素上的大部分事件都会冒泡，但focus、blur和scroll事件不会冒泡。所以，除了这三个事件bubbles属性返回了false外，其它事件该属性都为true

```html
<button id="test" style="height: 30px;width: 200px;"></button>
<script>
    //点击按钮时，按钮内容为true，说明click事件默认可冒泡
    var test = document.getElementById('test');
    test.onclick = function(e){
        test.innerHTML =e.bubbles;//true
    }
</script>
```

```html
<div id="box" style="height: 50px;width: 200px;overflow:scroll;background:pink;line-height:60px;">内容</div>
<script>
    //滚动时，div内容变成false，说明scroll事件默认不可冒泡
    var box = document.getElementById('box');
    box.onscroll = function(e){
        test.innerHTML = e.bubbles;//false
    }
</script>
```

#### stopPropagation()
​ stopPropagation()方法表示取消事件的进一步捕获或冒泡，无返回

> 注意：ie8 浏览器不支持
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <button id="btn">触发</button>
        <script type="text/javascript">
            var btn = document.getElementById('btn');
            btn.onclick = function (e){
                e = e || event;
                e.stopPropagation();
                this.innerText = '阻止冒泡';
            }
            document.body.onclick = function (e){
                alert('冒泡');
            }
        </script>
    </body>
</html>
```

#### stopImmediatePropagation()
​ `stopImmediatePropagation()`方法不仅可以取消事件的进一步捕获或冒泡，而且可以阻止同一个事件的其他监听函数被调用，无返回值

>　[注意]IE8-浏览器不支持

​ 使用`stopIPropagation()`方法，可以阻止冒泡，但无法阻止同一事件的其他监听函数被调用
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <button id="btn" style="width: 200px;">触发</button>
        <script type="text/javascript">
            var btn = document.getElementById('btn');
            // 可以阻止冒泡,但无法阻止同一事件的其他监听函数被调用
            btn.addEventListener('click',function (e){
                e = e || event;
                e.stopPropagation()
                this.innerHTML = '修改了';
            })
            btn.addEventListener('click',function (e){
                e = e || event;
                this.style.backgroundColor = 'lightblue';
            })
            document.body.addEventListener('click',function (){
                alert('body');
            })
        </script>
    </body>
</html>
```

使用stopImmediatePropagation()方法，即可以阻止冒泡，也可以阻止同一事件的其他监听函数被调用

```html
<button id="btn" style="width: 200px;">触发</button>
<script type="text/javascript">
    var btn = document.getElementById('btn');
    // 可以阻止冒泡,但无法阻止同一事件的其他监听函数被调用
    btn.addEventListener('click',function (e){
        e = e || event;
        e.stopImmediatePropagation()
        this.innerHTML = '修改了';
    })
    btn.addEventListener('click',function (e){
        e = e || event;
        this.style.backgroundColor = 'lightblue';
    })
    document.body.addEventListener('click',function (){
        alert('body');
    })
</script>
```

#### cancelBubble
​ `canceBubble`属性只能用于阻止冒泡，无法阻止捕获阶段。该值可读写，默认值为false。当设置为true是，cancelBubble可以取消事件冒泡

> [注意]该属性全浏览器支持，但并不是标准写法

```html
<button id="btn">触发</button>
<script type="text/javascript">
    var btn = document.getElementById('btn');
    btn.onclick = function (e){
        e = e || event;
        e.cancelBubble = true;
        this.innerText = '阻止冒泡';
    }
    document.body.onclick = function (e){
        alert('冒泡');
    }
</script>
```

#### 兼容
```js
var handler = function(e){
    e = e || event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}
```


### 事件流阶段
#### eventPhase
​ `eventPhase`属性返回一个整数值，表示事件目前所处的事件流阶段

　　0表示事件没有发生，1表示捕获阶段，2表示目标阶段，3表示冒泡阶段

>　　[注意]IE8-浏览器不支持

【1】以下代码返回2，表示处于目标阶段
```html
<button id="btn">
    事件流
</button>
<script type="text/javascript">
    var btn = document.getElementById('btn');
    btn.onclick = function (e){
        e =  e || event;
        this.innerHTML = e.eventPhase + '阶段';
    }
</script>
```

【2】以下代码返回1，表示处于捕获阶段
```html
<button id="btn">
    事件流
</button>
<script type="text/javascript">
    var btn = document.getElementById('btn');
    document.addEventListener('click',function(e){
        e = e || event;
        btn.innerHTML += e.eventPhase +'阶段';
    },true);
</script>
```

【3】以下代码返回3，表示处于冒泡阶段
```html
<button id="btn">
    事件流
</button>
<script>
    document.addEventListener('click',function(e){
        e = e || event;
        btn.innerHTML += e.eventPhase +'阶段';
    },false);
</script>
```

### 取消默认行为
​ 常见的默认行为有点击链接后，浏览器跳转到指定页面；或者按一下空格键，页面向下滚动一段距离

​ 关于取消默认行为的属性包括`preventDefault()`和`returnValue`

使用

　　1、在DOM0级事件处理程序中取消默认行为，使用returnValue、preventDefault()和return false都有效

　　2、在DOM2级事件处理程序中取消默认行为，使用return false无效

　　3、在IE事件处理程序中取消默认行为，使用preventDefault()无效

点击下列锚点时，会自动打开百度
```html
<a id="test" href="https://www.baidu.com" target="_blank">百度</a>
```
#### preventDefault()
​ preventDefault()方法取消浏览器对当前事件的默认行为，无返回值

> 注意：IE8浏览器不支持
```html
<a id="test" href="http://www.cnblogs.com">链接</a>
<script>
    var test = document.getElementById('test');
    test.onclick= function(e){
        e = e || event;
        e.preventDefault();
    }
</script>
```

#### returnValue
​ `returnValue`属性可读写，默认值是true，但将其设置为false就可以取消事件的默认行为，与`preventDefault()`方法的作用相同

> 注意： firebox和IE9浏览器不支持

```html
<a id="test" href="http://www.cnblogs.com">链接</a>
<script>
    var test = document.getElementById('test');
    test.onclick= function(e){
        e = e || event;
        e.returnValue = false;
    }
</script>
```
#### 兼容
```js
var handler = function(e){
    e = e || event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}
```

#### return false
​ 除了以上方法外，取消默认事件还可以使用return false

```html
<a id="test" href="http://www.cnblogs.com">链接</a>
<script>
    var test = document.getElementById('test');
    test.onclick= function(e){
        return false;
    }
</script>
```

## 事件对象属性
​ 在鼠标事件对象提供了丰富的信息

### 坐标位置
​ 关于坐标位置，事件对象提供了clientX/Y、pageX/Y、screenX/Y、x/y、offsetX/Y、layerX/Y这6对信息

### clientX/Y与x/y
​ clientX/Y表示当鼠标事件发生时（不管是onclick，还是omousemove，onmouseover等），鼠标相对于浏览器（这里说的是浏览器的有效区域）x轴的位置和y轴的位置；。x/y与clientX/Y相同
```html
<body>
    <div id="box" style="width: 200px;height: 200px;background-color: red;"></div>
    <script type="text/javascript">
        var box = document.getElementById('box');
        box.onmousemove = function(e){
            e = e || event;
            // 鼠标指针相对于浏览器的水平和垂直坐标
            this.innerHTML = `clientX:${e.clientX};clientY:${e.clientY};clientY:${e.x};clientY:${e.y};`;
        }
    </script>
</body>
```

### screenX/Y
​ 当鼠标事件发生时，鼠标相对于显示器屏幕x轴的位置和y轴的距离；
```html
<body>
    <div id="box" style="width: 200px;height: 200px;background-color: red;"></div>
    <script type="text/javascript">
        var box = document.getElementById('box');
        box.onmousemove = function(e){
            e = e || event;
            // 鼠标指针在可视区域中的水平和垂直坐标
            this.innerHTML = `screenX:${e.screenX},screenY:${e.screenY}`;
        }
    </script>
</body>
```

### pageX/Y
pageX/Y表示相对于页面的水平和垂直坐标，它与clientX/clientY的区别是随滚动条的位置变化
```html
<body style="height: 2000px;">
    <div id="box" style="width: 200px;height: 200px;background-color: red;"></div>
    <div id="result"></div>
    <script type="text/javascript">
        var box = document.getElementById('box');
        var result = document.getElementById('result');
        box.onmousemove = function(e){
            e = e || event;
            result.innerHTML = `clientX:${e.clientX};clientY:${e.clientY}<br>pageX:${e.pageX},pageY:${e.pageY}`;
        }
    </script>
</body>
```

### offsetX与offsetY
​ 当鼠标事件发生时，鼠标相对于事件源x轴的位置 offsetY：当鼠标事件发生时，鼠标相对于事件源y轴的位置
```html
<body style="height: 2000px;">
    <div id="box" style="width: 200px;height: 200px;background-color: red;">
    </div>
    <div id="result"></div>
    <script type="text/javascript">
        var box = document.getElementById('box');
        var result = document.getElementById('result');
        box.onmousemove = function(e){
            e = e || event;
            this.innerHTML = `clientX:${e.clientX};clientY:${e.clientY};offsetX:${e.offsetX};offsetY:${e.offsetY};`;
        }
    </script>
</body>
```