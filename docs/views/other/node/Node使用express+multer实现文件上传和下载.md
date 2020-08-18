---
title: Node使用express+multer实现文件上传和下载
date: 2020-08-27
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - node
tags:
 - express
 - multer
---


>  Multer是用于处理的node.js中间件`multipart/form-data`，主要用于上传文件。 
>
> 官网  https://www.npmjs.com/package/multer 
>
> 中文文档：  https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md 
>
> 安装  `npm install --save multer `
>
> 图片上传(阿里云OSS)： [ https://www.yuque.com/docs/share/02e8d2ae-1bb8-4e69-b315-6b7957ecbce9?# 《图片上传》 ](https://www.yuque.com/docs/share/02e8d2ae-1bb8-4e69-b315-6b7957ecbce9?# 《图片上传》)

### 一、单文件上传

#### 前端代码

这里简单使用form表单提交，使用post方式，表单一定要设置`enctype="multipart/form-data"`,否则会有意想不到的错误。

```html
<h1>文件上传</h1>
<form action="/" method="post" enctype="multipart/form-data">
    <!-- 这里的multiple属性是允许多文件上传的，单文件上传可以不写此属性（最好都写上）-->
    <input id="files" type="file" name="file" multiple/>
    <input type="submit" value="上传"/>
</form>
```

#### 后端代码

单文件要是用，**single("在这里写表单里的name值")** 

```js
let express = require('express');
let multer = require('multer');
let fs = require("fs");
let path = require("path");
let router = express.Router();

router.post('/', multer({
      //设置文件存储路径
     dest: 'upload'   //upload文件如果不存在则会自己创建一个。
 }).single('file'), function (req, res, next) {
    if (req.file.length === 0) {  //判断一下文件是否存在，也可以在前端代码中进行判断。
        res.render("error", {message: "上传文件不能为空！"});
        return
    } else {
       let file = req.file;
       let fileInfo = {};
       console.log(file);
       fs.renameSync('./upload/' + file.filename, './upload/' + file.originalname);//这里修改文件名字，比较随意。
       // 获取文件信息
       fileInfo.mimetype = file.mimetype;
       fileInfo.originalname = file.originalname;
       fileInfo.size = file.size;
       fileInfo.path = file.path;

       // 设置响应类型及编码
       res.set({
         'content-type': 'application/json; charset=utf-8'
      });

       res.send("上传成功！");
    }
 });
```



### 二、多文件上传

#### 前端代码

> 前端代码同上，  **input表单multiple属性**

```html
<h1>文件上传</h1>
<form action="/" method="post" enctype="multipart/form-data">
	<!-- 这里的multiple属性是允许多文件上传的,一点要写-->
    <input id="files" type="file" name="file" multiple/> 
    <input type="submit" value="上传"/>
</form>
```



#### 后端代码

> **服务端的代码不使用single 而是使用.array("表单name属性","这里填写最大支持的文件数目")**

```js

router.post('/', multer({
    //设置文件存储路径
    dest: 'upload'
}).array('file', 10), function (req, res, next) {  //这里10表示最大支持的文件上传数目
    let files = req.files;
    if (files.length === 0) {
        res.render("error", {message: "上传文件不能为空！"});
        return
    } else {
        let fileInfos = [];
        for (var i in files) {
            let file = files[i];
            let fileInfo = {};


            fs.renameSync('./upload/' + file.filename, './upload/' + file.originalname);//这里修改文件名。

            //获取文件基本信息
            fileInfo.mimetype = file.mimetype;
            fileInfo.originalname = file.originalname;
            fileInfo.size = file.size;
            fileInfo.path = file.path;

            fileInfos.push(fileInfo);
        }
        // 设置响应类型及编码
        res.set({
            'content-type': 'application/json; charset=utf-8'
        });
        res.end("success!");
    }
});
```



> 此时文件的简单上传实现了。当然这只是简单的进行上传，有时候还要考虑文件的大小，磁盘空间等等，当然上传文件也不只有一种，还有使用[formidable](https://www.npmjs.com/package/formidable), [multiparty](https://www.npmjs.com/package/multiparty)等，有兴趣可以查看官方文档详细介绍。上传文件当然就要有下载，有时候压缩文件可以直接通过a标签下载，但是有时如果是图片之类的浏览器会直接打开，很不友好，所以有专门的下载。



### 三、 文件下载

```js
//第一种方式
let road="这里是要下载的文件路径（可以是中文，相对路径，绝对路径等等）";
res.download(road); //直接调用download方法即可

//第二种方式
let road="这里是要下载的文件路径（可以是中文，相对路径，绝对路径等等）";
let road = fs.createReadStream(path); //创建输入流入口
res.writeHead(200, {
'Content-Type': 'application/force-download',
'Content-Disposition': 'attachment; filename=name'
});
load.pipe(res);// 通过管道方式写入
```



### 四、获取文件上传进度

>  progress-stream 
>
> 文档  https://www.npmjs.com/package/progress-stream 

如果只是想在服务端获取上传进度，可以试下如下代码。这个模块跟Express、multer并不是强绑定关系，可以独立使用。 

```js
var fs = require('fs');
var express = require('express');
var multer  = require('multer');
var progressStream = require('progress-stream');

var app = express();
var upload = multer({ dest: 'upload/' });

app.post('/upload', function (req, res, next) {
    // 创建progress stream的实例
    var progress = progressStream({length: '0'}); // 注意这里 length 设置为 '0'
    req.pipe(progress);
    progress.headers = req.headers;
	
    // 获取上传文件的真实长度（针对 multipart)
    progress.on('length', function nowIKnowMyLength (actualLength) {
    	console.log('actualLength: %s', actualLength);
    	progress.setLength(actualLength);
    });

	// 获取上传进度
    progress.on('progress', function (obj) {		
    	console.log('progress: %s', obj.percentage);
    });

    // 实际上传文件
    upload.single('logo')(progress, res, next);
});

app.post('/upload', function (req, res, next) {
	res.send({ret_code: '0'});
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(3000);

```



### 五、获取上传文件的真实大小

 multipart类型，需要监听`length`来获取文件真实大小。（官方文档里是通过`conviction`事件，其实是有问题的） 

```js
// 获取上传文件的真实长度（针对 multipart)
progress.on('length', function nowIKnowMyLength (actualLength) {
    console.log('actualLength: %s', actualLength);
    progress.setLength(actualLength);
});

```



### 六、关于`progress-stream`获取真实文件大小的bug？

针对multipart文件上传，progress-stream 实例子初始化时，参数length需要传递非数值类型，不然你获取到的进度要一直是0，最后就直接跳到100。

至于为什么会这样，应该是 `progress-steram` 模块的bug，看下模块的源码。当`length`是number类型时，代码直接跳过，因此你length一直被认为是0。

```js
tr.on('pipe', function(stream) {
    if (typeof length === 'number') return;
    // Support http module
    if (stream.readable && !stream.writable && stream.headers) {
    	return onlength(parseInt(stream.headers['content-length'] || 0));
    }
    
    // Support streams with a length property
    if (typeof stream.length === 'number') {
    	return onlength(stream.length);
    }
    
    // Support request module
    stream.on('response', function(res) {
    	if (!res || !res.headers) return;
    	if (res.headers['content-encoding'] === 'gzip') return;
    	if (res.headers['content-length']) {
    		return onlength(parseInt(res.headers['content-length']));
    	}
    });
});

```



> 参考：  https://juejin.im/post/6844903497897345032 