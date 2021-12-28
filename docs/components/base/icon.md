# 图标

:::tip 来自 Ant Design 的开源图标

图标来自 <t-tag>Ant Design</t-tag> 的开源图标, 她是一个 React 系超强的 UI 💪  

如果你日常需要使用 React 去构建应用，可以尝试用下 👉 [Ant Design](https://ant.design/index-cn)。  

当然如果你日常用的 Vue，也可以使用 Vue 版本的 👉 [Ant Design Vue](https://www.antdv.com/docs/vue/introduce-cn/)
:::

<script setup>
import ClipboardJS from "clipboard"
import { onMounted, ref } from "vue"
import { icons } from "@design/icon.js"
import { useDebounceFn } from '@vueuse/core'

const origin = icons.filter(v => !v.includes('-f'))

const t = ref("")

const visible = ref(false)

const fill = icons.filter(v => v.includes('-f'))

const hidden = useDebounceFn(() => {
  visible.value = false
}, 2000)

onMounted(() => {
    const clipboard = new ClipboardJS('.clipboard')
    clipboard.on('success', function (e) {
       t.value = e.text
       visible.value = true
       hidden()
    });
})

const size = '凡是 uniapp 下支持的 css单位 都可以，例如 11rpx，12px，3rem，2em 等。'
</script>

<style scoped>

.custom-icon-color {
    color: blue;
}

.custom {
    grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 900px) {
    .custom {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>

<br />
<br />


## 图标列表 :+1:

点击下边的图标将直接复制组件代码，粘贴到模板中即可。

<br />

### 线框风格
<div class="mt-10 grid custom">
    <t-btn v-for="v of origin" :key="v" class="mb-12 clipboard" :data-clipboard-text='`<t-icon type="${v}" />`'>
        <div class="flex flex-col items-center">
            <t-icon :type="v" />
            <div>{{v}}</div>
        </div>
    </t-btn>
</div>

<br />
<br />
<br />

### 实底风格
<div class="mt-10 grid custom">
    <t-btn v-for="v of fill" :key="v" class="mb-12 clipboard" :data-clipboard-text='`<t-icon type="${v}" />`'>
        <div class="flex flex-col items-center">
            <t-icon :type="v" />
            <div>{{v}}</div>
        </div>
    </t-btn>
</div>

<t-toast v-model:visible="visible">
    <span class="text-lg ml-1"> {{t}} <span class="font-semibold text-accent ml-2"> Copied </span> <t-icon type="check-circle-fill" size="1.2rem" class="cursor-pointer mt-2 mr-1" color="accent" /></span>
</t-toast>


<br />
<br />
<br />


## 示例 :thinking:
### 类型

设置 `type` 即可，可选值可见图标列表。当然还是推荐点击图标列表直接复制粘贴😄

<t-icon type="fire"/>

```vue
    <template>
        <t-icon type="fire" />
    </template>
```

<br />
<br />

### 尺寸

默认情况下，继承父级元素的 `font-size`，当然你也可以设置具体的大小。  

凡是 `uniapp` 下支持的 `css单位` 都可以，例如 11rpx，12px，3rem，2em 等。

<t-icon type="fire" size="1.2em" />

```vue
    <template>
        <t-icon type="fire" size="1.2em"/>
    </template>
```

<br />
<br />

### 颜色

默认情况下，颜色继承父级元素的 `color`，当然你也可以走预设或者自定义。

<t-icon type="fire" color="error" />

<t-icon type="fire" color="custom-icon-color" />

```vue
<template>
    <!-- 走预设 -->
    <t-icon type="fire" color="error" />

    <!-- 走自定义 -->
    <t-icon type="fire" color="custom" />
</template>
```
```vue
<!-- App.vue -->
<style>
.custom {
    color: blue;
}
</style>
```

<br />
<br />

### 前缀

有时候图标列表中的图标可能无法满足你的需求，这时可以到阿里矢量图标库中下载图标引入并设置前缀 `classPrefix` 即可。  

注意组件内部会自动为图标 `type` 加入 `icon-`，所以如果你的图标名称中出现 `icon-`，可以将它删掉。例如下边的 `fire` 其实就是 `icon-fire`，不需要再加 `icon-` 了。

```vue
<t-icon classPrefix="iconfont" type="fire" />
```
#### 关于图标前缀

默认情况下下载的前缀是 `iconfont`，直接使用上边的示例即可。  

当然你可以在图标库中修改 `项目设置` 中 `Font Family` 即可，具体步骤如下。

![first](/components/icon/classPrefix-first.png)
![second](/components/icon/classPrefix-second.png)

<br />
<br />
<br />

## 属性 :monocle_face:

|    属性     | 说明  |  类型  |      默认值      |             可选值              |
| :---------: | :---: | :----: | :--------------: | :-----------------------------: |
|    type     | 类型  | string |                  |         <t-doc-icon />          |
|    color    | 颜色  | string | 继承父级字体颜色 |         <t-doc-color />         |
|    size     | 尺寸  | string | 继承父级字体大小 |            {{size}}             |
| classPrefix | 前缀  | string |   tob-ui-icon    | tob-ui-icon \| iconfont \| .... |

<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />
<br />