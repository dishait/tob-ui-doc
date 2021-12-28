---
layout: TLayout
mobile: /h5/index.html#/pages/show/collapse/collapse
---

# 折叠面板

<br />
<br />

## 示例 :thinking:

<br />

### 基础

需要引入一个 `t-collapse` 来包裹 `t-collapse-item` 形成一个组。

`t-collapse` 上的 `v-model` 数组内元素匹配到 `name` 的 `t-collapse-item` 将被打开。

所以你应该确保 `t-collapse-item` 上的 `name` 被设置并且是唯一的。

```vue
<template>
    <view>
        <t-collapse v-model="value">
            <t-collapse-item title="标题" name="1">{{text}}</t-collapse-item>
            <t-collapse-item title="标题" name="2">{{text}}</t-collapse-item>
            <t-collapse-item title="标题" name="3">{{text}}</t-collapse-item>
        </t-collapse>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: ['1'],
                text: '海内存知已，天涯若比邻'
            }
        }
    }
</script>
```

<br />
<br />

### 手风琴
手风琴将只留一个 `t-collapse-item` 被打开，  

让 `t-collapse` 上的 `accordion` 为 `true` 即可
```vue
<template>
    <view>
        <t-collapse v-model="value" accordion>
            <t-collapse-item title="标题" name="1">{{text}}</t-collapse-item>
            <t-collapse-item title="标题" name="2">{{text}}</t-collapse-item>
            <t-collapse-item title="标题" name="3">{{text}}</t-collapse-item>
        </t-collapse>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: [],
                text: '做一件事，无论大小，倘无恒心，是很不好的'
            }
        }
    }
</script>
```

<br />
<br />

### 自定义
除了默认插槽用于保存被折叠内容外，还开放了 `title` 标题插槽，`right` 插槽。  

同时 `t-collapse-item` 还开放了 `rightIcon` 右侧图标，以及 `disabled` 禁用。


```vue
<template>
    <view>
        <t-collapse v-model="value">
            <t-collapse-item name="1" rightIcon="arrowdown">
                <!-- 标题插槽 -->
                <template #title>
                    <view class="text-primary">
                        <t-icon type="fire" class="mr-1" />
                        标题
                    </view>
                </template>
               {{text}}
            </t-collapse-item>

            <t-collapse-item title="禁用" name="3" disabled>
                {{text}}
            </t-collapse-item>
            
            <t-collapse-item title="标题" name="2">
                {{text}}
                
                <!-- 右侧插槽 -->
                <template #right>
                    <t-tag type="error" light size="sm">99+</t-tag>
                </template>
            </t-collapse-item>
        </t-collapse>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: [],
                text: '少年易学老难成，一寸光阴不可轻'
            }
        }
    }
</script>
```

<br />
<br />
<br />


## 属性 :monocle_face:

### 折叠面板
t-collapse
|   属性    |    说明    |  类型   | 默认值 |    可选值     |
| :-------: | :--------: | :-----: | :----: | :-----------: |
|  border   |   下边框   | boolean | false  | <t-doc-boo /> |
| accordion | 手风琴模式 | boolean | false  | <t-doc-boo /> |

<br />
<br />

### 折叠面板项
t-collapse-item
|   属性    |   说明   |  类型   | 默认值 |     可选值     |
| :-------: | :------: | :-----: | :----: | :------------: |
|   title   |   标题   | string  |        |                |
|   name    | 选中标识 | string  |        |                |
| rightIcon | 右侧图标 | string  |  down  | <t-doc-icon /> |
| disabled  |   禁用   | boolean | false  | <t-doc-boo />  |


<br />
<br />
<br />

## 事件 :nerd_face:
### 折叠面板
t-collapse
| 方法名 |   说明   |     参数     |
| :----: | :------: | :----------: |
| click  | 点击事件 |   事件对象   |
| change | 变更事件 | 选中标识数组 |

<br />
<br />

### 折叠面板项
t-collapse-item
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |


<br />
<br />
<br />