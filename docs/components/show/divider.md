---
layout: TLayout
mobile: /h5/index.html#/pages/show/divider/divider
---

# 分割线

<br />
<br />

## 示例 :thinking:

<br />

### 基础

直接插入 `t-divider` 组件即可

```vue{4}
<template>
    <view class="flex flex-col my-10 mx-3">
        <view class="content">内容</view>
        <t-divider />
        <view class="content">内容</view>
    </view>
</template>

<style scoped lang="less">
@import (reference) '@/uni_modules/tob-ui/index.less';

.content {
	.h-20;
	.flex;
	.rounded;
	.bg-base;
	.text-base;
	.bg-opacity-10;
	.items-center;
	.justify-center;
}
</style>
```

<br />
<br />

### 竖排

让 `vertical` 为 `true` 即可，当然你得确保元素都在同一条水平线上

```vue{4}
<template>
    <view class="flex my-10 mx-3">
        <view class="flex-1 content">内容</view>
        <t-divider vertical />
        <view class="flex-1 content">内容</view>
    </view>
</template>

<style scoped lang="less">
@import (reference, less) '@/uni_modules/tob-ui/index.less';

.content {
	.h-20;
	.flex;
	.rounded;
	.bg-base;
	.text-base;
	.bg-opacity-10;
	.items-center;
	.justify-center;
}
</style>
```

<br />
<br />


### 文本

设置 `text` 即可

```vue{5,11}
<template>
    <view>
        <view class="flex flex-col my-10 mx-3">
            <view class="content">内容</view>
            <t-divider text="OR" />
            <view class="content">内容</view>
        </view>
        
        <view class="flex my-10 mx-3">
            <view class="flex-1 content">内容</view>
            <t-divider vertical text="OR" />
            <view class="flex-1 content">内容</view>
        </view>
    </view>
</template>

<style scoped lang="less">
@import (reference, less) '@/uni_modules/tob-ui/index.less';

.content {
	.h-20;
	.flex;
	.rounded;
	.bg-base;
	.text-base;
	.bg-opacity-10;
	.items-center;
	.justify-center;
}
</style>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|   属性   | 说明  |  类型   | 默认值 |    可选值     |
| :------: | :---: | :-----: | :----: | :-----------: |
|   text   | 文本  | string  |        |               |
| vertical | 竖排  | boolean | false  | <t-doc-boo /> |


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
