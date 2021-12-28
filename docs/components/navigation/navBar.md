---
layout: TLayout
mobile: /h5/index.html#/pages/navigation/navBar/navBar
---

# 导航栏 

## 示例 :thinking:

<br />


### 基础

- title 标题
- leftText 左侧文本
- rightIcon 右侧图标
- rightText 右侧文本

```vue
<template>
	<view>
		<t-nav-bar title="标题" leftText="左文本" rightIcon="edit" rightText="右文本" />
	</view>
</template>
```

<br />
<br />

### 插槽

分为 `左`，`中`，`右` 三个插槽，其中 `中` 插槽为默认插槽

```vue{4-9,11-12,14-17}
<template>
	<view>
		<t-nav-bar>
            <!-- 左插槽 -->
            <template #left>
                <view class="left-custom">
                    <t-icon type="home" size="1.2em" />
                </view>
            </template>

            <!-- 中间默认插槽 -->
            <view class="center-custom">标题</view>

             <!-- 右侧插槽 -->
            <template #right>
                <view class="right-custom">99+</view>
            </template>
        </t-nav-bar>
	</view>
</template>


<style scoped>
    .left-custom {
        .px-3;
        .rounded;
        .text-md; 
        .bg-accent; 
        .text-accent; 
        .bg-opacity-10;
    }

    .center-custom {
        .px-3;
        .border; 
        .rounded; 
        .text-lg; 
        .text-primary; 
        .border-primary; 
    }

    .right-custom {
        .px-3;
        .rounded; 
        .bg-error; 
        .text-error; 
        .bg-opacity-10; 
    }
</style>
```

<br />
<br />

### 颜色

设置 `color` 即可

```vue
<template>
	<view>
        <t-nav-bar title="主要" color="primary" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="次要" color="secondary" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="强调" color="accent" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="中和" color="neutral" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="基础" color="base" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="信息" color="info" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="成功" color="success" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="警告" color="warning" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="错误" color="error" leftText="Home" rightIcon="edit" />
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
        <t-nav-bar title="超大" shadow="xl" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="大" color="lg" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="中" color="md" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="基础" color="base" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="小" color="sm" leftText="Home" rightIcon="edit" />
        <t-nav-bar title="超小" color="xs" leftText="Home" rightIcon="edit" />
	</view>
</template>
```

<br />
<br />
<br />

<script setup>
    const s = '小程序端48px，其他端44px'
    const c = '自定义跳转，默认为false走navigateBack'
</script>

## 属性 :monocle_face:

|   属性    |   说明   |  类型   | 默认值 |      可选值       |
| :-------: | :------: | :-----: | :----: | :---------------: |
|   title   |   标题   | string  |        |                   |
| leftIcon  | 左侧图标 | string  |  left  |  <t-doc-icon />   |
| rightIcon | 右侧图标 | string  |        |  <t-doc-icon />   |
| leftText  | 左侧文本 | string  |        |                   |
| rightText | 右侧文本 | string  |        |                   |
|   color   |   颜色   | string  |  base  |  <t-doc-color />  |
|   size    |   尺寸   | string  |   md   |  <t-doc-size />   |
|  shadow   |   阴影   | string  |  none  | <t-doc-shadow />  |
|   delta   | 返回层级 | number  |   1    |                   |
|  sticky   | 粘性定位 | boolean | false  |   <t-doc-boo />   |
|  height   |   高度   | string  | {{s}}  | 支持的css单位都可 |
|  zIndex   |   层级   | number  |  100   | <t-doc-z-index /> |
| customGo  |  {{c}}   | boolean | false  |   <t-doc-boo />   |

<br />
<br />
<br />

## 事件 :nerd_face:

|   方法名    |     说明     |   参数   |
| :---------: | :----------: | :------: |
|    click    |   点击事件   | 事件对象 |
|  leftClick  | 左侧点击事件 | 事件对象 |
| rightClick  | 右侧点击事件 | 事件对象 |
| centerClick | 中间点击事件 | 事件对象 |

<br />
<br />
<br />