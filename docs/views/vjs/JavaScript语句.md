---
title: JavaScript语句
date: 2019-03-24
---


## 1、if语句

```javascript
// 判断某一年是不是闰年
//闰年定义:能被4整除，但是不能被100整除或者能被400整除的年份
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

## 2、 switch 语句

```html
<p>点击下面的按钮来显示今天是周几：</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p>
<script>
function myFunction()
{
	var x;
	var d=new Date().getDay();
	switch (d)
    {
  		case 0:x="今天是星期日";
    	break;
 		case 1:x="今天是星期一";
        break;
  		case 2:x="今天是星期二";
        break;
        case 3:x="今天是星期三";
   	 	break;
  		case 4:x="今天是星期四";
    	break;
  		case 5:x="今天是星期五";
        break;
  		case 6:x="今天是星期六";
    	break;
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

## 4、for循环

```javascript
for (语句 1; 语句 2; 语句 3)        
  {        
  被执行的代码块        
  }
  
  
 // 1--100数字之和
	var sum = 0;
	for (var i=0;i<=100;i++) {
		sum += i;
	}
	console.log("1--100的和为："+sum);	
	
	// 打印正方形
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
	
	
	// 打印三角形
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
	
	// 九九乘法表
	var str = '';
	for (var a=1;a<=9;a++) {
		for (var b=a;b<=9;b++) {
		   str += a+ "*" +b + "=" + (a*b) + "\t";
		}
		str += "\n";
	}
	console.log(str);
```



## 5、continue 和 break

- break：立即跳出整个循环，即循环结束，开始执行循环后面的内容
- continue：立即跳出当前循环，继续下一次的循环，跳到 i++ 的地方

```javascript
		//计算100以内不能被3整除的所有数的和
		var sum = 0;
		for (var i=0;i<100;i++) {
			if(i%7 == 0){
				continue;
			}
			sum += i;
		}
		console.log(sum);
		
		// 打印200--300之间第一个被7整除的数字
		for (var j=200;j<300;j++) {
			if(j%7 == 0){
				console.log(j);
				break;
			}
		}
```

