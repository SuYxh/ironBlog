---
title: JavaScript对象
date: 2019-03-24
author: yxh
isShowComments: false
---

> JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...

对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义,属性由逗号分隔。

对象只是一种特殊的数据。对象拥有**属性**和**方法**。

## 1、创建 JavaScript 对象

- 定义并创建对象的实例
- 使用函数来定义对象，然后创建新的对象实例

```javascript
//创建了对象的一个新实例，并向其添加了四个属性：
person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";

person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};

//使用对象构造器，使用函数来构造对象
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}
```

## 2、访问对象的属性 和 方法
```javascript
name=person.lastname;
name=person["lastname"];
person.eat()
```
::: warning
如果属性名包含特殊字符，就必须用''括起来,访问这个属性也无法使用.操作符，必须用['xxx']来访问：
```js
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'
```
**JavaScript规定，访问不存在的属性不报错，而是返回undefined**
:::

## 3、对象常用操作
- 对象添加或删除属性
```js
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
```

- 检测对象是否拥有某一属性，可以用in操作符：
```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false
```
::: warning
**注意** ：如果`in`判断一个属性存在，这个属性不一定是`xiaoming`的，它可能是`xiaoming`继承得到的：
```js
'toString' in xiaoming; // true
```
因为`toString`定义在`object`对象中，而所有对象最终都会在原型链上指向`object`，所以`xiaoming`也拥有`toString`属性。

- 要判断一个属性是否是对象自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法
```js
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false
```
:::













