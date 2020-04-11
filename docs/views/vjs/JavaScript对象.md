---
title: JavaScript对象
date: 2019-03-24
---



JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...

## 1、JavaScript 对象

对象只是一种特殊的数据。对象拥有**属性**和**方法**。

## 2、创建 JavaScript 对象

通过 JavaScript，能够定义并创建自己的对象。

创建新对象有两种不同的方法：

- 定义并创建对象的实例
- 使用函数来定义对象，然后创建新的对象实例

```javascript
person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";

person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};

function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}
```



## 3、访问对象的属性

属性是与对象相关的值。访问对象属性的语法是：

```javascript
 objectName.propertyName 
```

## 4、访问对象的方法

方法是能够在对象上执行的动作。您可以通过以下语法来调用方法：

```javascript
 objectName.methodName()
```



## 5、 [JavaScript 标准的内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

##### (1) **`Math`** 对象

**描述：** **`Math`** 对象是一个内置对象，它拥有一些数学常数属性和数学函数方法。`Math` 不是一个函数对象。

`Math` 用于 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 类型



- `Math.abs(x)` 函数返回指定数字 “x“ 的绝对值 

  ```js
  Math.abs('-1');     // 1
  Math.abs(-2);       // 2
  Math.abs(null);     // 0
  Math.abs("string"); // NaN
  Math.abs();         // NaN
  ```

  

- `Math.floor()` 返回小于或等于一个给定数字的最大整数。

  ```js
  Math.floor( 45.95); 
  // 45 
  Math.floor( 45.05); 
  // 45 
  Math.floor( 4 ); 
  // 4 
  Math.floor(-45.05); 
  // -46 
  Math.floor(-45.95); 
  // -46
  ```

   

- `Math.random()` 函数返回一个浮点,  伪随机数在范围从**0到**小于**1**，也就是说，从0（包括0）往上，但是不包括1（排除1），然后您可以缩放到所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。

  - **得到一个大于等于0，小于1之间的随机数**

    ```javascript
    function getRandom() {
      return Math.random();
    }
    ```

  - **得到一个两数之间的随机数。**这个例子返回了一个在指定值之间的随机数。这个值不小于 `min`（有可能等于），并且小于（不等于）`max`。

    ```javascript
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min; 
    }
    ```

  - **得到一个两数之间的随机整数。**这个例子返回了一个在指定值之间的随机整数。这个值不小于 `min` （如果 `min` 不是整数，则不小于 `min` 的向上取整数），且小于（不等于）`max`。

    ```javascript
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    //不含最大值，含最小值
    }
    ```

  - **得到一个两数之间的随机整数，包括两个数在内**。上一个例子提到的函数 `getRandomInt()` 结果范围包含了最小值，但不含最大值。如果你的随机结果需要同时包含最小值和最大值，怎么办呢? `getRandomIntInclusive()` 函数可以实现。

    ```js
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }
    
    ```



`Math`对象详细介绍：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math



##### (2)  `Date` 对象

**描述：**创建一个 JavaScript `Date` 实例，该实例呈现时间中的某个时刻。`Date` 对象则基于 [Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)，即自1970年1月1日（UTC）起经过的毫秒数。 

- **`Date.now()`** 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。 

  ```js
  	var timeInMs = Date.now();
  	console.log(timeInMs);   // 1586149863327 
  
  ```

- 获取年月日 

  ```js
  	var  xiaoshi = date.getHours();  //获取当前时间的小时
  	var  ri = date.getDate();        // 获取 几号
  	var  yue = date.getMonth()+1;   // 获取月份，js的月份是从0开始的
  	var  nian = date.getFullYear();   // 获取当前年份
  	console.log(xiaoshi,ri,yue,nian);
  
  ```

  

详细:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

##### (3) `Array` 对象

**描述：**JavaScript的 `Array` 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。 

- **创建数组**

```js
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2

```

- **通过索引访问数组元素**

```js
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana

```

- **遍历数组**

```js
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});
// Apple 0
// Banana 1

```

- **添加元素到数组的末尾**

```js
var newLength = fruits.push('Orange');
// newLength:3; fruits: ["Apple", "Banana", "Orange"]

```

- **删除数组末尾的元素**

```js
var last = fruits.pop(); // remove Orange (from the end)
// last: "Orange"; fruits: ["Apple", "Banana"];

```

- **删除数组最前面（头部）的元素**

```js
var first = fruits.shift(); // remove Apple from the front
// first: "Apple"; fruits: ["Banana"];

```

- **添加元素到数组的头部**

```js
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];

```

- **找出某个元素在数组中的索引**

```js
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1

```

- **通过索引删除某个元素**

```js
var removedItem = fruits.splice(pos, 1); // this is how to remove an item

// ["Strawberry", "Mango"]

```

- **从一个索引位置删除多个元素**

```js
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 
// ["Turnip", "Radish"]

```

- **复制一个数组**

```js
var shallowCopy = fruits.slice(); // this is how to make a copy 
// ["Strawberry", "Mango"]

```



##### (4)  **`String`** 对象

**描述：** **`String`** 全局对象是一个用于字符串或一个字符序列的构造函数。 

- `indexOf()` 方法返回调用它的 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String) 对象中第一次出现的指定值的索引，从 `fromIndex` 处进行搜索。如果未找到该值，则返回 -1。 

- **`substring() `**方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。 

- `toLowerCase()` 会将调用该方法的字符串值转为小写形式，并返回。 
- `toUpperCase()` 方法返回一个将调用字符串转换为大写形式的值。（如果这个值不是字符串则会被变成字符串） 
- **`replace()`** 方法返回一个由替换值（`replacement`）替换一些或所有匹配的模式（`pattern`）后的新字符串。模式可以是一个字符串或者一个[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp)，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。 
- **`trim()`** 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）。 

