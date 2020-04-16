---
title: For循环
date: 2020-03-13
lang: 'zh-CN'
author: yxh
isShowComments: false
---

## 语法
```js
for (语句 1; 语句 2; 语句 3)
{
    被执行的代码块
}
```
**语句 1**（代码块）开始前执行

**语句 2** 定义运行循环（代码块）的条件

**语句 3** 在循环（代码块）已被执行之后执行

- 语句 1 还可以省略（比如在循环开始前已经设置了值时）
```js
var i=2,len=cars.length;
for (; i<len; i++)
{ 
    document.write(cars[i] + "<br>");
}
```
- 通常语句 2 用于评估初始变量的条件。语句 2 同样是可选的。如果语句 2 返回 true，则循环再次开始，如果返回 false，则循环将结束。
::: waring
如果省略了语句 2，那么必须在循环内提供 break。否则循环就无法停下来。这样有可能令浏览器崩溃。

for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环：
```js
var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}
```
:::

- 通常语句 3 会增加初始变量的值。语句 3 也是可选的。语句 3 有多种用法。增量可以是负数 (i--)，或者更大 (i=i+15)。语句 3 也可以省略（比如当循环内部有相应的代码时）：
```js
var i=0,len=cars.length;
for (; i<len; )
{ 
    document.write(cars[i] + "<br>");
    i++;
}
```

## for循环遍历数组
```js
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(i+ "---" +x);
}
//
```

## for/in 循环遍历对象
```js
var person={fname:"Bill",lname:"Gates",age:56}; 
for (let item in person) {
    console.log(item+ "----" +person[item]) 
}
//fname----Bill
//lname----Gates
//age----56
```
::: warning
- 要过滤掉对象继承的属性，用`hasOwnProperty()`来实现：
    ```js
    var o = {
        name: 'Jack',
        age: 20,
        city: 'Beijing'
    };
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            console.log(key); // 'name', 'age', 'city'
        }
    }
    ```
- 由于`Array`也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出`Array`的索引。**注意，for ... in对Array的循环得到的是`String`而不是`Number`。**
```js
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'   
    console.log(a[i]); // 'A', 'B', 'C'
}
```

:::

## 实例
- 1--100数字之和
```js
var sum = 0;
for (var i=0;i<=100;i++) {
    sum += i;
}
console.log("1--100的和为："+sum);  // 1--100的和为：5050
// 如果是乘法，i 和 sum 均不能从 0 开始
```	
- 打印正方形
```js
var square = '';
for (var m=0;m<10;m++) {
    for (var n=0;n<10;n++) {
        square += "* "
    }
    // 内循环完成后所形成的图形为  * * * * * * * * * * 
    // 再次应该需要加上一个换行的操作
    square += "\n";
}
// 当循环完成后 就能打印出 10x10 的正方形
console.log(square);
```    
  
- 打印三角形
```js
var square2 = '';
for (var p=0;p<10;p++) {
    for (var q=p;q<10;q++) {
        square2 += "* "
    }
    // 内循环完成后所形成的图形为  * * * * * * * * * * 
    // 再次应该需要加上一个换行的操作
    square2 += "\n";
}
// 当循环完成后 就能打印出 10x10 的正方形
console.log(square2);
```
	
- 九九乘法表
```js
var str = '';
for (var a=1;a<=9;a++) {
    for (var b=a;b<=9;b++) {
        str += a+ "*" +b + "=" + (a*b) + "\t";
    }
    str += "\n";
}
console.log(str);
```