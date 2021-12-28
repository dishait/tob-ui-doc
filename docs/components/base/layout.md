---
layout: TLayout
mobile: /h5/index.html#/pages/base/layout/layout
---

# 布局

<br />
<br />

## 示例 :thinking:

<br />

### 基础
`t-row` 代表一行，每个 `t-col` 代表一列，用 `t-row` 包裹这些 `t-col`。  

 `t-col` 上设置 `span` 来表示该列占几份，每一行总共24份。

```vue
<template>
	<view>
		<t-row mx="20rpx">
            <t-col :span="6">
                <view class="bg-info h-5" />
            </t-col>
            <t-col :span="6">
                <view class="bg-info bg-opacity-60 h-5" />
            </t-col>
            <t-col :span="6">
                <view class="bg-info bg-opacity-40 h-5" />
            </t-col>
            <t-col :span="6">
                <view class="bg-info bg-opacity-20 h-5" />
            </t-col>
        </t-row>
	</view>
</template>
```
:::warning 边距问题
由于 <t-tag color="warning">微信小程序</t-tag> 平台的限制，外部的边距无法影响到内部的边距。  
<p>
    所以暴露 <t-tag color="warning">mx</t-tag> 与 <t-tag color="warning">my</t-tag> 来设置外边距。当然你也可以在row外包裹多一层 <t-tag color="warning">view</t-tag> 用来设置外边距。
</p>
:::

<br />
<br />

### 间隔
设置 `t-row` 上的 `gutter` 来控制每个 `t-col` 的间距，即控制列的间距。
```vue
<template>
	<view>
		<t-row gutter="10rpx" mx="20rpx">
            <t-col :span="6">
                <view class="bg-info rounded h-5" />
            </t-col>
            <t-col :span="6">
                <view class="bg-info rounded bg-opacity-60 h-5" />
            </t-col>
            <t-col :span="6">
                <view class="bg-info rounded bg-opacity-40 h-5" />
            </t-col>
            <t-col :span="6">
                <view class="bg-info rounded bg-opacity-20 h-5" />
            </t-col>
        </t-row>
	</view>
</template>
```

<br />
<br />

### 偏移

通过设置 `t-col` 上的 `offset` 来控制偏移几份，计算方式与其 `span` 相同。

```vue
<template>
	<view>
        <t-row mx="20rpx" class="text-white">
            <t-col :span="6">
                <view class="bg-info rounded h-5" />
            </t-col>
            <t-col :span="6" :offset="6">
                <view class="bg-info rounded bg-opacity-60 h-5">偏移6份</view>
            </t-col>
        </t-row>
	</view>
</template>
```

<br />
<br />

### flex 布局

设置 `t-row` 的 `justify` 即可

```vue
<template>
	<view>
       <!-- 居中 -->
       <t-row justify="center" my="30rpx" gutter="20rpx" mx="20rpx">
            <t-col :span="6">
                <view class="block-1" />
            </t-col>
            <t-col :span="6">
                <view class="block-2" />
            </t-col>
            <t-col :span="6">
                <view class="block-3" />
            </t-col>
        </t-row>

        <!-- 等距 -->
        <t-row justify="evenly" my="30rpx" mx="20rpx">
            <t-col :span="6">
                <view class="block-1" />
            </t-col>
            <t-col :span="6">
                <view class="block-2" />
            </t-col>
            <t-col :span="6">
                <view class="block-3" />
            </t-col>
        </t-row>

        <!-- 等比 -->
        <t-row justify="around" my="30rpx" mx="20rpx">
            <t-col :span="6">
                <view class="block-1" />
            </t-col>
            <t-col :span="6">
                <view class="block-2" />
            </t-col>
            <t-col :span="6">
                <view class="block-3" />
            </t-col>
        </t-row>

        <!-- 靠两头 -->
        <t-row justify="between" my="30rpx" mx="20rpx">
            <t-col :span="6">
                <view class="block-1" />
            </t-col>
            <t-col :span="6">
                <view class="block-2" />
            </t-col>
            <t-col :span="6">
                <view class="block-3" />
            </t-col>
        </t-row>

        <!-- 头部 -->
        <t-row justify="start" gutter="20rpx" my="30rpx" mx="20rpx">
            <t-col :span="6">
                <view class="block-1" />
            </t-col>
            <t-col :span="6">
                <view class="block-2" />
            </t-col>
            <t-col :span="6">
                <view class="block-3" />
            </t-col>
        </t-row>

        <!-- 尾部 -->
        <t-row justify="end" gutter="10rpx" my="30rpx" mx="20rpx"> 
            <t-col :span="6">
                <view class="block-1" />
            </t-col>
            <t-col :span="6">
                <view class="block-2" />
            </t-col>
            <t-col :span="6">
                <view class="block-3" />
            </t-col>
        </t-row>
	</view>
</template>

<style scoped lang="less">
@import (reference) '@/uni_modules/tob-ui/index.less';

.block-1,
.block-2,
.block-3 {
    .h-5;
    .rounded;
    .bg-info;   
}

.block-2 {
    .bg-opacity-60;
}

.block-3 {
    .bg-opacity-40;
}
</style>
```
<br />
<br />
<br />

## 属性 :monocle_face:

### 行
t-row

|  属性   |    说明    |  类型  | 默认值  |            可选值            |
| :-----: | :--------: | :----: | :-----: | :--------------------------: |
|   mx    |  左右边距  | string |         | 所有的css尺寸，如10rpx，1rem |
|   my    |  上下边距  | string |         | 所有的css尺寸，如10rpx，1rem |
| gutter  |  栅格间隔  | string |         | 所有的css尺寸，如10rpx，1rem |
|  align  | 交叉轴对齐 | string | stretch |       <t-doc-align />        |
| justify |  主轴对齐  | string |  start  |      <t-doc-justify />       |

<br />
<br />

### 列
t-col

|  属性  | 说明  |  类型  | 默认值 | 可选值  |
| :----: | :---: | :----: | :----: | :-----: |
|  span  | 跨度  | number |   1    | 1 到 24 |
| offset | 偏移  | number |   0    | 1 到 24 |

<br />
<br />
<br />

## 事件 :nerd_face:

### 行
t-row
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />


### 列
t-col
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />
<br />