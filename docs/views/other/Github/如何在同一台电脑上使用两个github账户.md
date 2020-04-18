---
title: 如何在同一台电脑上使用两个github账户
date: 2020-04-18
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - Github
---

## 问题
由于有两个github账号，要在同一台电脑上同步代码，在推送的时候出现了如下问题：
![](http://qn.huat.xyz/content/lALPGoxXbSyeN0TNAXfNA-E_993_375.png)

> **问题分析**：此时推送时git push origin，不知道是哪个账号的远程仓库名称，所以需要配置一下~/.ssh下面的config信息，否则会自动使用.ssh/id_rsa.pub所对应的账户进行登陆并操作。

## 解决方案
1、为工作账号生成SSH Key(注意先切换到 ~/.ssh下)
```sh
ssh-keygen -t rsa -C "YourEmail" 
```
**注意** ： 存储key的时候，不要覆盖现有的id_rsa，使用一个新的名字，比如id_rsa_iron

2、配置`.ssh/config`

```sh
#default github
Host github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa
 
Host github_iron
HostName github.com
IdentityFile ~/.ssh/iron
```

3、git push remote add origin2　
```sh
git remote add origin2 git@github_iron:ironxh/test.git
```

4、将`id_rsa_work.pub`加到你的另一个Github账号上
```sh
$ git remote -v
origin  git@github.com:ironxh/test.git (fetch)
origin  git@github.com:ironxh/test.git (push)
origin2 git@github_iron:ironxh/test.git (fetch)
origin2 git@github_iron:ironxh/test.git (push)
```

这样就完成了配置，再通过 `$ git push origin2 master
`就可以推送成功了。就可以通过使用github.com别名github_iron来明确说你要是使用iron的SSH key来连接github，即使用工作账号进行操作。

