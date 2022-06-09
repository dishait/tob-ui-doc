---
layout: TLayout
mobile: /h5/index.html#/pages/show/noticeBar/noticeBar
---

# 通知栏

<br />
<br />

## 示例 :thinking:

<br />

### 颜色

默认 `t-notice-bar` 的 `color` 为 `success`，同时 `light` 为 `true`。  

所以让 `light` 为 `false`，即可显示深色的绿色通知条！

```vue
<template>
    <view>
        <t-notice-bar :light="false">
            盛年不重来，一日难再晨。及时宜自勉，岁月不待人
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 高亮
默认下就是高亮的绿色通知条，所以啥都不用设置👍
```vue
<template>
    <view>
        <t-notice-bar>
            盛年不重来，一日难再晨。及时宜自勉，岁月不待人
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 轮廓

让 `outline` 为 `true` 即可

```vue
<template>
    <view>
        <t-notice-bar outline>
            盛年不重来，一日难再晨。及时宜自勉，岁月不待人
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 圆角

`rounded` 可以设置圆角，同时 `color` 可以设置颜色

```vue
<template>
    <view class="mx-2">
        <t-notice-bar rounded="md" color="error">
            业精于勤，荒于嬉；行成于思，毁于随
        </t-notice-bar>
	</view>
</template>
```

<br />
<br />

### 阴影

设置 `shadow` 即可

```vue
<template>
    <view class="mx-2">
        <t-notice-bar rounded="md" color="" shadow="sm">
            一寸光阴一寸金，寸金难买寸光阴
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 尺寸

设置 `size` 即可

```vue
<template>
    <view class="mx-2">
        <t-notice-bar rounded="md" color="accent" size="xs">
            选择机会，就是节省时间
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 可关闭

让 `closeable` 为 `true` 即可

```vue
<template>
    <view class="mx-2">
        <t-notice-bar rounded="md" color="info" closeable>
            读书破万卷，下笔如有神
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 图标

- leftIcon 左侧图标
- rightIcon 右侧图标

```vue
<template>
    <view class="mx-2">
        <t-notice-bar color="primary" rounded="md" leftIcon="bulb" rightIcon="right">
            一年之计在于春，一日之计在于晨
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 插槽

可通过 `action` 插槽向最右侧插入想要的内容

```vue{5-7}
<template>
    <view class="mx-2">
        <t-notice-bar color="error" outline rounded="md" leftIcon="fire">
            逝者如斯夫，不舍昼夜
            <template #action>
                <t-tag color="error" light class="ml-2">99+</t-tag>
            </template>
        </t-notice-bar>
    </view>
</template>
```
<br />
<br />

### 静止

让 `scrollable` 为 `false` 即可让滚动动画停止

```vue
<template>
    <view class="mx-2">
        <t-notice-bar color="base" :scrollable="false" rounded="md" leftIcon="notification">独怜幽草涧边生，上有黄鹂深树鸣</t-notice-bar>
    </view>
</template>
```
<br />
<br />

### 横向步进

:::warning 组合
该示例是一个与原生组合的示例，配置比较复杂。可以直接复制😄
:::
首先需要让 `scrollable` 为 `false`令组件滚动动画停止，  

然后结合原生 `swiper` 与原生的 `swiper-item` 实现。  

原生 `swiper` 可见 👉 [uni-components-swiper](https://uniapp.dcloud.io/component/swiper?id=swiper)

注意这里有个 `h-4` 是适配当前 `size` 的，如果你修改了 `t-notice-bar` 的 `size` 需要自行重新调整高度。

```vue
<template>
    <view class="mx-2">
        <t-notice-bar color="warning" rounded="md" leftIcon="info-circle" closeable :scrollable="false">
            <swiper autoplay circular :interval="2000" class="h-4 w-full">
                <swiper-item>海内存知己，天涯若比邻</swiper-item>
                <swiper-item>古人聊自遣，此语总非真</swiper-item>
                <swiper-item>学问多奇字，观书少斫轮</swiper-item>
                <swiper-item>何时策杖屦，共醉秣陵春？</swiper-item>
            </swiper>
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />

### 纵向

:::warning 组合
该示例仍然是一个与原生组合的示例，配置比较复杂。可以直接复制😄
:::
首先需要让 `scrollable` 为 `false`令组件滚动动画停止，  

然后结合原生 `swiper` 与原生的 `swiper-item` 实现。  

原生 `swiper` 可见 👉 [uni-components-swiper](https://uniapp.dcloud.io/component/swiper?id=swiper)

注意这里有个 `h-4` 是适配当前 `size` 的，如果你修改了 `t-notice-bar` 的 `size` 需要自行重新调整高度。

```vue
<template>
    <view class="mx-2">
        <t-notice-bar color="secondary" rounded="md" leftIcon="fire" closeable :scrollable="false">
            <swiper vertical autoplay circular :interval="2000" class="h-4 w-full">
                <swiper-item>海内存知己，天涯若比邻</swiper-item>
                <swiper-item>古人聊自遣，此语总非真</swiper-item>
                <swiper-item>学问多奇字，观书少斫轮</swiper-item>
                <swiper-item>何时策杖屦，共醉秣陵春？</swiper-item>
            </swiper>
        </t-notice-bar>
    </view>
</template>
```

<br />
<br />
<br />


<script setup>
    const s = 'css 动画支持的单位都可以，例如1s'
</script>
## 属性 :monocle_face:

|    属性    |   说明   |  类型   |    默认值    |      可选值       |
| :--------: | :------: | :-----: | :----------: | :---------------: |
|   color    |   颜色   | string  |     base     |  <t-doc-color />  |
|   light    |   高亮   | boolean |    false     |   <t-doc-boo />   |
|  outline   |   轮廓   | boolean |    false     |   <t-doc-boo />   |
|    size    |   尺寸   | string  |      md      |  <t-doc-size />   |
|  rounded   |   圆角   | string  |     none     | <t-doc-rounded /> |
|   shadow   |   阴影   | string  |     none     | <t-doc-shadow />  |
| scrollable |  可滚动  | boolean |     true     |   <t-doc-boo />   |
| closeable  |  可关闭  | boolean |    false     |   <t-doc-boo />   |
|   delay    | 动画延迟 | string  |              |       {{s}}       |
|  duration  | 动画时长 | string  |      8s      |       {{s}}       |
|  leftIcon  | 左侧图标 | string  |    sound     |  <t-doc-icon />   |
| rightIcon  | 右侧图标 | string  |              |  <t-doc-icon />   |
| closeIcon  | 关闭图标 | string  | close-circle |  <t-doc-icon />   |



<br />
<br />
<br />

## 事件 :nerd_face:

|     方法名     |       说明       |   参数   |
| :------------: | :--------------: | :------: |
|     click      |     点击事件     | 事件对象 |
| leftIconClick  | 左侧图标点击事件 | 事件对象 |
| rightIconClick | 右侧图标点击事件 | 事件对象 |
| closeIconClick | 关闭图标点击事件 | 事件对象 |

<br />
<br />
<br />