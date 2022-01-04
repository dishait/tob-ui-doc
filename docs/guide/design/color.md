# 颜色设计

<script setup>
import colors from "@design/colors.js"
</script>

<t-color class="mt-10" v-for="v of colors" :key="v.type" :color="v.type" />