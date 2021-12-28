---
layout: TLayout
mobile: /h5/index.html#/pages/show/tag/tag
---

# 标签

<br />
<br />

## 示例 :thinking:

<br />

### 颜色

设置 `color` 即可

```vue
<template>
	<view>
		<t-tag color="primary">主要</t-tag>
		<t-tag color="secondary">次要</t-tag>
		<t-tag color="accent">强调</t-tag>
		<t-tag color="neutral">中和</t-tag>
		<t-tag color="base">基础</t-tag>
		<t-tag color="info">信息</t-tag>
		<t-tag color="success">成功</t-tag>
		<t-tag color="warning">警告</t-tag>
		<t-tag color="error">错误</t-tag>
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
		<t-tag light color="primary">主要</t-tag>
		<t-tag light color="secondary">次要</t-tag>
		<t-tag light color="accent">强调</t-tag>
		<t-tag light color="neutral">中和</t-tag>
		<t-tag light color="base">基础</t-tag>
		<t-tag light color="info">信息</t-tag>
		<t-tag light color="success">成功</t-tag>
		<t-tag light color="warning">警告</t-tag>
		<t-tag light color="error">错误</t-tag>
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
		<t-tag outline color="primary">主要</t-tag>
		<t-tag outline color="secondary">次要</t-tag>
		<t-tag outline color="accent">强调</t-tag>
		<t-tag outline color="neutral">中和</t-tag>
		<t-tag outline color="base">基础</t-tag>
		<t-tag outline color="info">信息</t-tag>
		<t-tag outline color="success">成功</t-tag>
		<t-tag outline color="warning">警告</t-tag>
		<t-tag outline color="error">错误</t-tag>
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
		<t-tag size="lg">大</t-tag>
		<t-tag size="md">中</t-tag>
		<t-tag size="sm">小</t-tag>
		<t-tag size="xs">超小</t-tag>
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
		<t-tag shadow="xl">超大</t-tag>
		<t-tag shadow="lg">大</t-tag>
		<t-tag shadow="md">中</t-tag>
		<t-tag shadow="base">基础</t-tag>
		<t-tag shadow="sm">小</t-tag>
		<t-tag shadow="none">无</t-tag>
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
		<t-tag rounded="full">圆</t-tag>
		<t-tag rounded="3xl">无敌大</t-tag>
		<t-tag rounded="2xl">超级大</t-tag>
		<t-tag rounded="xl">超大</t-tag>
		<t-tag rounded="lg">大</t-tag>
		<t-tag rounded="md">中</t-tag>
		<t-tag rounded="base">基础</t-tag>
		<t-tag rounded="sm">小</t-tag>
		<t-tag rounded="none">无</t-tag>
	</view>
</template>
```

<br />
<br />


### 图标

- leftIcon 左侧图标
- rightIcon 右侧图标

```vue
<template>
	<view>
		<t-tag rightIcon="smile" color="success" light>开心</t-tag>
		<t-tag leftIcon="frown" color="error" light>伤心</t-tag>
	</view>
</template>
```

<br />
<br />


### 可关闭

让 `closeable` 为 `true` 即可

```vue
<template>
	<view>
		<t-tag closeable color="error" light>关我</t-tag>
	</view>
</template>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|   属性    |   说明   |  类型   |    默认值    |      可选值       |
| :-------: | :------: | :-----: | :----------: | :---------------: |
|   color   |   颜色   | string  |     base     |  <t-doc-color />  |
|   light   |   高亮   | boolean |    false     |   <t-doc-boo />   |
|  outline  |   轮廓   | boolean |    false     |   <t-doc-boo />   |
|   size    |   尺寸   | string  |      md      |  <t-doc-size />   |
| rounnded  |   圆角   | string  |     base     | <t-doc-rounded /> |
|  shadow   |   阴影   | string  |     none     | <t-doc-shadow />  |
| closeable |  可关闭  | boolean |    false     |   <t-doc-boo />   |
| leftIcon  | 左侧图标 | string  |              |  <t-doc-icon />   |
| rightIcon | 右侧图标 | string  |              |  <t-doc-icon />   |
| closeIcon | 关闭图标 | string  | close-circle |  <t-doc-icon />   |

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