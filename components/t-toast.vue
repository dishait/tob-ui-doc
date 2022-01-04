<script setup>
import { computed, watch } from "vue"
import { useVModels } from '@vueuse/core'
import tIcon from "./t-icon.vue"

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    delay: {
        type: Number,
        default: 2000
    }
})
const { visible } = useVModels(props)
const Visible = computed(() => {
    return visible.value ? 'show' : null
})

const hidden = () => {
    visible.value = false
}
</script>

<template>
    <teleport to="#app">
        <div class="cursor-pointer toast" :class="[Visible]" @click="hidden">
            <slot />
        </div>
    </teleport>
</template>


<style scoped>
.toast {
    top: 75px;
    right: 10px;
    padding: 12px;
    display: flex;
    position: fixed;
    align-items: center;
    border-radius: 8px;
    opacity: 0;
    transform: translateX(100%);
    --tw-shadow-color: 8, 145, 178;
    --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
        0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    transition: all 0.2s ease-in-out;
    background-color: #22272e;
}

html:not(.dark) .toast {
    background-color: white;
}
.show {
    opacity: 1;
    transform: translateX(0);
}
</style>