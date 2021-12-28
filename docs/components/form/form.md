---
next: /components/feedback/actionSheet
layout: TLayout
mobile: /h5/index.html#/pages/form/form/form
---

# 表单

:::tip 输入正确性
主要用来校验其他表单组件用户输入时的正确性
:::

<br />
<br />

## 支持:nerd_face:

目前支持如下表单组件的校验

- input 输入框
- radio 单选框
- checkbox 复选框
- switch 开关
- textarea 文本区
- stepper 步进器
- slider 滑块

<br />
<br />
<br />

## 示例 :thinking:

<br />

### 失焦校验

默认校验时机为失焦时校验。

首先需要一个 `t-form` 来包裹住所有 `t-field`，  

每个 `t-field` 是一个校验域，域内可以放入其他支持校验的表单组件。常用 `props` 如下

- `name` 域名(必填)，将作为校验规则的标识
- `label` 左侧标签名
- `labelIcon` 左侧标签图标
- `required` 提示当前域为必填项，注意只起提示作用

真正的校验规则需要在生命周期节点 `mounted` 中通过 `ref`的 `setRules` 设置，规则集对象中键对应一个 `t-field` 的 `name`，而值是一个校验的执行流数组。流中的每个步骤是一个函数，函数会在校验时触发。**当返回字符串时，该字符串将作为校验失败的提示信息，同时执行流会暂停下来**。  

函数的第一个参数 `field` 是一个校验信息对象

- `name` 域名
- `value` 当前域值
- `type` 表单类型
- `label` 标签名

流中的步骤也支持 `async` 函数👍

```vue{20-27,45-46,30,36}
<template>
	<view>
		<t-form ref="form">
            <t-field name="username" required label="账号" labelIcon="deleteuser">
                <t-input v-model="username" primordial placeholder="请输入账号" />
            </t-field>

            <t-field name="password" required label="密码" labelIcon="lock">
                <t-input v-model="password" primordial type="password" placeholder="请输入密码" />
            </t-field>
        </t-form>
	</view>
</template>

<script>
export default {
    mounted() {
        const rules = {
            username: [
                // 校验步骤
                field => {
                    // field 将提供校验信息
                    if (!field.value) {
                        // 返回字符串将作为失败的提示信息
                        return `${field.label}必填`
                    }
                }
            ],
            password: [
                // 校验步骤1
                field => {
                    if (!field.value) {
                        return `${field.label}必填`
                    }
                },
                // 校验步骤2(如果校验步骤1不通过，该步骤将不会执行到)
                field => {
                    if (field.value.length < 8) {
                        return '密码长度必须大于8'
                    }
                }
            ]
        }

        // 最后把校验集对象设置到 form 组件中
        this.$refs.form.setRules(rules)
    }
}
</script>
```

<br />
<br />

### 变更时校验

设置 `t-form` 的 `validateTrigger` 为 `onChange` 即可

```vue{3}
<template>
	<view>
		<t-form ref="form" validateTrigger="onChange">
            <t-field name="username" required label="账号" labelIcon="deleteuser">
                <t-input v-model="username" primordial placeholder="请输入账号" />
            </t-field>

            <t-field name="password" required label="密码" labelIcon="lock">
                <t-input v-model="password" primordial type="password" placeholder="请输入密码" />
            </t-field>
        </t-form>
	</view>
</template>

<script>
export default {
    mounted() {
        const rules = {
            username: [
                field => {
                    if (!field.value) {
                        return `${field.label}必填`
                    }
                }
            ],
            password: [
                field => {
                    if (!field.value) {
                        return `${field.label}必填`
                    }
                },
                field => {
                    if (field.value.length < 8) {
                        return '密码长度必须大于8'
                    }
                }
            ]
        }
        this.$refs.form.setRules(rules)
    }
}
</script>
```

<br />
<br />

### 手动校验

设置 `t-form` 的 `validateTrigger` 为 `manual`，   

并手动调用 `ref` 上的 `validateAll` 函数即可。

```vue{3,40,48-54}
<template>
	<view>
		<t-form ref="form" validateTrigger="manual">
            <t-field required name="username" label="用户名" labelIcon="deleteuser">
                <t-input color="accent" v-model="username" placeholder="请输入用户名" />
            </t-field>

            <t-field name="switch" label="开关" labelIcon="pic-left">					
                <t-switch v-model="switchStatus" color="accent" />
            </t-field>

            <t-field name="stepper" validateTrigger="onChange" label="步进器" labelIcon="plus-square">
                <t-stepper v-model="stepper" color="accent" />
            </t-field>

            <t-field name="checkGroup" label="复选框" labelIcon="check-square">
                <t-checkbox-group v-model="checkboxs">
                    <t-checkbox color="accent" value="1" class="mr-5">项目1</t-checkbox>
                    <t-checkbox color="accent" value="2">项目2</t-checkbox>
                </t-checkbox-group>
            </t-field>

            <t-field name="radio" label="单选框" labelIcon="select">
                <t-radio-group v-model="radioStatus">
                    <t-radio color="accent" value="1" class="mr-5">项目1</t-radio>
                    <t-radio color="accent" value="2" class="mr-5">项目2</t-radio>
                </t-radio-group>
            </t-field>

            <t-field name="slider" label="滑块" labelIcon="sliders">
                <t-slider showValue v-model="slider" color="accent" />
            </t-field>

            <t-field name="area" label="文本" labelIcon="file-text">
                <t-textarea color="accent" size="w-48 h-20" v-model="area" />
            </t-field>
        </t-form>

        <view class="mt-8 text-center">
            <t-btn color="accent" size="w-45" @click="sumbit">sumbit</t-btn>
        </view>
	</view>
</template>

<script>
export default {
    methods: {
		async sumbit() {
            // 手动调用校验，返回 res 可查看各个域的校验结果
			const res = await this.$refs.form.validateAll()

            // results.status 校验成功与否
            // results.fields 具体域的校验情况
		}
    },
    mounted() {
        const rules = {
            username: [
				field => {
					if (!field.value) {
						return `${field.label}必填`
					}
				}
			],
			switch: [
				field => field.value || `${field.label}必须打开`
			],
			slider: [
				field => {
					if (field.value < 20) {
						return `${field.label}必须大于20`
					}
				}
			],
			area: [
				field => {
					if (field.value.length < 10) {
						return `${field.label}必须不小于10个字符`
					}
				}
			]
        }
        this.$refs.form.setRules(rules)
    }
}
</script>
```

<br />
<br />
<br />

## 属性 :monocle_face:

<br />

<script setup>
const s = "校验时机，优先级比表单高"

const d = "走表单校验时机"
</script>

### 表单
t-form
|      属性       |   说明   |  类型  | 默认值 |            可选值            |
| :-------------: | :------: | :----: | :----: | :--------------------------: |
| validateTrigger | 校验时机 | string | onBlur | onBlur \| onChange \| manual |



<br />
<br />

### 表单域

t-field

|      属性       |    说明    |  类型   | 默认值 |       可选值       |
| :-------------: | :--------: | :-----: | :----: | :----------------: |
|      name       | 域名(必填) | string  |        |                    |
|    required     |  必填提示  | boolean | false  |   <t-doc-boo />    |
|      label      |    标签    | string  |        |                    |
|    labelIcon    |  标签图标  | string  |        |   <t-doc-icon />   |
| validateTrigger |   {{s}}    | string  | {{d}}  | onBlur \| onChange |
|      align      | 交叉轴对齐 | string  | start  |  <t-doc-align />   |



<br />
<br />
<br />

## 事件 :nerd_face:

### 表单
t-form
| 方法名 |     说明     |     参数     |
| :----: | :----------: | :----------: |
| click  |   点击事件   |   事件对象   |
|  fail  | 校验失败事件 | 失败信息对象 |


#### fail 说明
`fail` 事件会在每个校验失败时触发，失败的信息对象聚焦到某个域

- name 域名
- value 当前值
- type 表单类型
- errorMsg 失败原因
- status 状态，为 `fail`

<br />
<br />

### 表单域
t-field
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />
<br />