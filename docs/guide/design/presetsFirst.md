<script setup>
    import colors from "@design/colors.js"
    import shadows from "@design/shadows.js"
    import roundeds from "@design/roundeds.js"
</script> 
# 预设优先

:::warning 前置知识
本篇文章需要你已经了解 [Design 样式库](/tob-ui-doc/guide/design/style/) 的知识。  
如果你对其不是很清楚，可以点击前往快速浏览一遍 👉 [Design 样式库](/tob-ui-doc/guide/design/style/)
:::

:::tip 一切都是为了魔改
在日常的业务当中，拿到组件的第一件事就是魔改成适合自己业务的样式。

<p> 
    而 <t-tag>预设优先</t-tag> 是一种组件的设计模式，方便魔改。
</p>

<p>
😁PS: 目前 <t-tag> UI </t-tag> 中绝大部分组件的设计都是 <t-tag>预设优先</t-tag>。 
</p>
:::

<br />
<br />
<br />


## 难扩展的组件 :eyes:

举一个简单的例子，例如 <t-tag>按钮</t-tag> 组件的 <t-tag>color</t-tag> 应用不同的属性会呈现不同的颜色。

<t-btn color="primary"> Primary </t-btn>

<t-btn color="accent" class="ml-4"> Accent </t-btn>

```vue
<template>
    <t-btn color="primary"> Primary </t-btn>
    <t-btn color="accent"> Accent </t-btn>
</template>
```

这是因为组件内部的 <t-tag>props</t-tag> 已经设置好了哪个属性该应用哪段样式。

但这种方式往往只能局限于组件内部提供好的样式，想要魔改成适合自己业务环境的。   

只能用深层选择器等别扭的方式，可能会浪费大量的时间还改不对。

<br />
<br />
<br />

## 更简单的方式 :+1:
而用 <t-tag>预设优先</t-tag> 就非常简单。  
例如我现在想要有一个自定义的浅红色按钮:scream:

 <t-btn color="bg-error bg-opacity-20"> Custom </t-btn>
 

```vue
<template>
    <t-btn color="custom"> Custom </t-btn>
</template>

<style>
    .custom {
        background: #EF444433;
    }
</style>
```

直接自定义 <t-tag>css</t-tag> 后注入进去就可以了👍


:::warning 兼容与规范
你应该始终将这些自定义的  <t-tag color="warning">css</t-tag> 放在 <t-tag color="warning">App.vue</t-tag> 的 **style** 标签下。  
<p>
一方面是为了规范管理，另一方面是因为 UniApp 编译一些端时会将没有用到的 class 裁切掉，进而导致样式失效。
</p>
:::

<br />
<br />
<br />


## 利用样式库 :muscle:

其实不必每次都自定义样式，用 <t-tag>UI</t-tag> 提供的样式库里的样式直接注入也可以。

👇👇👇上边的例子可以修改成下边这样。

 <t-btn color="bg-error bg-opacity-20"> Custom </t-btn>

```vue
<template>
     <t-btn color="bg-error bg-opacity-20"> Custom </t-btn>
</template>
```

当然你用其他的全局样式库里的样式也是符合规范的。

<br />
<br />
<br />


## 支持提示 :yum:

有些 props 是无法支持预设优先的，当然这种 props 更多的是不需要支持预设优先。

所以我们得区分哪些 props 是支持的，哪些是不支持的。  

这里我取了个巧，直接 <t-tag>用组件提示的props的待选项</t-tag> 去做提示。

当你碰到组件的 props 待选项中出现 <t-tag>···</t-tag> 时，就代表该 props 支持预设优先。

比如下边的按钮组件，在键入 color 时出现了 <t-tag>···</t-tag>，就代表 color 支持预设优先 。

<img :src="$withBase('/guide/presetsFirstTip.png')" alt="预设优先提示">


:::warning 三个点
注意支持 class 注入的配置是三个点而不是四个点，四个点的配置要看参数的类型以及具体要求。
:::

<br />
<br />
<br />

## 实现原理 :thinking:

创建一个符合预设优先规范的组件也非常简单，只需要 `props` 结合 `computed` 就可以实现。

👇👇👇 例如创建一个带颜色的组件。

```vue{8-12,23-25}
<template>
    <view :class="[PresetColor]">
        <!-- 省略 n 行代码 -->
    </view>
</template>

<script>
// 预设对象
const presets = {
    primary: 'custom-primary',
    accent: 'custom-accent'
}

export default {
    props: {
        color: {
            type: String,
            default: ''
        }
    },
    computed: {
        PresetColor() {
            const { color } = this
            // 以下是关键代码，预设对象映射不出来时直接走用户的自定义
            return presets[color] || color
        }
    }
}
</script>

<style scoped>
.custom-primary {
    background-color: #570DF8;
}

.custom-accent {
    background-color: #37CDBE;
}
</style>
```

当然我在 `UI` 内部还做了大量优化，使得体积更小，维护性更强。  

具体可以看源代码中 `core` 的实现，当然基本的原理就像上边那样简单。

<br />
<br />
<br />

## 最佳实践 :smiling_face_with_three_hearts:

:::warning 合理的预设
以下是我在实践中总结出的预设配置，目前该预设配置也是 <t-tag color="warning">UI</t-tag> 中组件的 props 基石。

目前 <t-tag color="warning">UI</t-tag> 中的组件大部分包含以下预设配置，当然具体还是要看组件的 props 支持。

:::

根据日常业务中魔改频率较大的 `props`，可以分为以下四类: 

1. 颜色 color
2. 阴影 shadow
3. 圆角 rounded
4. 尺寸 size
 

👇👇👇 下边以 <t-tag :light="false">按钮组件</t-tag> 作为案例来讲解。


<br />

### 颜色

如果你详细看了 [Design 样式库-颜色-最佳实践](/tob-ui-doc/guide/design/style/#最佳实践)，就知道一个好看的配色需要写太多 <t-tag>原子css</t-tag> 了，所以我将实践中的三种颜色搭配整合成更简单的应用方式。

`prop` 为 `color`，预设值如下:

- primary 主要
- secondary 次要
- accent 强调
- neutral 中和
- base 基础
- info 信息
- success 成功
- warning 警告
- error 错误


#### 原色

原色是默认的颜色，深背景色，白色字。

<t-btn v-for="v of colors" :key="v.type" :color="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-btn>

```vue
<template>
	<view>
		<t-btn color="primary">主要</t-btn>
		<t-btn color="secondary">次要</t-btn>
		<t-btn color="accent">强调</t-btn>
		<t-btn color="neutral">中和</t-btn>
		<t-btn color="base">基础</t-btn>
		<t-btn color="info">信息</t-btn>
		<t-btn color="success">成功</t-btn>
		<t-btn color="warning">警告</t-btn>
		<t-btn color="error">错误</t-btn>
	</view>
</template>
```

<br />

#### 高亮

在原色的基础上多设置一个 `light` 的 `prop` 即可，深色文字，浅背景色 (10%的不透明度)

<t-btn v-for="v of colors" :key="v.type" light :color="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-btn>

```vue
<template>
	<view>
		<t-btn light color="primary">主要</t-btn>
		<t-btn light color="secondary">次要</t-btn>
		<t-btn light color="accent">强调</t-btn>
		<t-btn light color="neutral">中和</t-btn>
		<t-btn light color="base">基础</t-btn>
		<t-btn light color="info">信息</t-btn>
		<t-btn light color="success">成功</t-btn>
		<t-btn light color="warning">警告</t-btn>
		<t-btn light color="error">错误</t-btn>
	</view>
</template>
```

<br />

#### 轮廓

在原色的基础上多设置一个 `outline` 的 `prop` 即可，深色边框和深色文字，透明背景

<t-btn v-for="v of colors" :key="v.type" outline :color="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-btn>

```vue
<template>
	<view>
		<t-btn outline color="primary">主要</t-btn>
		<t-btn outline color="secondary">次要</t-btn>
		<t-btn outline color="accent">强调</t-btn>
		<t-btn outline color="neutral">中和</t-btn>
		<t-btn outline color="base">基础</t-btn>
		<t-btn outline color="info">信息</t-btn>
		<t-btn outline color="success">成功</t-btn>
		<t-btn outline color="warning">警告</t-btn>
		<t-btn outline color="error">错误</t-btn>
	</view>
</template>
```

<br />
<br />

### 阴影

`prop` 为 `shadow`，预设值如下:

- xl 超大
- lg 大
- md 中
- base 基础
- sm 小
- none 无

<t-btn v-for="v of shadows" :key="v.type" :shadow="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-btn>

```vue
<template>
	<view>
		<t-btn shadow="xl" color=" ">超大</t-btn>
		<t-btn shadow="lg" color=" ">大</t-btn>
		<t-btn shadow="md" color=" ">中</t-btn>
		<t-btn shadow="base" color=" ">基础</t-btn>
		<t-btn shadow="sm" color=" ">小</t-btn>
		<t-btn shadow="none" color=" ">无</t-btn>
	</view>
</template>
```

:::warning
该示例中设置 <t-tag color="warning">color=" "</t-tag> 是非必需的，加上只是为了突出阴影效果。
:::

<br />
<br />

### 圆角

`prop` 为 `rounded`，预设值如下:

- full 圆
- 3xl 无敌大
- 2xl 超级大
- xl 超大
- lg 大
- md 中
- base 基础
- sm 小
- none 无

<t-btn v-for="v of roundeds" :key="v.type" color="base" outline :rounded="v.type" class="m-1 mx-2 mt-4"> {{v.desc}} </t-btn>

```vue
<template>
	<view>
		<t-btn outline rounded="full">圆</t-btn>
		<t-btn outline rounded="3xl">无敌大</t-btn>
		<t-btn outline rounded="2xl">超级大</t-btn>
		<t-btn outline rounded="xl">超大</t-btn>
		<t-btn outline rounded="lg">大</t-btn>
		<t-btn outline rounded="md">中</t-btn>
		<t-btn outline rounded="base">基础</t-btn>
		<t-btn outline rounded="sm">小</t-btn>
		<t-btn outline rounded="none">无</t-btn>
	</view>
</template>
```

:::warning
该示例中的 <t-tag color="warning">outline</t-tag> 是非必需的，加上只是为了突出圆角效果。
:::

<br />
<br />

### 尺寸

`prop` 为  `size`，预设值如下:

- lg 大
- md 中 👉 默认
- sm 小 
- xs 超小

由于尺寸每个组件都不同，`props` 的预设值对应的也是不同的尺寸。

<t-btn size="lg" class="m-1 mx-2 mt-4" color="base">大</t-btn>
<t-btn size="md" class="m-1 mx-2 mt-4" color="base">中</t-btn>
<t-btn size="sm" class="m-1 mx-2 mt-4" color="base">小</t-btn>
<t-btn size="xs" class="m-1 mx-2 mt-4" color="base">超小</t-btn>

```vue
<template>
	<view>
		<t-btn size="lg">圆</t-btn>
		<t-btn size="md">无敌大</t-btn>
		<t-btn size="sm">超级大</t-btn>
		<t-btn size="xs">超大</t-btn>
	</view>
</template>
```

<br />
<br />
<br />

## 启发 :nerd_face:

该 `idea` 由以下技术启发:

- [Windicss - Attributify-mode](https://cn.windicss.org/features/attributify.html#attributify-mode)

<br />
<br />
<br />

