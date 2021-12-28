---
layout: TLayout
mobile: /h5/index.html#/pages/feedback/dropdownMenu/dropdownMenu
---

# 下拉菜单

<br />
<br />

## 示例 :thinking:

<br />


### 基础

`options` 每一个键对应一组待选文本数组。

`v-model` 每一个键对应当前选中值的 `index`。

`options` 与 `v-model` 的键名必须都能对应上。

```vue
<template>
    <view>
        <t-dropdown-menu v-model="indexs" :options="options" />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                indexs: {
                    // 对应下边的 options.goods
                    goods: 0,
                    // 对应下边的 options.sort
                    sort: 0
                },
                options: {
                    goods: ['全部商品', '新款商品', '活动商品'],
                    sort: ['默认排序', '好评排序', '销量排序']
                }
            }
        }
    }
</script>
```

<br />
<br />

### 选中颜色

设置 `activeColor` 即可

```vue
<template>
    <view>
        <t-dropdown-menu v-model="indexs" activeColor="success" :options="options" />
    </view>
</template>

<script>
    export default {
       data() {
           return {
               indexs: {
                    goods: 0,
                    sort: 0
                },
                options: {
                    goods: ['全部商品', '新款商品', '活动商品'],
                    sort: ['默认排序', '好评排序', '销量排序']
                }
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
       <t-dropdown-menu disabled v-model="indexs" :options="options" />
    </view>
</template>

<script>
    export default {
       data() {
           return {
               indexs: {
                    goods: 0,
                    sort: 0
                },
                options: {
                    goods: ['全部商品', '新款商品', '活动商品'],
                    sort: ['默认排序', '好评排序', '销量排序']
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

|       属性       |     说明     |  类型   | 默认值 |      可选值       |
| :--------------: | :----------: | :-----: | :----: | :---------------: |
|     v-model      | 选中标识对象 | object  |   {}   |                   |
|     options      |    待选项    | object  |   {}   |                   |
| menuItemHeights  |  子项目高度  | object  |   {}   |                   |
|      zIndex      |     层级     | number  |  100   |                   |
| closeOnClickMask | 点击蒙版关闭 | boolean |  true  |   <t-doc-boo />   |
| closeOnSelected  |  选中后关闭  | boolean |  true  |   <t-doc-boo />   |
|     disabled     |     禁用     | boolean | false  |   <t-doc-boo />   |
|   activeColor    |  选中后颜色  | string  | error  |  <t-doc-color />  |
|      shadow      |     阴影     | string  |   sm   | <t-doc-shadow />  |
|     rounded      |     圆角     | string  |  base  | <t-doc-rounded /> |


<br />

### v-model

接收一个当前选中标识对象，每一个键对应一个当前选中的 `index`。

例如下边 `indexes` 表示商品 `goods` 选中第 `0` 个，分类 `sort` 选中第 `2` 个

```vue
<script>
    export default {
        data() {
            indexs: {
                goods: 0,
                sort: 2
            }
        }
    }
</script>
```

<br />

### options

接收一个待选项对象，每一个键对应一组待选文本数组

例如下边 `options` 表示商品 `goods` 和 分类 `sort` 两组待选项

```vue
<script>
    export default {
        data() {
            return {
                options: {
                    goods: ['全部商品', '新款商品', '活动商品'],
                    sort: ['默认排序', '好评排序', '销量排序']
                }
            }
        }
    }
</script>
```
:::warning 确保对应
你得确保 <t-tag color="warning">v-model</t-tag> 和 <t-tag color="warning">options</t-tag> 键名都能对应得上
:::

<br />

### menuItemHeights

接收一个展开的面板项高度对象，每一个键对应其一个待选项的高度  

例如下边表示展开后 `goods` 的每一个待选项是 `60rpx`，而 `sort` 是 `50rpx`

```vue
<script>
    export default {
        data() {
            return {
                menuItemHeights: {
                    goods: '60rpx',
                    sort: '50rpx'
                }
            }
        }
    }
</script>
```


<br />
<br />
<br />


## 事件 :nerd_face:

|     方法名      |      说明      |             参数              |
| :-------------: | :------------: | :---------------------------: |
|      click      |    点击事件    |           事件对象            |
|     change      |    变更事件    |      当前 `v-model` 对象      |
|    maskClick    |  蒙版点击事件  |           事件对象            |
|  menuItemClick  | 面板项点击事件 | { type: 类型, value: 当前值 } |
| optionsRowClick |  选项点击事件  |        { type: 类型 }         |


<br />
<br />
<br />