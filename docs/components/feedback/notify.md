---
layout: TLayout
mobile: /h5/index.html#/pages/feedback/notify/notify
---

# 通知 

:::tip 小程序差异
由于小程序端原生顶部有遮挡，所以将通知下移到 `nav-bar` 底部。
:::

<br />
<br />
<br />

## 示例 :thinking:

<br />


### 基础

在调用 `ref` 的 `show` 时可传入配置，`content` 用于显示内容。  

设置 `delay` 延迟多少毫秒后关闭，默认为3秒后关闭。

`manual` 设置手动关闭，同时可以调用 `ref` 的 `hidden` 关闭当前的 `notify`。  

设置 `change` 事件可以获取到当前 `notify` 是隐藏还是显示。

```vue{19-22,30,36-37,40}
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="基础用法" value="😂" @click="openBase" />
            <t-cell title="手动关闭" value="😊" @click="toggleOpen" />
            <t-cell title="自定义延迟" value="😜" @click="openDelay" />
        </t-cell-group>

        <t-notify ref="notify" @change="change" />
    </view>
</template>

<script>
    export default {
        data() {
            visible: false
        },
        methods: {
            // 监听 notify 是显示还是隐藏
            change(v) {
                this.visible = v
            },
            openBase() {
                this.$refs.notify.show({
                    content: '基础用法'
                })
            },
            openDelay() {
                this.$refs.notify.show({
                    delay: 1000, // 延迟 1 秒
                    content: '1秒后关闭'
                })
            },
            toggleOpen() {
                if (this.visible) {
                    // 调用 hidden 隐藏掉
                    return this.$refs.notify.hidden()
                } 
                this.$refs.notify.show({ 
                    manual: true, // 手动关闭
                    content: '再点关闭'
                })
            }
        }
    }
</script>
```

<br />
<br />

### 颜色

设置 `show` 的配置 `color` 即可

```vue{24}
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="主要" value="🤔" @click="open('主要', 'primary')" />
            <t-cell title="次要" value="🤔" @click="open('次要', 'secondary')" />
            <t-cell title="强调" value="🤔" @click="open('强调', 'accent')" />
            <t-cell title="中和" value="🤔" @click="open('中和', 'neutral')" />
            <t-cell title="基础" value="🤔" @click="open('基础', 'base')" />
            <t-cell title="信息" value="🤔" @click="open('信息', 'info')" />
            <t-cell title="成功" value="🤔" @click="open('成功', 'success')" />
            <t-cell title="警告" value="🤔" @click="open('警告', 'warning')" />
            <t-cell title="错误" value="🤔" @click="open('错误', 'error')" />
        </t-cell-group>

       <t-notify ref="notify" />
    </view>
</template>

<script>
    export default {
        methods: {
            open(content, color) {
                this.$refs.notify.show({
                    color,
                    content
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

|  属性  | 说明  |  类型  | 默认值 | 可选值 |
| :----: | :---: | :----: | :----: | :----: |
| zIndex | 层级  | number |  100   |        |

<br />

### show 配置
在调用 `ref` 的 `show` 时可传入配置对象，以下是对象属性的具体说明

|  属性   | 说明  |  类型  | 默认值  |     可选值      |
| :-----: | :---: | :----: | :-----: | :-------------: |
| content | 内容  | string |         |                 |
|  delay  | 延迟  | number |  3000   |                 |
|  color  | 颜色  | string | success | <t-doc-color /> |


<br />
<br />
<br />


## 事件 :nerd_face:

| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |
| change | 变更事件 |  可见性  |


<br />
<br />
<br />