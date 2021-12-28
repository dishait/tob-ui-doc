---
layout: TLayout
mobile: /h5/index.html#/pages/navigation/breadcrumbs/breadcrumbs
---

# 面包屑 

<br />
<br />

## 示例 :thinking:

<br />

### 颜色

设置 `color` 即可。`list` 来显示路径，`list` 内项目都为字符串类型 

```vue
<template>
	<view>
		<t-breadcrumbs color="primary" :list="list">主要</t-breadcrumbs>
		<t-breadcrumbs color="secondary" :list="list">次要</t-breadcrumbs>
		<t-breadcrumbs color="accent" :list="list">强调</t-breadcrumbs>
		<t-breadcrumbs color="neutral" :list="list">中和</t-breadcrumbs>
		<t-breadcrumbs color="base" :list="list">基础</t-breadcrumbs>
		<t-breadcrumbs color="info" :list="list">信息</t-breadcrumbs>
		<t-breadcrumbs color="success" :list="list">成功</t-breadcrumbs>
		<t-breadcrumbs color="warning" :list="list">警告</t-breadcrumbs>
		<t-breadcrumbs color="error" :list="list">错误</t-breadcrumbs>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list: ['小区', '家', '房间']
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
		<t-breadcrumbs size="lg" :list="list">大</t-breadcrumbs>
		<t-breadcrumbs size="md" :list="list">中</t-breadcrumbs>
		<t-breadcrumbs size="sm" :list="list">小</t-breadcrumbs>
		<t-breadcrumbs size="xs" :list="list">超小</t-breadcrumbs>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                list: ['小区', '家', '房间']
            }
        }
    }
</script>
```

<br />
<br />

### 图标

`leftIcon` 设置左侧图标，`rightIcon` 设置右侧图标

```vue
<template>
	<view>
		<t-breadcrumbs color="secondary" rightIcon="shopping" :list="shoppings" />
        <t-breadcrumbs color="primary" leftIcon="folder" :list="floders" />
	</view>
</template>

<script>
    export default {
        data() {
            return {
               floders: ['User', 'Work', 'Code'],
			   shoppings: ['生鲜', '水果', '杏子'],
            }
        }
    }
</script>
```

<br />
<br />

### 跳转

`click` 事件第一个参数为点击的 `list` 项目，可用来做判断并跳转到具体页面

```vue
<template>
    <view>
        <t-breadcrumbs color="base" :list="list" @click="go"/>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: ['Btn', 'Img', 'Cell']
            }
        },
        methods: {
            go(v) {
                const routes = {
                    Img: '/pages/base/img/img',
                    Cell: '/pages/base/cell/cell',
                    Btn: '/pages/base/button/button',
                }
                
                uni.navigateTo({
                    url: routes[v]
                })
            }
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

| 属性  |   说明   |      类型       | 默认值 |     可选值      |
| :---: | :------: | :-------------: | :----: | :-------------: |
| color |   颜色   |     string      |  base  | <t-doc-color /> |
| size  |   尺寸   |     string      |   md   | <t-doc-size />  |
| list  | 路径列表 | Array\<string\> |   []   |                 |

<br />
<br />
<br />

## 事件 :nerd_face:

| 方法名 |   说明   |    参数    |
| :----: | :------: | :--------: |
| click  | 点击事件 | v, i, list |

<br />

### 参数说明

#### click

`v` 👉 点击的那个项目  

`i` 👉 点击的那个项目 `index`

`list` 👉 当前 `list` 本身



<br />
<br />
<br />
