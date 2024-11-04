<template>
    <div>
        <router-link :to="{ name: to }" class="flex items-center me-6" active-class="text-emerald-500 bg-black/15 rounded p-2 text-l font-semibold">
            {{ text }}
        </router-link>

    </div>
</template>

<script setup>
const props = defineProps({
    to: String,
    text: String,
   
});

</script>

<style lang="scss" scoped></style>