---
layout: TLayout
mobile: /h5/index.html#/pages/form/slider/slider
---

# 滑块
:::tip 继承自原生
原生滑块有非常好的性能，所以滑块组件继承自原生。
:::
<br />
<br />

## 示例 :thinking:

<br />

### 颜色

设置 `color` 即可

```vue
<template>
	<view>
		<t-slider v-model="value" color="primary" />
		<t-slider v-model="value" color="secondary" />
		<t-slider v-model="value" color="accent" />
		<t-slider v-model="value" color="neutral" />
		<t-slider v-model="value" color="base" />
		<t-slider v-model="value" color="info" />
		<t-slider v-model="value" color="success" />
		<t-slider v-model="value" color="warning" />
		<t-slider v-model="value" color="error" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: 0
            }
        }
    }
</script>
```

<br />
<br />

### 显示值

让 `showValue` 为 `true` 即可

```vue
<template>
	<view>
		<t-slider v-model="value" showValue />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        }
    }
</script>
```

<br />
<br />

### 单独改变各部分颜色

- blockColor 滑块的颜色
- activeColor 滑块左侧已选择部分的线条颜色
- backgroundColor 滑块右侧背景条的颜色

```vue
<template>
	<view>
		<t-slider v-model="value" blockColor="white" activeColor="#228be6" backgroundColor="#dee2e6" showValue />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        }
    }
</script>
```

<br />
<br />

### 禁用

让 `disabled` 为 `true` 即可

```vue
<template>
	<view>
		<t-slider disabled v-model="value" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        }
    }
</script>
```

<br />
<br />
<br />

<script setup>
const s = "取值必须大于 0，并且可被(max - min)整除"
</script>

## 属性 :monocle_face:

|      属性       |    说明    |  类型   | 默认值 |       可选值       |
| :-------------: | :--------: | :-----: | :----: | :----------------: |
|     v-model     |   当前值   | number  |        |                    |
|      color      |    颜色    | string  |  base  |  <t-doc-color />   |
|       min       |   最小值   | number  |   0    |                    |
|       max       |   最大值   | number  |  100   |                    |
|      step       |    步长    | number  |   1    |       {{s}}        |
|    disabled     |    禁用    | boolean | false  |   <t-doc-boo />    |
|    showValue    | 显示当前值 | boolean | false  |   <t-doc-boo />    |
|    blockSize    | 滑块的大小 | boolean |   20   | 取值范围为 12 - 28 |
|   blockColor    | 滑块的颜色 | string  |        |                    |
|   activeColor   | 左侧条颜色 | string  |        |                    |
| backgroundColor | 右侧条颜色 | string  |        |                    |

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

## 原生支持 :yum:

1. **事件**
   - change
   - changing

具体使用可以前往 👉 [uniapp-component-slider](https://uniapp.dcloud.io/component/slider) 查看

<br />
<br />
<br />
