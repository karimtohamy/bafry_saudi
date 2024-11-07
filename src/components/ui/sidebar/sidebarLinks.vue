<template>
    <div>
        <router-link :to="{
            name: to, params: {
            lang: currnetlang
            }
        }" class="flex justify-start ps-4 items-center mb-2 py-3 rounded-full transition-colors text-white"
            active-class="!text-black bg-gold">

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
