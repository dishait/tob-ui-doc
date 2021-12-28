---
layout: TLayout
mobile: /h5/index.html#/pages/form/numberKeyBoard/numberKeyBoard
---

# 数字键盘


<br />
<br />

## 示例 :thinking:

<br />

### 基础

引入 `t-number-key-board` 组件，并绑定 `v-model` 即可。  

通过调用 `ref` 上的 `show` 即可调出该数字键盘。

```vue
<template>
	<view>
		<view class="text-center">
            <view class="mb-2">value: {{ value }}</view>
            <t-btn color="primary" @click="open" size="px-10" outline>open</t-btn>
        </view>

        <t-number-key-board v-model="value" ref="nk" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            open() {
                this.$refs.nk.show()
            }
        }
    }
</script>
```

<br />
<br />

### 自定义待选

设置 `values` 即可

```vue{17}
<template>
	<view>
		<view class="text-center">
            <view class="mb-2">value: {{ value }}</view>
            <t-btn color="secondary" @click="open" size="px-10" outline>open</t-btn>
        </view>

        <t-number-key-board v-model="value" :values="values" ref="nk" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                values: [3, 2, 1, 4, 7, 6, 5, 9, 8, '00', 0, '.']
            }
        },
        methods: {
            open() {
                this.$refs.nk.show()
            }
        }
    }
</script>
```

<br />
<br />
<br />


<script setup>
    const s = 'Array<string | number>'
    const d = "[1, 2, 3, 4, 5, 6, 7, 8, 9, '00', 0, '.']"
</script>

## 属性 :monocle_face:

|   属性    |   说明   |  类型  | 默认值  | 可选值 |
| :-------: | :------: | :----: | :-----: | :----: |
|  v-model  | 当前文本 | string |         |        |
|  values   |  待选值  | {{s}}  | {{ d }} |        |
|  zIndex   |   层级   | number |   100   |        |
| maxlength | 最大长度 | number |   100   |        |

<br />
<br />
<br />

## 事件 :nerd_face:

|  方法名   |     说明     |   参数   |
| :-------: | :----------: | :------: |
|   click   |   点击事件   | 事件对象 |
|  change   |   变更事件   |  当前值  |
| maskClick | 蒙版点击事件 | 事件对象 |

<br />
<br />
<br />