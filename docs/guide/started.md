---
next: 
    text: Design
    link: /guide/design/
---
# 起步

<br />


## 安装插件 :thinking:

`tob ui` 为 `HBuidlerx` 提供了第一优先级的支持。  

所以直接在👉 [插件市场](https://ext.dcloud.net.cn/) 中 <t-tag color="accent" :light="false">使用 HBuidlerx 导入插件</t-tag> 即可。

<br />
<br />
<br />

## 引入样式库 :monocle_face:
`UI` 依赖一个样式库，所以要在 `App.vue` 中进行引入。 

这里需要安装 `less 插件`，具体可见 👉 [安装less插件](/tob-ui-doc/guide/design/style/#安装-less-插件)

关于样式库更多说明可见 👉 [Design 样式库](/tob-ui-doc/guide/design/style/)

```vue
<!-- App.vue -->
<style lang="less">
    @import '@/uni_modules/tob-ui/index.less';
</style>
```

<br />
<br />
<br />

## 自动注册组件 :smiling_face_with_three_hearts:

由于 `tob ui` 是满足默认的 [easycom 规范](https://uniapp.dcloud.io/component/README?id=easycom%e7%bb%84%e4%bb%b6%e8%a7%84%e8%8c%83) 的。所以完成以上两步后就可以直接在模板中使用组件了。

<t-btn color="primary">按钮</t-btn>

```vue
<!-- 页面中 -->
<template>
    <view>
        <t-btn>按钮</t-btn>
    </view>
</template>
```

<br />
<br />
<br />

## easycom 配置 :yum:

当然你可能已经在项目中修改了 `easycom` 的配置，这将会使得原本默认的 `easycom` 配置失效进而导致组件的自动注册失效。那么你可以参考下边的配置在 `pages.json` 中进行配置的补充。

```json
// ....此处省略你的其他 pages 配置
"easycom": {
  "autoscan": true,
  "custom": {
    // ....此处省略你的其他 easycom 配置
    "^t-(.*)": "@/uni_modules/tob-ui/components/t-$1/t-$1.vue"
  }
}
```

<br />
<br />
<br />

## 友好代码提示 :raised_eyebrow:

在 `template` 模板中输入 `<t-` 即可得到组件的提示

<img :src="$withBase('/template-tips.png')" alt="模板提示">

同时在使用组件的 `props` 时也有对应的 `props` 提示

<img :src="$withBase('/code-tips.png')" alt="props提示">


<br />
<br />
<br />

