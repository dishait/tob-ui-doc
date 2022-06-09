---
next: /components/form/input/
layout: TLayout
mobile: /h5/index.html#/pages/base/popup/popup
---

# 弹出层

<br />
<br />

## 示例 :thinking:


<br />

### 弹出位置
将需要弹的内容放入 `t-popup` 内，

利用 `v-model` 去控制显示与隐藏，`mode` 控制弹出的位置。  

```vue
<template>
    <t-cell-group inset="mx-3" rounded="lg">
        <t-cell title="居中" value="😃" @click="open('center')" />
        <t-cell title="左侧" value="👉" @click="open('left')" />
        <t-cell title="右侧" value="👈" @click="open('right')" />
        <t-cell title="顶部" value="👇" @click="open('top')" />
        <t-cell title="底部" value="👆" @click="open('bottom')" />
    </t-cell-group>
    
    <t-popup v-model="visible" :mode="mode" rounded="md">
        <view class="content"> 内容 </view>
    </t-popup>
</template>

<script>
    export default {
        data() {
            visible: false,
            mode: 'center'
        },
        methods: {
            open(type) {
                this.mode = type
                this.visible = true
            }
        }
    }
</script>

<style scoped lang="less">
@import (reference) '@/uni_modules/tob-ui/index.less';

.content {
    .h-20; 
    .w-30; 
    .flex; 
    .text-lg;
    .items-center; 
    .justify-center;
}
</style>
```
`rounded` 可以控制弹出块的圆角，每个 `mode` 展示不同位置的圆角。以下是对应关系

- center 四周圆角
- top 底部圆角
- bottom 顶部圆角
- left 右侧圆角
- right 左侧圆角


<br />
<br />

### 关闭图标
可以通过 `closeIcon` 来设置关闭图标，图标的位置将跟随 `mode` 而改变。以下是对应关系

- center 右上角
- bottom 右上角
- left 右上角
- right 左上角
- top 左下角

当然你也可以向 `closeIconPosition` 注入自定义位置的 `class`

```vue
<!-- 使用的页面 -->
<template>
    <t-cell-group inset="mx-3" rounded="lg">
        <t-cell title="默认图标" value="😁" @click="open('close')" />
        
        <t-cell title="自定义图标" value="😊" @click="open('close-circle')" />
        
        <t-cell title="自定义位置" value="😊" @click="open('close', 'custom-popup-close-position')" />
    </t-cell-group>
    
    <t-popup v-model="visible" :closeIcon="closeIcon" :closeIconPosition="closeIconPosition" mode="bottom" rounded="md">
        <view class="content"> 内容 </view>
    </t-popup>
</template>

<script>
    export default {
        data() {
            visible: false,
            closeIcon: '',
            closeIconPosition: ''
        },
        methods: {
            open(closeIcon, closeIconPosition = '') {
                this.closeIcon = closeIcon
				this.closeIconPosition = closeIconPosition
                this.visible = true
            }
        }
    }
</script>

<style scoped lang="less">
@import (reference) '@/uni_modules/tob-ui/index.less';

.content {
    .h-20; 
    .w-30; 
    .flex; 
    .text-lg;
    .items-center; 
    .justify-center;
}
</style>
```

```vue
<!-- App.vue -->
<style>
/* 自定义的位置(popup) */
.custom-popup-close-position {
	top: 10rpx;
	left: 10rpx;
}
</style>
```

:::warning 始终定义在全局
由于兼容性问题，你应该始终将这些需要注入到组件当中的自定义 <t-tag color="warning">class</t-tag> 定义在全局的 <t-tag color="warning">css</t-tag> 下，例如定义在 <t-tag color="warning">App.vue</t-tag> 的 <t-tag color="warning">style 标签</t-tag> 中。
:::

<br />
<br />
<br />


<script setup>
    const a = '默认为true，只在top，left，right等模式下起效果'
    const m = 'top | bottom | center | left | right'
    const cp = '默认为空，不同模式不同位置'
</script>

## 属性 :monocle_face:

|       属性        |     说明     |  类型   | 默认值 |      可选值       |
| :---------------: | :----------: | :-----: | :----: | :---------------: |
|      v-model      |   显示隐藏   | boolean |        |   <t-doc-boo />   |
|     closeIcon     |   关闭图标   | string  |        |  <t-doc-icon />   |
|      zIndex       |     层级     | number  |  100   |                   |
|  applyStatusbar   |  应用状态栏  | boolean | {{a}}  |   <t-doc-boo />   |
| closeOnMaskClick  | 点击蒙版关闭 | boolean |  true  |   <t-doc-boo />   |
|       mode        |     模式     | string  | center |       {{m}}       |
|      rounded      |     圆角     | string  |  none  | <t-doc-rounded /> |
| closeIconPosition | 关闭图标位置 | string  | {{cp}} |                   |


<br />
<br />
<br />


## 事件 :nerd_face:

|  方法名   |     说明     |   参数   |
| :-------: | :----------: | :------: |
|   click   |   点击事件   | 事件对象 |
| maskClick | 蒙版点击事件 | 事件对象 |

<br />
<br />
<br />

## 最佳实践 :yum:

在示例中，为了减轻大家的理解负担，我们只用了一个组件来承接不同的模式 `mode`。    

但是如果你一个页面需要多个模式 `mode` 弹出组件，可以一个组件承接一个模式。这将使弹出有更好的效果，同时有更好的维护性。

<br />
<br />
<br />