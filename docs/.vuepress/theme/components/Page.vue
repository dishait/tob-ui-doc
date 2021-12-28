<template>
  <div>
    <div class="bg-accent mt-8 text-center text-lg text-white py-2 tip">Components 栏目建议使用宽屏的 web 查看</div>
    <main class="page mobile">
      <div class="theme-default-content">
        <Content />
      </div>

      <PageMeta />

      <PageNav />
    </main>

    <container :src="mobilepath" />
  </div>
</template>

<script setup lang="ts">
import container from "./container.vue"
import PageMeta from '@vuepress/theme-default/lib/client/components/PageMeta.vue'
import PageNav from '@vuepress/theme-default/lib/client/components/PageNav.vue'

defineProps({
  mobilepath: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
@media (min-width: 1000px) {
  .mobile {
    padding-right: 320px;
  }
}

.tip {
  display: block;
}

@media (min-width: 720px) {
  .tip {
    display: none;
  }
}
</style>