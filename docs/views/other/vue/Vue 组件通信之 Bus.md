---
title: Vue 组件通信之 Bus
date: 2020-09-13
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - vue
tags:
 -  Bus
 - 组件通信
---


关于组件通信我相信小伙伴们肯定也都很熟悉，就不多说了，对组件通信还不熟悉的小伙伴移步[这里](https://cn.vuejs.org/v2/guide/components.html)。
 在vue2.0中 $dispatch 和 $broadcast 已经被弃用。官方文档中给出的解释是：

> 因为基于组件树结构的事件流方式实在是让人难以理解，并且在组件结构扩展的过程中会变得越来越脆弱。这种事件方式确实不太好，我们也不希望在以后让开发者们太痛苦。并且$dispatch 和 $broadcast 也没有解决兄弟组件间的通信问题。

官方推荐的状态管理方案是 [Vuex](https://github.com/vuejs/vuex)。不过如果项目不是很大，状态管理也没有很复杂的话，使用 **Vuex** 有种杀鸡用牛刀的感觉，当然，这也是要根据自己的需求来的，只是建议。

vue官方文档中有这样一个定义：[非父子组件的通信](https://cn.vuejs.org/v2/guide/components.html#非父子组件的通信)，内容很少，如下：
 

![image](https://user-gold-cdn.xitu.io/2017/12/27/16096fe025e1371b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



其实关于这个**非父子组件通信**的demo还是有的，它藏在了[$dispatch 和 $broadcast的迁移文档中](https://cn.vuejs.org/v2/guide/migration.html#dispatch-和-broadcast-替换)，有兴趣的小伙伴可以点击进去查看。文档中的建议就是：

> **对于$dispatch 和 $broadcast最简单的升级方式就是：通过使用事件中心，允许组件自由交流，无论组件处于组件树的哪一层。由于 Vue 实例实现了一个事件分发接口，你可以通过实例化一个空的 Vue 实例来实现这个目的。**

这个**集中式的事件中间件**就是 **Bus**。我习惯将bus定义到全局：

app.js

```js
var eventBus = {
    install(Vue,options) {
        Vue.prototype.$bus = vue
    }
};
Vue.use(eventBus);
```

然后在组件中，可以使用$emit， $on， $off 分别来分发、监听、取消监听事件：

分发事件的组件

```js
// ...
methods: {
  todo: function () {
    this.$bus.$emit('todoSth', params);  //params是传递的参数
    //...
  }
}
```

监听的组件

```js
// ...
created() {
  this.$bus.$on('todoSth', (params) => {  //获取传递的参数并进行操作
      //todo something
  })
},
// 最好在组件销毁前
// 清除事件监听
beforeDestroy () {
  this.$bus.$off('todoSth');
},
```

如果需要监听多个组件，只需要更改 **bus** 的 **eventName**:

```js
// ...
created() {
  this.$bus.$on('firstTodo', this.firstTodo);
  this.$bus.$on('secondTodo', this.secondTodo);
},
// 清除事件监听
beforeDestroy () {
  this.$bus.$off('firstTodo', this.firstTodo);
  this.$bus.$off('secondTodo', this.secondTodo);
},
```

