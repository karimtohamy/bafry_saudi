<template>
    <div
        class="fixed min-w-[250px] transition-all z-10 flex justify-start px-3 bg-emerald-600 h-screen top-0 lg:relative lg:h-auto">
        <div class="lg:pt-14 flex flex-col w-full mt-14">
            
            <SidebarLinks v-for="item in navItems" @click="handleClick" :text="item.text" :to="item.to"  />

        </div>
    </div>
</template>

<script setup>
import SidebarLinks from './sidebarLinks.vue';
const navItems = [
    { to: "home", text: "Home" },
    { to: "products", text: "Products" },
    { to: "studies", text: "Studies" },
    { to: "faq", text: "FAQ" },
    { to: "contact", text: "Contact Us" },
    { to: "tools", text: "Tools" },
];

const emit = defineEmits(['toggle-sidebar']);
function handleClick() {
    if (window.outerWidth <= 786) {
        emit('toggle-sidebar')
    }
}

</script>
<style scoped>
/* Additional styles can be added here if needed */
</style>
