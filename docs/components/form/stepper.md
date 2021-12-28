---
layout: TLayout
mobile: /h5/index.html#/pages/form/stepper/stepper
---

# 步进器

<br />
<br />

## 示例 :thinking:

<br />

### 原色

让 `light` 为 `false`，并设置 `color` 即可

```vue
<template>
	<view>
		<t-stepper v-model="value" :light="false" color="primary" />
		<t-stepper v-model="value" :light="false" color="secondary" />
		<t-stepper v-model="value" :light="false" color="accent" />
		<t-stepper v-model="value" :light="false" color="neutral" />
		<t-stepper v-model="value" :light="false" color="base" />
		<t-stepper v-model="value" :light="false" color="info" />
		<t-stepper v-model="value" :light="false" color="success" />
		<t-stepper v-model="value" :light="false" color="warning" />
		<t-stepper v-model="value" :light="false" color="error" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />

### 高亮

设置 `color` 的即可， `light` 默认为 `true`

```vue
<template>
	<view>
		<t-stepper v-model="value" color="primary" />
		<t-stepper v-model="value" color="secondary" />
		<t-stepper v-model="value" color="accent" />
		<t-stepper v-model="value" color="neutral" />
		<t-stepper v-model="value" color="base" />
		<t-stepper v-model="value" color="info" />
		<t-stepper v-model="value" color="success" />
		<t-stepper v-model="value" color="warning" />
		<t-stepper v-model="value" color="error" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />

### 轮廓

设置 `color` 的基础上，让 `outline` 为 `true` 即可

```vue
<template>
	<view>
		<t-stepper v-model="value" outline color="primary" />
		<t-stepper v-model="value" outline color="secondary" />
		<t-stepper v-model="value" outline color="accent" />
		<t-stepper v-model="value" outline color="neutral" />
		<t-stepper v-model="value" outline color="base" />
		<t-stepper v-model="value" outline color="info" />
		<t-stepper v-model="value" outline color="success" />
		<t-stepper v-model="value" outline color="warning" />
		<t-stepper v-model="value" outline color="error" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />


### 阴影

设置 `shadow` 即可

```vue
<template>
	<view>
		<t-stepper v-model="value" shadow="xl" color=" " />
		<t-stepper v-model="value" shadow="lg" color=" " />
		<t-stepper v-model="value" shadow="md" color=" " />
		<t-stepper v-model="value" shadow="base" color=" " />
		<t-stepper v-model="value" shadow="sm" color=" " />
		<t-stepper v-model="value" shadow="none" color=" " />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```
:::warning
该示例中设置 <t-tag color="warning">color=" "</t-tag> 是非必需的，加上只是为了突出阴影效果。
:::

<br />
<br />

### 圆角

设置 `rounded` 即可

```vue
<template>
	<view>
		<t-stepper v-model="value" rounded="full" />
		<t-stepper v-model="value" rounded="3xl" />
		<t-stepper v-model="value" rounded="2xl" />
		<t-stepper v-model="value" rounded="xl" />
		<t-stepper v-model="value" rounded="lg" />
		<t-stepper v-model="value" rounded="md" />
		<t-stepper v-model="value" rounded="base" />
		<t-stepper v-model="value" rounded="sm" />
		<t-stepper v-model="value" rounded="none" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />

### 尺寸

设置 `size` 即可

```vue
<template>
	<view>
		<t-stepper v-model="value" size="lg" />
		<t-stepper v-model="value" size="md" />
		<t-stepper v-model="value" size="sm" />
		<t-stepper v-model="value" size="xs" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
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
		<t-stepper v-model="value" disabled />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />

### 只允许整数

让 `integer` 为 `true` 即可，`t-stepper` 将会在失焦时重置数字为整数。

```vue
<template>
	<view>
		<t-stepper integer v-model="value" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />

### 范围

设置 `max` 和 `min` 即可

```vue
<template>
	<view>
		<t-stepper :max="20" :min="0" v-model="value" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />

### 步长

设置 `step` 即可

```vue
<template>
	<view>
		<t-stepper :step="5" v-model="step" />
	</view>
</template>

<script>
    export default {
        data() {
            value: 0
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|    属性    |      说明      |  类型   | 默认值 |      可选值       |
| :--------: | :------------: | :-----: | :----: | :---------------: |
|  v-model   |     当前值     | number  |        |                   |
|   color    |      颜色      | string  |  base  |  <t-doc-color />  |
|   light    |      高亮      | boolean |  true  |   <t-doc-boo />   |
|  outline   |      轮廓      | boolean | false  |   <t-doc-boo />   |
|    size    |      尺寸      | string  |   md   |  <t-doc-size />   |
|  rounnded  |      圆角      | string  |  base  | <t-doc-rounded /> |
|   shadow   |      阴影      | string  |  none  | <t-doc-shadow />  |
|  disabled  |      禁用      | boolean | false  |   <t-doc-boo />   |
|    max     |     最大值     | number  | 10000  |                   |
|    min     |     最小值     | number  | -1000  |                   |
| inputWidth | 中间输入框宽度 | string  | 50rpx  |                   |
|  integer   |   只允许整数   | boolean | false  |   <t-doc-boo />   |
|    step    |      步长      | number  |   1    |                   |

<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名  |   说明   |   参数   |
| :-----: | :------: | :------: |
|  blur   | 失焦事件 | 事件对象 |
|  click  | 点击事件 | 事件对象 |
| change  | 变更事件 |  当前值  |
| confirm | 确认事件 |  当前值  |

<br />
<br />
<br />
