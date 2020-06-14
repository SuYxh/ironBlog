---
title: 在宝塔Linux面板怎么运行用node写的api接口
date: 2020-06-14
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - node
tags:
 - 宝塔
 - PM2
---

PM2的基本使用可以参考宝塔面板官网的操作https://www.bt.cn/bbs/thread-35607-1-1.html 



##### 在宝塔面板搜索管理器

![](http://qn.huat.xyz/content/20200613231457.png)



##### 安装PM2管理器，打开设置

![](http://qn.huat.xyz/content/20200613231512.png)



 a.域名映射问题
首先端口尽量不要选择一些mysql、tomcat等一些默认端口，其次记得去服务器的控制台安全组开放端口。如果映射域名没有域名,可以填服务器加端口`ip:5000`，添加成功就可以用postman测试以下能不能获取数据了



b.其他注意事项

 个人建议在上传项目时把node_modules文件删除再上传，这样会快很多；输入命令行：`cd /www/wwwroot/项目目录`，然后重新 `npm install`。这样可以一定程度上避免项目无法启动的尴尬。  