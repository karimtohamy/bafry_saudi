<template>
    <div class=" flex justify-evenly">
        <div>
            <h1>
                Contacts
            </h1>
            <ul class="ms-5">
                <li>
                    Gm@jabal.sa
                </li>
                <li>+966 53 661 1411</li>
            </ul>
        </div>
        <div class="flex">
            <NavLinks v-for="(item, index) in navItems" :currnetlang="currentLanguage" :key="index" :to="item.to"
                :text="item.text" />
        </div>
        <Map class="h-40 w-40"/>



    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavLinks from './ui/navbar/navLinks.vue';
import Map from './map.vue';
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