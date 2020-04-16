---
title: JavaScript函数
date: 2019-03-24
author: yxh
isShowComments: false
---


## 1、JavaScript 函数定义

- JavaScript 使用关键字 **function** 定义函数。函数可以通过声明定义，也可以是一个表达式。

```javascript
function functionName(parameters) {        
  执行的代码        
}
```

- JavaScript 函数可以通过一个表达式定义。函数表达式可以存储在变量中, 变量也可作为一个函数使用： ：

```javascript
var x = function (a, b) {return a * b};
var z = x(4, 3);

//以上函数实际上是一个 匿名函数 (函数没有名称)。
//函数存储在变量中，不需要函数名称，通常通过变量名来调用。
```

- Function() 构造函数。函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。

```javascript
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
```

- 自调用函数。函数表达式可以 "自调用"。自调用表达式会自动调用。如果表达式后面紧跟 () ，则会自动调用。Y不能自调用声明的函数。通过添加括号，来说明它是一个函数表达式：

```javascript
(function () {
    var x = "Hello!!";      // 我将调用自己
})();
```

- 函数可作为一个值使用

```javascript
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3);
```

- JavaScript 函数可作为表达式使用： 

```javascript
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3) * 2;
```


::: warning
函数名与变量名称重名时候，函数将替代变量！
```js
console.log(a);
function a(){
	console.log('aaaaaa');
}
var a =1;
console.log(a);
//结果如下：
ƒ a(){
	console.log('aaaaaa');
}
```
:::


## 2、arguments
- JavaScript还有一个免费赠送的关键字`arguments`，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。`argument`s类似`Array`但它不是一个`Array`：
```js
function foo(x) {
	console.log('x = ' + x); // 10
	console.log(arguments);
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
```
- 利用`arguments`，可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值：
- 实际上`arguments`最常用于判断传入参数的个数。可能会看到这样的写法：
```js
// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}
```
要把中间的参数b变为“可选”参数，就只能通过arguments判断，然后重新调整参数并赋值。


## 3、变量提升
```js
var x = 'Hello, ' + y;
console.log(x);  // Hello, undefined
var y = 'Bob';

var x1 = 'Hello, ' + y1;
console.log(x1);  //  Uncaught ReferenceError: y1 is not defined
```

## 4、函数提升
```js
console.log(myFunction(5))
function myFunction(y) {
    return y * y;
}
```

## 5、名字空间
全局变量会绑定到`window`上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：
```js
// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};
```
把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等。



