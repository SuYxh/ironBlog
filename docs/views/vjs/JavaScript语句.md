---
title: JavaScript语句
date: 2019-03-24
author: yxh
isShowComments: false
---


## 1、if语句
- 判断某一年是不是闰年
> 闰年定义:能被4整除，但是不能被100整除或者能被400整除的年份

```javascript
var n = 2020;
if (n%4 == 0) {
    if(n%100 !=0){
        console.log(n+"年是闰年！");
    } else if(n%400 == 0){
        console.log(n+"年是闰年！");
    } else {
        console.log(n+"年是平年！");
    }
} else{
    console.log(n+"年是平年！");
}
```
::: warning
**注意**，if...else...语句的执行特点是二选一，在多个if...else...语句中，如果某个条件成立，则后续就不再继续判断了。
:::

## 2、 switch 语句

```html
<p>点击下面的按钮，会显示出基于今日日期的消息：</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p>
<script>
function myFunction()
{
	var x;
	var d=new Date().getDay();
	switch (d)
    {
  		case 6:x="今天是星期六";
    	break;
  		case 0:x="今天是星期日";
    	break;
  		default:
    	x="期待周末";
  	}
	document.getElementById("demo").innerHTML=x;
}
</script>
```

## 3、while循环

```javascript
 while (条件)
   {
  需要执行的代码
   }
   
// 1--100数字之和
var i= 1;
var sum = 0;
while (i<=100){
    sum += i;
    i++;
}
console.log("1--100的和为："+sum);	 

// 计算100以内7的倍数有哪些
var j = 0;
while (j<=100){
    if (j%7 == 0) {
        console.log(j);
    }
    j++;
}

	// 100 以内的偶数和
	var p = 0;
	var sumEven = 0;
	while (p<=100){
		if (p%2 == 0) {
			sumEven +=p;
		}
		p++;
	}
	console.log(sumEven);

// 计算100以内3的倍数有哪些，和为多少？
	var m = 0;
	var sumSan = 0;
	while (m<=100){
		if (m%3 == 0) {
			console.log(m);
			sumSan += m;
		}
		m++;
	}
	console.log("100以内3的倍数的和："+sumSan);
```

```javascript
do
   {
  需要执行的代码
   }
 while (条件);
```

