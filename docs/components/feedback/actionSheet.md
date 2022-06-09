---
layout: TLayout
mobile: /h5/index.html#/pages/feedback/actionSheet/actionSheet
---

# 动作面板

<br />
<br />

## 示例 :thinking:

<br />


### 基础
`actions` 里每个元素的 `name` 将用于显示，`desc` 用于显示描述。  

同时可以通过 `t-action-sheet` 上的 `cancelText` 来显示取消，`desc` 来显示描述信息。 
```vue
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="基础用法" value="😁" @click="open('base')" />
            <t-cell title="展示取消" value="😀" @click="open('cancel')" />
            <t-cell title="展示描述信息" value="😀" @click="open('desc')" />
        </t-cell-group>


        <t-action-sheet :actions="base" ref="base" />
        <t-action-sheet :actions="base" cancelText="取消" ref="cancel" />
        <t-action-sheet :actions="desc" desc="面板描述" cancelText="取消" ref="desc" />
    </view>
</template>


<script>
    export default {
        data() {
            return {
                base: [
                    {
                        name: '项目-1'
                    },
                    {
                        name: '项目-2'
                    },
                    {
                        name: '项目-3'
                    }
                ],
                desc: [
                    {
                        name: '项目-1'
                    },
                    {
                        name: '项目-2',
                        desc: '描述信息'
                    },
                    {
                        name: '项目-3'
                    }
                ]
            }
        },
        methods: {
            open(type) {
                this.$refs[type].show()
            }
        }
    }
</script>
```

<br />
<br />

### 状态
设置 `actions` 中元素的 `disabled` 为 `true` 即可禁用选项
```vue
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="禁用" value="👍" @click="open" />
        </t-cell-group>

        <t-action-sheet :actions="actions" cancelText="取消" ref="action" />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                actions: [
                    {
                        name: '项目-1'
                    },
                    {
                        name: '项目-2',
                        disabled: true
                    },
                    {
                        name: '项目-3'
                    }
                ]
            }
        },
        methods: {
            open() {
                this.$refs.action.show()
            }
        }
    }
</script>
```

<br />
<br />


### 颜色
设置 `actions` 中元素的 `color` 即可修改选项的配色
```vue{25,37,49}
<template>
    <view>
        <t-cell-group inset="mx-3" rounded="lg">
            <t-cell title="颜色" value="😊" @click="open('color')" />
            <t-cell title="高亮" value="😜" @click="open('light')" />
            <t-cell title="轮廓" value="😋" @click="open('outline')" />
        </t-cell-group>

        <t-action-sheet :actions="color" desc="颜色" cancelText="取消" ref="color" />
		<t-action-sheet :actions="light" desc="高亮" cancelText="取消" ref="light" />
		<t-action-sheet :actions="outline" desc="轮廓" cancelText="取消" ref="outline" />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                color: [
                    {
                        name: '项目-1'
                    },
                    {
                        name: '项目-2',
                        color: 'text-white bg-success'
                    },
                    {
                        name: '项目-3'
                    }
                ],
                light: [
                    {
                        name: '项目-1'
                    },
                    {
                        name: '项目-2',
                        color: 'text-success bg-success bg-opacity-10'
                    },
                    {
                        name: '项目-3'
                    }
                ],
                outline: [
                    {
                        name: '项目-1'
                    },
                    {
                        name: '项目-2',
                        color: 'text-success border border-success'
                    },
                    {
                        name: '项目-3'
                    }
                ]
            }
        },
        methods: {
            open(type) {
                this.$refs.[type].show()
            }
        }
    }
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

|    属性    |   说明   |      类型       | 默认值 |      可选值       |
| :--------: | :------: | :-------------: | :----: | :---------------: |
|  rounded   |   圆角   |     string      |   lg   | <t-doc-rounded /> |
|   zIndex   |   层级   |     number      |  100   |                   |
| cancelText | 取消文本 |     string      |        |                   |
|    desc    | 面板描述 |     string      |        |                   |
|  actions   | 动作集合 | Array\<aciton\> |        |                   |

<br />

### actions 
`actions` 接受一个数组，数组内的元素为 `action` 对象。对象接受以下参数

|   属性   | 说明  |  类型   |
| :------: | :---: | :-----: |
|   name   | 名称  | string  |
|   desc   | 描述  | string  |
|  color   | 颜色  | number  |
| disabled | 禁用  | boolean |

<br />
<br />
<br />


## 事件 :nerd_face:

|   方法名    |     说明     |    参数    |
| :---------: | :----------: | :--------: |
|    click    |   点击事件   |  事件对象  |
|  maskClick  | 蒙版点击事件 |  事件对象  |
| headerClick | 头部点击事件 |  事件对象  |
| cancelClick | 取消点击事件 |  事件对象  |
| actionClick |   点击事件   | 点击的选项 |


<br />
<br />
<br />