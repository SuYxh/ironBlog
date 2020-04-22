# HTML5

### 新增布局标签
![](http://qn.huat.xyz/content/20200401002519.png)

### 新增的input type属性值
> 新增的类型，更加细化的限定了输⼊内容，如果输⼊格式不对，在提交的时候会⾃动给出相应提示
![](http://qn.huat.xyz/content/20200401002719.png)

### 新增的input 属性
![](http://qn.huat.xyz/content/20200401002822.png)

### 音视频
- HTML5 提供了播放音频文件的标准。通过使用HTML5中的[audio](https://www.w3cschool.cn/htmltags/tag-audio.html)功能，可以实现与flash相同的功能，即回放、跳转、缓冲等。
```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>
```

- [video](https://www.w3cschool.cn/htmltags/tag-video.html)元素提供了播放、暂停和音量控件来控制视频。同时`<video>`元素也提供了 width 和 height 属性控制视频的尺寸.如果设置的高度和宽度，所需的视频空间会在页面加载时保留。。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。与 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。元素支持多个 元素. 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式：
```html
<video width="320" height="240" controls>
<source src="movie.mp4" type="video/mp4">
<source src="movie.ogg" type="video/ogg">
您的浏览器不支持 video 标签。
</video>
```

### Canvas
`<canvas>`元素是HTML5中的新元素，通过使用该元素，你可以在网页中绘制所需的图形。[详情](canvas.md)
```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
您的浏览器不支持 HTML5 canvas 标签。
</canvas>
<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);
</script>
```


### HTML5 内联 SVG
- SVG表示可缩放矢量图形，是基于可扩展标记语言（标准通用标记语言的子集），用于描述二维矢量图形的一种图形格式。 [详情](svg.md)
```html
<!DOCTYPE html>
<html>
<body>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
</svg>
</body>
</html>
```