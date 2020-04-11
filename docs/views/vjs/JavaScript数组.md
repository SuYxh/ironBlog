---
title: JavaScript数组
date: 2019-03-24
---


## 1、创建一个数组

创建一个数组，有三种方法。

1: 常规方式:

```javascript
 var myCars=new Array(); 
 myCars[0]="Saab";    
 myCars[1]="Volvo";
 myCars[2]="BMW";
```

2: 简洁方式:

```javascript
 var myCars=new Array("Saab","Volvo","BMW");
```

3: 字面:

```javascript
 var myCars=["Saab","Volvo","BMW"];
```

### 2、访问数组

通过指定数组名以及索引号码，你可以访问某个特定的元素。

以下实例可以访问myCars数组的第一个值： 

```javascript
 var name=myCars[0];
```

以下实例修改了数组 myCars 的第一个元素:

```javascript
 myCars[0]="Opel";
```



### 3、遍历数组

```javascript
v	//for循环遍历数组
	var arr = ['三国演示','水浒传','西游记','红楼梦','哈利波特','会飞的老虎'];
	for (var i=0;i<arr.length;i++) {
		console.log(i,arr[i]);
	}
	
	//数组元素求和
	var sum = 0;
	var arr1 = [11,22,22,33,44,55,66,77,88,99];
	for (var j=0;j<arr1.length;j++) {
		sum += arr1[j];
	}
	console.log(sum);
	
	
	//寻找数组的最大元素	
	var n = 0;
	for (var m=1;m<=10;m++) {
		if (n<arr1[m]) {
			n = arr1[m];
		}
	}
	console.log(n);
	
	console.log("<br>");
	
	// 打印数组中的偶数
	for (var g=0;g<arr1.length;g++) {
		if (arr1[g]%2 == 0) {
			console.log(arr1[g]);
		}
	}
```

