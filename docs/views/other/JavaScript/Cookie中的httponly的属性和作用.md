---
title: Cookie中的httponly的属性和作用
date: 2020-08-31
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - JavaScript
tags:
 - http-only
---

### 1.什么是HttpOnly?

如果cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性，即便是这样，也不要将重要信息存入cookie。XSS全称Cross SiteScript，跨站脚本攻击，是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当其它用户浏览该网站时，这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie、破坏页面结构、重定向到其它网站等。

### 2.HttpOnly的设置样例

```
response.setHeader("Set-Cookie", "cookiename=httponlyTest;Path=/;Domain=domainvalue;Max-Age=seconds;HTTPOnly");

//设置cookie

response.addHeader("Set-Cookie", "uid=112; Path=/; HttpOnly")


//设置多个cookie

response.addHeader("Set-Cookie", "uid=112; Path=/; HttpOnly");

response.addHeader("Set-Cookie", "timeout=30; Path=/test; HttpOnly");


//设置https的cookie

response.addHeader("Set-Cookie", "uid=112; Path=/; Secure; HttpOnly");
```



具体参数的含义再次不做阐述，设置完毕后通过js脚本是读不到该cookie的，但使用如下方式可以读取。

`Cookie cookies[]=request.getCookies();` 



 注意：`httponly`只是阻止了`js`获取`httponly`值为`true`所对应的`cookie`键值队，并不能拦截XSS，想要拦截XSS除了浏览器的filter以外，更多的是程序本身做好参数的过滤。