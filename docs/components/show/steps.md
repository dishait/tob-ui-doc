---
layout: TLayout
mobile: /h5/index.html#/pages/show/steps/steps
---

# 步骤条


<br />
<br />

## 示例 :thinking:

<br />

### 基础

需要用一个 `t-steps` 来包裹 `t-step` 形成一个组。

`t-step` 的默认插槽为描述，同时用 `current` 来标识当前进度，默认从 `0` 开始 

```vue
<template>
    <view>
        <t-steps :current="value">
            <t-step>注册</t-step>
            <t-step>登录</t-step>
            <t-step>购买</t-step>
            <t-step>收货</t-step>
        </t-steps>

        <view class="flex mt-5 justify-center">
            <t-btn color="success" @click="next">Next</t-btn>
            <t-btn color="base" light @click="reset" class="ml-6">Reset</t-btn>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: 0
            }
        },
        methods: {
            next() {
			    this.value++
            },
            reset() {
                this.value = 0
            }
        }
    }
</script>
```

<br />
<br />

### 插槽

除了默认插槽的描述，还有 `sign` 符号插槽，当符号插槽没有时将走内部的计数器

```vue{5-7,11-13,17-19,23-25}
<template>
    <view>
        <t-steps :current="value">
            <t-step>
                <template #sign>
                    <t-icon type="highlight" />
                </template>
                注册
            </t-step>
            <t-step>
                <template #sign>
                    <t-icon type="login" />
                </template>
                登录
            </t-step>
            <t-step>
                <template #sign>
                    <t-icon type="shopping" />
                </template>
                购买
            </t-step>
            <t-step>
                <template #sign>
                    <t-icon type="car" />
                </template>
                收货
            </t-step>
        </t-steps>

        <view class="flex mt-5 justify-center">
            <t-btn color="success" @click="next">Next</t-btn>
            <t-btn color="base" light @click="reset" class="ml-6">Reset</t-btn>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: 1
            }
        },
        methods: {
            next() {
			    this.value++
            },
            reset() {
                this.value = 0
            }
        }
    }
</script>
```

<br />
<br />

### 颜色
可以通过 `successColor` 来设置成功时的颜色，当然可以用 `failColor` 设置失败时的颜色

```vue
<template>
    <view>
        <t-steps :current="value" successColor="accent">
            <t-step>注册</t-step>
            <t-step>
                <template #sign>👀</template>
                登录
            </t-step>
            <t-step>
                <template #sign>
                    <t-icon type="shopping" />
                </template>
                购买
            </t-step>
            <t-step>收货</t-step>
        </t-steps>

        <view class="flex mt-5 justify-center">
            <t-btn color="accent" @click="next">Next</t-btn>
            <t-btn color="base" light @click="reset" class="ml-6">Reset</t-btn>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: 2
            }
        },
        methods: {
            next() {
			    this.value++
            },
            reset() {
                this.value = 0
            }
        }
    }
</script>
```

<br />
<br />

### 失败熔断

设置 `fail` 为 `true` 即可。注意此时步骤条将被熔断，换句说 `current` 再步进是无效的。

```vue
<template>
    <view>
        <t-steps :current="value" :fail="fail">
            <t-step>注册</t-step>
            <t-step>
                <template #sign>🤓</template>
                登录
            </t-step>
            <t-step>
                <template #sign>!</template>
                购买
            </t-step>
            <t-step>收货</t-step>
        </t-steps>

        <view class="flex mt-5 justify-center">
            <t-btn color="success" @click="next">Next</t-btn>
			<t-btn color="error" @click="toFail" class="ml-6">Fail</t-btn>
			<t-btn color="base" light @click="reset" class="ml-6">Reset</t-btn>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                value: 0,
                fail: false
            }
        },
        methods: {
            next() {
			    this.value++
            },
            reset() {
                this.value = 0
            },
            toFail() {
                this.value++
                this.fail = true
            }
        }
    }
</script>
```

<br />
<br />
<br />


<script setup>
    const s = 'css 动画支持的单位都可以，例如1s'
</script>
## 属性 :monocle_face:


### 步骤条

t-steps

|     属性     |    说明    |  类型  | 默认值  |     可选值      |
| :----------: | :--------: | :----: | :-----: | :-------------: |
|   current    |  当前进度  | number |    0    |                 |
| successColor | 成功时颜色 | string | success | <t-doc-color /> |
|  failColor   | 失败时颜色 | string |  error  | <t-doc-color /> |


<br />
<br />
<br />

## 事件 :nerd_face:

### 步骤条
t-steps

| 方法名  |   说明   |   参数   |
| :-----: | :------: | :------: |
|  click  | 点击事件 | 事件对象 |
|  reset  | 重置事件 | 事件对象 |
|  fail   | 失败事件 | 当前进度 |
| success | 成功事件 | 当前进度 |


<br />
<br />

### 步骤条项
t-step
| 方法名 |   说明   |   参数   |
| :----: | :------: | :------: |
| click  | 点击事件 | 事件对象 |

<br />
<br />
<br />