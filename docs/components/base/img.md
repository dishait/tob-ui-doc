---
layout: TLayout
mobile: /h5/index.html#/pages/base/img/img
---

# 图片

<br />
<br />

## 示例 :thinking:

:::tip 模拟的src
图片呈现高度依赖 <t-tag>src</t-tag>，以下示例将以 <t-tag>src="..."</t-tag> 模拟表示合法的图片路径，可以换成自己合法的图片路径，当然你可以到 👉 [pixel](https://www.pexels.com/zh-cn/) 中找合适的图片路径进行调试。
:::

<br />

### 模式

继承自 `uniapp` 原生，设置 `mode` 既可，具体可见 👉 [uniapp-component-image](https://uniapp.dcloud.io/component/image)

```vue
<template>
    <view>
        <t-img rounded="base" src="..." mode="scaleToFill" />
        <t-img rounded="base" src="..." mode="aspectFit" />
        <t-img rounded="base" src="..." mode="aspectFill" />

        <t-img rounded="base" src="..." mode="widthFix" />
        <t-img rounded="base" src="..." mode="heightFix" />
        
        <t-img rounded="base" src="..." mode="top" />
        <t-img rounded="base" src="..." mode="bottom" />
        <t-img rounded="base" src="..." mode="center" />
        <t-img rounded="base" src="..." mode="left" />
        <t-img rounded="base" src="..." mode="right" />
        <t-img rounded="base" src="..." mode="top left" />
        <t-img rounded="base" src="..." mode="top right" />
        <t-img rounded="base" src="..." mode="bottom left" />
        <t-img rounded="base" src="..." mode="bottom right" />
    </view>
</template>
```
:::warning 更舒适
该示例中的 <t-tag color="warning">rounded="base"</t-tag> 是非必需的，加上只是为了更舒适的显示效果。
:::

<br />
<br />

### 尺寸

设置 `size` 即可

```vue
<template>
	<view>
		<t-img shadow="sm" rounded="md" src="..." size="lg" />
		<t-img shadow="sm" rounded="md" src="..." size="md" />
		<t-img shadow="sm" rounded="md" src="..." size="sm" />
		<t-img shadow="sm" rounded="md" src="..." size="xs" />
	</view>
</template>
```
:::warning 更舒适
该示例中的 <t-tag color="warning">shadow="sm"</t-tag> 与 <t-tag color="warning">rounded="md"</t-tag> 是非必需的，加上只是为了更舒适的显示效果。
:::

<br />
<br />

### 圆角
设置 `rounded` 即可
```vue
<template>
	<view>
		<t-img shadow="sm" src="..." rounded="full" />
		<t-img shadow="sm" src="..." rounded="3xl" />
		<t-img shadow="sm" src="..." rounded="2xl" />
		<t-img shadow="sm" src="..." rounded="xl" />
		<t-img shadow="sm" src="..." rounded="lg" />
		<t-img shadow="sm" src="..." rounded="md" />
		<t-img shadow="sm" src="..." rounded="base" />
		<t-img shadow="sm" src="..." rounded="sm" />
		<t-img shadow="sm" src="..." rounded="none" />
	</view>
</template>
```
:::warning 更舒适
该示例中的 <t-tag color="warning">shadow="sm"</t-tag> 是非必需的，加上只是为了更舒适的显示效果。
:::

<br />
<br />

### 阴影
设置 `shadow` 即可
```vue
<template>
	<view>
		<t-img rounded="md" src="..." shadow="xl" />
		<t-img rounded="md" src="..." shadow="lg" />
		<t-img rounded="md" src="..." shadow="md" />
		<t-img rounded="md" src="..." shadow="base" />
		<t-img rounded="md" src="..." shadow="sm" />
		<t-img rounded="md" src="..." shadow="none" />
	</view>
</template>
```
:::warning 更舒适
该示例中的 <t-tag color="warning">rounded="md"</t-tag> 是非必需的，加上只是为了更舒适的显示效果。
:::

<br />
<br />

### 状态
设置 `status` 即可，`online` 表示在线，`offline` 表示离线
```vue{3-4,6-7}
<template>
	<view>
        <!-- 在线 -->
		<t-img rounded="md" src="..." status="online" />

        <!-- 离线 -->
		<t-img rounded="md" src="..." status="offline" />
	</view>
</template>
```
:::warning 更舒适
该示例中的 <t-tag color="warning">rounded="md"</t-tag> 是非必需的，加上只是为了更舒适的显示效果。
:::

<br />
<br />

### 加载中

当图片加载时会以轻轻的闪烁动画并以浅灰色的背景色呈现，  

当然也可以用 <t-tag>loading 插槽</t-tag> 加入一些提示。

```vue{3-4,6-12}
<template>
	<view>
        <!-- 默认加载 -->
		<t-img rounded="md" />

        <!-- 自定义 -->
		<t-img rounded="md">
            <!-- loading 插槽 -->
            <template #loading>
                <t-icon type="image" size="1.8em" />
            </template>
        </t-img>
	</view>
</template>
```
:::warning 更舒适
该示例中的 <t-tag color="warning">rounded="md"</t-tag> 是非必需的，加上只是为了更舒适的显示效果。
:::

<br />
<br />

### 错误
当图片失败时会并以浅灰色的背景色并附带一个错误的 `icon` 呈现，  

当然也可以用 <t-tag>fail 插槽</t-tag> 自定义提示。
```vue{3-4,6-12}
<template>
	<view>
        <!-- 默认错误 -->
		<t-img rounded="md" src="我是胡来的地址" />

         <!-- 自定义 -->
        <t-img class="mb-2" rounded="md" src="我是胡来的地址">
            <!-- fail 插槽 -->
            <template #fail>
                <view>fail</view>
            </template>
        </t-img>
	</view>
</template>
```

:::warning 更舒适
该示例中的 <t-tag color="warning">rounded="md"</t-tag> 是非必需的，加上只是为了更舒适的显示效果。
:::

<br />
<br />
<br />

<script setup>
const name = 'uniapp-component-image'
const url = 'https://uniapp.dcloud.io/component/image'
</script>


## 属性 :monocle_face:

|   属性   | 说明  |  类型  | 默认值 |      可选值       |
| :------: | :---: | :----: | :----: | :---------------: |
|   size   | 尺寸  | string |   md   |  <t-doc-size />   |
| rounnded | 圆角  | string |  none  | <t-doc-rounded /> |
|  shadow  | 阴影  | string |  none  | <t-doc-shadow />  |
|  status  | 状态  | string |        | online \| offline |

<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名  |       说明       |         参数         |
| :-----: | :--------------: | :------------------: |
|  click  |     点击事件     |       事件对象       |
|  error  |   加载错误事件   | 事件对象，含错误信息 |
| success | 图片载入完毕事件 | 事件对象，含图片大小 |

<br />
<br />
<br />

## 原生支持 :yum:

1. **属性**
   - src
   - mode
   - webp
   - lazy-load
   - show-menu-by-longpress
   - draggable

具体使用可以前往 👉 [uniapp-component-image](https://uniapp.dcloud.io/component/image)

<br />
<br />
<br />
