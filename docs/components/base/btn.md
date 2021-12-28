---
layout: TLayout
mobile: /h5/index.html#/pages/base/btn/btn
---

# 按钮

<br />
<br />

## 示例 :thinking:

<br />

### 颜色

设置 `color` 即可

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
<br />

### 高亮

设置 `color` 的基础上，让 `light` 为 `true` 即可

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
<br />

### 轮廓

设置 `color` 的基础上，让 `outline` 为 `true` 即可

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

### 幽灵

让 `ghost` 为 `true` 即可

```vue
<template>
	<view>
		<t-btn ghost>幽灵</t-btn>
	</view>
</template>
```

<br />
<br />

### 尺寸

设置 `size` 即可

```vue
<template>
	<view>
		<t-btn size="lg">大</t-btn>
		<t-btn size="md">中</t-btn>
		<t-btn size="sm">小</t-btn>
		<t-btn size="xs">超小</t-btn>
	</view>
</template>
```

<br />
<br />

### 圆角

设置 `rounded` 即可

```vue
<template>
	<view>
		<t-btn rounded="full">圆</t-btn>
		<t-btn rounded="3xl">无敌大</t-btn>
		<t-btn rounded="2xl">超级大</t-btn>
		<t-btn rounded="xl">超大</t-btn>
		<t-btn rounded="lg">大</t-btn>
		<t-btn rounded="md">中</t-btn>
		<t-btn rounded="base">基础</t-btn>
		<t-btn rounded="sm">小</t-btn>
		<t-btn rounded="none">无</t-btn>
	</view>
</template>
```

<br />
<br />

### 阴影

设置 `shadow` 即可

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

### 禁用

让 `disabled` 为 `true` 即可

```vue
<template>
	<view>
		<t-btn disabled color="primary">主要</t-btn>
		<t-btn disabled color="secondary">次要</t-btn>
		<t-btn disabled color="accent">强调</t-btn>
		<t-btn disabled color="neutral">中和</t-btn>
		<t-btn disabled color="base">基础</t-btn>
		<t-btn disabled color="info">信息</t-btn>
		<t-btn disabled color="success">成功</t-btn>
		<t-btn disabled color="warning">警告</t-btn>
		<t-btn disabled color="error">错误</t-btn>
	</view>
</template>
```

<br />
<br />

### 块级元素

让 `block` 为 `true` 即可

```vue
<template>
	<view>
		<t-btn block>块级</t-btn>
	</view>
</template>
```

<br />
<br />

### 加载中

让 `loading` 为 `true` 即可

```vue
<template>
	<view>
		<t-btn loading>块级</t-btn>
	</view>
</template>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|   属性   |   说明   |  类型   | 默认值 |      可选值       |
| :------: | :------: | :-----: | :----: | :---------------: |
|  color   |   颜色   | string  |  base  |  <t-doc-color />  |
|  light   |   高亮   | boolean | false  |   <t-doc-boo />   |
| outline  |   轮廓   | boolean | false  |   <t-doc-boo />   |
|  ghost   |   幽灵   | boolean | false  |   <t-doc-boo />   |
|   size   |   尺寸   | string  |   md   |  <t-doc-size />   |
| rounnded |   圆角   | string  |  base  | <t-doc-rounded /> |
|  shadow  |   阴影   | string  |  none  | <t-doc-shadow />  |
| disabled |   禁用   | boolean | false  |   <t-doc-boo />   |
|  block   | 块级元素 | boolean | false  |   <t-doc-boo />   |
| loading  |  加载中  | boolean | false  |   <t-doc-boo />   |

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

## 原生支持 :yum:

1. **属性**

   - open-type
   - launch-app
   - app-parameter
   - lang
   - session-from
   - send-message-title
   - send-message-path
   - send-message-img
   - show-message-card

2. **事件**
   - getphonenumber
   - getuserinfo
   - error
   - opensetting
   - launchapp

具体使用可以前往 👉 [uniapp-component-button](https://uniapp.dcloud.io/component/button) 查看

<br />
<br />
<br />
