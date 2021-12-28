---
next: /components/show/pendant
layout: TLayout
mobile: /h5/index.html#/pages/feedback/overlay/overlay
---

# 遮罩

<br />
<br />

## 示例 :thinking:

<br />


### 基础

直接调用 `ref` 的 `show` 显示即可

```vue{13}
<template>
    <view>
        <t-cell title="展示" value="😄" @click="open" />

        <t-overlay ref="overlay" />
    </view>
</template>

<script>
    export default {
        methods: {
           open() {
				this.$refs.overlay.show()
			}
        }
    }
</script>
```

<br />
<br />

### 插槽

直接嵌入你想要的内容即可，当然这里更推荐你使用 [弹出层](/components/base/popup/) 组件

```vue{8}
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="展示" value="😀" @click="open" />
        </t-cell-group>

        <t-overlay ref="overlay"> 
			<view class="bg-white rounded h-20 w-25" />
	    </t-overlay>
    </view>
</template>

<script>
    export default {
        methods: {
           open() {
				this.$refs.overlay.show()
			}
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|       属性       |     说明     |  类型   | 默认值 |    可选值     |
| :--------------: | :----------: | :-----: | :----: | :-----------: |
|      zIndex      |     层级     | number  |  100   |               |
|    slotCenter    | 嵌入内容居中 | boolean |  true  | <t-doc-boo /> |
| closeOnClickMask | 点击蒙版关闭 | boolean |  true  | <t-doc-boo /> |


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