<template>
    <div class="background h-screen flex items-center justify-center px-10"
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-full gap-8">
            <RouterLink v-for="study in studies" :key="study.to" :to="{ name: study.to }"
                class="shadow-lg rounded flex items-center justify-center p-5 bg-slate-200 hover:scale-110 transition-all">
                {{ study.name }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import backgroundImage from '@/assets/images/study.jpg'; // Import the image for Vite bundling

const studies = [
    { name: 'Chlorine Study', to: 'chlorine-study' },
    { name: 'PERACETIC ACID Study', to: 'peracetic-acid-study' },
    { name: 'Study in Fish', to: 'study-in-fish' },
];
</script>

<style scoped>
.background{
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
