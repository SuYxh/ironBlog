---
title: module (模块) 常用以及注意事项
date: 2020-08-29
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - node
tags:
 - node
---


- 模块封装器 

  - 在执行模块代码之前，Node.js 会使用一个如下的函数封装器将其封装

    ```js
    (function(exports, require, module, __filename, __dirname) {
        connsole.log('模块的代码实际上在这里')
    });
    ```

- 如何创建一个模块 

  - 创建一个文件 => 实现了私有作用域

    ```
    // 文件名为02_myModule.js
    ```

  - 编写一些操作，逻辑，数值等

    ```js
    // 定义一个变量
    let testVar = 'test'
    // 定义一个函数
    function test() {
        console.log(testVar)
    }
    ```

  - 对外抛出

    ```js
    // 使用module.exports向外暴露
    module.exports.testVar = testVar
    module.exports.testFn = test
    ```

  - 完整代码

    ```js
    // 定义一个变量
    let testVar = 'test'
    // 定义一个函数
    function test() {
        console.log(testVar)
    }
    
    // 向外暴露
    module.exports.testVar = testVar
    module.exports.testFn = test
    ```

- 如何引用一个模块 

  - / 绝对路径， ./ ../ 相对路径 

    - 支持js,json,node扩展名，不写扩展名以此尝试， 均不存就报错

    ```js
    const myMo = require('./02_myModule')
    ```

    - 不写路径则认为是build-in模块或者各级的node_modules内的第三方模块

    ```js
    const VUE = require('vue')
    ```

  - 引用内置模块的方式

    ```js
    // 内置模块fs 模块是用来读取二进制流 
    
    const fs = require('fs')
    
    const result = fs.readFile('./07_fs.js', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
            // 讲16进制转义为string
            console.log(data.toString())
        }
    })
    
    // 读取文件为异步操作，直接打印 undefined
    console.log(result)
    ```

  - 引用外部模块

    ```js
     const myMo = require('./02_myModule')
    ```

  - 引用文件名为02_myModule.js 并使用

    ```js
    // 支持js,json,node扩展名，不写扩展名以此尝试， 均不存就报错
    const myMo = require('./02_myModule')
    console.log(myMo.testVar)
    myMo.testFn()
    ```

#### require 特别注意

- module 被加载的时候执行，加载后缓存

- 一但出现模块被循环加载的，就只输出已经执行的部分，还未执行的部分不会输出、

- 04_moduleA.js

  ```js
      module.exports.test = 'A'
      
      const modB = require('./05_moduleB')
      
      console.log('modA：'+ modB.test)
      
      // 再次定义
      module.exports.test = 'AA'
  ```

- 05_moduleB.js

  ```js
      module.exports.test = 'B'
      
      const modA = require('./04_moduleA')
      
      console.log('modB：'+ modA.test)
      
      // 再次定义
      module.exports.test = 'BB'
  ```

- 06_main.js

  ```js
      const modA = require('./04_moduleA')
      //1 引用 04_moduleA 
      //2 其内部引用并执行05_moduleB
      //3 05_moduleB 内部引用了04_moduleA， 这时04_moduleA 中的module.exports.test = A。所以第一次打印modB：A
      //  将module.exports.test = 'BB' => 至此 引入05_moduleB 执行完毕，写入缓存
      //4 接续2步04_moduleA 继续执行 所以第二次打印modA：BB ，并且重置 module.exports.test = 'AA'
      const modB = require('./05_moduleB')
      //5 直接读取缓存 
      console.log(modA.test)
      //6 第三次打印 AA
      console.log(modB.test)
      //7 第四次打印 BB
  ```

  ```js
      // 后台打印
      modB：A
      modA：BB
      AA
      BB
  ```

#### module 特别注意

- exports 和module.exports的区别 

  - exports 是module.exports 的简写

    ```js
    //相当于
    const exports = module.exports
    // 其指向不能被改变
    exports = {
        a:1 // undefined 报错，因为改变了指向
    }
    // 就要自定义输出内容, 使用全写
    module.exports = {
        a: 1
    }
    ```

#### global

- global 顶级对象 

  - 类比于js 中的window

  - CommonJS

  - Buffer process console等常用方法  => 其下挂载方法

  - timer => 一系列定时操作

  - 具体 

    - 声明对象分为局部以及全局，使用global.XXX 声明的对象为全局对象，其直接挂载在全局global下

    ```js
    //09_global 文件
    // 声明局部变量
    const testVar = 100
    
    // 声明全局变量
    global.testVar2 = 1000
    module.exports.testVar = testVar
    ```

    ```js
    // 使用区别
    const mod = require('./09_global')
    console.log(mod.testVar)
    console.log(testVar2) // 既不用导出也不用引用即可使用
    ```

#### process

- process  global 挂载的进程 

  - process 常用参数

    ```js
    argv => 进程启动时的参数集 是一个数组
        1. 首参 启动node程序的路径
        2. 第二个参数 启动脚本文件的路径
        3. 如果进行文件名后传参 即对启动的文件做配置 node xxx.js a=1 b=2
            则会有相应的参数存储进入argv数组 否则为空数组
    argv0 => argv 的第一个参数 
    execArgv =>  node --inspect xxx.js
       写在文件名前面的参数，即对node做启动配置参数
    execPath => node 调用脚本的路径，即node的启动路径
    ```

  - process 环境

    ```js
        const {env} = process
        console.log(env) // 保存了启动环境的配置
        { ALLUSERSPROFILE: 'C:\\ProgramData',
          ...
          ..
          .
          USERNAME: 'Administrator',
          USERPROFILE: 'C:\\Users\\Administrator',
          windir: 'C:\\Windows',
          windows_tracing_flags: '3',
          windows_tracing_logfile: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log',
          TERM_PROGRAM: 'vscode',
          TERM_PROGRAM_VERSION: '1.36.1',
          LANG: 'zh_CN.UTF-8' }
    ```

  - process cwd => 注意这个是process的直属方法

    ```js
    console.log(process.cwd()) // 当前进程的路径
    F:\xxx\node_xxx\demo
    ```

  - process timer

    ```js
        // 最后执行 全局global 直属的   => 下个队列队首
        setImmediate(() => {
            console.log('setImmediate')
        })
        // 在这两个之间执行 也是global直属的
        setTimeout(() => {
            console.log('setTimeout')
        }, 0)
        // 最先执行 在当前队列最后，所以先执行
        process.nextTick(() => {
            console.log('nextTick')
        })
    ```




