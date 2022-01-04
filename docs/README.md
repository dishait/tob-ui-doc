---
home: true
heroText: tob ui
tagline: 更现代
actions:
  - text: 👉 Get Started
    link: /guide/
    type: secondary
features:
  - title: 🥳 更漂亮
    details: 更符合现代审美的设计
  - title: 🥰 多端兼容
    details: H5，App，小程序都支持
  - title: 😋 支持Vue2/3
    details: Vue2 和 Vue3 都支持
  - title: 🤔 预设优先
    details: 使用组件的预设配置，效率翻番
  - title: 🤓 动态主题
    details: 主题自由切换，满足个性化需求
  - title: 🧐 自定义主题
    details: 让每一个应用都能有不一样的美
---

---

<br />



<script setup>
import { init } from 'ityped'
import { useToggle } from "@vueuse/core"
import { onMounted, computed  } from 'vue'
import roundeds from "@design/roundeds.js"

onMounted(() => {
  const oneElement = document.querySelector('.description')
  init(oneElement, { showCursor: false,  disableBackTyping: true, strings: ['的 uniapp ui'] });
})

const [status, toggle] = useToggle(false)

const theme = computed(() => {
  return status.value ? 'theme-deep' : '' 
})
</script>


<style scoped>
  .theme-deep {
    --primary: 255, 0, 0;
    --primary-focus: 186,0,0;
  }
</style>

<br />
<br />
<br />

### :partying_face: 更漂亮

在视觉体验上，`tob-ui` 将不断吸收采纳更多国内外更先进的设计风格和设计理念，力求让界面更现代简洁与漂亮。  

目前主要支持下边四种风格，分别是阴影，高亮，轮廓以及原色

<t-btn class="m-2" color=" " shadow="sm">阴影</t-btn>
<t-btn class="m-2" color="error" light>高亮</t-btn>
<t-btn class="m-2" color="error">原色</t-btn>
<t-btn class="m-2" color="error" outline>轮廓</t-btn>


```vue
<template>
    <view>
      <t-btn color=" " shadow="sm">阴影</t-btn>
      <t-btn color="error" light>高亮</t-btn>
      <t-btn color="error">原色</t-btn>
      <t-btn color="error" outline>轮廓</t-btn>
    </view>
</template>
```

<br />
<br />
<br />
<br />


### :smiling_face_with_three_hearts: 多端兼容

在兼容方向上，`tob-ui` 的目标是兼容更多平台的同时减少使用上的差异。以下是示例演示 👇

<br />

<div class="flex">
  <t-facade url="/home/wechat-facade.jpg" alt="wechat-facade" text="微信小程序" />
</div>


<br />
<br />
<br />
<br />

### :yum: 支持Vue2/3

所有的组件都将支持 `Vue3` 和 `Vue2`，例如下边的按钮 👇

<t-btn color="success" light> Success </t-btn>

<CodeGroup>
  <CodeGroupItem title="Vue3" active>

```vue
<template>
    <view>
      <t-btn light @click="log">{{ text }}</t-btn>
    </view>
</template>

<script>
  export default {
    setup() {
      const text = 'Success'
      const log = () => console.log("你好，我是 Vue3 😄")
      return {
        log,
        text
      }
    }
  }
</script>
```

  </CodeGroupItem>

  <CodeGroupItem title="Vue2">

```vue
<template>
    <view>
      <t-btn light @click="log">{{ text }}</t-btn>
    </view>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Success'
      }
    },
    methods: {
      log() {
        console.log("你好，我是 Vue2 😁")
      }
    }
  }
</script>
```

  </CodeGroupItem>

</CodeGroup>

<br />
<br />
<br />
<br />

### :thinking: 预设优先

`tob-ui` 内置了大量的预设的 props，满足不同的样式需求。同时大量的组件 props 支持外部 class 注入。

例如不同圆角的标签 👇

<t-tag color="primary" outline class="m-2" v-for="v of roundeds" :key="v.type" :rounded="v.type">
  {{v.desc}}
</t-tag>

```vue
<template>
    <view>
      <t-tag color="primary" outline rounded="full">圆</t-tag>
      <t-tag color="primary" outline rounded="3xl">无敌大</t-tag>
      <t-tag color="primary" outline rounded="2xl">超级大</t-tag>
      <t-tag color="primary" outline rounded="xl">超大</t-tag>
      <t-tag color="primary" outline rounded="lg">大</t-tag>
      <t-tag color="primary" outline rounded="md">中</t-tag>
      <t-tag color="primary" outline rounded="base">基础</t-tag>
      <t-tag color="primary" outline rounded="sm">小</t-tag>
      <t-tag color="primary" outline rounded="none">无</t-tag>
    </view>
</template>
```

<br />
<br />
<br />
<br />

### :nerd_face: 动态主题

`tob-ui` 中内置了动态主题系统，轻松实现动态的主题切换。

<t-btn color="primary" :class="theme" @click="toggle">我是一个动态主题下的按钮</t-btn>

```vue
<!-- 页面中 -->
<template>
  <view :class="AppTheme">
    <text class="text-primary" @click="toggle">我是一个动态主题下的按钮</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        theme: ''
      }
    },
    methods: {
      toggle() {
        const finalTheme = this.theme ? '' : 'deep'
        this.ToggleAppTheme(finalTheme)
      }
    }
  }
</script>
```



```vue
<!-- App.vue -->
<style lang="less">
@import '@/uni_modules/tob-ui/index.less';

/** 定义一个主题 **/
.theme-deep {
  /* 提供修改的颜色 */
  .ProvideColors({
    primary: red; 
    primary-focus: #ba0000;
    /* ...此处省略其他各种颜色 */
  });
}
</style>
```

<br />
<br />
<br />
<br />

### :monocle_face: 自定义主题

`tob-ui` 中内置的主题系统可以对进行系统调整，让你的应用与众不同。

```vue
<style lang="less">
@import '@/uni_modules/tob-ui/index.less';

/* 修改 App 颜色 */
.AppColor({
  /* 品牌色 */
  primary: #570df8;   /* 主要 */
  secondary: #f000b8; /* 次要 */
  accent: #37cdbe;    /* 强调 */
  neutral: #3d4451;   /* 中和 */
  base: #7f899a;      /* 基础 */

  /* 通用色 */
  info: #3b82f6;    /* 信息 */
  success: #10b981; /* 成功 */
  warning: #f59e0b; /* 警告 */
  error: #ef4444;   /* 错误 */

  /* 点击时，品牌色 */
  primary-focus: #4406cb;    /* 主要 */
  secondary-focus: #bd0091;  /* 次要 */
  accent-focus: #2aa79b;     /* 强调 */
  neutral-focus: #2a2e37;    /* 中和 */
  base-focus: #656f7f;       /* 基础 */

  /* 点击时，通用色 */
  info-focus: #2563eb;     /* 信息 */
  success-focus: #059669;  /* 成功 */
  warning-focus: #d97706;  /* 警告 */
  error-focus: #dc2626;    /* 错误 */

  /* 白色 */
  white: #ffffff;
});
</style>
```

<br />
<br />
<br />
<br />



<div class="text-center text-md">
 本文档基于<t-tag size="md" color="accent" rounded="base" class="mx-1">VuePress + Vite</t-tag>构建
</div>