<script setup>
defineProps({
    alt: String,
    url: String,
    text: String
})
</script>

<template>
    <div class="text-center">
        <img :src="$withBase(url)" :alt="alt" class="h-30 w-30" />
        <div class="mt-1 text-base text-lg">{{ text }}</div>
    </div>
</template>