---
title: JavaScript函数
date: 2019-03-24
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







函数名与变量名称重名时候，函数将替代变量！

```javascript
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
	1
```



![](http://qn.huat.xyz/content/20200406103916.png)





