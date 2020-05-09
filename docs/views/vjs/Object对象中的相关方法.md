### Object对象中的相关方法

`Object`对象的原生方法分成两类：`Object`本身的方法与`Object`的实例方法。

所谓本身的方法就是直接定义在当前构造函数对象`Object`对象上的

```js
//例子
Object.xxx()
```

`Object`实例方法就是定义在`Object.prototype`的方法。它可以被`Object`实例直接共享

```js
Object.prototype.hello = function(){
    console.log('hello');
}
var obj = new Object();
obj.hello();//hello
```

#### Object的静态方法

所谓`静态方法`，是指定制在`Object`对象本身的方法

以下两个方法的作用都是**用来遍历对象的属性**

##### Object.keys()

`Object.keys`方法的参数是一个对象，返回一个数组。该数组的成员都是对象自身的所有属性名

```js
var arr = ['a','b','c'];
Object.keys(arr);//['0','1','2'];
var obj = {
    0:'a',
    1：'b',
    2: 'c'
}
Object.keys(obj);//['0', '1', '2']
```

##### Object.getOwnPropertyNames()

`Object.getOwnPropertyNames`方法与`Object.keys`类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。

```js
var obj = {
    0:'a',
    1：'b',
    2: 'c'
}
Object.getOwnPropertyNames(obj);// ["0", "1", "2"]
```

 对于一般的对象来说，`Object.keys()`和`Object.getOwnPropertyNames()`返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。`Object.keys`方法只返回可枚举的属性，`Object.getOwnPropertyNames`方法还返回不可枚举的属性名。 

```js
var arr = ['a','b','c'];
Object.getOwnPropertyNames(arr);//['0','1','2','length'];
```

上面代码中，数组的`length`属性是不可枚举的属性，所以只出现在`Object.getOwnPropertyNames`方法的返回结果中。

由于 JavaScript 没有提供计算对象属性个数的方法，所以可以用这两个方法代替。

```js
var obj = {
    0:'a',
    1：'b',
    2: 'c'
}
Object.keys(obj).length //3
Object.getOwnPropertyNames(obj).length //3
```

一般情况下，使用`Object.keys`方法遍历对象的属性应用最多。

##### Object.getPrototypeOf()

`Object.getPrototypeOf`方法返回参数对象的原型。这是获取原型对象的标准方法

```js
var Fn = function(){};
var f1 = new Fn();
console.log(Object.getPrototypeOf(f1) === Fn.prototyoe);//true
```

上面代码中，实例对象`f1`的原型是`F.prototype`。

下面是几种特殊对象的原型。

```js
// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true
// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null // true
// 函数的原型是 Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype // true
```

##### Object.setPrototypeOf()

`Object.setPrototypeOf`方法接收两个参数，第一个是现有对象，第二个是原型对象

```js
var a = {};
var b = {x : 1};
Object.setPrototypeOf(a,b);
console.log(Object.getPrototypeOf(a));//{x:1}
a.x //1
```

 `new`命令可以使用`Object.setPrototypeOf`方法模拟。 

```js
var F = function () {
  this.foo = 'bar';
};
//var f = new F();
// 等同于
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
```

##### Object.create()

生成实例对象的常用方法是，使用`new`命令让构造函数返回一个实例。但是很多时候，只能拿到一个实例对象，它可能根本不是由构建函数生成的，那么能不能从一个实例对象，生成另一个实例对象呢？

JavaScript 提供了`Object.create`方法，用来满足这种需求。该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

```js
// 原型对象
var A = {
  print: function () {
    console.log('hello');
  }
};
// 实例对象
var B = Object.create(A);
Object.getPrototypeOf(B) === A // true
B.print() // hello
B.print === A.print // true
```

上面代码中，`Object.create`方法以`A`对象为原型，生成了`B`对象。`B`继承了`A`的所有属性和方法。

#### 其它方法

除了上面提到的两个方法,`Object`还有不少的其它静态方法，后文咱们会一一详细讲解

**（1）对象属性模型的相关方法**

- `Object.getOwnPropertyDescriptor()`：获取某个属性的描述对象。
- `Object.defineProperty()`：通过描述对象，定义某个属性。
- `Object.defineProperties()`：通过描述对象，定义多个属性。

**（2）控制对象状态的方法**（了解部分，自行查阅MDN）

- `Object.preventExtensions()`：防止对象扩展。
- `Object.isExtensible()`：判断对象是否可扩展。
- `Object.seal()`：禁止对象配置。
- `Object.isSealed()`：判断一个对象是否可配置。
- `Object.freeze()`：冻结一个对象。
- `Object.isFrozen()`：判断一个对象是否被冻结。

#### Object的实例方法

方法定义在`Object.prototype`对象上。我们称之为实例方法，所有`Object`的实例对象都继承了这些方法

`Object`实例对象的方法，主要有以下六个。

- `Object.prototype.valueOf()`：返回当前对象对应的值。
- `Object.prototype.toString()`：返回当前对象对应的字符串形式。
- `Object.prototype.toLocaleString()`：返回当前对象对应的本地字符串形式。
- `Object.prototype.hasOwnProperty()`：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
- `Object.prototype.isPrototypeOf()`：判断当前对象是否为另一个对象的原型。
- `Object.prototype.propertyIsEnumerable()`：判断某个属性是否可枚举。

##### Object.prototype.valueOf()

`valueOf`方法的作用是返回一个对象的`值`,默认情况下返回对象本身

```js
var obj = new Object();
obj.valueOf() === obj;//true
```

 `valueof`方法的主要用途是，JavaScript自动类型转换时会默认调用这个方法 

```js
var obj = new Object();
//JavaScript就会默认调用valueOf()方法，求出obj的值再与1相加
console.log(1+obj);//"1[object Object]"
```

 所以，如果自定义`valueOf`方法，就可以得到想要的结果 

```js
var obj = new Object();
obj.valueOf = function(){
    return 2;
}
console.log(1 + obj)；//3
```

**原理**：用自定义的`Object.valueOf`,覆盖`Object.prototype.valueOf`

##### Object.prototype.toString()

`toString`方法的作用是返回一个对象的字符串形式，默认返回类型字符串

```js
var obj1 = new Object();
console.log(obj1.toString());//"[object Object]"
var obj2 = {a:1};
obj2.toString() // "[object Object]"
```

返回的这个结果说明了对象的类型。

字符串`[object Object]`本身没有太大的用处，但是通过自定义`toString`方法，可以让对象在自动类型转换时，得到想要的字符串形式。

```js
var obj = new Object();
obj.toString = function(){
    return 'hello';
}
console.log(obj + '' + 'world');//"hello world"
```

 像数组、字符串、函数、Date对象都分别定义了自定义的`toString`方法，覆盖了`Object.prototype.toString()`方法 

```js
[1, 2, 3].toString() // "1,2,3"
'123'.toString() // "123"
(function () {
  return 123;
}).toString()
// "function () {
//   return 123;
// }"
(new Date()).toString()
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
```

**Object.prototype.toLocaleString()**方法跟`toString`方法用法一致。

目前，主要有三个对象自定义了`toLocaleString`方法

- Array.prototype.toLocaleString()
- Number.prototype.toLocaleString()
- Date.prototype.toLocaleString()

举例来说，日期的实例对象的`toString`和`toLocaleString`返回值就不一样，而且`toLocaleString`的返回值跟用户设定的所在地域相关

```js
var date = new Date();
date.toString() // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
date.toLocaleString() // "1/01/2018, 12:01:33 PM"
```

##### Object.prototype.isPrototypeOf()

实例对象的`isPrototypeOf`方法，用来判断该对象是否为该对象的原型。

```js
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);
o2.isPrototypeOf(o3);//true
o1.isPrototypeOf(o3);//true
```

 上面代码中，`o1`和`o2`都是`o3`的原型。这表明只要实例对象处在参数对象的原型链上，`isPrototypeOf`方法都返回`true`。 

```js
Object.prototype.isPrototypeOf({}) // true
Object.prototype.isPrototypeOf([]) // true
Object.prototype.isPrototypeOf(Object.create(null)) // false
```

上面代码中，由于`Object.prototype`处于原型链的最顶端，所以对各种实例都返回`true`，只有直接继承自`null`的对象除外。

##### `Object.prototype.__proto`__

实例对象的`__proto__`属性（前后各两个下划线），返回该对象的原型。该属性可读写。

```js
var obj = {};
var p = {};
obj.__proto__ = p;
Object.getPrototypeOf(obj) === p // true
```

上面代码通过`__proto__`属性，将`p`对象设为`obj`对象的原型。

根据语言标准，`__proto__`属性只有浏览器才需要部署，其他环境可以没有这个属性。它前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。因此，应该尽量少用这个属性，而是用`Object.getPrototypeOf()`和`Object.setPrototypeOf()`，进行原型对象的读写操作。

##### Object.prototype.hasOwnProperty

`Object.prototype.hasOwnProperty`方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

```js
var obj = {
    a: 123
}
obj.hasOwnProperty('b');//false
obj.hasOwnProperty('a');//true
obj.hasOwnProperty('toString');//false
```

上面代码中，对象`obj`自身具有`a`属性，所以返回`true`。`toString`属性是继承的，所以返回`false`。

#### 属性描述对象

JavaScript提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称之为”属性描述对象”。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息

下面是属性描述对象的一个例子

```js
{
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined
}
```

 属性描述对象提供了6个元属性

| 属性         | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| value        | `value`是该属性的属性值，默认为`undefined`。                 |
| writable     | `writable`是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为`true`。 |
| enumerable   | `enumerable`是一个布尔值，表示该属性是否可遍历，默认为`true`。如果设为`false`，会使得某些操作（比如`for...in`循环、`Object.keys()`）跳过该属性。 |
| configurable | `configurable`是一个布尔值，表示可配置性，默认为`true`。如果设为`false`，将阻止某些操作改写该属性，比如无法删除该属性，也不得改变该属性的属性描述对象（`value`属性除外）。也就是说，`configurable`属性控制了属性描述对象的可写性。 |
| get          | `get`是一个函数，表示该属性的取值函数（getter），默认为`undefined`。 |
| set          | `set`是一个函数，表示该属性的存值函数（setter），默认为`undefined`。 |

##### Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()`方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。

```js
var obj = {name:'MJJ'};
Object.getOwnPropertyDescriptor(obj,'name');
/*
{
configurable: true
enumerable: true
value: "MJJ"
writable: true
}
*/
//toString为继承来的属性，无法获取
Object.getOwnPropertyDescriptor(obj,'toString');//undefined
```

> 注意：Object.getOwnPropertyDescriptor()方法只能用于对象自身的属性，不能用于继承的属性

##### Object.defineProperty()

`Object.defineProperty`方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象。

语法如下:

```
Object.defineProperty(object, propertyName, attributesObject)
```

`Object.defineProperty`方法接受三个参数，依次如下。

- object：属性所在的对象
- propertyName：字符串，表示属性名
- attributesObject：属性描述对象

举例说明，定义`obj.name`可以写成下面这样

```js
var obj = Object.defineProperty({},'name',{
    value:'mjj',
    writable:false,
    enumerable:true,
    configurable:false
})
console.log(obj.name);//mjj
obj.name = 'alex';
console.log(obj.name);//mjj
```

上面代码中，`Object.defineProperty()`方法定义了`obj.p`属性。由于属性描述对象的`writable`属性为`false`，所以`obj.p`属性不可写。注意，这里的`Object.defineProperty`方法的第一个参数是`{}`（一个新建的空对象），`p`属性直接定义在这个空对象上面，然后返回这个对象，这是`Object.defineProperty()`的常见用法。

如果属性已经存在，`Object.defineProperty()`方法相当于更新该属性的属性描述对象。

##### Object.defineProperties()

如果一次性定义或修改多个属性，可以使用`Object.defineProperties()`方法

```js
var obj = Object.defineProperties({}, {
  p1: { value: 123, enumerable: true },
  p2: { value: 'abc', enumerable: true },
  p3: { 
    get: function () { 
        return this.p1 + this.p2 
    },
    enumerable:true,
    configurable:true
  }
});
console.log(obj.p1);//123
console.log(obj.p2);//"abc"
console.log(obj.p3);//"123abc"
```

上面代码中，`Object.defineProperties()`同时定义了`obj`对象的三个属性。其中，`p3`属性定义了取值函数`get`，即每次读取该属性，都会调用这个取值函数。

注意，一旦定义了取值函数`get`（或存值函数`set`），就不能将`writable`属性设为`true`，或者同时定义`value`属性，否则会报错

```js
var obj = {};
Object.defineProperty(obj, 'p', {
  value: 123,
  get: function() { return 456; }
});
// TypeError: Invalid property.
// A property cannot both have accessors and be writable or have a value
Object.defineProperty(obj, 'p', {
  writable: true,
  get: function() { return 456; }
});
// TypeError: Invalid property descriptor.
// Cannot both specify accessors and a value or writable attribute
```

上面代码中，同时定义了`get`属性和`value`属性，以及将`writable`属性设为`true`，就会报错。

`Object.defineProperty()`和`Object.defineProperties()`参数里面的属性描述对象，`writable`、`configurable`、`enumerable`这三个属性的默认值都为`false`。

```js
var obj = {};
Object.defineProperty(obj, 'foo', {});
Object.getOwnPropertyDescriptor(obj, 'foo')
/*
{
configurable: false,
enumerable: false,
value: undefined,
writable: false,
}
*/
```

上面代码中，定义`obj.foo`时用了一个空的属性描述对象，就可以看到各个元属性的默认值。

##### Object.prototype.propertyIsEnumerable()

实例对象的`propertyIsEnumerable()`方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回`false`。

```js
var obj = {};
obj.p = 123;
obj.propertyIsEnumerable('p') // true
obj.propertyIsEnumerable('toString') // false
```

上面代码中，`obj.p`是可遍历的，而`obj.toString`是继承的属性。

#### 元属性

##### value

`value`属性是目标属性的值

```js
var obj = {};
obj.p = 123;
Object.getOwnPropertyDescriptor(obj, 'p').value //123
Object.defineProperty(obj, 'p', { value: 246 });
obj.p // 246
```

上面代码是通过`value`属性，读取或改写`obj.p`的例子。

##### writable

`writable`属性是一个布尔值，决定了目标属性的值（value）是否可以被改变。

```js
var obj = {};
Object.defineProperty(obj, 'a', {
  value: 37,
  writable: false
});
obj.a // 37
obj.a = 25;
obj.a // 37
```

上面代码中，`obj.a`的`writable`属性是`false`。然后，改变`obj.a`的值，不会有任何效果。

注意，正常模式下，对`writable`为`false`的属性赋值不会报错，只会默默失败。但是，严格模式下会报错，即使对`a`属性重新赋予一个同样的值。

```js
'use strict';
var obj = {};
Object.defineProperty(obj, 'a', {
  value: 37,
  writable: false
});
obj.a = 37;
// Uncaught TypeError: Cannot assign to read only property 'a' of object
```

上面代码是严格模式，对`obj.a`任何赋值行为都会报错。

如果原型对象的某个属性的`writable`为`false`，那么子对象将无法自定义这个属性。

```js
var proto = Object.defineProperty({}, 'foo', {
  value: 'a',
  writable: false
});
var obj = Object.create(proto);
obj.foo = 'b';
obj.foo; // 'a'
```

上面代码中，`proto`是原型对象，它的`foo`属性不可写。`obj`对象继承`proto`，也不可以再自定义这个属性了。如果是严格模式，这样做还会抛出一个错误。

但是，有一个规避方法，就是通过覆盖属性描述对象，绕过这个限制。原因是这种情况下，原型链会被完全忽视。

```js
var proto = Object.defineProperty({}, 'foo', {
  value: 'a',
  writable: false
});
var obj = Object.create(proto);
Object.defineProperty(obj, 'foo', {
  value: 'b'
});
obj.foo // "b"
```

##### enumerable

`enumerable`(可遍历性)返回一个布尔值，表示目标属性是否可遍历。

如果一个属性的`enumerable`为false，下面三个操作不会取到该属性

- `for...in`循环
- `Object.key`方法
- `JSON.stringify`方法

因此，`enumerable`可以用来设置“秘密”属性。

```js
var obj = {};
Object.defineProperty(obj, 'x', {
  value: 123,
  enumerable: false
});
obj.x // 123
for (var key in obj) {
  console.log(key);
}
// undefined
Object.keys(obj)  // []
JSON.stringify(obj) // "{}"
```

上面代码中，`obj.x`属性的`enumerable`为`false`，所以一般的遍历操作都无法获取该属性，使得它有点像“秘密”属性，但不是真正的私有属性，还是可以直接获取它的值。

注意，`for...in`循环包括继承的属性，`Object.keys`方法不包括继承的属性。如果需要获取对象自身的所有属性，不管是否可遍历，可以使用`Object.getOwnPropertyNames`方法。

另外，`JSON.stringify`方法会排除`enumerable`为`false`的属性，有时可以利用这一点。如果对象的 JSON 格式输出要排除某些属性，就可以把这些属性的`enumerable`设为`false`。

##### configurable

`configurable`(可配置性）返回一个布尔值，决定了是否可以修改属性描述对象。也就是说，`configurable`为`false`时，`value`、`writable`、`enumerable`和`configurable`都不能被修改了。

```js
var obj = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: false
});
Object.defineProperty(obj, 'p', {value: 2})
// TypeError: Cannot redefine property: p
Object.defineProperty(obj, 'p', {writable: true})
// TypeError: Cannot redefine property: p
Object.defineProperty(obj, 'p', {enumerable: true})
// TypeError: Cannot redefine property: p
Object.defineProperty(obj, 'p', {configurable: true})
// TypeError: Cannot redefine property: p
```

上面代码中，`obj.p`的`configurable`为`false`。然后，改动`value`、`writable`、`enumerable`、`configurable`，结果都报错。

注意，`writable`只有在`false`改为`true`会报错，`true`改为`false`是允许的。

```js
var obj = Object.defineProperty({}, 'p', {
  writable: true,
  configurable: false
});
Object.defineProperty(obj, 'p', {writable: false})
// 修改成功
```

 至于`value`，只要`writable`和`configurable`有一个为`true`，就允许改动。 

```js
var o1 = Object.defineProperty({}, 'p', {
  value: 1,
  writable: true,
  configurable: false
});
Object.defineProperty(o1, 'p', {value: 2})
// 修改成功
var o2 = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  configurable: true
});
Object.defineProperty(o2, 'p', {value: 2})
// 修改成功
```

 另外，`writable`为`false`时，直接目标属性赋值，不报错，但不会成功。 

```js
var obj = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  configurable: false
});
obj.p = 2;
obj.p // 1
```

上面代码中，`obj.p`的`writable`为`false`，对`obj.p`直接赋值不会生效。如果是严格模式，还会报错。

可配置性决定了目标属性是否可以被删除（delete）。

```js
var obj = Object.defineProperties({}, {
  p1: { value: 1, configurable: true },
  p2: { value: 2, configurable: false }
});
delete obj.p1 // true
delete obj.p2 // false
obj.p1 // undefined
obj.p2 // 2
```

 上面代码中，`obj.p1`的`configurable`是`true`，所以可以被删除，`obj.p2`就无法删除 

#### 存取器

除了直接定义以外，属性还可以用存取器定义。其中，存值函数称为`setter`,使用属性描述对象的`set`属性；取值函数称为`getter`,使用属性描述对象的`get`属性

一旦对目标属性定义了存取器，那么存取的时候，都将执行对应的函数。利用这个功能，可以实现许多高级特性，比如某个属性禁止赋值

```js
var obj = Object.defineProperty({},'p',{
    get:function(){
        return 'getter';
    },
    set:function(value){
        console.log('setter:'+value);
    }
})
obj.p //"getter"
obj.p = 123;//"setter:123"
```

上面代码中，`obj.p`定义了`get`和`set`属性。`obj.p`取值时，就会调用`get`；赋值时，就会调用`set`。

JavaScript还提供了存取器的另一种写法。

```js
var obj = {
    get p(){
        return 'getter';
    },
    set p(value){
        console.log('setter:'+ value);
    }
}
```

上面的写法与定义属性描述对象是等价的，而且使用更广泛。

> 注意，取值函数`get`不能接受参数，存值函数`set`只能接受一个参数（即属性的值）。

存取器往往用于，属性的值依赖对象内部数据的场合

```js
var obj = {
    $n : 5,
    get next(){
        return this.$n++;
    },
    set next(value){
        if(value >= this.$n){
            this.$n = value;
        }else{
            throw new Error('新的值必须大于当前值');
        }
    }
};
obj.next //5
obj.next = 10;
obj.next //10
obj.next = 5;
// Uncaught Error: 新的值必须大于当前值
```

上面代码中，`next`属性的存值函数和取值函数，都必须依赖内部属性`$n`

#### 深浅拷贝

##### 基本类型的拷贝

先开看一段非常经典的代码

```js
var a = 1;
var b = a;
a = 200;
console.log(a);//200
console.log(b);//1
```

基本类型是`按值传递`，引用类型`按引用传递`，数值作为基本类型是保存在栈内存中，可以直接拿来用的，赋值时什么就是什么，不会受到传递元素的改变带来影响。

##### 引用类型的拷贝

简单说，引用类型是生成一个指针保存在堆内存中，当给引用类型赋值时，我们的写的是在栈内存中，也就是说我们拿到的其实是一个指针。这个指针是指向了栈内存中这个引用类型的代码。

提到拷贝涉及到的两种拷贝类型：**深拷贝**和**浅拷贝**

```
操作拷贝之后的数据不会影响到原数据的值拷贝，就是深拷贝，反正，有影响则为浅拷贝
```

###### 浅拷贝

```js
var a = {
    name:'mjj',
    age:20,
    hobby:'eat',
    friend:{
        name:'alex',
        age:38
    }
}
function shadowCopy(to,from){
    for(var key in from){
        to[key] = from[key]
    }
    return to;
}
var newObj = shadowCopy({},a);
newObj.age = 18;
newObj.friend.name = '阿黄';
/*
{
    age: 20,//没被改变
    friend: {
        name: "阿黄",//同时被改变，说明是同一个引用
        age: 38
    },
    hobby: "eat"
    name: "mjj
}
*/
```

我们发现，首先，**浅拷贝不是直接赋值**，浅拷贝新建了一个对象，然后将源对象的属性都一一复制过来,复制的是值，而不是引用。

我们知道，对象都是按地址引用进行访问的，浅拷贝的复制只复制了第一层的属性，并没有递归将所有的值复制过来，所以，操作拷贝数据，对原数据产生了影响，故而为浅拷贝。

###### 深拷贝

> 深拷贝就是对目标的完全拷贝，不像浅拷贝那样只是复制了一层引用，就连值也都复制了。
>
> 只要进行了深拷贝，它们老死不相往来，谁也不会影响谁。

使用深拷贝可以使新创建的对象和原来的完全脱离关系

```js
var a = {
    name:'mjj',
    age:20,
    hobby:'eat',
    friend:{
        name:'alex',
        age: 38,
        hobby:'鸡汤'
    }    
}
function deepCopy(to,from){
    for(var key in from){
        //不遍历原型链上的属性
        if(from.hasOwnProperty(key)){
            //如果值是对象并且有值，则递归一下
            if(from[key] && typeof from[key] === 'object'){
                //区分是一般对象还是数组对象
               to[key] = from[key].constructor === Array ? []: {};
               to[key] = deepCopy(to[key],from[key]);
            }else{
                //如果不是，就直接赋值
                to[key] = from[key];
            }
        }
    }
      return to;
}
var newObj = deepCopy(a);
newObj.age = 18;
newObj.friend.name = '阿黄';
```

 `hasOwnProperty`属性用来过滤掉继承的属性。 