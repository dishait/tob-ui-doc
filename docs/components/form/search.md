---
layout: TLayout
mobile: /h5/index.html#/pages/form/search/search
---

# 搜索框

<br />
<br />

## 示例 :thinking:

<br />

### 颜色

原色设置 `color` 即可，在此基础上  

让 `light` 为 `true` 时显示高亮，  

让 `outline` 为 `true` 时显示轮廓

```vue
<template>
	<view>
		<t-search v-model="value" color="success" />

        <t-search v-model="value" color="success" light />

        <t-search v-model="value" color="success" outline />
	</view>
</template>

<script>
    export default {
        data() {
            value: ''
        }
    }
</script>
```

<br />
<br />

### 插槽

开放 `prefix` 前缀插槽和默认的后缀插槽

```vue{4-7,11-12}
<template>
	<view>
		<t-search v-model="value" color="error" outline>
            <!-- 前缀插槽 -->
            <template #prefix>
                <t-tag size="sm" color="error" class="mr-2" light>NEWS</t-tag>
            </template>
        </t-search>

        <t-search v-model="value" color="error" outline>
            <!-- 默认后缀插槽 -->
            <t-tag size="sm" color="error" class="ml-2" light>99+</t-tag>
        </t-search>
	</view>
</template>

<script>
    export default {
        data() {
            value: ''
        }
    }
</script>
```

<br />
<br />

### 图标

`leftIcon` 左侧图标

`clearIcon` 清除图标

```vue
<template>
	<view>
		<t-search v-model="value" color="primary" light leftIcon="shopping" clearIcon="close" />
	</view>
</template>

<script>
    export default {
        data() {
            value: ''
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
		<t-search v-model="value" color="accent" light rounded="full" />
	</view>
</template>

<script>
    export default {
        data() {
            value: ''
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
		<t-search v-model="value" color=" " rounded="full" shadow="sm" />
	</view>
</template>

<script>
    export default {
        data() {
            value: ''
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
		<t-search v-model="value" color="secondary" light size="lg"/>
	</view>
</template>

<script>
    export default {
        data() {
            value: ''
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|      属性      |      说明      |  类型   |    默认值    |         可选值          |
| :------------: | :------------: | :-----: | :----------: | :---------------------: |
|    v-model     |    当前文本    | string  |              |                         |
|     color      |      颜色      | string  |     base     |     <t-doc-color />     |
|     light      |      高亮      | boolean |    false     |      <t-doc-boo />      |
|    outline     |      轮廓      | boolean |    false     |      <t-doc-boo />      |
|      size      |      尺寸      | string  |      md      |     <t-doc-size />      |
|    rounnded    |      圆角      | string  |     base     |    <t-doc-rounded />    |
|     shadow     |      阴影      | string  |     none     |    <t-doc-shadow />     |
|    leftIcon    |    左侧图标    | string  |    search    |     <t-doc-icon />      |
|   clearIcon    |    清除图标    | string  | close-circle |     <t-doc-icon />      |
|   clearable    |   是否能清除   | boolean |     true     |      <t-doc-boo />      |
| inputTextAlign | 输入框文本对齐 | string  |     left     | left \| center \| right |
|  placeholder   |     占位符     | string  |    请输入    |                         |
|   maxlength    |    最大长度    | number  |  -1，无限长  |                         |

<br />
<br />
<br />

## 事件 :nerd_face:

|        方法名        |       说明       |   参数   |
| :------------------: | :--------------: | :------: |
|         blur         |     失焦事件     | 事件对象 |
|        clear         |     清除事件     | 事件对象 |
|        click         |     点击事件     | 事件对象 |
|        focus         |     聚焦事件     | 事件对象 |
|        change        |     变更事件     | 事件对象 |
|       confirm        |     确认事件     | 事件对象 |
|    leftIconClick     |  左图标点击事件  | 事件对象 |
| keyBoardHeightChange | 键盘高度变更事件 | 事件对象 |

<br />
<br />
<br />
