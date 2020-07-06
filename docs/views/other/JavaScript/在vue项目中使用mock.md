---
title: 在vue项目中使用mock.js
date: 2020-07-13
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
 - node
 - vue
tags:
 - Mock
 - vue
---

### 一、创建项目

命令:

```cmd
vue create mock-demo
```

### 二、安装依赖

命令:

```cmd
# 使用axios发送ajax
cnpm install axios --save
# 使用mockjs产生随机数据
cnpm install mockjs --save-dev
# 使用json5解决json文件,无法添加注释问题
cnpm install json5 --save-dev
```

### 三、学习mockjs

新建mock文件夹,新建testMockjs.js
[mockjs语法定义](http://mockjs.com/examples.html)

```javascript
const Mock = require('mockjs');//mockjs 导入依赖模块
var id = Mock.mock('@id')//得到随机的id,字符串
console.log(Mock.mock('@id'), typeof id)

var obj = Mock.mock({
    id: "@id()",//得到随机的id,对象
    username: "@cname()",//随机生成中文名字
    date: "@date()",//随机生成日期
    avatar: "@image('200x200','red','#fff','avatar')",//生成图片,参数:size, background, foreground, text
    description: "@paragraph()",//描述
    ip: "@ip()",//IP地址
    email: "@email()"//email
})
console.log(obj)
```

### 四、学习json5

json文件,中如果说存在`注释`文件和编辑器都会报错,我们采用`json5格式`来让json格式可以存在`注释`

报错截图:

![](http://qn.huat.xyz/content/2-1.png)

#### 1、编辑器安装json5扩展

![](http://qn.huat.xyz/content/2_2.png)

#### 2、引入json5库来解析json5格式

在mock文件夹下,新建testJSON5.js

```javascript
const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');
//读取json文件
function getJsonFile(filePath) {
    //读取指定json文件
    var json = fs.readFileSync(path.resolve(__dirname,filePath), 'utf-8');
    //解析并返回
    return JSON5.parse(json);
}
var json = getJsonFile('./userInfo.json5');
console.log('json', json)
```



### 五、mock和vue-cli结合

#### 1、新建index.js

在mock文件夹下,新建index.js

```javascript
const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');//mockjs 导入依赖模块
const JSON5 = require('json5');
//读取json文件
function getJsonFile(filePath) {
    //读取指定json文件
    var json = fs.readFileSync(path.resolve(__dirname,filePath), 'utf-8');
    //解析并返回
    return JSON5.parse(json);
}

//返回一个函数
module.exports = function(app){
    //监听http请求
    app.get('/user/userinfo', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = getJsonFile('./userInfo.json5');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
}
```

#### 2、新建vue.config.js

在项目根目录下,新建vue.config.js

```javascript
module.exports = {
    devServer: {
        before: require('./mock/index.js')//引入mock/index.js
    }
}
```

#### 3、发送ajax请求

在`src\components\HelloWorld.vue`中发送aja请求

```javascript
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    axios.get('/user/userinfo')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
```

### 六、移除mock

在项目根路径新建`.env.development`

```properties
MOCK=true
```

完善`mock\index.js`

```javascript
module.exports = function(app){
    if(process.env.MOCK == 'true'){
        //监听http请求
        app.get('/user/userinfo', function (rep, res) {
            //每次响应请求时读取mock data的json文件
            //getJsonFile方法定义了如何读取json文件并解析成数据对象
            var json = getJsonFile('./userInfo.json5');
            //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
            res.json(Mock.mock(json));
        });
    }
}

```



### 七、总结

**mock-json5-devServer-axios职责**

![](http://qn.huat.xyz/content/3_1.png)