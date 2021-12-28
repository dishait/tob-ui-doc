<script setup>
import { ref, computed } from "vue"
import { useWindowScroll } from '@vueuse/core'
defineProps({
    src: {
        type: String,
        default: ''
    }
})

const { y } = useWindowScroll()

const height = computed(() => {
    const h = y.value >= 60 ? 10 : 75
    return `${h}px`
})
</script>

<template>
    <div class="container">
        <iframe id="iframe" :src="src" frameborder="0" :style="{ height: `calc(100vh - 25px)` }" />
    </div>
</template>


<style scoped>
@media (max-width: 1100px) {
    .container {
        right: auto;
        left: 750px;
    }
}

.container {
    right: 10px;
    z-index: 1;
    width: 320px;
    display: none;
    position: fixed;
    overflow: hidden;
    border-radius: 8px;
    top: v-bind(height);
    transition: all 0.2s ease-in-out;
    background-color: white;
    --tw-shadow-color: 8, 145, 178;
    --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
        0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
}

@media (min-width: 1000px) {
    .container {
        display: block;
    }
}

.container iframe {
    width: 100%;
    display: block;
}
</style>