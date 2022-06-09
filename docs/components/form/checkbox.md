---
layout: TLayout
mobile: /h5/index.html#/pages/form/checkbox/checkbox
---

# 复选框


<br />
<br />

## 示例 :thinking:

<br />

复选框需要用一个 `t-checkbox-group` 来包裹 `t-checkbox` 形成一个组，  

`t-checkbox-group` 上的 `v-model` 数组中的元素对应其中某个 `t-checkbox` 上 `value` 。


### 颜色



设置 `color` 即可

```vue
<template>
	<view>
        <t-checkbox-group v-model="value">
            <t-checkbox color="primary" value="primary">主要</t-checkbox>
            <t-checkbox color="secondary" value="secondary">次要</t-checkbox>
            <t-checkbox color="accent" value="accent">强调</t-checkbox>
            <t-checkbox color="neutral" value="neutral">中和</t-checkbox>
            <t-checkbox color="base" value="base">基础</t-checkbox>
            <t-checkbox color="info" value="info">信息</t-checkbox>
            <t-checkbox color="success" value="success">成功</t-checkbox>
            <t-checkbox color="warning" value="warning">警告</t-checkbox>
            <t-checkbox color="error" value="error">错误</t-checkbox>
        </t-checkbox-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: ['primary']
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
        <t-checkbox-group v-model="value">
            <t-checkbox rounded="full" value="full">圆</t-checkbox>
            <t-checkbox rounded="3xl" value="3xl">无敌大</t-checkbox>
            <t-checkbox rounded="2xl" value="2xl">超级大</t-checkbox>
            <t-checkbox rounded="xl" value="xl">超大</t-checkbox>
            <t-checkbox rounded="lg" value="lg">大</t-checkbox>
            <t-checkbox rounded="md" value="md">中</t-checkbox>
            <t-checkbox rounded="base" value="base">基础</t-checkbox>
            <t-checkbox rounded="sm" value="sm">小</t-checkbox>
            <t-checkbox rounded="none" value="none">无</t-checkbox>
        </t-checkbox-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: []
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
        <t-checkbox-group v-model="value">
            <t-checkbox size="lg" value="lg">大</t-checkbox>
            <t-checkbox size="md" value="md">中</t-checkbox>
            <t-checkbox size="sm" value="sm">小</t-checkbox>
            <t-checkbox size="xs" value="xs">超小</t-checkbox>
        </t-checkbox-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: ['lg']
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
        <t-checkbox-group v-model="value">
            <t-checkbox value="abled">可用</t-checkbox>
            <t-checkbox value="disabled" disabled>禁用</t-checkbox>
        </t-checkbox-group>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                value: ['abled']
            }
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

### 复选框

t-checkbox

|   属性   |    说明    |  类型   | 默认值 |      可选值       |
| :------: | :--------: | :-----: | :----: | :---------------: |
|  value   | 标识(必填) | string  |        |                   |
|  color   |    颜色    | string  |  base  |  <t-doc-color />  |
|   size   |    尺寸    | string  |   md   |  <t-doc-size />   |
| rounded  |    圆角    | string  |  base  | <t-doc-rounded /> |
| disabled |    禁用    | boolean | false  |   <t-doc-boo />   |

<br />
<br />

### 复选框组

t-checkbox-group

|  属性   |    说明    | 类型  | 默认值 | 可选值 |
| :-----: | :--------: | :---: | :----: | :----: |
| v-model | 当前选中值 | Array |        |        |


<br />
<br />
<br />

## 事件 :nerd_face:

### 复选框

t-checkbox

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />

### 复选框组

t-checkbox-group

| 方法名 |   说明   |    参数    |
| :----: | :------: | :--------: |
| click  | 点击事件 |  事件对象  |
| change | 变更事件 | 当前选中值 |

<br />
<br />
<br />