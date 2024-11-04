<template>
    <header class="max-x-screen">
        <div v-if="isSideBarOpen" class="bg-slate-200 flex w-full items-center justify-center top-0 py-2">
            <router-link class="absolute left-6" :to="{name:'home'}">

                <img src="@/assets/images/Logo.jpg" alt="" class="h-14 ">
            </router-link>
            <div class="w-full flex h-12 justify-center items-center">
                <NavLinks v-for="(item, index) in navItems" :key="index" :to="item.to" :text="item.text" />
            </div>
        </div>
        <div v-else class="fixed z-10 flex w-full items-center justify-between bg-slate-200 ">
            <Bars3Icon class="size-10 m-2 hover:bg-black/35 rounded text-white" @click="emit('toggle-sidebar')" />
            <img src="@/assets/images/Logo.jpg" alt="Logo" class="h-8 me-3" />
        </div>
    </header>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';
// import { HomeIcon, Bars3Icon } from '@heroicons/vue/24/outline';
import NavLinks from './navLinks.vue';

import { ref, onMounted, onUnmounted } from 'vue';
const scrolled = ref(false);
const isSideBarOpen = ref(window.outerWidth > 768);

const emit = defineEmits(['toggle-sidebar'])
const handleScroll = () => {
    console.log(scrolled.value);

    scrolled.value = window.scrollY > 100; // Change 100 to the scroll value at which you want the color to apply

};
function handleResize() {
    isSideBarOpen.value = window.outerWidth >= 786
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize)
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
const navItems = [
    { to: "home", text: "Home" },
    { to: "products", text: "Products" },
    { to: "studies", text: "Studies" },
    { to: "faq", text: "FAQ" },
    { to: "contact", text: "Contact Us" },
    { to: "tools", text: "Tools" },
];

</script>

<style lang="scss" scoped></style>