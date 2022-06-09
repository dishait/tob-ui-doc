---
layout: TLayout
mobile: /h5/index.html#/pages/form/passwordInput/passwordInput
---

# 密码输入框



<br />
<br />

## 示例 :thinking:

<br />

### 基础

引入 `t-password-input` 组件并传入 `values` 即可

```vue
<template>
	<view>
		<view class="mx-2">
            <t-password-input :values="values" @click="open"/>
        </view>

        <t-number-key-board v-model="values" ref="nk" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                values: ''
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

### 可见

让 `visible` 为 `true` 即可

```vue
<template>
	<view>
		<view class="mx-2">
				<t-password-input :values="values" visible @click="open"/>
			</view>

        <t-number-key-board v-model="values" ref="nk" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                values: ''
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

## 属性 :monocle_face:

|  属性   |  说明  |  类型   | 默认值 |      可选值       |
| :-----: | :----: | :-----: | :----: | :---------------: |
| values  |   值   | string  |        |                   |
|  color  |  颜色  | string  |  base  |  <t-doc-color />  |
|  size   |  尺寸  | string  |   md   |  <t-doc-size />   |
| rounded |  圆角  | string  |  base  | <t-doc-rounded /> |
| shadow  |  阴影  | string  |  none  | <t-doc-shadow />  |
| length  |  长度  | number  |   5    |                   |
|  focus  |  聚焦  | boolean |  true  |   <t-doc-boo />   |
| visible | 可见性 | boolean | false  |   <t-doc-boo />   |
| zIndex  |  层级  | number  |  100   |                   |

<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |
| change | 变更事件 |  当前值  |

<br />
<br />
<br />
