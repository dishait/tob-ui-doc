---
layout: TLayout
mobile: /h5/index.html#/pages/form/switch/switch
---

# 开关


<br />
<br />

## 示例 :thinking:

绑定 `v-model` 即可，`true` 为开，`false` 为关

<br />


### 颜色



设置 `color` 即可

```vue
<template>
	<view>
        <t-switch v-model="value" color="primary">主要</t-switch>
        <t-switch v-model="value" color="secondary">次要</t-switch>
        <t-switch v-model="value" color="accent">强调</t-switch>
        <t-switch v-model="value" color="neutral">中和</t-switch>
        <t-switch v-model="value" color="base">基础</t-switch>
        <t-switch v-model="value" color="info">信息</t-switch>
        <t-switch v-model="value" color="success">成功</t-switch>
        <t-switch v-model="value" color="warning">警告</t-switch>
        <t-switch v-model="value" color="error">错误</t-switch>
	</view>
</template>

<script>
    export default {
        data() {
            return {
               value: false
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
        <t-switch v-model="value" size="lg" >大</t-switch>
        <t-switch v-model="value" size="md" >中</t-switch>
        <t-switch v-model="value" size="sm" >小</t-switch>
        <t-switch v-model="value" size="xs" >超小</t-switch>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: false
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
        <t-switch v-model="value" rounded="full">圆</t-switch>
        <t-switch v-model="value" rounded="3xl">无敌大</t-switch>
        <t-switch v-model="value" rounded="2xl">超级大</t-switch>
        <t-switch v-model="value" rounded="xl">超大</t-switch>
        <t-switch v-model="value" rounded="lg">大</t-switch>
        <t-switch v-model="value" rounded="md">中</t-switch>
        <t-switch v-model="value" rounded="base">基础</t-switch>
        <t-switch v-model="value" rounded="sm">小</t-switch>
        <t-switch v-model="value" rounded="none">无</t-switch>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: false
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
        <t-switch v-model="value" disabled>禁用</t-switch>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: false
            }
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|   属性   |      说明      |  类型   | 默认值 |      可选值       |
| :------: | :------------: | :-----: | :----: | :---------------: |
| v-model  | 开关状态(必填) | boolean |        |   <t-doc-boo />   |
|  color   |      颜色      | string  |  base  |  <t-doc-color />  |
|   size   |      尺寸      | string  |   md   |  <t-doc-size />   |
| rounnded |      圆角      | string  |  base  | <t-doc-rounded /> |
| disabled |      禁用      | boolean | false  |   <t-doc-boo />   |

<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |
| change | 变更事件 | 开关状态 |

<br />
<br />
<br />