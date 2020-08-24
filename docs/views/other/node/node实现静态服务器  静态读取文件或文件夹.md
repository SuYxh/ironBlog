---
title: node实现静态服务器 ~ 静态读取文件或文件夹
date: 2020-09-01
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
 - node
tags:
 - node
---


### 采坑记录

- 中文输出乱码问题

  ```js
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('啊啊和嘎哈啊')
  ```

  - 输出中出现中文乱码 附解决方案 ~

  ```js
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  ```

  或

  ```js
  res.writeHead(200, { 'Context-Type': 'text/plain' })
  res.write('<head><meta charset="utf-8"/></head>')
  ```
  
- 文件读取方式 

  > node 允许通过两种方式读取并输出文件

  - one : 以文件流的形式读取与返回一起进行，快 = **推荐**

  ```js
  fs.createReadStream(filePath).pipe(res)
  ```
  
- two : 先将文件整个读取，然后将文件内容一起返回,简单说这就是api的蹩脚使用 = **慢**
  
```js
  fs.readFile(filePath, (err, data) => {
      if (err) return
      res.end(data)
  })
```

### 读取文件或者文件夹

- 废话不说，上代码

> `require('./config/defaultConfig')` 更新为以下

`defaultConfig.js ` 文件

```js
module.exports = {
  // 主机名称
  hostname: '127.0.0.1',
  // 端口号
  port: 6969,
  // 当前文件夹
  root: process.cwd()
}
```


```js
// 引入http内置模块
const http = require('http')

// 引入chalk 用于美化后台打印
const chalk = require('chalk')

const path = require('path')
const fs = require('fs')
// 引入基本配置
const conf = require('./config/defaultConfig')

// 创建一个server 实例
const server = http.createServer((rep, res) => {
  // 拿到路径
  const filePath = path.join(conf.root, rep.url)

  // 判断是否为文件或者文件夹
  fs.stat(filePath, (err, stats) => {
    // 设置公共头部信息
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    if (err) {
      // 状态码
      res.statusCode = 404

      // 找不到提示文本
      res.end(`${filePath} is 404`)

      return
    }
    if (stats.isFile()) {
      // 如果是文件 返回文件内容
      res.statusCode = 200

      fs.createReadStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {
      //  如果是文件夹，返回文件列表
      fs.readdir(filePath, (err, files) => {
        if (err) return
        res.statusCode = 200

        res.end(files.join(','))
      })
    }
  })
})

// 监听 server 实例

server.listen(conf.port, conf.hostname, () => {
  const addr = `http:// ${conf.hostname}:${conf.port}`
  console.info(`server startd at ${chalk.green(addr)}`)
})
```

### 代码优化

- 上述代码存在很多回调，代码臃肿可读性差。下面利用异步将回调去除，达到优化效果

```js
const fs = require('fs')

const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)

module.exports = async function(rep, res, filePath) {
  // 规避此问题require-atomic-updates报告在异步函数中重新分配变量时可能发生的竞争条件错误
  const awaitRes = await res
  awaitRes.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  try {
    const stats = await stat(filePath)
    if (stats.isFile()) {
      // 如果是文件 返回文件内容
      awaitRes.statusCode = 200

      fs.createReadStream(filePath).pipe(awaitRes)
    } else if (stats.isDirectory()) {
      //  如果是文件夹，返回文件列表
      const file = readdir(filePath)
      awaitRes.statusCode = 200

      awaitRes.end(file.join(','))
    }
  } catch (ex) {
    // 状态码
    awaitRes.statusCode = 404

    // 找不到提示文本
    awaitRes.end(`${filePath} is 404`)
  }
}
```

- app.js文件变更为

  ```js
  // 引入http内置模块
  const http = require('http')
  
  // 引入chalk 用于美化后台打印
  const chalk = require('chalk')
  
  const path = require('path')
  
  const route = require('./header/route')
  // 引入基本配置
  const conf = require('./config/defaultConfig')
  
  // 创建一个server 实例
  const server = http.createServer((rep, res) => {
    // 拿到路径
    const filePath = path.join(conf.root, rep.url)
    route(rep, res, filePath)
  })
  
  // 监听 server 实例
  
  server.listen(conf.port, conf.hostname, () => {
    const addr = `http:// ${conf.hostname}:${conf.port}`
  
    console.info(`server startd at ${chalk.green(addr)}`)
  })
  ```
  
- 至此实现了通过hash路径输入，实现文件或文件夹的读取/前进后退


