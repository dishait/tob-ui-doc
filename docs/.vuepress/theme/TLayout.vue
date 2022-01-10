<template>
    <Layout style="--sidebar-width: 200px" class="layout">
        <template #page>
            <Transition
                mode="out-in"
                name="fade-slide-y"
                @before-enter="onBeforeEnter"
                @before-leave="onBeforeLeave"
            >
                <Page :key="page.path" :mobilepath="frontmatter.mobile" />
            </Transition>
        </template>
    </Layout>
</template>

<script setup>
import Page from './components/Page.vue'
import { computed, onMounted } from "vue"
import { useWindowScroll } from '@vueuse/core'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import {
    useScrollPromise,
} from '@vuepress/theme-default/lib/client/composables'


const page = usePageData()

const frontmatter = usePageFrontmatter()
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending

const { y } = useWindowScroll()

const navbarHeight = computed(() => {
    const v = 60 - y.value + 1
    const h = v <= 0 ? 0 : v
    return `${h}px`
})
</script>

<style>
.layout > .navbar {
    position: fixed !important;
}

.layout > .sidebar {
    --navbar-height: v-bind(navbarHeight);
    transition-property: all 0.2s ease-in-out;
}

@media (min-width: 1000px) {
    .layout + .back-to-top {
        width: 2.2rem !important;
        height: 2.2rem !important;
        right: 23rem !important;
    }

    .layout > .sidebar {
        --navbar-height: v-bind(navbarHeight);
        transition-property: right, width;
    }
}

@media (min-width: 720px) {
    .layout > .navbar {
        position: static !important;
    }
}
</style>