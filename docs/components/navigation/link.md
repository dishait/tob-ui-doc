---
layout: TLayout
mobile: /h5/index.html#/pages/navigation/link/link
---

# 链接

<br />
<br />

## 示例 :thinking:

<br />

### 颜色

设置 `color` 即可

```vue
<template>
	<view>
		<t-link color="primary">主要</t-link>
		<t-link color="secondary">次要</t-link>
		<t-link color="accent">强调</t-link>
		<t-link color="neutral">中和</t-link>
		<t-link color="base">基础</t-link>
		<t-link color="info">信息</t-link>
		<t-link color="success">成功</t-link>
		<t-link color="warning">警告</t-link>
		<t-link color="error">错误</t-link>
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
		<t-link size="lg">大</t-link>
		<t-link size="md">中</t-link>
		<t-link size="sm">小</t-link>
		<t-link size="xs">超小</t-link>
	</view>
</template>
```

<br />
<br />

### 跳转
设置 `to` 为具体的页面路径即可，只支持 `uni.navigateTo` 能跳转的页面，    

其他类型的跳转可以绑定 `click` 事件自行实现。
```vue
<template>
    <view>
        <t-link to="/pages/base/button/button" />
    </view>
</template>
```

<br />
<br />
<br />

## 属性 :monocle_face:

| 属性  |   说明   |  类型   | 默认值 |         可选值          |
| :---: | :------: | :-----: | :----: | :---------------------: |
| color |   颜色   | string  |  base  |     <t-doc-color />     |
| size  |   尺寸   | string  |   md   |     <t-doc-size />      |
|  to   | 跳转路径 | string  |        | `navigateTo` 支持的路径 |
| focus |   聚焦   | boolean | false  |      <t-doc-boo />      |

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
