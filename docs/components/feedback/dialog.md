---
layout: TLayout
mobile: /h5/index.html#/pages/feedback/dialog/dialog
---

# 弹出框

<br />
<br />

## 示例 :thinking:

<br />


### 基础

在调用 `ref` 的 `show` 时可传入配置，`title` 用于显示标题，`content` 用于显示具体内容

```vue
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="基础用法" value="😂" @click="openBase" />
            <t-cell title="无标题" value="😍" @click="openEmptyTitle" />
        </t-cell-group>

        <t-dialog ref="dialog" />
    </view>
</template>


<script>
    export default {
        methods: {
            openBase() {
                this.$refs.dialog.show({
                    title: '满江红', 
                    content: '莫等闲，白了少年头，空悲切' 
                })
            },
            openEmptyTitle() {
                this.$refs.dialog.show({
                    content: '雪落在那些年雪落过的地方' 
                })
            }
        }
    }
</script>
```

<br />
<br />

### 自定义

设置 `confirmColor` 确认文本颜色，`size` 用于调整尺寸，`rounded` 用于调整圆角。

```vue{32,26,20}
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="颜色" value="😄" @click="openColor" />

            <t-cell title="尺寸" value="😀" @click="openSize" />

            <t-cell title="圆角" value="🤔" @click="openRounded" />
        </t-cell-group>

       <t-dialog ref="dialog" />
    </view>
</template>

<script>
    export default {
        methods: {
            openColor() {
                this.$refs.action.show({ 
                    confirmColor: 'success',
                    content: '单是说不行，要紧的是做', 
                })
            },
            openSize() {
                this.$refs.action.show({ 
                    size: 'w-72 py-4',
                    content: '我们爱我们的民族，这是我们自信心的源泉'
                })
            },
            openRounded() {
                this.$refs.action.show({ 
                    rounded: 'full', 
                    content: '少说些漂亮话，多做些日常平凡的事情', 
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

|       属性       |     说明     |  类型   | 默认值 |    可选值     |
| :--------------: | :----------: | :-----: | :----: | :-----------: |
|      zIndex      |     层级     | number  |  100   |               |
| closeOnClickMask | 点击蒙版关闭 | boolean |  true  | <t-doc-boo /> |

<br />

### show 配置
在调用 `ref` 的 `show` 时可传入配置对象，以下是对象属性的具体说明

|     属性      |     说明     |   类型   | 默认值 |      可选值       |
| :-----------: | :----------: | :------: | :----: | :---------------: |
|     title     |     标题     |  string  |        |                   |
|    content    |     内容     |  string  |        |                   |
|     size      |     尺寸     |  string  |   md   |  <t-doc-size />   |
|    rounded    |     圆角     |  string  |   lg   | <t-doc-rounded /> |
|  cancelText   |   取消文本   |  string  |  取消  |                   |
|  confirmText  |   确认文本   |  string  |  确认  |                   |
|  cancelColor  | 取消文本颜色 |  string  |  base  |  <t-doc-color />  |
| confirmColor  | 确认文本颜色 |  string  | error  |  <t-doc-color />  |
| cancelHandle  |  取消时回调  | function |  null  |                   |
| confirmHandle |  确认时回调  | function |  null  |                   |

<br />
<br />
<br />


## 事件 :nerd_face:

|  方法名   |     说明     |   参数   |
| :-------: | :----------: | :------: |
|   click   |   点击事件   | 事件对象 |
| maskClick | 蒙版点击事件 | 事件对象 |
|  confirm  |   确认事件   | 事件对象 |
|  cancel   |   取消事件   | 事件对象 |


<br />
<br />
<br />