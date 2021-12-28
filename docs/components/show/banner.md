---
next: /components/navigation/link
layout: TLayout
mobile: /h5/index.html#/pages/show/banner/banner
---

# 轮播图 

:::tip 继承自原生swiper
该组件是基于原生 `swiper` 组件的封装，而 `swiper` 对鼠标的拖拽不是很友好。  
<p>
    所以如果你希望有更好的体验可以直接在手机上进行 H5 调试。
</p>
:::



<br />
<br />

## 示例 :thinking:

<br />

### 基础
设置 `list` 即可，`list` 数组内元素的图片路径 `url` 是必填的。
```vue
<template>
    <view>
        <t-banner :list="list" />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
						name: '1',
						url: 'https://images.pexels.com/photos/10080749/pexels-photo-10080749.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '2',
						url: 'https://images.pexels.com/photos/10043934/pexels-photo-10043934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '3',
						url: 'https://images.pexels.com/photos/10043933/pexels-photo-10043933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					}
                ]
            }
        }
    }
</script>
```

<br />
<br />

### 纵向

让 `vertical` 为 `true` 即可

```vue
<template>
    <view>
        <t-banner :list="list" vertical />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
						name: '1',
						url: 'https://images.pexels.com/photos/10080749/pexels-photo-10080749.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '2',
						url: 'https://images.pexels.com/photos/10043934/pexels-photo-10043934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '3',
						url: 'https://images.pexels.com/photos/10043933/pexels-photo-10043933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					}
                ]
            }
        }
    }
</script>
```


<br />
<br />

### 自定义指示器

首先设置 `indicatorDots` 为 `false`，  

再通过 `indicator` 作用域插槽用于自定义指示器，作用域插槽参数如下

- current 当前处于第几个轮播图
- total 轮播图总数

```vue{4-6}
<template>
    <view>
        <t-banner :list="list" :indicatorDots="false">
            <template v-slot:indicator="{ current, total }">
                <view class="custom">{{ current }} / {{ total }}</view>
            </template>
        </t-banner>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
						name: '1',
						url: 'https://images.pexels.com/photos/10080749/pexels-photo-10080749.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '2',
						url: 'https://images.pexels.com/photos/10043934/pexels-photo-10043934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '3',
						url: 'https://images.pexels.com/photos/10043933/pexels-photo-10043933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					}
                ]
            }
        }
    }
</script>

<style scoped lang="less">
@import (reference) '@/uni_modules/tob-ui/index.less';

.custom {
    .m-2; 
    .px-1; 
    .border; 
    .rounded; 
    .text-sm; 
    .right-0; 
    .bottom-0; 
    .absolute;
    .text-error; 
    .border-error; 
}
</style>
```

<br />
<br />

### 尺寸

设置 `size` 即可

```vue
<template>
    <view>
        <t-banner :list="list" size="xs" />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
						name: '1',
						url: 'https://images.pexels.com/photos/10080749/pexels-photo-10080749.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '2',
						url: 'https://images.pexels.com/photos/10043934/pexels-photo-10043934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					},
					{
						name: '3',
						url: 'https://images.pexels.com/photos/10043933/pexels-photo-10043933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					}
                ]
            }
        }
    }
</script>
```

<br />
<br />
<br />

<script setup>
    const s = '数组，元素必须是包含url的对象'
    const t = '开启长按图片显示识别小程序码菜单'
</script>

## 属性 :monocle_face:

| 属性  |    说明    |  类型  |   默认值   |            可选值            |
| :---: | :--------: | :----: | :--------: | :--------------------------: |
| list  | 轮播图列表 | array  |     []     |            {{s}}             |
| size  |    尺寸    | string |     md     |        <t-doc-size />        |
|  img  |  图片属性  | object | 见下方讲解 | 包含 `t-img` 的 props 的对象 |


<br />
<br />

### img 属性说明

`swiper` 内部使用了 `t-img` 组件，所以开放 `img` 属性用来承载图片。  

该属性接受一个符合 `t-img` 的 `props` 的对象用于修改内部默认的的 `props`，以下是所有默认值。

|        属性         |          说明          |  类型   |    默认值     |
| :-----------------: | :--------------------: | :-----: | :-----------: |
|       status        |       轮播图列表       | string  |               |
|        webp         |      解析webp格式      | boolean |     false     |
|       shadow        |          阴影          | string  |     none      |
|       rounded       |          圆角          | string  |     none      |
|      lazyLoad       |         懒加载         | boolean |     false     |
|      draggable      | 鼠标长按是否能拖动图片 | boolean |     true      |
|        mode         |          模式          | string  |  aspectFill   |
|        size         |          尺寸          | string  | w-full h-full |
| showMenuByLongpress |         {{t}}          | boolean |     false     |

具体属性介绍可见 👉 [t-img 属性](/components/base/img/#属性) 与 👉 [t-img 原生支持](/components/base/img/#原生支持)

<br />
<br />
<br />

## 事件 :nerd_face:

|  方法名   |   说明   |    参数    |
| :-------: | :------: | :--------: |
|   click   | 点击事件 |  事件对象  |
| itemClick | 项目点击 | 点击的项目 |

<br />
<br />
<br />

## 原生支持 :yum:

1. **属性**

   - indicator-dots
   - indicator-color
   - indicator-active-color	
   - active-class
   - changing-class
   - autoplay
   - current
   - current-item-id	
   - interval
   - duration
   - circular
   - vertical
   - previous-margin
   - next-margin
   - acceleration
   - disable-programmatic-animation
   - display-multiple-items
   - skip-hidden-item-layout
   - disable-touch
   - touchable
   - easing-function

2. **事件**
   - change
   - transition
   - animationfinish

具体使用可以前往 👉 [uniapp-component-swiper](https://uniapp.dcloud.io/component/swiper?id=swiper) 查看

<br />
<br />
<br />
