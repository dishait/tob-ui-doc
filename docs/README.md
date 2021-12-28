---
home: true
heroText: tob ui
tagline: 更现代
actions:
  - text: 👉 Get Started
    link: /guide/
    type: secondary
features:
  - title: 😁 预设优先
    details: 使用组件的预设配置，效率翻番
  - title: 🧐 自定义主题
    details: 让每一个应用都能有不一样的美
  - title: 😀 动态主题
    details: 主题自由切换，满足个性化需求
  - title: 😄 多端兼容
    details: H5，App，小程序都支持
  - title: 😋 支持Vue2/3
    details: Vue2 和 Vue3 都支持
  - title: 😎 更漂亮
    details: 更符合现代审美的设计
---

---

<br />

<div class="text-center text-sm">
 本文档基于<t-tag size="md" color="accent" rounded="lg" class="mx-1">VuePress + Vite</t-tag>构建
</div>

<script setup>
import { init } from 'ityped'
import { onMounted } from 'vue'


onMounted(() => {
  const oneElement = document.querySelector('.description')
  init(oneElement, { showCursor: false,  disableBackTyping: true, strings: ['的 uniapp ui'] });
})
</script>
