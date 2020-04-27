---
title: JavaScript常用代码
date: 2019-04-17
author: yxh
isShowComments: false
---

[[toc]]

## JS判断输入框的值是否为空
::: details Code
```js
<input type="text" id="txt" />
		<input type="button" value="检测" id="btn">
		<script>
			var oTxt = document.getElementById('txt');

			var oBtn = document.getElementById('btn');

			function isnull(val) {

				var str = val.replace(/(^\s*)|(\s*$)/g, ''); //去除空格;

				if (str == '' || str == undefined || str == null) {
					//return true;
					console.log('空')
				} else {
					//return false;
					console.log('非空');
				}
			}

			oBtn.onclick = function() {

				isnull(oTxt.value);

			}
        </script>
```
:::

## 将浮点数点左边的数每三位添加一个逗号
> 如 12000000.11 转化为『12,000,000.11』
::: details Code
```js
   function format(number){
         return number && number.replace(/(?!^)(?=(\d{3})+\.)/g,",")
    }
```
:::