---
title: JavaScript正则表达式
date: 2020-04-28
author: yxh
isShowComments: false
---

[[toc]]



>  正则表达式在人们的印象中可能是一堆无法理解的字符，但就是这些符号却实现了字符串的高效操作。通常的情况是，问题本身并不复杂，但没有正则表达式就成了大问题。javascript中的正则表达式作为相当重要的知识，本文将介绍正则表达式的基础语法 

### 定义

正则表达式(Regular Expression)是一门简单语言的语法规范，是强大、便捷、高效的文本处理工具，它应用在一些方法中，对字符串中的信息实现查找、替换和提取操作

javascript中的正则表达式用RegExp对象表示，有两种写法：一种是字面量写法；另一种是构造函数写法

#### 字面量写法

正则表达式字面量定义为包含在一对斜杠(/)之间的字符，并且可以设置3个标志

```js
var expression = /pattern/flags;
```

正则表达式的匹配模式支持下列3个标志：

- g:表示全局(global)模式，即模式将被应用于所有字符串，而并非在发现第一个匹配项时立即停止
- i:表示不区分大小写(case-insensitive)模式，即在确定匹配项时忽略模式与字符串的大小写
- m:表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项

```js
//匹配字符串所有'at'的实例
var p = /at/g;
//test()方法返回一个布尔值表示是否可以找到匹配项
console.log(p.test('ata'));//true
console.log(p.test('aba'));//false
```

#### RegExp构造函数

和普通的内置对象一样，RegExp正则表达式对象也支持new RegExp()构造函数的形式

RegExp构造函数接收两个参数：要匹配的字符串模式(pattern)和可选的标志字符串(flags)，标志字符串和字面量的三个标志含义相同：’g’、’i’、’m’。

RegExp构造函数的两个参数都是字符串。且使用字面量形式定义的任何表达式都可使用构造函数

```js
//匹配字符串所有'at'的实例
var p1 = /at/g;
//同上
var p2 = new RegExp('at','g');
```

### 匹配规则

#### 1.元字符

##### 匹配任意字符(`.`)

点字符(`.`)匹配除回车(`\r`)、(`\n`)、行分隔符（`\u2028`）和段分隔符（`\u2029`）以外的所有字符

![](http://qn.huat.xyz/content/20200428152611.png)



##### 位置字符(`^和$`)

位置字符用来提示字符所处的位置，主要有两个字符

- `^`表示字符串的开始位置
- `$`表示字符串的结束位置

```js
//hello必须出现在开始的位置
/^hello/g.test('hello world');//true
//hello必须出现在结束位置
/world$/g.test('hello world');//true
//从开始位置到结束位置只有hello
/^hello$/g.test('hello');//true
/^hello$/g.test('hello world');//false
```

##### 选择符(`|`)

竖线符号（`|`）在正则表达式中表示“或关系”（OR)。即`you|me`表示匹配`you`或`me`

```js
//正则表达式指定必须匹配11或22
/ll|yy/g.test('hello world');//true
```

 多个选择符可以联合使用 

```js
//匹配cat、dog、pig之中的一个
/cat|dog|pig/g
```

##### 匹配数字和字母以及非字母(`\w和\W`)

`\w`匹配数字和字母

![](http://qn.huat.xyz/content/20200428162650.png)

注意：下划线`\w`也匹配到

`\W`匹配除数字和字母以及下划线以外的任意字符

![](http://qn.huat.xyz/content/20200428162739.png)

##### 匹配数字和非数字(`\d`和`\D`)

`\d`只匹配数字，0~9之间的数字

![](http://qn.huat.xyz/content/20200428162808.png)

 `\D`匹配除数字以外的任意字符 

![](http://qn.huat.xyz/content/20200428162840.png)



##### 匹配空白字符`\s和\S`

`\s`匹配**空白**字符

![](http://qn.huat.xyz/content/20200428163026.png)

 `\S`匹配**非空白**字符 

![](http://qn.huat.xyz/content/20200428163100.png)

##### 字符集合`[a-zA-ZO-9]`

`[a-zA-Z0-9]`匹配[]里面的任意字符

![](http://qn.huat.xyz/content/20200428163231.png)

如果想匹配任意一个中文怎么办？

中文的范围区间为`[\u4e00-\u9fa5]` ，其实就是[一-龥(yu)]

unicode转中文站点：http://www.bejson.com/convert/unicode_chinese/

![](http://qn.huat.xyz/content/20200428170140.png)

`[^]`匹配所有不在这范围内的字符

匹配了所有不在[一-龥]的之间的字符

![](http://qn.huat.xyz/content/20200428170229.png)

##### 重复一次或多次(`+`)

![](http://qn.huat.xyz/content/20200428170405.png)

##### 匹配重复0个或多个字符(`*`)

![](http://qn.huat.xyz/content/20200428170532.png)

##### 匹配重复0个或一个(`?`)

![](http://qn.huat.xyz/content/20200428170709.png)

如果都想匹配怎么办？

答案：给y后面加个？

![](http://qn.huat.xyz/content/20200428170727.png)

##### 指定重复范围({min,max})

![](http://qn.huat.xyz/content/20200428170758.png)

##### 分组匹配()

![](http://qn.huat.xyz/content/20200428170916.png)

```js
console.log(/w{3}\.(baidu|goole|mi|apeland)\.(com|cn)?/.test('www.baidu.com'));
console.log(RegExp.$1);//baidu
console.log(RegExp.$2);//com
```

 **分组匹配但不捕获(**`?:`**)** 

```js
console.log(/w{3}\.(baidu|goole|mi|apeland)\.(?:com|cn)?/.test('www.baidu.com'));
console.log(RegExp.$1);//baidu
console.log(RegExp.$2);
```



## 正则表达式常用案例

##### 1.检查用户账号

验证规则: 由字母,数字,下划线 组成,以字母开头 4-16位

```js
function checkUser(str) {
    var re = /^[a-zA-Z]\w{3,15}$/g;
    if (re.test(str)) {
        return '正确';
    } else {
        return '错误';
    }
}
console.log(checkUser('h111'));
```

##### 2.匹配手机号

验证规则: 11位,以1开头 第二位为3或5或7或8  

```js
function checkMobild(str){
    var re = /^1[3|5|7|8]\d{9}/g;
    if(re.test(str)){
        alert('正确');
    }else{
        alert('错误');
    }
}
checkMobild('1467654321213'); 
```

##### 3.匹配电话号码

验证规则: 区号 + 号码   - 可有可无 区号可以为3位也可以为4位 号码可以为7位也可以为8位
如： 01088888888 010-8888888 0536-7777777

```js
function checkPhone(str) {
    var re = /^0\d{2,3}-?\d{7,8}$/g;
    if (re.test(str)) {
        console.log('匹配正确');
    } else {
        console.log('匹配错误');
    }
}
checkPhone('0536-7777777');
```

##### 4.匹配身份证号

18位或者15位,15位全是数字 18位 前17都是数字,最后一位可能是数字或者字符x或X

```js
function checkCard(card) {
    var re = /^(\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
    if (re.test(card)) {
        console.log('身份证输入合法');
    } else {
        console.log('身份证输入不合法');
    }
}
checkCard('76499819909876543');
```



##### 5.匹配邮箱

第一部分@第二部分.com|cn|net

```js
function checkEmail(str){
    var re = /^[a-zA-Z0-9-._]+[@][a-zA-Z0-9-._]+\.(com|cn|net)$/g;
    if(re.test(str)){
        console.log('输入邮箱格式正确');
    }else{
        console.log('输入邮箱格式错误');
    }
}
checkEmail('1ehjdjh@qq.com');
```



##### 6.匹配URL地址 

```
[a-zA-z]+://[^\s]*
```

























### 常用工具

```
在线测试工具    https://regexr.com/
unicode转中文站点：http://www.bejson.com/convert/unicode_chinese/
在线工具    https://tool.oschina.net/regex/#
```

