---
title: JavaScript数据类型
date: 2019-03-24
author: yxh
isShowComments: false
---

::: tip

- **值类型(基本类型)：** 字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

- **引用数据类型：** 对象(Object)、数组(Array)、函数(Function)。

 Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
:::

:::warning
**思考?** 值类型(基本类型) 与 引用数据类型 有什么区别？
:::


## 1、JavaScript 字符串
### 简介
字符串是存储字符的变量；字符串可以是引号中的任意文本。可以使用单引号或双引号。

::: warning
 **思考?**  js中单双引号有什么区别？
:::

```js
var str = "It's alright";
var str1 = 'I\'m \"OK\"!';
// 多行字符串使用ES6中的反引号
```
### 常用操作

- `toUpperCase()`把一个字符串全部变为大写：
- `toLowerCase()`把一个字符串全部变为小写：
- `indexOf()`会搜索指定字符串出现的位置：
    ```js
    var s = 'hello, world';
    s.indexOf('world'); // 返回7
    s.indexOf('World'); // 没有找到指定的子串，返回-1
    ```
- `substring()`返回指定索引区间的子串：
    ```js
    var s = 'hello, world'
    s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
    s.substring(7); // 从索引7开始到结束，返回'world'
    ```
- `str.split("").reverse().join("")` 反转 字符串
    ```js
    var str = "Hello";
    console.log(str.split("").reverse().join(""));  // olleH
    ```
- `toString()` 方法
    - 定义和用法 : 数字的字符串表示。
    - 语法  :  `number.toString(radix)`
    - 参数值

    | 参数    | 描述                                                         |
    | :------ | :----------------------------------------------------------- |
    | *radix* | 可选。规定表示数字的基数，是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。但是要注意，如果该参数是 10 以外的其他值，则 ECMAScript 标准允许实现返回任意值。2 - 数字以二进制值显示    8 - 数字以八进制值显示   16 - 数字以六进制值显示 |

    - 进制转换

    ```javascript
    var num = 15;
    var a = num.toString();
    var b = num.toString(2);
    var c = num.toString(8);
    var d = num.toString(16);
    var n=a + "<br>" + b + "<br>" + c + "<br>" + d;
    console.log(n);   //  15 1111 17 f

    var x = 6;
    console.log(x.toString(2));       // 输出 '110'
    console.log((254).toString(16));  // 输出 'fe'
    console.log((-10).toString(2));   // 输出 '-1010'
    console.log((-0xff).toString(2)); // 输出 '-11111111'
    ```
- **也可以通过 + 号来进行字符串转换 或者 `string()`**
    ```js
     var n=5;
     var z = ''+5;
     var m = typeof(z);
     console.log(z,m);
    ```

## 2、JavaScript 数字
### 简介
JavaScript 只有一种数字类型。数字可以带小数点，也可以不带；极大或极小的数字可以通过科学（指数）计数法来书写：
```js
var y=123e5;      // 12300000
var z=123e-5;     // 0.00123
```

### 常用操作
- JavaScript Number() 方法
**定义：** 将 xxx数据类型转换成 Number类型

```javascript
var z = Number(true);
var m = Number(false);
var a = Number(null);
var b = Number(undefined);
var c = Number(NaN);
var d = Number('NaN');
var e = Number('hello');
console.log(z,m,a,b,c,d);  //结果： 1 0 0 NaN NaN NaN NaN
```
:::tip
- [parseInt() 函数]( https://www.runoob.com/jsref/jsref-parseint.html )

- [parseFloat() 函数]( https://www.runoob.com/jsref/jsref-parsefloat.html )
:::

## 3、JavaScript 布尔
### 简介
布尔（逻辑）只能有两个值：true 或 false。
```js
var x=true;
var y=false;
```
### 常用操作
- Boolean()

```javascript
var m = Boolean(1);
var a = Boolean(null);
var b = Boolean(undefined);
var c = Boolean(NaN);
var d = Boolean('NaN');
var e = Boolean('');
console.log(m,a,b,c,d,e);  // true false false false true false
```

## 4、JavaScript 数组
[JavaScript数组](./JavaScript数组.md)

## 5、JavaScript 对象
[JavaScript对象](./JavaScript对象.md)


## 6、Undefined 和 Null
Undefined 这个值表示变量不含有值；可以通过将变量的值设置为 null 来清空变量。
> Undefined 和 Null 的值相等，类型不相等
```js
var a;
var b = null;
console.log(a)                   // undefined
console.log(a == b ? 1 : 0)     //  1
```
