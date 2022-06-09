---
layout: TLayout
mobile: /h5/index.html#/pages/navigation/grid/grid
---

# 宫格

<br />
<br />

## 示例 :thinking:

<br />

### 基础

用 `t-grid` 来包裹 `t-grid-item`，`icon` 为图标，`text` 为描述 

```vue
<template>
	<view>
		<t-grid>
            <t-grid-item v-for="v of list" :key="v.icon" :icon="v.icon" :text="v.desc" />
        </t-grid>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        icon: 'android',
                        desc: '安卓'
                    },
                    {
                        icon: 'apple',
                        desc: '苹果'
                    },
                    {
                        icon: 'file-image',
                        desc: '文件'
                    },
                    {
                        icon: 'folder',
                        desc: '文件夹'
                    },
                    {
                        icon: 'car',
                        desc: '汽车'
                    },
                    {
                        icon: 'home',
                        desc: '房子'
                    },
                    {
                        icon: 'book',
                        desc: '书籍'
                    },
                    {
                        icon: 'highlight',
                        desc: '钢笔'
                    }
                ]
            }
        }
    }
</script>
```

<br />
<br />

### 颜色

设置 `color` 即可

```vue
<template>
	<view>
		<t-grid>
            <t-grid-item color="error" v-for="v of list" :key="v.icon" :icon="v.icon" :text="v.desc" />
        </t-grid>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        icon: 'android',
                        desc: '安卓'
                    },
                    {
                        icon: 'apple',
                        desc: '苹果'
                    },
                    {
                        icon: 'file-image',
                        desc: '文件'
                    },
                    {
                        icon: 'folder',
                        desc: '文件夹'
                    },
                    {
                        icon: 'car',
                        desc: '汽车'
                    },
                    {
                        icon: 'home',
                        desc: '房子'
                    },
                    {
                        icon: 'book',
                        desc: '书籍'
                    },
                    {
                        icon: 'highlight',
                        desc: '钢笔'
                    }
                ]
            }
        }
    }
</script>
```

<br />
<br />

### 高亮

设置 `color` 的基础上，让 `light` 为 `true` 即可

```vue
<template>
	<view>
		<t-grid>
            <t-grid-item light color="error" v-for="v of list" :key="v.icon" :icon="v.icon" :text="v.desc" />
        </t-grid>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        icon: 'android',
                        desc: '安卓'
                    },
                    {
                        icon: 'apple',
                        desc: '苹果'
                    },
                    {
                        icon: 'file-image',
                        desc: '文件'
                    },
                    {
                        icon: 'folder',
                        desc: '文件夹'
                    },
                    {
                        icon: 'car',
                        desc: '汽车'
                    },
                    {
                        icon: 'home',
                        desc: '房子'
                    },
                    {
                        icon: 'book',
                        desc: '书籍'
                    },
                    {
                        icon: 'highlight',
                        desc: '钢笔'
                    }
                ]
            }
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
		<t-grid>
            <t-grid-item outline color="error" v-for="v of list" :key="v.icon" :icon="v.icon" :text="v.desc" />
        </t-grid>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        icon: 'android',
                        desc: '安卓'
                    },
                    {
                        icon: 'apple',
                        desc: '苹果'
                    },
                    {
                        icon: 'file-image',
                        desc: '文件'
                    },
                    {
                        icon: 'folder',
                        desc: '文件夹'
                    },
                    {
                        icon: 'car',
                        desc: '汽车'
                    },
                    {
                        icon: 'home',
                        desc: '房子'
                    },
                    {
                        icon: 'book',
                        desc: '书籍'
                    },
                    {
                        icon: 'highlight',
                        desc: '钢笔'
                    }
                ]
            }
        }
    }
</script>
```

<br />
<br />

### 仅图标

不设置 `text` 即可

```vue
<template>
	<view>
		<t-grid>
            <t-grid-item color="success" v-for="v of list" :key="v" :icon="v" />
        </t-grid>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    'android',
                    'apple',
                    'file-image',
                    'folder',
                    'car',
                    'home',
                    'book',
                    'highlight'
                ]
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
		<t-grid>
            <t-grid-item light color="primary" size="lg" icon="android" text="大" />
            <t-grid-item light color="primary" size="md" icon="apple" text="中" />
            <t-grid-item light color="primary" size="sm" icon="file-image" text="小" />
            <t-grid-item light color="primary" size="xs" icon="folder" text="超小" />
        </t-grid>
	</view>
</template>
```

<br />
<br />

### 插槽

`t-grid` 上的 `column` 可以调整每行有多少列，插槽直接插到 `t-grid-item` 内即可

:::warning 模拟的src
本示例中的 <t-tag color="warning">src="..."</t-tag> 是一个模拟的 <t-tag color="warning">src</t-tag>，并非真实 <t-tag color="warning">src</t-tag>。  
<p>
    调试的时候可以换成你自己的真实 <t-tag color="warning">src</t-tag>
</p>
:::

```vue
<template>
   <view>
        <t-grid :column="3">
            <t-grid-item size="h-20">
                <t-img size="w-30 h-20" mode="aspectFill" src="..." />
            </t-grid-item>

            <t-grid-item size="h-20">
                <t-img size="w-30 h-20" mode="aspectFill" src="..." />
            </t-grid-item>

            <t-grid-item size="h-20">
                <t-img size="w-30 h-20" mode="aspectFill" src="..." />
            </t-grid-item>
        </t-grid>
   </view>
</template>
``` 


<br />
<br />

### 跳转
设置 `to` 为具体的页面路径即可，只支持 `uni.navigateTo` 能跳转的页面，    

其他类型的跳转可以绑定 `click` 事件自行实现。
```vue
<template>
    <view>
       <t-grid>
           <t-grid-item color="base" to="/pages/base/button/button" icon="experiment" text="btn页" />
        </t-grid>
    </view>
</template>
```

<br />
<br />
<br />

## 属性 :monocle_face:

### 宫格

t-grid

|  属性  | 说明  |  类型  | 默认值 |                  可选值                   |
| :----: | :---: | :----: | :----: | :---------------------------------------: |
| column | 列数  | number |   4    |       3 \| 4 \| 5 \| 6，建议不超过6       |
| gutter | 间隔  | string | 10rpx  | 5rpx \| 10rpx \| 20rpx，支持的css单位都可 |


<br />
<br />

### 宫格项
t-grid-item
|  属性   |   说明   |  类型   | 默认值 |         可选值          |
| :-----: | :------: | :-----: | :----: | :---------------------: |
|  color  |   颜色   | string  |        |     <t-doc-color />     |
|  light  |   高亮   | boolean | false  |      <t-doc-boo />      |
| outline |   轮廓   | boolean | false  |      <t-doc-boo />      |
|  size   |   尺寸   | string  |   md   |     <t-doc-size />      |
| rounded |   圆角   | string  |  base  |    <t-doc-rounded />    |
| shadow  |   阴影   | string  |  none  |    <t-doc-shadow />     |
|  icon   |   图标   | string  |        |                         |
|  text   |   文本   | string  |        |                         |
|   to    | 跳转路径 | string  |        | `navigateTo` 支持的路径 |


<br />
<br />
<br />

## 事件 :nerd_face:

### 宫格

t-grid

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |


<br />
<br />

### 宫格项
t-grid-item

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |