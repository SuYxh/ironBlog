---
title: vue 组件通信总结 (非vuex和Event Bus)
date: 2020-09-15
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - vue
tags:
 - 组件通信
---



## 方式一览

1. `props` && `emit`
2. `v-model`
3. `$children` && `$parent`
4. `$listeners` && `$attrs`
5. `.sync`

## prop && emit 方式

父组件通过 `props` 传递数据给子组件，子组件通过 `emit` 发送事件传递数据给父组件。这是最常用的父子组件通信方式，符合单向数据流，即子组件不能直接修改 props， 而是必须通过发送事件的方式告知父组件修改数据。由于是常用的方式，在这也不多啰嗦了。

## v-model 方式

`v-model`实现的通信其本质上还是上面的`props`和`emit`方式，使用`v-model`更像是一种语法糖。[文档介绍](https://cn.vuejs.org/v2/guide/components-custom-events.html#自定义组件的-v-model)

先举个栗子：

```vue
// 这是父组件
<template>
  <div>
    <child v-model="msg"></child>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import child from "../components/Child";
export default {
  data() {
    return {
      msg: "hello"
    };
  },
  components: { child }
};
</script>

复制代码
// 这是子组件
<template>
  <div>
      <input :value="value" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>
```

父组件使用子组件时，使用`v-model`绑定父组件`msg`数据，这会在子组件里解析成名为 `value` 的 prop 和名为 `input` 的事件，所以子组件里的`props`选项里必须写成`value`，在`$emit`事件里也需写成`input`事件。此时当你在子组件输入时，就会改变父组件的`msg`值。

### 使用 model 选项自定义 props 和 event

上面说了，props选项里必须写`value`，事件也必须是`input`。这是默认情况下的解析，其实我们也可以自定义 props 和 event，使用`model`选项，[文档介绍](https://cn.vuejs.org/v2/api/#model)。文档中以复选框为例，修改 props 和 event：

```js
model: {
    prop: 'checked',
    event: 'change'
}
```

## `$children` && `$parent` 方式

这两个是vue提供的api，见名知意，在父组件里使用 `$children` 访问子组件，在子组件里使用`$parent`访问父组件。

举个简单栗子：

```vue
// 这是子组件

<template>
  <div>
     {{$parent.msg}}   // 子组件显示父组件数据
  </div>
</template>

<script>
export default {
  data() {
    return {
      child_msg: "我是子组件数据"
    };
  },
  mounted() {
    this.$parent.test(); // 子组件执行父组件方法
  }
};
</script>


```

```vue
// 这是父组件

<template>
  <div>
    <child/>
  </div>
</template>

<script>
import child from "../components/Child";
export default {
  data() {
    return {
      msg: "我是父组件的数据"
    };
  },
  components: { child },
  methods: {
    test() {
      console.log("我是父组件的方法，被执行");
    }
  },
  mounted() {
    console.log(this.$children[0].child_msg); // 执行子组件方法
  }
};
</script>

```

**【注意】**  `$children` 是数组，所以当只有一个子组件时，使用`[0]`获取。当有多个子组件时，它并不保证顺序，也不是响应式的。

## `$listeners` 方式

初看此api的定义，我也是似懂非懂：

> 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用

文档这里也描述了它的使用方法： [文档介绍](https://cn.vuejs.org/v2/guide/components-custom-events.html#将原生事件绑定到组件)

在查看一些博客时，要么拿官方例子，要么一大堆介绍，其实我看的也是一脸懵逼。后来自己慢慢试着用了下，也大概明白它是干嘛的。我的理解：**在多层嵌套组件的业务中，使用`$listeners`可以使用更少的代码来完成事件通信。**

还是以代码来说明，如下图，我们来实现组件B 到 父组件 的通信，

![](http://qn.huat.xyz/content/20200907214043.png)



一般嵌套层级太多时，我们可能就会考虑vuex，但只传递数据，而不做中间处理，有点大材小用，所以如上图这样的，我们可能还是使用`emit`方式来通信，无非多传一层，多写点代码。那么现在，有了`$listeners`，我们可以更方便的来实现，我尽量用最少的代码来实现下：

就从最下面的B组件开始，它有一个按钮，点击时触发实例上的事件`getFromB`

```vue
// 组件B

<template>
  <div>
    <button @click="handleClick">B组件按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("getFromB");
    }
  }
};
</script>
```

A组件 包裹 B组件，相当于是父组件与B组件的中转站，在不用`$listeners`时，我们可能会在这里再触发一个事件，现在不需要这样了，我们这样：

```vue
// 组件A

<template>
  <div>
    <child-b v-on="$listeners" />
  </div>
</template>

<script>
import childB from "../components/ChildB";
export default {
  components: {
    childB
  },
  mounted() {
    console.log(this.$listeners);
  }
};
</script>
```

只需要加一句`v-on="$listeners"`即可。好奇的我们也可以 mounted 时打印一下`$listeners`。

父组件，显而易见，我们直接绑定`getFromB`事件即可：

```vue
// 父组件

<template>
  <div>
   <child-a v-on:getFromB="fromB"/>
  </div>
</template>

<script>
import childA from "../components/ChildA";
export default {
  components: { childA },
  methods: {
    fromB() {
      console.log("B组件触发");
    }
  }
};
</script>
```

这就是`$listeners`的简单用法，说到这里，你应该意识到，当组件嵌套很多层时，不借助 vuex，我们也可以较方便地实现通信了。

说到这里，我还要提一个api，就是`$attrs`。它与`$listeners`的关系就好比 props 与 emit 的关系，用来向底层组件传递属性。先贴上它的定义：

> 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

我们回想下，如果使用 props 向孙组件传递数据时，在中间组件里，我们是要一层层使用 props 选项来接收，然后再传递的。那么`$attrs`的作用就是在没到目标子组件时，不使用props接收数据，直到到达需要数据的组件时，再使用props接收。

在我看别的博客时，都是这两个api一起说的，代码比较多，为了清晰，我把上面代码多余的代码删掉，只演示`$attrs`的使用：

父组件传递一个属性`toB`，意为是给B组件用的：

```vue
// 父组件

<template>
  <div>
   <child-a toB="hello"/>
  </div>
</template>

<script>
import childA from "../components/ChildA";
export default {
  components: { childA }
};
</script>
```

A组件使用`v-bind="$attrs"`即可，不需要 props 接收，实际上也不可以接收，看定义

```vue
// 组件 A

<template>
  <div>
     <child-b v-bind="$attrs" />
  </div>
</template>

<script>
import childB from "../components/ChildB";
export default {
  components: { childB }
};
</script>
```

B组件是我们的最后子组件，它用到`toB`属性，所以使用 props 选项接收了

```vue
<template>
  <div>
    <p>父组件传来数据：{{toB}}</p>
  </div>
</template>

<script>
export default {
  props: ["toB"]
};
</script>
```

从这个简单的例子，我们可以知道，当组件嵌套层级很多时，属性传递变得不要太方便。最后还要提一个`inheritAttrs`选项，它一般配合`$attrs`使用，这里我就不再多说了。[文档介绍](https://cn.vuejs.org/v2/api/#inheritAttrs)

## `.sync` 方式

此方法其实用的也不少，它在 Vue 1.x 里的作用是对一个 prop 进行“双向绑定“。但在 Vue 2 之后是只允许单向数据流的，所以现在即使它看起来像是真正的“双向绑定”，本质上也只是作为一个编译时的语法糖存在而已。

举个计数器的例子：

```vue
// 父组件

<template>
  <div>
    {{num}}
   <child-a :count.sync="num" />
  </div>
</template>

<script>
import childA from "../components/ChildA";
export default {
  data() {
    return {
      num: 0
    };
  },
  components: { childA }
};
</script>

// 子组件

<template>
  <div>
     <div @click="handleAdd">ADD</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: this.count
    };
  },
  props: ["count"],
  methods: {
    handleAdd() {
      this.$emit("update:count", ++this.counter);
    }
  }
};
</script>
```

嗯，看起来似乎更有逼格。

## 结语

这么看下来，除了`$children` 和 `$parent` 是直接获取的，其他都跟 props 和 emit 息息相关。具体怎么用，自己看着办呗。


