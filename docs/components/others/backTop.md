---
layout: TLayout
mobile: /h5/index.html#/pages/others/backTop/backTop
---

# 回到顶部

<br />
<br />

## 示例 :thinking:

<br />

首先需要引入 `t-back-top` 组件，然后将 `uni.useBackTopMixin()` 注入到 `mixins` 中。

在此基础上可以设置 `t-back-top` 上的

- color 颜色
- icon 图标
- rounded 圆角
- light 高亮

```vue
<template>
    <view>
        <t-switch v-model="color" color="primary" class="my-2">颜色</t-switch>
        <t-switch v-model="light" color="secondary" class="my-2"> 高亮</t-switch>
        <t-switch v-model="rounded" color="accent" class="my-2">圆角</t-switch>
        <t-switch v-model="icon" color="error" class="my-2">自定义图标</t-switch>

        <t-back-top :color="Color" :icon="Icon" :rounded="Rounded" :light="light" />
    </view>
</template>

<script>
    export default {
        mixins: [uni.useBackTopMixin()],
        data() {
            return {
                color: false,
                light: false,
                rounded: false,
                icon: false
            }
        },
        computed: {
            Color() {
                const { color } = this
                return color ? 'primary' : null
            },
            Rounded() {
                const { rounded } = this
                return rounded ? 'xl' : 'full'
            },
            Icon() {
                const { icon } = this
                return icon ? 'arrowup' : 'caret-up' 
            }
        }
    }
</script>
```

<br />
<br />
<br />

<script setup>
const s = "默认为 50rpx，h5的tabbar页面请自行再加50px，即calc(50rpx + 50px)"
</script>

## 属性 :monocle_face:

|  属性   |   说明   |  类型   |  默认值  |               可选值               |
| :-----: | :------: | :-----: | :------: | :--------------------------------: |
|  color  |   颜色   | string  |   base   |          <t-doc-color />           |
|  light  |   高亮   | boolean |  false   |           <t-doc-boo />            |
| outline |   轮廓   | boolean |  false   |           <t-doc-boo />            |
|  size   |   尺寸   | string  |    md    |           <t-doc-size />           |
| rounded |   圆角   | string  |   full   |         <t-doc-rounded />          |
| shadow  |   阴影   | string  |    sm    |          <t-doc-shadow />          |
|  right  | 右侧距离 | string  |  50rpx   |                                    |
| bottom  | 底部距离 | string  |  {{s}}   | 50rpx \| calc(50rpx + 50px) \| ... |
|  icon   |   图标   | string  | caret-up |           <t-doc-icon />           |

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