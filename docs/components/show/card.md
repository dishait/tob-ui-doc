---
layout: TLayout
mobile: /h5/index.html#/pages/show/card/card
---

# 卡片 

<br />
<br />

## 示例 :thinking:

:::tip 灵活的卡片
卡片组件是由多个非常灵活的组件构成，以下是一些最佳示例
:::

<br />

### 基础

使用 `t-card` 来定义一个卡片区，分为 `t-img` 封面与 `t-card-body` 卡片体。

`t-card-body` 内可加入 `t-card-title` 标题，卡片内容以及 `t-card-action` 卡片行为区。

`t-card-action` 上的 `justify` 可用来设置嵌入内容的主轴方向。

```vue
<template>
	<view>
		<t-card size="w-68 ml-4">
            <!-- t-img 作为封面 -->
            <t-img size="w-full h-40" :src="card.src" />
            
            <!-- 卡片体 -->
            <t-card-body>
                
                <!-- 卡片标题 -->
                <t-card-title>{{ card.title }}</t-card-title>

                <!-- 卡片内容 -->
                <text class="text-sm" style="text-indent: 30rpx;">
                    {{ card.text }}
                </text>

                <!-- 卡片行为区 -->
                <t-card-action justify="end">
                    <t-btn color="primary" size="sm" outline>更多</t-btn>
                </t-card-action>
            
            </t-card-body>
        </t-card>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    title: '寒风吹彻',
                    src: 'https://images.pexels.com/photos/2034286/pexels-photo-2034286.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    text: '雪落在那些年雪落过的地方，我已经不注意它们了。比落雪更重要的事情开始降临到生活中。三十岁的我，似乎对这个冬天的来临漠不关心，却又好像一直在倾听落雪的声音，期待着又一场雪悄无声息地覆盖村庄和田野...'
                }
            }
        }
    }
</script>
```

<br />
<br />

### 封面倒转

设置 `t-card` 上的  `direction` 为 `col-reverse` 即可。

```vue{3}
<template>
	<view>
		<t-card size="w-68 ml-4" direction="col-reverse">
             <!-- t-img 作为封面 -->
            <t-img size="w-full h-46" :src="card.src" />
            
            <!-- 卡片体 -->
            <t-card-body>
                <!-- 卡片标题 -->
                <t-card-title>
                    {{ card.title }}
                    <t-tag color="warning" size="xs" class="ml-2">经典</t-tag>
                </t-card-title>

                <!-- 卡片内容 -->
                <text class="text-sm" style="text-indent:30rpx;">
                    {{ card.text }}
                </text>

                <!-- 卡片行为区 -->
                <t-card-action justify="end">
                    <t-btn color="warning" outline size="sm" class="mr-2">了解</t-btn>
                    <t-btn ghost size="sm">阅读</t-btn>
                </t-card-action>
                
            </t-card-body>
        </t-card>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    title: '骆驼祥子',
                    src: 'https://images.pexels.com/photos/4456133/pexels-photo-4456133.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    text: '这个银白色的世界，没有他坐下的地方，也没有他的去处；白茫茫的一片，只有饿着肚子的小鸟，与走头无路的人，知道什么叫做哀叹。'
                }
            }
        }
    }
</script>
```

<br />
<br />


### 封面内嵌

`t-card` 上的 `align` 可以调整封面和卡片体交叉轴的对齐方式。

让 `t-card` 上的 `align` 为 `center`，当然还需要调整 `t-card` 和 `t-img` 的 `size`。

```vue{3,6}
<template>
	<view>
		<t-card align="center" shadow="base" size="w-68 ml-4 pt-4">

            <!-- t-img 作为封面 -->
            <t-img rounded="lg" size="w-55 h-45" :src="card.src" />

            <!-- 卡片体 -->
            <t-card-body>
                <!-- 卡片标题 -->
                <t-card-title>{{ card.title }}</t-card-title>

                <text class="text-sm" style="text-indent: 30rpx;">
                    {{ card.text }}
                </text>

                <!-- 卡片行为区 -->
                <t-card-action justify="center">
                    <t-btn color="accent" outline size="text-sm px-5">阅读</t-btn>
                </t-card-action>
            </t-card-body>
        </t-card>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    title: '带上她的眼睛',
                    src: 'https://images.pexels.com/photos/3286807/pexels-photo-3286807.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    text: '不得不承认，在过去的一天一夜里，她教会了我某种东西，一种说不清的东西，像月夜中草原上的光影一样朦胧，由于它，以后在我眼中的世界与以前会有所不同。'
                }
            }
        }
    }
</script>
```


<br />
<br />

### 颜色

设置 `color` 即可

```vue{3}
<template>
	<view>
		<t-card color="success" size="w-68 ml-4">
            <!-- 卡片封面 -->
            <t-img size="w-full h-40" :src="card.src" />
            
            <t-card-body>
                 <!-- 卡片标题 -->
                <t-card-title>{{ card.title }}</t-card-title>

                <!-- 卡片内容 -->
                <text class="text-sm" style="text-indent:30rpx;">
                    {{ card.text }}
                </text>

                <!-- 卡片行为区 -->
                <t-card-action justify="end">
                    <t-btn color="success" size="sm">开始阅读</t-btn>
                </t-card-action>
            </t-card-body>
        </t-card>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    title: '我与地坛',
                    src: 'https://images.pexels.com/photos/9790711/pexels-photo-9790711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    text: '大树下，破碎的阳光星星点点，风把遍地的小灯笼吹得滚动，仿佛暗哑地响着无数小铃挡。'
                }
            }
        }
    }
</script>
```

<br />
<br />

### 无封面

不加 `t-img` 封面即可

```vue
<template>
	<view>
		<t-card size="w-68 ml-4">
            <!-- 卡片体 -->
            <t-card-body>
                <!-- 卡片标题 -->
                <t-card-title>{{ card.title }}</t-card-title>

                <!-- 卡片内容 -->
                <text class="text-sm" style="text-indent:30rpx;">
                    {{ card.text }}
                </text>

                <!-- 卡片动作区 -->
                <t-card-action justify="center">
                    <t-btn color="primary" outline size="sm" class="mr-2">了解</t-btn>
                    <t-btn ghost size="sm">阅读</t-btn>
                </t-card-action>
            </t-card-body>
        </t-card>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    title: '平凡的世界',
				    text: '生命里有着多少的无奈和惋惜，又有着怎样的愁苦和感伤？雨浸风蚀的落寞与苍楚一定是水，静静地流过青春奋斗的日子和触摸理想的岁月。'
                }
            }
        }
    }
</script>
```


<br />
<br />

### 无封面(颜色)

不加 `t-img` 封面，并设置 `color` 即可

```vue{3}
<template>
	<view>
		<t-card size="w-68 ml-4" color="accent">
            <!-- 卡片体 -->
            <t-card-body>
                <!-- 卡片标题 -->
                <t-card-title> {{ card.title }} </t-card-title>

                <!-- 卡片内容 -->
                <text class="text-sm" style="text-indent:30rpx;">
                    {{ card.text }}
                </text>

                <!-- 卡片行为区 -->
                <t-card-action justify="center">
                    <t-btn color="neutral" outline size="sm" class="mr-2">了解</t-btn>
                    <t-btn color="accent" size="sm">阅读</t-btn>
                </t-card-action>
            </t-card-body>
        </t-card>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    title: '在细雨中呼喊',
				    text: '再也没有比孤独的无依无靠的呼喊声更让人战栗，在雨中空旷的黑夜里。'
                }
            }
        }
    }
</script>
```

<br />
<br />

### 横排

设置 `t-card` 的 `direction` 为 `row`，并且让 `t-img` 要放在有具体宽度的 `view`下，同时设置宽高为 `100%`

```vue{3,5-8}
<template>
	<view>
		<t-card size="w-68 ml-4" direction="row">

            <!-- 封面，注意t-img要放在有具体宽度的view下，同时设置宽高为100% -->
            <view class="w-25">
                <t-img size="w-full h-full" mode="aspectFill" :src="card.src" />
            </view>
            
            <t-card-body>
                <!-- 卡片标题 -->
                <t-card-title size="sm">{{ card.title }}</t-card-title>

                <!-- 卡片内容 -->
                <text class="text-sm" style="text-indent: 30rpx;">
                    {{ card.text }}
                </text>

                <!-- 卡片动作区 -->
                <t-card-action justify="end" size="xs">
                    <t-btn color="warning" size="sm" outline>更多</t-btn>
                </t-card-action>
            </t-card-body>
        </t-card>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                card: {
                    title: '秋夜',
                    src: 'https://images.pexels.com/photos/1590551/pexels-photo-1590551.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    text: '我家有两颗树,一颗是枣树,另一颗还是枣树'
                }
            }
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:
### 卡片

t-card

|   属性    |    说明    |  类型   | 默认值  |       可选值        |
| :-------: | :--------: | :-----: | :-----: | :-----------------: |
|   color   |    颜色    | string  |         |   <t-doc-color />   |
|   light   |    高亮    | boolean |  false  |    <t-doc-boo />    |
|  outline  |    轮廓    | boolean |  false  |    <t-doc-boo />    |
|   size    |    尺寸    | string  |   md    |   <t-doc-size />    |
|  rounded  |    圆角    | string  |  base   |  <t-doc-rounded />  |
|  shadow   |    阴影    | string  |   sm    |  <t-doc-shadow />   |
|  justify  |  主轴对齐  | string  |  start  |  <t-doc-justify />  |
|   align   | 交叉轴对齐 | string  | stretch |   <t-doc-align />   |
| direction |    方向    | string  |   col   | <t-doc-direction /> |

<br />
<br />

### 卡片封面

👉 [t-img 属性](/tob-ui-doc/components/base/img/#属性)

<br />
<br />

### 卡片体
t-card-body
| 属性  | 说明  |  类型  | 默认值 |     可选值     |
| :---: | :---: | :----: | :----: | :------------: |
| size  | 尺寸  | string |   md   | <t-doc-size /> |


<br />
<br />

### 卡片标题
t-card-title
|  属性   |    说明    |  类型  | 默认值  |      可选值       |
| :-----: | :--------: | :----: | :-----: | :---------------: |
|  size   |    尺寸    | string |   md    |  <t-doc-size />   |
| justify |  主轴对齐  | string |  start  | <t-doc-justify /> |
|  align  | 交叉轴对齐 | string | stretch |  <t-doc-align />  |


<br />
<br />

### 卡片动作区域
t-card-action
| 属性  | 说明  |  类型  | 默认值 |     可选值     |
| :---: | :---: | :----: | :----: | :------------: |
| size  | 尺寸  | string |   md   | <t-doc-size /> |

<br />
<br />
<br />

## 事件 :nerd_face:

### 卡片
t-card
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |


<br />
<br />

### 卡片封面

👉 [t-img 事件](/tob-ui-doc/components/base/img/#事件)

<br />
<br />

### 卡片体
t-card-body
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />

### 卡片标题
t-card-title
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |


<br />
<br />

### 卡片动作区
t-card-action
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />
<br />