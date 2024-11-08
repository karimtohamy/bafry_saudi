<template>
    <div class="mt-3">
        <router-link :to="{
            name: to, params: {
            lang: currnetlang
            }
        }" class="flex justify-start ps-3 items-center mb-2 py-2 rounded transition-colors text-white"
            active-class="bg-black/20 !text-gray-800">

            <span>{{ $t(to)}}</span>
        </router-link>
    </div>
</template>

<script setup>

const props = defineProps({
    text: String,
    to: String,
    currnetlang: String

})

</script>

<style scoped>
/* Additional styles can go here if needed */
</style>
