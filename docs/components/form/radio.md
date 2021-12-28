---
layout: TLayout
mobile: /h5/index.html#/pages/form/radio/radio
---

# 单选框 


<br />
<br />

## 示例 :thinking:

<br />

单选框需要用一个 `t-radio-group` 来包裹 `t-radio` 形成一个组，  

`t-radio-group` 上的 `v-model` 将对应其中某个 `t-radio` 上的 `value`来表示当前单选值。


### 颜色



设置 `color` 即可

```vue
<template>
	<view>
        <t-radio-group v-model="value">
            <t-radio color="primary" value="primary">主要</t-radio>
            <t-radio color="secondary" value="secondary">次要</t-radio>
            <t-radio color="accent" value="accent">强调</t-radio>
            <t-radio color="neutral" value="neutral">中和</t-radio>
            <t-radio color="base" value="base">基础</t-radio>
            <t-radio color="info" value="info">信息</t-radio>
            <t-radio color="success" value="success">成功</t-radio>
            <t-radio color="warning" value="warning">警告</t-radio>
            <t-radio color="error" value="error">错误</t-radio>
        </t-radio-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: 'primary'
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
        <t-radio-group v-model="value">
            <t-radio rounded="full" value="full">圆</t-radio>
            <t-radio rounded="3xl" value="3xl">无敌大</t-radio>
            <t-radio rounded="2xl" value="2xl">超级大</t-radio>
            <t-radio rounded="xl" value="xl">超大</t-radio>
            <t-radio rounded="lg" value="lg">大</t-radio>
            <t-radio rounded="md" value="md">中</t-radio>
            <t-radio rounded="base" value="base">基础</t-radio>
            <t-radio rounded="sm" value="sm">小</t-radio>
            <t-radio rounded="none" value="none">无</t-radio>
        </t-radio-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: 'full'
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
        <t-radio-group v-model="value">
            <t-radio size="lg" value="lg">大</t-radio>
            <t-radio size="md" value="md">中</t-radio>
            <t-radio size="sm" value="sm">小</t-radio>
            <t-radio size="xs" value="xs">超小</t-radio>
        </t-radio-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: 'lg'
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
        <t-radio-group v-model="value">
            <t-radio value="abled">可用</t-radio>
            <t-radio value="disabled" disabled>禁用</t-radio>
        </t-radio-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: 'abled'
            }
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

### 单选框

t-radio

|   属性   |    说明    |  类型   | 默认值 |      可选值       |
| :------: | :--------: | :-----: | :----: | :---------------: |
|  value   | 标识(必填) | string  |        |                   |
|  color   |    颜色    | string  |  base  |  <t-doc-color />  |
|   size   |    尺寸    | string  |   md   |  <t-doc-size />   |
| rounnded |    圆角    | string  |  base  | <t-doc-rounded /> |
| disabled |    禁用    | boolean | false  |   <t-doc-boo />   |

<br />
<br />

### 单选框组

t-radio-group

|  属性   |    说明    |  类型  | 默认值 | 可选值 |
| :-----: | :--------: | :----: | :----: | :----: |
| v-model | 当前选中值 | string |        |        |


<br />
<br />
<br />

## 事件 :nerd_face:

### 单选框

t-radio

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />

### 单选框组

t-radio-group

| 方法名 |   说明   |    参数    |
| :----: | :------: | :--------: |
| click  | 点击事件 |  事件对象  |
| change | 变更事件 | 当前单选值 |

<br />
<br />
<br />