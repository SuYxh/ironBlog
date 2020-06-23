---
title: MongoDB
date: 2020-06-23
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - 数据库
tags:
 - MongoDB
---

### 数据库（Database）

- 数据库是按照数据结构来组织、存储和管 理数据的仓库。

- 我们的程序都是在内存中运行的，一旦程序运行结束或者计算机断电，程序运行中的数据都会丢失。所以我们就需要将一些程序运行的数据持 久化到硬盘之中，以确保数据的安全性。 而数据库就是数据持久化的最佳选择。 

### 数据库分类

 数据库主要分成两种：

- 关系型数据库  
  - MySQL、Oracle、DB2、SQL Server ……    关系数据库中全都是表 
- 非关系型数据库 
  - MongoDB、Redis …… 
  - 键值对数据库
  - 文档数据库MongoDB 



###  MongoDB简介

- MongoDB是为快速开发互联网Web应用 而设计的数据库系统。 
- MongoDB的设计目标是极简、灵活、作为 Web应用栈的一部分。
- MongoDB的数据模型是面向文档的，所谓 文档是一种类似于JSON的结构，简单理解 MongoDB这个数据库中存的是各种各样的 JSON。（BSON） 



### MongoDB下载与安装

##### 下载地址 

– https://www.mongodb.org/dl/win32/ • 

- MongoDB的版本偶数版本为稳定版，奇数 版本为开发版。
- MongoDB对于32位系统支持不佳，所以 3.2版本以后没有再对32位系统的支持。 

##### 安装

直接下一步即可！

[win下的安装方法]( https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ )



###  启动MongoDB 

1、添加环境变量：将MongoDB的bin目录添加到path下 

2、命令行输入 mongod 会出现下图所示

![](http://qn.huat.xyz/content/20200623214446.png)



3、在和安装目录同级的目录新建文件夹 data，然后在里面新建子文件夹 db，运行如下命令：

```
mongod --dbpath D:\MongoDB\data\db
```

即可运行！

### MongoDB常用命令

![](http://qn.huat.xyz/content/20200623214938.png)



###  基本概念

- 文档（document） 
  - 类似于JS中的对象，在MongoDB中每一条数据都是一个文档 
- 集合（collection） 
  - 集合就是一组文档，也就是集合是用来存放文档的 
  - 集合中存储的文档可以是各种各样的，没有格式要求 
- 多个文档组成集合，多个集合组成数据库 

![](http://qn.huat.xyz/content/20200623215243.png)



###  文档的增删改查 

##### 添加文档

db.collection.insert (文档对象) 

- insert()可以用于向集合中添加一个或多个文档， 可以传递一个对象，或一个数组。
- 可以将对象或数组中的对象添加进集合中
- 添加时如果集合或数据库不存在，会自动创建 
- 插入的文档对象会默认添加_id属性，这个属性 对应一个唯一的id，是文档的唯一标识 



##### 删除文档

- db.collection.remove() 
  - remove()可以用来移除指定文档对象 
  - 方法接收一个查询文档作为参数，只有符合条 件的文档才会被删除
  - 删除数据是永久的，不能撤销
- db.collection.drop() 
  - 删除集合 



##### 修改文档

- db.collection.update() 
  - 可以在update()中传递两个参数，一个是查询文档，一个是新的文档，这样符和条件的文档 将会被新文档所替换
  - update()的第三个参数，用来指定是否使用 upsert，默认为false – update()的第四个参数，用来指定是否同时修 改多个文档，默认为false 
-  修改器
  - 使用update会将整个文档替换，但是大部分情况下我们是不需要这么做的 
  - 如果只需要对文档中的一部分进行更新时， 可以使用更新修改器来进行。$set、 $unset 、$inc、$push、$addToSet 
  -  $set用来指定一个字段的值，如果这个字 段不存在，则创建它。语法： – db.test_coll.update(查询对象, {$set:更新对象}); 
  - $unset可以用来删除文档中一个不需要的字段， 用法和set类似。 
  - $inc用来增加已有键的值，或者该键不存 在那就创建一个 ，$inc只能用于Number类型的值 



### 查询文档

- find()、findOne() – MongoDB使用find()来对文档进行查询
- find()需要一个查询文档作为参数，如果不传该参数，则会返回集合中的所有元素。
- 可以将查询条件以键值对的形式添加到查询文档中 
- 查询条件 • $lt、$lte、$gt、$gte、$ne、$or、$in、$nin、 $not、$exists、$and 