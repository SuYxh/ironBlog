---
title: 高效的编码：我的VS Code设置
date: 2020-04-13
lang: 'zh-CN'
sidebar: 'auto'
tags:
 - Vscode
categories:
 - 开发工具
---

[[toc]]


![](http://qn.huat.xyz/content/20200329163614.png)

代码编辑器很多，有些是免费的，有些是付费的。其中最喜欢的代码编辑器是 Visual Studio Code。它是免费的，并具有强大的功能，我陆续抛弃了Atom、Sublime Text以及也很强大的WebStorm。

今天，我将分享我最喜欢的代码编辑器设置，用于我的 Web 开发。我将从代码编辑器的外观开始。毕竟外观颜值很重要。
## 🎨 主题
我最常用的 VS Code 主题是Snazzy Operator，目前正在使用。
![](http://qn.huat.xyz/content/20200329163417.png)

此主题基于 hyper-snazzy 并针对与 Operator Mono 字体一起使用进行了优化。我喜欢 😍 这个主题。

⭐ 我之前使用过的其他一些主题：

- Oceanic Next - 我使用了 Oceanic Next (dimmed bg)
- emedy - 我使用了 Remedy Dark (straight)

## **✒** 字体

对我的代码编辑器来说，另一个重要的事情是，我用于代码编辑器的字体是 JetBrains Mono。这是带有连字支持的免费字体。

![](http://qn.huat.xyz/content/20200329163724.png)

 连字是一种新的字体格式，支持符号装饰，而不是`=` `>`、`<` `=`。 

![](http://qn.huat.xyz/content/20200329163741.png)

在使用 JetBrains Mono 之前，我使用了**Operator Mono**。这也是一个不错的字体。

⭐ 我以前使用过的其他一些字体：

- Operator Mono - 支持连字。
- Fira Code - 免费并支持连字。
- Dank Mono - 付费并支持连字。

🌟🌟🌟 您要使用我的设置，使用我的 VS Code 字体吗？在 VS Code 中，按 **Ctrl + P**，输入 **settings.json** 并打开该文件。现在，用我的给定值替换下面的属性值。

```json
{
  "workbench.colorTheme": "Snazzy Operator",
  "editor.fontFamily": "'JetBrains Mono', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 22,
  "editor.letterSpacing": 0.5,
  "editor.fontWeight": "400",
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "editor.cursorBlinking": "solid"
}
```

## 📁 图标

文件图标增强了 VS Code 的外观，主要是它可以帮助我们通过给定的图标区分不同的文件和文件夹。对于我的 VS Code，我使用两个文件图标：

- Material Icon Theme - VS Code 最受欢迎的图标主题之一。
- Material Theme Icons - 目前正在使用。
- ![](http://qn.huat.xyz/content/20200329163914.png)

## 我使用的扩展

### Auto Rename Tag

自动重命名配对的 HTML / XML 标签，也可以在 JSX 中使用。

在 **settings.json** 文件中的 `auto-rename-tag.activationOnLanguage` 中添加一项以设置扩展名将被激活的语言。默认情况下，它是**[“ *”]**，将为所有语言激活。

` "auto-rename-tag.activationOnLanguage": ["html", "xml", "php", "javascript"] `

![]( http://qn2.huat.xyz/640.gif )

### Bracket Pair Colorizer 2

此扩展名允许用颜色标识匹配的括号，用户可以定义要匹配的符号，以及要使用的颜色。

![](http://qn.huat.xyz/content/20200329164503.png)

### Color Highlight

此扩展程序设置在文档中找到的 css / web 颜色的样式。

![](http://qn.huat.xyz/content/20200329164529.png)

### CSS Peek

- Peek：内联加载 css 文件并在那里进行快速编辑。（Ctrl + Shift + F12）

- Go to：直接跳转到 CSS 文件或在新的编辑器（F12）中打开

- Hover：在符号上悬停显示定义（Ctrl + hover）
  ![](http://qn2.huat.xyz/6401.gif)

### DotENV

在 `.env` 文件中高亮显示键值对。

![](http://qn.huat.xyz/content/20200329164742.png)



### ES7 React/Redux/GraphQL/React-Native snippets

该扩展为您提供 ES7 中的 JavaScript 和 React / Redux 片段，以及 VS Code 的 Babel 插件功能。

### Highlight Matching Tag

突出显示匹配的开始或结束标签。

![]( http://qn2.huat.xyz/202003291648.gif )



 我使用的扩展的样式： 

```
"highlight-matching-tag.styles": {
  "opening": {
    "left": {
      "custom": {
        "borderWidth": "0 0 0 1.5px",
        "borderStyle": "solid",
        "borderColor": "yellow",
        "borderRadius": "5px",
        "overviewRulerColor": "white"
      }
    },
    "right": {
      "custom": {
        "borderWidth": "0 1.5px 0 0",
        "borderStyle": "solid",
        "borderColor": "yellow",
        "borderRadius": "5px",
        "overviewRulerColor": "white"
      }
    }
  }
}
```

### Image preview

悬停时显示图像预览。

![](http://qn.huat.xyz/content/20200329170313.png)

### Indent Rainbow

此扩展使文本前面的缩进着色，在每个步骤上交替使用四种不同的颜色。

![](http://qn.huat.xyz/content/20200329170334.png)

### REST Client

REST Client 允许您发送 HTTP 请求并直接在 Visual Studio Code 中查看响应。

![]( http://qn2.huat.xyz/202003291701.gif )

### Settings Sync 

使用 GitHub Gist 在多台机器上同步设置，代码片段，主题，文件图标，启动，键绑定，工作区和扩展。具体操作可以看我的这篇文章《小技巧|同步你的 VSCode 设置及扩展插件，换机不用愁！》

![](http://qn.huat.xyz/content/20200329170600.png)

### TODO Highlight

在代码中突出显示 TODO，FIXME 和其他注释。

![](http://qn.huat.xyz/content/20200329170906.png)

### Version Lens

显示 package.json 文件中每个软件包的最新版本。

![]( http://qn2.huat.xyz/202003291710.gif )

## 📃 Terminal 设置

我的操作系统是 Windows，我通过命令行使用 Git，所以我有一个 Git terminal，我用这个终端作为我的集成 terminal。我的 terminal 设置如下：

```
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
"terminal.integrated.fontFamily": "FuraMono Nerd Font",
"terminal.integrated.fontSize": 12,
"terminal.integrated.rightClickCopyPaste": true
```

## ✔ 有用的 VS Code 快捷键

我在日常生活中使用了一些重要的键盘快捷键，这些快捷方式使 Visual Studio Code 提高了我的工作效率。

- **Ctrl + P** ：转到文件，您可以在 Visual Studio Code 中移动到打开的文件/文件夹的任何文件。
- **Ctrl + `** ：在 VS Code 中打开 terminal
- **Alt + Down**：下移一行
- **Alt + Up**：上移一行
- **Ctrl + D**：将选定的字符移动到下一个匹配字符串上
- **Ctrl + Space**：触发建议
- **Shift + Alt + Down**：向下复制行
- **Shift + Alt + Up**：向上复制行
- **Ctrl + Shift + T**：重新打开最新关闭的窗口