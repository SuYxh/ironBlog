### constructor

 每个对象在创建时都自动拥有一个构造函数属性`contructor`,其中包含了一个指向其构造函数的引用。而这个`constructor`属性实际上继承自原型对象，而constructor也是原型对象唯一的自有属性

```js
function Dog(){
}
var d1 = new Dog();
console.log(d1.constructor === Person);//true
console.log(d1.__proto__.constructor === Person);//true
```

**返回值**

 函数中的return语句用来返回函数调用后的返回值，而new构造函数的返回值有点特殊。

 如果构造函数使用return语句但没有指定返回值，或者返回值是一个原始值，那么这时将忽略返回值，同时使用这个新对象作为调用结果

```js
function Fn(){
    this.a = 2;
    return;
}
var test = new Fn();
console.log(test);//{a:2}
```

  如果构造函数显式地使用return语句返回一个对象，那么调用表达式的值就是这个对象 

```js
var obj = {a:1};
function fn(){
    this.a = 2;
    return obj;
}
var test = new fn();
console.log(test);//{a:1}
```

 使用构造函数的好处在于所有用同一个构造函数创建的对象都具有同样的属性和方法 

```js
function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }
}
var p1 = new Person('Tom');
var p2 = new Person('Jack');
```

 构造函数允许给对象来配置同样的属性，但是构造函数并没有消除代码冗余。使用构造函数的主要问题是每个方法都要在每个实例上重新创建一遍。在上面的例子中，每一个对象都有自己的`sayName()`方法。这也意味着如果有100个对象实例，就有100个函数做相同的事情，只是使用的数据不同。 

```js
function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }
}
var p1 = new Person('Tom');
var p2 = new Person('Jack');
console.log(p1.sayName === p2.sayName);//false
```

上面代码中，`p1`和`p2`是用一个构造函数的两个实例，他们具有`sayName`方法。由于`sayName`方法是生成在每个实例对象上面，所以两个实例就生成了两次。也就是说，每创建一个实例，就会新建一个`sayName`方法。这既没有必要，又浪费系统资源，因此所有`sayName`方法都是同样的行为，完全应该共享。

这个问题的解决方法。就是JavaScript的原型对象(prototype)