<template>
    <header class="fixed z-10 flex w-full items-center justify-center top-0"
        :class="{ 'bg-slate-400 transition-all ease-out z-10': scrolled }">
        <div class="w-full flex h-12 justify-center items-center">
            <NavLinks v-for="(item, index) in navItems" :key="index" :to="item.to" :text="item.text" />
        </div>
    </header>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline';
import NavLinks from './navLinks.vue';
import { ref,onMounted,onUnmounted } from 'vue';
const scrolled = ref(false);

const handleScroll = () => {
    scrolled.value = window.scrollY > 100; // Change 100 to the scroll value at which you want the color to apply
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
const navItems = [
    { to: "about" , text: "About Us" },
    { to: "home" , text: "Home" },
    { to: "products" , text: "Products" },
    { to: "studies" , text: "Studies" },
    { to: "faq" , text: "FAQ" },
    { to: "contact" , text: "Contact Us" },
    { to: "tools" , text: "Tools" },
];

</script>

<style lang="scss" scoped>


</style>