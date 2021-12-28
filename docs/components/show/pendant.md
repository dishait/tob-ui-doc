---
layout: TLayout
mobile: /h5/index.html#/pages/show/pendant/pendant
---

# 挂件

:::tip 更通用
挂件是比徽标更通用的组件，可以往四周各个位置挂元素
:::


<br />
<br />

## 示例 :thinking:

<br />

### 在线

使用 `t-pendant` 包裹内容，同时用 `t-pendant-item` 包裹想要挂的元素

```vue
<template>
    <view>
        <t-pendant>
            <!-- 被包裹内容将被挂载到左上角 -->
            <t-pendant-item>
                <view class="custom" />
            </t-pendant-item>
            
            <view class="content">内容</view>
        </t-pendant>
    </view>
</template>

<style scoped lang="less">
@import (reference, less) '@/uni_modules/tob-ui/index.less';

.custom {
    .w-3;
    .h-3;
    .bg-success;
    .rounded-full;  
}

.content {
	.h-28;
	.w-32;
	.flex;
	.bg-base;
	.text-base;
	.rounded-md;
	.items-center;
	.bg-opacity-10;
	.justify-center;
}
</style>
```

<br />
<br />

### 徽标

```vue
<template>
    <view>
        <t-pendant>
            <t-pendant-item>
                <view class="custom" />
            </t-pendant-item>
            
            <view class="content">内容</view>
        </t-pendant>
    </view>
</template>

<style scoped lang="less">
@import (reference, less) '@/uni_modules/tob-ui/index.less';

.custom {
    .px-1; 
    .text-sm; 
    .text-white; 
    .rounded-xl;
    .bg-secondary;
}

.content {
	.h-28;
	.w-32;
	.flex;
	.bg-base;
	.text-base;
	.rounded-md;
	.items-center;
	.bg-opacity-10;
	.justify-center;
}
</style>
```
<br />
<br />

### 新闻

```vue
<template>
    <view>
        <t-pendant>
            <t-pendant-item>
                <view class="custom" />
            </t-pendant-item>
            
            <view class="content">内容</view>
        </t-pendant>
    </view>
</template>

<style scoped lang="less">
@import (reference, less) '@/uni_modules/tob-ui/index.less';

.custom {
    .px-1; 
    .text-sm; 
    .bg-accent; 
    .rounded-xl;
    .text-white;
}

.content {
	.h-28;
	.w-32;
	.flex;
	.bg-base;
	.text-base;
	.rounded-md;
	.items-center;
	.bg-opacity-10;
	.justify-center;
}
</style>
```

<br />
<br />

### 下载

```vue
<template>
    <view>
        <t-pendant>
            <t-pendant-item>
                <view class="custom">
					<t-icon type="cloud-download" />
				</view>
            </t-pendant-item>
            
            <view class="content">内容</view>
        </t-pendant>
    </view>
</template>

<style scoped lang="less">
@import (reference, less) '@/uni_modules/tob-ui/index.less';

.custom {
    .w-5; 
    .h-5; 
    .flex; 
    .shadow-sm; 
    .rounded-full; 
    .items-center; 
    .justify-center;
}

.content {
	.h-28;
	.w-32;
	.flex;
	.bg-base;
	.text-base;
	.rounded-md;
	.items-center;
	.bg-opacity-10;
	.justify-center;
}
</style>
```

<br />
<br />

### 位置

设置 `t-pendant-item` 的 `position` 即可，默认为 `right-top`。可选值如下:

- left-top 左上
- center-top 中上
- right-top 右上
- left-middle 左中
- center-middle 中
- right-middle 右中
- left-bottom 左下
- center-bottom 中下
- right-bottom 右下

```vue
<template>
    <view>
        <t-pendant>
            <t-pendant-item position="left-top">
                <view class="custom">0</view>
            </t-pendant-item>
            
            <t-pendant-item position="center-top">
                <view class="custom">1</view>
            </t-pendant-item>

            <t-pendant-item position="right-top">
                <view class="custom">2</view>
            </t-pendant-item>
            
            <t-pendant-item position="left-middle">
                <view class="custom">3</view>
            </t-pendant-item>

            <t-pendant-item position="center-middle">
                <view class="custom">4</view>
            </t-pendant-item>

            <t-pendant-item position="right-middle">
                <view class="custom">5</view>
            </t-pendant-item>

            <t-pendant-item position="left-bottom">
                <view class="custom">6</view>
            </t-pendant-item>

            <t-pendant-item position="center-bottom">
                <view class="custom">7</view>
            </t-pendant-item>

            <t-pendant-item position="right-bottom">
                <view class="custom">8</view>
            </t-pendant-item>

            <view class="content">内容</view>
        </t-pendant>
    </view>
</template>

<style scoped lang="less">
@import (reference, less) '@/uni_modules/tob-ui/index.less';

.custom {
    .px-1; 
    .bg-info; 
    .text-sm; 
    .rounded;
    .text-white; 
}

.content {
	.h-28;
	.w-32;
	.flex;
	.bg-base;
	.text-base;
	.rounded-md;
	.items-center;
	.bg-opacity-10;
	.justify-center;
}
</style>
```

<br />
<br />
<br />


<script setup>
const p = 'left-top | center-top | right-top | left-middle | center-middle | right-middle | left-bottom | center-bottom | right-bottom'
</script>

## 属性 :monocle_face:

### 挂件项
t-pendant-item
|   属性   | 说明  |  类型  |  默认值   | 可选值 |
| :------: | :---: | :----: | :-------: | :----: |
| position | 位置  | string | right-top | {{p}}  |


<br />
<br />
<br />

## 事件 :nerd_face:
### 挂件
t-pendant
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |


<br />
<br />

### 挂件项
t-pendant-item
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |


<br />
<br />
<br />