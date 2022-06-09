---
layout: TLayout
mobile: /h5/index.html#/pages/base/cell/cell
---

# 单元格

<br />
<br />

## 示例 :thinking:

<br />

### 基础

- title 左侧标题
- desc 左侧描述
- value 右侧内容

```vue
<template>
	<view>
		<t-cell title="单元格" value="内容" />
		<t-cell title="单元格" value="内容" desc="描述信息" />
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
		<t-cell title="单元格" value="内容" leftIcon="bulb" rightIcon="right" />
	</view>
</template>
```

<br />
<br />

### 垂直居中

设置 `center` 为 `true` 即可，左右两侧内容会居中保持同一水平线

```vue
<template>
	<view>
		<t-cell title="单元格" value="内容" desc="描述信息" center />
	</view>
</template>
```

<br />
<br />

### 插槽

分为 `left` 和 `right` 两部分插槽

```vue{4-10,12-15}
<template>
    <view>
        <t-cell rightIcon="right">
            <!-- 左侧插槽 -->
            <template #left>
                <view>
                    <t-icon type="alert" color="accent" class="mr-2" size="1.2em" />
                    <text class="custom-title">单元格</text>
                </view>
            </template>
            
            <!-- 右侧插槽 -->
            <template #right>
                <view class="custom-value">99+</view>
            </template>
	    </t-cell>
    </view>
</template>

<style scoped lang="less">
@import (reference) '@/uni_modules/tob-ui/index.less';

.custom-title {
    .px-2;
    .border; 
    .rounded; 
    .text-accent; 
    .border-accent;
}

.custom-value {
    .px-2;
    .rounded; 
    .bg-error; 
    .text-error; 
    .bg-opacity-10; 
}
</style>
```

<br />
<br />

### 分组

需要用一个 `t-cell-group` 来包裹 `t-cell` 形成一个组，  

同时 `t-cell-group` 可以设置 `title` 来区别一个组

```vue
<template>
    <t-cell-group title="组1">
        <t-cell title="单元格" value="内容" />
    </t-cell-group>

    <t-cell-group title="组2">
        <t-cell title="单元格" value="内容" />
    </t-cell-group>
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
        <t-cell value="前往" title="按钮页" rightIcon="right" to="/pages/base/button/button" />
    </view>
</template>
```

<br />
<br />

### 卡片
设置 `inset` 为任意 [尺寸](/tob-ui-doc/guide/design/style/#尺寸)，并且设置 `rounded` 为任意圆角即可
```vue
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="md">
            <t-cell title="单元格" value="内容" />
            <t-cell title="单元格" value="内容" />
            <t-cell title="单元格" value="内容" desc="描述信息" />
        </t-cell-group>
    </view>
</template>
```

<br />
<br />
<br />

## 属性 :monocle_face:

### 单元格
t-cell
|   属性    |   说明   |  类型   | 默认值 |         可选值          |
| :-------: | :------: | :-----: | :----: | :---------------------: |
|   title   |   标题   | string  |        |                         |
|   desc    |   描述   | string  |        |                         |
|   value   |   内容   | string  |        |                         |
| leftIcon  | 左侧图标 | string  |        |     <t-doc-icon />      |
| rightIcon | 右侧图标 | string  |        |     <t-doc-icon />      |
|  center   | 垂直居中 | boolean | false  |      <t-doc-boo />      |
|    to     | 跳转路径 | string  |        | `navigateTo` 支持的路径 |


<br />
<br />

### 单元格组
t-cell-group
|  属性   | 说明  |  类型  | 默认值 |                     可选值                     |
| :-----: | :---: | :----: | :----: | :--------------------------------------------: |
|  title  | 标题  | string |        |                                                |
| insert  | 插入  | string |        | 👉 [尺寸](/tob-ui-doc/guide/design/style/#尺寸) |
| rounded | 圆角  | string |        |               <t-doc-rounded />                |


<br />
<br />
<br />

## 事件 :nerd_face:

### 单元格
t-cell
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |


<br />
<br />

### 单元格组
t-cell-group
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />
<br />