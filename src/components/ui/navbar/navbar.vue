<template>
    <div class="w-full flex h-12 justify-center items-center">
        <NavLinks v-for="(item, index) in navItems" :key="index" :to="item.to" :text="item.text"  />
    </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline';
import NavLinks from './navLinks.vue';
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