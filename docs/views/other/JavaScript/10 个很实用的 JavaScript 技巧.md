---
title: 10 个很实用的 JavaScript 技巧
date: 2020-05-07
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
---

### arguments 对象转成数组

`arguments`对象是函数内可访问的类数组对象，包含了传给函数的参数值。

但它跟数组又不太一样，虽然可以访问值和获取长度，却无法使用数组的其他方法。

所幸的是，我们可以很方便地把它转成普通的数组：

```js
var argArray = Array.prototype.slice.call(arguments);
```

### 数组求和

最容易想到的方法是用循环，但其实有更快捷的方式：

```js
var numbers = [3, 5, 7, 2];
var sum = numbers.reduce((x, y) => x + y);
console.log(sum); // 17
```

### 短路条件语句

```js
if (hungry) {
    goToFridge();
}
```

以上代码可以简化成布尔变量和函数调用组成的表达式：

```js
hungry && goToFridge()
```

### 用逻辑或设置变量默认值

 为了避免变量未定义（`undefined`）导致的运行时异常，可以通过逻辑或表达式给变量设置默认值： 

```js
function doSomething(arg1){ 
    arg1 = arg1 || 32; // 如果 arg1 未设置，用 32 作为默认值
}
```

### 逗号操作符

逗号操作符（`,`）从左到右计算每个操作数的值，并返回最后一个操作数的值。

```js
let x = 1;

x = (x++, x);

console.log(x); // 2

x = (2, 3);

console.log(x); // 3
```

### 用 length 重新设置数组大小

通过改变数组`length`的值，可以直接改变数组的大小，可用于调整数组大小或者清空数组。

```js
var array = [11, 12, 13, 14, 15];  
console.log(array.length); // 5  

array.length = 3;  
console.log(array.length); // 3  
console.log(array); // [11,12,13]

array.length = 0;  
console.log(array.length); // 0  
console.log(array); // []
```

### 巧用数组解构赋值交换两个变量的值

解构赋值是 ES6 新增的语法，可用于从数组提取元素，或者从对象提取属性值到单独的变量。这里用数组解构可以很方便地交换两个变量的值：

```js
let a = 1, b = 2
[a, b] = [b, a]
console.log(a) // -> 2
console.log(b) // -> 1
```

###  数组元素随机排序（洗牌算法） 

```js
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(list.sort(function() {
    return Math.random() - 0.5
})); 
// [4, 8, 2, 9, 1, 3, 6, 5, 7]
```

### 对象动态属性名

这也是 ES6 新增的语法，可以通过变量的形式指定属性名：

```js
const dynamic = 'color';
var item = {
    brand: 'Ford',
    [dynamic]: 'Blue'
}
console.log(item); 
// { brand: "Ford", color: "Blue" }
```

### 数组去重

面试常考题，如果不考虑自己实现，可以通过`Set`方便地完成数组去重：

```js
const my_array = [1, 2, 2, 3, 3, 4, 5, 5]
const unique_array = [...new Set(my_array)];
console.log(unique_array); // [1, 2, 3, 4, 5]
```


