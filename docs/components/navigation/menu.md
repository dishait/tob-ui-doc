---
layout: TLayout
mobile: /h5/index.html#/pages/navigation/menu/menu
---

# 菜单

<br />
<br />

## 示例 :thinking:

<br />

### 基础

需要引入一个 `t-menu` 来包裹 `t-menu-item` 形成一个组。

`t-menu` 上的 `v-model` 匹配到 `name` 的 `t-menu-item` 将被选中。

所以你应该确保 `t-menu-item` 上的 `name` 被设置并且是唯一的。

```vue
<template>
	<view>
		<t-menu v-model="value">
            <t-menu-item name="1">内容A</t-menu-item>
            <t-menu-item name="2">内容B</t-menu-item>
            <t-menu-item name="3">内容C</t-menu-item>
        </t-menu>
	</view>
</template>

<script>
    export default {
        value: '1'
    }
</script>
```

<br />
<br />

### 标题
设置 `t-menu` 上的 `title` 即可
```vue
<template>
	<view>
		<t-menu title="菜单A" v-model="value">
            <t-menu-item name="1">内容A</t-menu-item>
            <t-menu-item name="2">内容B</t-menu-item>
            <t-menu-item name="3">内容C</t-menu-item>
        </t-menu>
	</view>
</template>

<script>
    export default {
        value: '1'
    }
</script>
```

<br />
<br />

### 图标

设置 `t-menu-item` 上的 `icon` 即可

```vue
<template>
	<view>
		<t-menu v-model="value">
            <t-menu-item name="1" icon="eye">内容A</t-menu-item>
            <t-menu-item name="2" icon="code">内容B</t-menu-item>
            <t-menu-item name="3" icon="folder">内容C</t-menu-item>
        </t-menu>
	</view>
</template>

<script>
    export default {
        value: '2'
    }
</script>
```

<br />
<br />

### 插槽

开放右侧插槽

```vue{6-8,12,16-18}
<template>
	<view>
		<t-menu v-model="value">
            <t-menu-item name="1">
                内容A
                <template #right>
                    <t-icon type="shopping" />
                </template>
            </t-menu-item>
            <t-menu-item name="2">
                内容B
                <template #right>👀</template>
            </t-menu-item>
            <t-menu-item name="3">
                内容C
                <template #right>
                    <t-tag color="error" size="xs" light>99+</t-tag>
                </template>
            </t-menu-item>
        </t-menu>
	</view>
</template>

<script>
    export default {
        value: '1'
    }
</script>
```

<br />
<br />

### 边框

让 `t-menu` 上的 `bordered` 为 `true` 即可

```vue
<template>
	<view>
		<t-menu v-model="value" bordered>
            <t-menu-item name="1">内容A</t-menu-item>
            <t-menu-item name="2">内容B</t-menu-item>
            <t-menu-item name="3">内容C</t-menu-item>
        </t-menu>
	</view>
</template>

<script>
    export default {
        value: '3'
    }
</script>
```
<br />
<br />


### 圆角

设置 `t-menu` 上的 `rounded` 即可

```vue
<template>
	<view>
		<t-menu rounded="xl" v-model="value">
            <t-menu-item name="1">内容A</t-menu-item>
            <t-menu-item name="2">内容B</t-menu-item>
            <t-menu-item name="3">内容C</t-menu-item>
        </t-menu>
	</view>
</template>

<script>
    export default {
        value: '2'
    }
</script>
```

<br />
<br />

### 阴影

设置 `t-menu` 上的 `shadow` 即可
```vue
<template>
    <view>
        <t-menu rounded="xl" shadow="md" v-model="value">
            <t-menu-item name="1">内容A</t-menu-item>
            <t-menu-item name="2">内容B</t-menu-item>
            <t-menu-item name="3">内容C</t-menu-item>
        </t-menu>
    </view>
</template>

<script>
    export default {
        value: '3'
    }
</script>
```

<br />
<br />

### 横排

让 `t-menu` 上的 `bordered` 为 `true` 即可，当然推荐设置 `size=""` 让其自适应内容宽度。

```vue
<template>
    <view>
        <t-menu size="" horizontal rounded="xl" v-model="value">
            <t-menu-item name="1">内容A</t-menu-item>
            <t-menu-item name="2">内容B</t-menu-item>
            <t-menu-item name="3">内容C</t-menu-item>
        </t-menu>
    </view>
</template>

<script>
    export default {
        value: '2'
    }
</script>
```

<br />
<br />

### 纯图标

仅设置 `t-menu-item` 上的 `icon` 即可

```vue
<template>
    <view>
        <!-- 竖排 -->
        <t-menu size="" rounded="xl" v-model="value">
            <t-menu-item name="1" icon="eye" />
            <t-menu-item name="2" icon="code" />
            <t-menu-item name="3" icon="folder" />
        </t-menu>

        <!-- 横排 -->
        <t-menu size="" rounded="xl" horizontal v-model="value">
            <t-menu-item name="1" icon="eye" />
            <t-menu-item name="2" icon="code" />
            <t-menu-item name="3" icon="folder" />
        </t-menu>
    </view>
</template>

<script>
    export default {
        value: '2'
    }
</script>
```

<br />
<br />

### 子菜单

通过 `t-sub-menu` 去包裹 `t-menu-item` 即可

```vue
<template>
    <view>
      <t-menu v-model="value" bordered>
            <t-menu-item name="1" icon="folder">Level 1</t-menu-item>

            <!-- 二级菜单 -->
            <t-sub-menu>
                <t-menu-item name="2-1" icon="folder">Level 2</t-menu-item>
                <t-menu-item name="2-2" icon="folder">Level 2</t-menu-item>

                <!-- 三级菜单 -->
                <t-sub-menu>
                    <t-menu-item name="3-1" icon="folder">Level 3</t-menu-item>
                </t-sub-menu>
            </t-sub-menu>

            <t-menu-item name="2" icon="folder">Level 1</t-menu-item>
        </t-menu>
    </view>
</template>

<script>
    export default {
        value: '1'
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

### 菜单

t-menu

|    属性     |   说明   |  类型   | 默认值  |      可选值       |
| :---------: | :------: | :-----: | :-----: | :---------------: |
|    title    |   标题   | string  |         |                   |
|  bordered   |   边框   | boolean |  false  |   <t-doc-boo />   |
| horizontal  |   横排   | boolean |  false  |   <t-doc-boo />   |
|    size     |   尺寸   | string  |   md    |  <t-doc-size />   |
|   shadow    |   阴影   | string  |   sm    | <t-doc-shadow />  |
|   rounded   |   圆角   | string  |   sm    | <t-doc-rounded /> |
| borderColor | 边框颜色 | string  | primary |  <t-doc-color />  |


<br />
<br />

###  菜单项
t-menu-item
|   属性   |   说明   |  类型   | 默认值 |     可选值     |
| :------: | :------: | :-----: | :----: | :------------: |
|   icon   |   图标   | string  |        | <t-doc-icon /> |
|   name   | 选中标识 | string  |        |                |
| disabled |   禁用   | boolean | false  | <t-doc-boo />  |


<br />
<br />
<br />

## 事件 :nerd_face:

### 菜单

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |
| change | 变更事件 | 选中标识 |


<br />
<br />

### 子菜单


| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />

### 菜单项


| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |