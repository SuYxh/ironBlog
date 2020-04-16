---
title: JavaScript数组
date: 2019-03-24
author: yxh
isShowComments: false
---


## 1、创建一个数组
```javascript
// (1)常规方式:
 var myCars=new Array(); 
 myCars[0]="Saab";    
 myCars[1]="Volvo";
 myCars[2]="BMW";

 // (2)简洁方式:
 var myCars=new Array("Saab","Volvo","BMW");

 // (3)字面
var myCars=["Saab","Volvo","BMW"];
```


## 2、访问数组

通过指定数组名以及索引号码，你可以访问某个特定的元素。
```javascript
// 访问myCars数组的第一个值：
 var name=myCars[0];
// 修改了数组 myCars 的第一个元素:
 myCars[0]="Opel";
```

## 3、数组常用操作
- `length` 获取Array的长度
```js
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
```
::: warning
(1) **注意** ： 直接给Array的length赋一个新的值会导致`Array`大小的变化：
```js
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]
```
(2) **注意** ： 如果通过索引赋值时，索引超过了范围，同样会引起`Array`大小的变化：
```js
var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
```
:::
- `for`循环遍历数组
```js
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}
```

- `Array`通过`indexOf()`来搜索一个指定的元素的位置
```js
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2
// 注意，数字30和字符串'30'是不同的元素。
```

- `slice()`就是对应`String`的`substring()`版本，它截取`Array`的部分元素，然后**返回一个新的`Array`**
```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
```
::: tip 复制数组
 如果不给`slice()`传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地**复制一个Array***
```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false
```
:::

- `push()`向`Array`的末尾添加若干元素，`pop()`则把`Array`的最后一个元素删除掉
```js
var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
arr; // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr; // []
arr.pop(); // 空数组继续pop不会报错，而是返回undefined
arr; // []
```

- `unshift()`方法向 `Array`的头部添加若干元素，`shift()`方法则把`Array`的第一个元素删掉：
```js
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
arr; // []
```

- `sort()`可以对当前`Array`进行排序，它会直接修改当前`Array`的元素位置，直接调用时，按照默认顺序排序：
```js
var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']
```
::: warning
**思考？** 能否按照我们自己指定的顺序排序呢？ [见下方](#4、数组训练)
:::

- `reverse()`把整个`Array`的元素给掉个个，也就是反转,反转字符串的时候也使用到这个
```js
var arr = ['one', 'two', 'three'];
arr.reverse(); 
arr; // ['three', 'two', 'one']
```

- `splice()`方法是修改`Array`的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

- `concat()`方法把当前的`Array`和另一个`Array`连接起来，并**返回一个新的`Array`**
```js
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']
```
::: warning
**注意** : `concat()`方法并没有修改当前`Array`，而是返回了一个新的`Array`。

实际上，`concat()`方法可以接收**任意个元素**和`Array`，并且自动把`Array`拆开，然后全部添加到新的`Array`里
```js
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```
:::

- `join()`方法是把当前`Array`的每个元素都用指定的字符串连接起来，然后**返回连接后的字符串**：
```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
// 如果Array的元素不是字符串，将自动转换为字符串后再连接。
```

- 判断一个数据类型是不是数组
```js
var arr = [1,2,3]
console.log(arr instanceof Array)   // true
console.log(Object.prototype.toString.call(arr))  //[object Array]
```


## 4、数组训练
- 合并三个数组 - `concat()`
```js
var parents = ["Jani", "Tove"];
var brothers = ["Stale", "Kai Jim", "Borge"];
var children = ["Cecilie", "Lone"];
var family = parents.concat(brothers, children);
document.write(family);
```

- 用数组的元素组成字符串 - `join()`
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join()) 
```	

- 转换数组到字符串 - `toString()`
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var str = fruits.toString();
console.log(str) 
```

- 数字排序（按数字顺序升序）- `sort()`
```js
var points = [40,100,1,5,25,10];
var newPoints = points.sort(function(a,b){return a-b});
console.log(newPoints) 
```

- 数字排序（按数字顺序降序）- `sort()`
```js
var points = [40,100,1,5,25,10];
var newPoints = points.sort(function(a,b){return b-a});
console.log(newPoints) 
```









