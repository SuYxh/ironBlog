---
title: JavaScript数据类型
date: 2019-03-24
---

## 1、JavaScript toString() 方法

#### 定义和用法

数字的字符串表示。

#### 语法

`number.toString(radix)`

#### 参数值

| 参数    | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| *radix* | 可选。规定表示数字的基数，是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。但是要注意，如果该参数是 10 以外的其他值，则 ECMAScript 标准允许实现返回任意值。2 - 数字以二进制值显示    8 - 数字以八进制值显示   16 - 数字以六进制值显示 |

```javascript
var num = 15;
var a = num.toString();
var b = num.toString(2);
var c = num.toString(8);
var d = num.toString(16);
var n=a + "<br>" + b + "<br>" + c + "<br>" + d;
console.log(n);

// 结果
15
1111
17
f
```

```javascript
var count = 10;

console.log(count.toString());    // 输出 '10'
console.log((17).toString());     // 输出 '17'
console.log((17.2).toString());   // 输出 '17.2'

var x = 6;

console.log(x.toString(2));       // 输出 '110'
console.log((254).toString(16));  // 输出 'fe'

console.log((-10).toString(2));   // 输出 '-1010'
console.log((-0xff).toString(2)); // 输出 '-11111111'
```

> 也可以通过 + 号来进行字符串转换 或者 string()
>
> var n=5;
>
> var z = ''+5;
>
> var m = typeof(z);
>
> console.log(z,m);

## 2、JavaScript Number() 方法

将 xxx数据类型转换成 Number类型

```javascript
var z = Number(true);
var m = Number(false);
var a = Number(null);
var b = Number(undefined);
var c = Number(NaN);
var d = Number('NaN');
console.log(z,m,a,b,c,d);  //结果： 1 0 0 NaN NaN NaN
```

#### [parseInt() 函数]( https://www.runoob.com/jsref/jsref-parseint.html )

#### [parseFloat() 函数]( https://www.runoob.com/jsref/jsref-parsefloat.html )

## 3、Boolean()

```javascript
var m = Boolean(1);
var a = Boolean(null);
var b = Boolean(undefined);
var c = Boolean(NaN);
var d = Boolean('NaN');
var e = Boolean('');
console.log(m,a,b,c,d,e);  // true false false false true false
```

