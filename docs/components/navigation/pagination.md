---
layout: TLayout
mobile: /h5/index.html#/pages/navigation/pagination/pagination
---

# 分页

## 示例 :thinking:

<br />


### 基础

利用 `v-model` 绑定当前页码，`total` 设置总页数

```vue
<template>
	<view>
		<t-pagination v-model="current" :total="20" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                current: 2
            }
        }
    }
</script>
```

<br />
<br />

### 简易模式

让 `simple` 为 `true` 即可

```vue
<template>
	<view>
		<t-pagination v-model="current" simple :total="20" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                current: 1
            }
        }
    }
</script>
```

<br />
<br />

### 颜色

设置 `color` 即可，同时可以让 `light` 为 `true` 变为高亮，或者让 `outline` 为 `true` 变为轮廓。

```vue
<template>
	<view>
        <t-pagination v-model="current" simple color="error"  :total="20" />
        <t-pagination v-model="current" simple color="error" :total="20" light />
        <t-pagination v-model="current" simple color="error" :total="20" outline />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                current: 1
            }
        }
    }
</script>
```

<br />
<br />


### 圆角

设置 `rounded` 即可

```vue
<template>
	<view>
        <t-pagination v-model="current" simple rounded="xl" :total="20" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                current: 1
            }
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
        <t-pagination v-model="current" simple shadow="md" :total="20" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                current: 3
            }
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
        <t-pagination v-model="current" simple size="lg" :total="20" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
                current: 1
            }
        }
    }
</script>
```

<br />
<br />
<br />

<script setup>
    const t = "保持在99以内会更美观，大数据情况尽量用简单模式会更美观"
    const p = "保持在5以内会美观"
</script>

## 属性 :monocle_face:

|   属性   |      说明      |  类型   | 默认值 |       可选值        |
| :------: | :------------: | :-----: | :----: | :-----------------: |
| v-model  |  当前所处页数  | number  |   0    |                     |
|  color   |      颜色      | string  |  base  |   <t-doc-color />   |
|  light   |      高亮      | boolean | false  |    <t-doc-boo />    |
| outline  |      轮廓      | boolean | false  |    <t-doc-boo />    |
|   size   |      尺寸      | string  |   md   |   <t-doc-size />    |
| rounnded |      圆角      | string  |  base  |  <t-doc-rounded />  |
|  shadow  |      阴影      | string  |  none  |  <t-doc-shadow />   |
|  total   |    总记录数    | number  |   4    |        {{t}}        |
| pageSize | 一次显示多少页 | number  |   4    | 3 \| 4 \| 5,  {{p}} |
|  simple  |    简单模式    | boolean | false  |    <t-doc-boo />    |


<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名 |   说明   |    参数    |
| :----: | :------: | :--------: |
| click  | 点击事件 |  事件对象  |
| change | 变更事件 | pageDetail |

<br />


### 参数说明

#### change

`pageDetail` 👉 页面信息对象，键如下

- current 当前所处页
- isStart 是否是第一页
- isEnd 是否是最后一页


<br />
<br />
<br />