---
layout: TLayout
mobile: /h5/index.html#/pages/form/textarea/textarea
---

# 文本区


<br />
<br />

## 示例 :thinking:

<br />

### 颜色

设置 `color` 即可

```vue
<template>
	<view>
		<t-textarea v-model="value" placeholder="主要" color="primary" />
		<t-textarea v-model="value" placeholder="次要" color="secondary" />
		<t-textarea v-model="value" placeholder="强调" color="accent" />
		<t-textarea v-model="value" placeholder="中和" color="neutral" />
		<t-textarea v-model="value" placeholder="基础" color="base" />
		<t-textarea v-model="value" placeholder="信息" color="info" />
		<t-textarea v-model="value" placeholder="成功" color="success" />
		<t-textarea v-model="value" placeholder="警告" color="warning" />
		<t-textarea v-model="value" placeholder="错误" color="error" />
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

### 圆角

设置 `rounded` 即可

```vue
<template>
	<view>
		<t-textarea v-model="value" placeholder="圆" rounded="full" />
		<t-textarea v-model="value" placeholder="无敌大" rounded="3xl" />
		<t-textarea v-model="value" placeholder="超级大" rounded="2xl" />
		<t-textarea v-model="value" placeholder="超大" rounded="xl" />
		<t-textarea v-model="value" placeholder="大" rounded="lg" />
		<t-textarea v-model="value" placeholder="中" rounded="md" />
		<t-textarea v-model="value" placeholder="基础" rounded="base" />
		<t-textarea v-model="value" placeholder="小" rounded="sm" />
		<t-textarea v-model="value" placeholder="无" rounded="none" />
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

### 尺寸

设置 `size` 即可

```vue
<template>
	<view>
		<t-textarea v-model="value" placeholder="大" size="lg" />
		<t-textarea v-model="value" placeholder="中" size="md" />
		<t-textarea v-model="value" placeholder="小" size="sm" />
		<t-textarea v-model="value" placeholder="超小" size="xs" />
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
		<t-textarea v-model="value" disabled  />
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

## 属性 :monocle_face:

|    属性     |   说明   |  类型   |   默认值   |      可选值       |
| :---------: | :------: | :-----: | :--------: | :---------------: |
|   v-model   | 当前文本 | string  |            |                   |
|    color    |   颜色   | string  |    base    |  <t-doc-color />  |
|    size     |   尺寸   | string  |     md     |  <t-doc-size />   |
|  rounnded   |   圆角   | string  |    base    | <t-doc-rounded /> |
|  disabled   |   禁用   | boolean |   false    |   <t-doc-boo />   |
| placeholder |  占位符  | string  |            |                   |
|  maxlength  | 最大长度 | number  | -1，无限长 |                   |

<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |
| reset  | 重置事件 | 事件对象 |
| change | 变更事件 | 事件对象 |

<br />
<br />
<br />

## 原生支持 :yum:

1. **属性**

   - placeholder-style
   - focus
   - auto-height
   - fixed
   - cursor-spacing
   - cursor
   - confirm-type
   - confirm-hold
   - show-confirm-bar
   - selection-start
   - selection-end
   - adjust-position
   - disable-default-padding
   - hold-keyboard
   - auto-blur

2. **事件**
   - focus
   - blur
   - confirm
   - lineChange
   - keyboardheightchange

具体使用可以前往 👉 [uniapp-component-textarea](https://uniapp.dcloud.io/component/textarea) 查看

<br />
<br />
<br />
