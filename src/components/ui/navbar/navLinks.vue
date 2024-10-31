<template>
    <div>
        <router-link :to="{ name: to }" class="flex items-center me-6">
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