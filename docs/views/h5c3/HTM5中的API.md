### HTM5中的API

#### 新的操作方法

##### 1.获取元素的方法

获取单个元素,参数可以是我们任意的选择器。

```js
document.querySelect('选择器');
```

获取多个元素，参数是任意的选择器

```js
document.querySelectAll('选择器');
```

##### 2.类的操作

**添加类**

```js
oDiv.classList.add('类名');
```

**移除类**

```js
oDiv.classList.remove('类名');
```

**检测类**

```js
oDiv.classList.contains('类名');
```

**切换类**

```js
oDiv.classList.toggle('类名');//有则删除，无则添加
```

##### 3.自定义属性

我们可以通过`data-自定义属性名`来给元素添加自定义的属性名。一旦添加完成之后。通过JS可以获取以及设置自定义属性。

比如定义一个`data-test`属性名

**获取自定义的属性名**

```js
oDiv.dataset.test
```

**设置自定义属性**

```js
oDiv.dataset.自定义属性名 = 值
```

#### 文件读取

读取文件，首先先得将文件上传，可以通过input的type为file的表单控件实现

```html
<input type='file' name=''>
```

其次，通过FileReader读取文件。读取完文件之后，会将结果存储在result属性中，而不是直接返回

##### FileReader常用方法

```
1.readAsBinaryString: 将文件读取为二进制编码2.readAsDataURL: 将文件读取为DataURL3.readAsText:将文件读取为文本
```

##### FileReader提供的事件

```
1.onabort
读取文件中断时触发
2.onerror
读取文件出错时触发
3.onload
读取文件完成时触发，只在读取成功后触发
4.onloadend
读取文件完成时触发，无论读取成功或失败都会触发
5.onloadstart
读取文件开始时触发
6.onprogress
正在读取文件
```

##### 读取文件实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>read file</title>
</head>
<body>
    <input type="file" name="">
    <script type="text/javascript">
    var input = document.querySelector("input");
    input.onchange = function() {
        // 获取到文件
        var file = this.files[0];
        // 创建读取器
        var reader = new FileReader();
        // 开始读取
        reader.readAsText(file);
        // 文件读取完成后，获取读取的结果
        reader.onload = function() {
            console.log(reader.result);
        }
    }
    </script>
</body>
</html>
```

#### 获取网络状态

`window.navigator.onlione`返回浏览器的网络状态。联网状态返回true,断网状态时返回false。

**实例代码**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>network status</title>
</head>
<body>
    <script type="text/javascript">
    // 获取当前网络状态
    var state = window.navigator.onLine;
    if (state) {
        alert("联网状态");
    }
    else {
        alert("断网状态");
    }
    </script>
</body>
</html>

```

#### 地理位置定位

地理位置api允许用户向web应用程序提供他们的位置。处于隐私考虑，报告地理位置前会先请求用户许可

##### geolocation对象

地理位置API通过`navigator.geolocation`提供

```js
if(navigator.geolocation){
    /*地理位置服务可用*/    
}else{
    /*地理位置服务不可用*/
}
```

##### 获取当前定位

```js
if(navigator.geolocation){
    /*地理位置服务可用*/
    navigator.geolocation.getCurrentPosition(function(postion){
        position.coords.latitude;//经度
        position.coords.longitude;//纬度
    })
}else{
    /*地理位置服务不可用*/
}
```

据我测试，目前原生获取经纬的度的方法已不起作用，多次测试，猜测可能导致的问题是因为国内对浏览器定位有限制。

##### 百度地图定位

所以，为了实现定位，我们还是用第三方的好啊。比如 [百度地图开发平台](http://lbsyun.baidu.com/index.php?title=jspopular3.0)，真的！！这个平台上想要什么都有。

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
    body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
    </style>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥"></script>
    <title>地图展示</title>
</head>
<body>
    <div id="allmap"></div>
</body>
</html>
<script type="text/javascript">
    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));      
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
</script>
```

 效果显示: 

![](http://qn.huat.xyz/content/20200506192630.png)

> 注意：一定要去申请自己的密钥。

注册该网站完成之后，去这[申请密钥](http://lbsyun.baidu.com/apiconsole/key/create)

![](http://qn.huat.xyz/content/20200506192702.png)

在这提供了大量的[Web服务API](http://lbsyun.baidu.com/index.php?title=webapi)

百度地图Web服务API为开发者提供http/https接口，即开发者通过http/https形式发起检索请求，获取返回json或xml格式的检索数据。用户可以基于此开发JavaScript、C#、C++、Java等语言的地图应用。

不过下面的服务都是一些接口。目前我们没有学习Ajax技术。大家可以关注一下这个技术。非常重要的。等咱们学到Ajax技术之后我们就可以使用此些服务。

![](http://qn.huat.xyz/content/20200506192721.png)

#### 本地存储

HTML5 web存储，一个比cookie更好的本地存储方式。

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变得越来越复杂。为了满足各种各样的需求，会经常在本地存储大量的数据，传统方式我们会以document.cookie来进行存储，但是由于其存储大小只有4k左右，并且解析也相当的复杂，给开发带来诸多不便，HTML5规范提出解决方案，使用sessionStorage和localStorage存储数据

##### localStorage

特点：

1. 永久存储
2. 多窗口共享
3. 容量大约为20M

###### 常用方法

```js
window.localStorage.setItem(key,value); //设置存储的内容
window.localStorage.getItem(key); //获取内容
window.localStorage.removeItem(key);//删除内容
window.localStorage.clear(); //清空内容
```

##### sessionStorage

1. 生命周期为关闭当前浏览器窗口
2. 可以在同一个窗口下访问
3. 数据大小为5M左右

```js
window.sessionStorage.setItem(key,value); //设置存储的内容
window.sessionStorage.getItem(key); //获取内容
window.sessionStorage.removeItem(key);//删除内容
```

