---
title: 详解原型链中的prototype和 __proto__
date: 2020-08-08
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
tags:
 - prototype
 - __proto__
---

# 

![](http://qn.huat.xyz/content/20200809133311.png)

## 前言

本文主要是彻底讲明白**prototype和__proto__** 是干嘛的，相信很多同学也跟我一样，傻傻的分不清楚两者应该如何使用？、在原型链中到底起到什么作用？、 在继承中起到什么作用？、javascript为什么会设计出这两个属性？等一系列问题，网上查遍许多资料，看的也是云里雾里一头雾水，接下来，本文就通俗易懂的来讲解以上问题，也当做自己的学习笔记。

## 为什么会创造出 prototype和__proto__

### javascript 没有类的概念

如果你之前了解过 java 这种面向对象编程的语言，你应该会熟悉类的概念，在面向对象编程的语言中，首先设计出类（class）,然后再生成类的实例（实例化成对象）。 但是 ***在 javascript 语言中，并没有类的概念，所有的数据类型都是对象（object）*** ,这并没有任何问题，不是所有的编程语言都必须向 java 一样依赖类的概念，C 语言就没有类的概念，一样活的很好。但是我们不得不承认，类是思想会给项目工程问题带来很多方便。如果想构建一个大型项目，那必然会涉及到继承，继承问题，就需要通过类来实现，但是在 javascript 中并没有类的概念，那应该怎么办呢，我们可以模仿类，所以prototype和__proto__ 就衍生出来了。

也可以参考阮一峰老师的：[Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

## javascript 中的数据类型

在讲解prototype和__proto__之前，我们首先来讲解一下 javascript 中的 数据类型。为什么要先讲下数据类型呢，因为prototype和__proto__用到了Function 和 Object 两种数据类型。 javascript 数据类型分为两种：

- **基本数据类型**：String Number Boolean Null undefined 
- **引用数据类型**：Array Object Date Function RegExp 等

我们可以用 **typeof** 来判断一个变量的数据类型，5种基本数据类型都可以用 typeof 判断出来（Null为 object）, 而引用数据类型只能判断出 object 和 function 两种类型，也就是说，引用类型其实分两种 **Object** 和 **Function** ，其他的类型都是 Object 类型衍生出来的。

代码如下：

```javascript
        let str = 'yxh',
            num = 1998,
            bool = true,
            n = null,
            u = undefined,
            arr = [],
            o = {},
            fn = function() {},
            regexp = /^\d$/,
            date = new Date()

        console.log(typeof str)   // string
        console.log(typeof num)   // number
        console.log(typeof bool)  // boolean 
        console.log(typeof n)     // object
        console.log(typeof u)     // undefined
        console.log(typeof arr)   // object
        console.log(typeof o)     // object
        console.log(typeof fn)    // function
        console.log(typeof regexp) // object
        console.log(typeof date)  // object
```



### Function 和 Object

通过上面的讲解，接下来我们的重点要放在 Function 和 Object 两个类型上。

### Function 和 Object 的区别

- Function 可以被执行

- Function 可以当做 Object 的构造函数，比如当我们使用 new操作符后面跟着一个 Function时，这个 Function会被当成构造函数返回一个对象。 代码如下：

  ```javascript
  function Person(name) {
      this.name = name
  }
  var p1 = new Person('yxh');
  console.log(typeof Person)  // function
  console.log(typeof p1)      // object
  ```

**从代码中我们可以看出，构造函数本身是一个 function ,而构造函数返回的实例其实是一个object**

- 构造函数function 有 prototype 属性，而 实例 object 没有 prototype 属性. 代码如下：

  ```js
  function Person(name) {
      this.name = name
  }
  var p1 = new Person('yxh');
  console.log(Person.prototype)  // Person {}
  console.log(p1.prototype)      // undefined
  ```

明确了 Function 与 Object 的关系后，我们接下来讲解在继承中prototype和`__proto__`起到了什么作用。

## 在继承中prototype和__proto__起到了什么作用

在类似 java 这种语言中，继承的概念是通过类和类之间实现的，但 javascript 根本没有类，都是对象，所以，在 javascript中，继承的概念是通过对象和对象之间实现的。
在考虑 javascript 继承的时候，范围只限于引用数据类型，虽然引用数据类型分为 Function 和 Object 两种，但在继承问题上，不需要区分 Function 和 Object，只需要统一看成对象即可。
那么，javascript 究竟是通过什么来确定继承关系的呢？ 答案是 proro
__proto__和prototype 不同，prototype 只在 Function  中有，而__proto__则在Function和Object中都有。
代码如下：

```js
function Person(name) {
    this.name = name
}
var p1 = new Person('yxh');
console.log(Person.prototype)  // Person {}
console.log(p1.prototype)      // undefined
console.log(Person.__proto__)  // ƒ () { [native code] } Person是Function的实例，所以指向Function的原型
console.log(p1.__proto__)      // Person {}
```

简单总结javascript继承的本质： **一个对象 A的__proto__属性指向的那个对象B，B就是 A 的原型对象（或者叫父对象），对象 A 可以使用对象 B 中的属性和方法，同时也可以使用对象 B 的 原型对象C 上的属性和方法，以此递归，就是所谓的原型链**

示例代码:

```js
let A = {name:'yxh'}
let B = {age:18}
let C = {like(){
    console.log('写代码')
}}

A.__proto__ = B
B.__proto__ = C

console.log(A.name)  // yxh
console.log(A.age)   // 18
A.like()             // 写代码
```

以上代码实现了 javascript 最简单的继承，似乎没什么，一个__proto__就实现了继承问题。那还要 prototype 做什么呢？prototype在继承中又起什么作用呢，其实 prototype 真正起作用的是把 Function 当做构造函数使用的时候，因为__proto__ 并不是官方标准定义的属性，所以借助 prototype属性来模仿类和类之间的继承模式。

接下来重点分析用 Function类型构造对象过程，当你知道使用 new 操作符都做了什么的时候，你就很清楚 prototype 的作用了。

## new 操作到底做了什么

```js
var p1 = new Person('yxh');
```

通过上面的分析，我们知道 p1是 object 的类型， Person 是 Function 类型。 在 java中，如果你这么写，那么  Person 应该是一个类（class），但是 javascript 中并没有类，但是我们又很想借鉴这种语法形式，应该怎么办呢，这个任务只能交给 Function Person。 看下完整代码： 

```js
function Person(name,age) {
    this.name = name
    this.age = age
}
Person.prototype.getName = function() {
    console.log('name是：' + this.name)
}
let p1 =  new Person('yxh',22)
console.log(p1.name)    // yxh
console.log(p1.age)     // 22
p1.getName()            // name是：yxh
```



上面这种写法，就是经典的构建构造函数，但是 new到底都干了啥呢？

- 第一步： Person 被执行。当使用 new关键字时， Person 函数会在 p 的作用域下被执行，所以这里的 this 就是实例p，这样，name,age,hobby三个属性才会被当做 p 的属性被创建，

- 第二步：将 p.__proto__指向  Person.prototype,这才是构造函数的精髓所在，所以，p 就继承了  Person.prototype中的（以及其原型链上的）属性和方法。验证如下：

  ```js
  function Person(name,age) {
      this.name = name
      this.age = age
  }
  Person.prototype.getName = function() {
      console.log('name是：' + this.name)
  }
  let p1 =  new Person('yxh',22)
  console.log(p1.name)    // yxh
  console.log(p1.age)     // 22
  p1.getName()            // name是：yxh
  
  console.log(p1.__proto__  === Person.prototype)  // true
  ```

这样，一个鲜活的实例就被创建出来了。

## 总结

最后，我们用Stack Overflow上关于这个问题得票最多答案作为总结，他解释的非常简单

下面是答案：

`__proto __`is the actual object that is used in the lookup chain to resolve methods, etc. prototype is the object that is used to build `__proto__ `when you create an object with new

翻译一下：

`__proto__`是真正用来查找原型链去获取方法的对象。

prototype是在用new创建对象时用来构建`__proto__`的对象

> 参考 ：https://juejin.im/post/6844903713669120008 



