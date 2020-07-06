---
title: Mock.js快速入门
date: 2020-07-10
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
 - node
 - vue
tags:
 - Mock
---


###  一．产生的原因

​		对于前后端分离的项目，后端工程师的 API 数据迟迟没有上线，而前端工程师却没有 JSON 数据进行数据填充，自己写后端模拟又太繁重，这个时候，Mock.js 就能解决这个问题，让前端工程师更加独立做自己。

​		官方网站为：[ http://mockjs.com/examples.html ]( http://mockjs.com/examples.html )

![](http://qn.huat.xyz/content/1_1.png)

### 二．安装

1、官网：mockjs.com

2、安装方式

（1）在 node 下运行

- 安装 node.js，官网：nodejs.org/zh-cn/

- 检测node是否安装，命令： `node -v`

- 创建 Mock 目录，先安装 node 下的 `mock.js`；` npm install mockjs`

- 创建一个 js 文件，键入官网示例代码

  ```js
  //引入 mock.js，相当于 src=mock.js
  const Mock = require('mockjs');
  //创建模拟数据
  const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
  // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1
      }]
  });
  // 输出结果
  console.log(data);
  // 转换 JSON 格式
  console.log(JSON.stringify(data, null, 4));
  ```

（2）在在浏览器测试运行,直接在 html 文件引入:

```html
<script src="http://mockjs.com/dist/mock.js"></script>
```



### 三、语法规范

1. Mock.js 的语法规范包括两个部分：数据模板定义规范和数据占位定义规范； 

2. 数据模板定义的规范包含 3 个部分：属性名、生成规则和属性值； '属性名|生成规则' : 属性值 //'name|rule' : value 

3. 其中，字符串、数值有 7 种生成规则，具体如表说明： 

   ![](http://qn.huat.xyz/content/20200706222231.png)

4.  除了以上几种规则格式，还有布尔值、对象和数组等规则； 

   ![](http://qn.huat.xyz/content/20200706222343.png)

5.  也支持函数和正则表达式； 

   ![](http://qn.huat.xyz/content/20200706222429.png)

6.  数据定义的占位符@，比较好理解，占领属性值的位置； 

```js
'list|5' : [{
cname : '@cname',
city : '@city',
full : '@cname - @city'
}]
```



### 四、随机占位符

1. 通过 '@占位符' 这种方式来随机产生各种不同的数据； 

2. 有两种方式可以输出这种随机占位符，具体如下： //第一种输入占位符的方式 

   ```js
   //第一种输入占位符的方式
   console.log(Mock.Random.cname());
   //第二种输入占位符的方式
   console.log(Mock.mock('@cname'));
   PS：如果在输出列表里，直接写 '@cname' 更加的方便快捷；
   ```

3.  下表中，将所有的占位符的名称，罗列出来，我们挑最常用的演示； 

   ![](http://qn.huat.xyz/content/20200706222832.png)

   ```js
   //随机中文人名，不带 c 就是英文
   console.log(Mock.mock('@cname'));
   //随机 ID
   console.log(Mock.mock('@id'));
   //随机中文标题，不带 c 就是英文
   console.log(Mock.mock('@ctitle'));
   //随机颜色，十六进制
   console.log(Mock.mock('@color'));
   //随机图片，给你一个图片地址
   console.log(Mock.mock('@image'));
   //随机 ip 地址
   console.log(Mock.mock('@ip'));
   //随机 url 地址
   console.log(Mock.mock('@url'));
   //随机字符串
   console.log(Mock.mock('@string'));
   //随机数值
   console.log(Mock.mock('@integer'));
   //随机日期
   console.log(Mock.mock('@datetime'));
   ```

   

4.  如果没有我们想要的数据格式进行填充，可以使用扩展功能自己扩展； 

   ```js
   //自行扩展，各种商店名称
   Mock.Random.extend({
       cstore() {
           return this.pick([
               '宠物店',
               '美容店',
               '小吃店',
               '数码店',
               '快餐店'
           ]);
       }
   });
   //扩展调用
   console.log(Mock.mock('@cstore'));
   ```

   

