---
title: 在jQuery项目中使用mock.js
date: 2020-07-14
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
 - node
 - vue
tags:
 - Mock
 - jQuery
---

### 一、创建项目

新建文件夹`jquery-mock-demo`，新建`index.html`,引入`jquery.js`文件和`mock.js`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/Mock.js/1.0.0/mock-min.js"></script>
</head>
<body>
    
</body>
</html>
```

### 二、mock和jQuery结合

#### 1、写`mock/index.js`

```javascript
Mock.mock('/user/userinfo','get',{
    id: "@id()",//得到随机的id,对象
    username: "@cname()",//随机生成中文名字
    date: "@date()",//随机生成日期
    avatar: "@image('200x200','red','#fff','avatar')",//生成图片,参数:size, background, foreground, text
    description: "@paragraph()",//描述
    ip: "@ip()",//IP地址
    email: "@email()"//email
})
```

#### 2、使用jQuery发送ajax请求

```javascript
$.ajax({
    url: '/user/userinfo',
    dataType: 'json',
    success: (data)=>{
        console.log(data)
    }
})
```

### 三、移除Mock

通过添加全局变量`ENV`来判断

```html
<script>MOCK = 'true'</script>
```

```javascript
if(window.ENV == 'true'){
    Mock.mock('/user/userinfo','get',{
        id: "@id()",//得到随机的id,对象
        username: "@cname()",//随机生成中文名字
        date: "@date()",//随机生成日期
        avatar: "@image('200x200','red','#fff','avatar')",//生成图片,参数:size, background, foreground, text
        description: "@paragraph()",//描述
        ip: "@ip()",//IP地址
        email: "@email()"//email
    })
}
```

### 四、总结mock-jquery职责

![](http://qn.huat.xyz/content/4_1.png)