<script setup>
defineProps({
    color: String
})
</script>

<template>
    <div class="rounded shadow-sm p-3 custom-shadow">
        <span class="uppercase">{{ color }}</span>
        <div class="mt-1 layout">
            <div
                v-for="i of 10"
                class="rounded m-1 p-3"
                :class="`bg-opacity-${i * 10} bg-${color}`"
            />
        </div>
    </div>
</template>


<style scoped lang="less">
.layout {
    display: grid;
    grid-gap: 10rpx;
    justify-items: stretch;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (min-width: 980px) {
        grid-template-columns: repeat(10, 1fr);
    }
}

.custom-shadow {
    --tw-shadow-color: 8, 145, 178;
    --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
        0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
}
</style>