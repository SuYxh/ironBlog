---
title: npm简介
date: 2020-04-12
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - node
---


## 1、如何安装NPM？

- npm会随着Node.js自动安装，安装完毕后node.js会自动安装npm
- 查看当前npm版本：`npm -v`
- 更新npm ：`npm install npm@latest -g`

## 2、 NPM使用

(1) 在  https://www.npmjs.com/  网站找到需要的包

(2) 在项目的根目录下，执行 `npm install 包名称 `安装

 (3) 在 `node.js`代码中通过 `require('包名');`  加载该模块

(4) 通过 `npm install 包名称 ` 安装的包，会自动下载到当前目录下的 `node_modules` 目录下，如果该目录不存在，则自动创建。

  ---  以上也叫做  **本地安装**

## 3、NPM全局安装

(1) 什么是全局安装

-  全局安装命令  ： `npm install 包名称 -g `   
-  npm全局安装把 包安装成了一个命令行工具

(2) npm全局安装做了哪些事情？

- 下载包到一个指定的目录：  `C:\Users\username\AppData\Roaming\npm\node_modules`
- 创建一段命令行执行的代码：  `C:\Users\jarvis\AppData\Roaming\npm\vuepress`  --> `C:\Users\jarvis\AppData\Roaming\npm\node_modules\vuepress\cli.js`



## 4、NPM常用命令

 [npm常用命令]( https://www.jianshu.com/p/7ea13d57638b )



## 5、“模块”(Modules) 和 “包” (Packages) 的区别

(1) 模块可以是任何一个文件或目录(目录下可以有很多个文件)，只要能被 `node.js` 通过 `require()`即可。

(2) 包是一个文件或者目录(目录下可以有多个文件)必须有一个 `package.json`文件来描述，就可以是一个包。



## 6、package.json 文件的作用

(1) package.json 文件是一个 json 格式的文件，位于项目的根目录下 

(2) package.json 文件是一个 包 的说明文件 (项目描述文件)，用来管理组织一个包(一个项目)



## 7、 如何创建一个 package.json 文件

(1) 使用命令： `npm init -y`

(2) 手动创建

![](http://qn.huat.xyz/content/20200407162414.png)

## 8、package.json 文件常见的项

- name : 包名  【 必须 】
- version：包的版本 【必须】
- description：包描述
- author：作者名
- main：包的入口js文件，从main字段这里指定的那个js文件开始执行
- dependencies： 当前包依赖的其他包

![](http://qn.huat.xyz/content/20200407161609.png)

> name 的值为 文件夹的名字 
>
> 最好不要与 需要安装的包名 重名 ，比如：文件夹名称为  vuepress ，然而你需要 安装 vuepress 这个包
>
> 最好不要用大写，高版本的npm不会在报错了，但是需要注意；
>
> 文件夹不能以中文命名，会报错 ，错误如下:

![](http://qn.huat.xyz/content/20200407161941.png)



## 9、package-lock.json 文件

package-lock.json 是在 `npm install` 时候生成的一份文件，用以记录当前状态下实际安装的各个 npm package 的具体来源和版本号。package-lock.json 文件的作用锁定安装时的包的版本号，并且需要上传到 git，以保证其他人在 `npm install` 时大家的依赖能保证一致。

它有什么用呢？因为 npm 是一个用于管理 package 之间依赖关系的管理器，它允许开发者在 pacakge.json 中标出自己项目对 npm 各库包的依赖。



