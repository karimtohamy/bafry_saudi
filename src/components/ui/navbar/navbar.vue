<template>
    <header class="max-w-screen shadow-lg text-white select-none">
        <div class="bg-primary hidden invisible lg:visible lg:flex w-full items-center justify-center top-0 py-2">
            <router-link class="absolute" :class="[currentLanguage == 'ar' ? 'right-6' : 'left-6']"
                :to="{ name: 'home', params: { lang: currentLanguage } }">

                <img src="@/assets/images/Logo.png" alt="" class=" h-28">
            </router-link>
            <div class="w-full  flex h-12 justify-center items-center">
                <NavLinks v-for="(item, index) in navItems" :currnetlang="currentLanguage" :key="index" :to="item.to"
                    :text="item.text" />
            </div>
            <div class="absolute" :class="[currentLanguage == 'ar' ? 'left-6' : 'right-6']">
                <button @click="toggleLanguage" class="py-2 px-4 me-3 text-white rounded-md bg-white/30">
                    {{ currentLanguage === 'en' ? 'العربية' : 'English' }}
                </button>
            </div>
        </div>
        <div class=" lg:hidden fixed z-10 flex w-full items-center justify-between bg-primary ">
            <Bars3Icon class="size-10 m-2 hover:bg-black/35 rounded text-white" @click="emit('toggle-sidebar')" />
            <div class="flex items-center ">
                <a @click="toggleLanguage" class="me-3 text-s underline rounded-md">
                    {{ currentLanguage === 'en' ? 'العربية' : 'English' }}
                </a>
                <router-link :to="{name:'home'}">

                    <img src="@/assets/images/Logo.png" alt="Logo" class=" h-14 me-3" />
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline';
import { ref, onMounted, onUnmounted } from 'vue';
import NavLinks from './navLinks.vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { locale } = useI18n();
const currentLanguage = ref(locale.value);


const setLanguagePreference = (lang) => {
    localStorage.setItem('preferredLanguage', lang); // Save preferred language
    locale.value = lang;
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr'); // Adjust text direction
};

const toggleLanguage = () => {
    const newLang = currentLanguage.value === 'en' ? 'ar' : 'en';
    setLanguagePreference(newLang);
    currentLanguage.value = newLang;
    router.push({
        path: `/${newLang}${route.fullPath.substring(3)}` // Update the lang in the current path
    }).then(() => {
        window.location.reload();
    });
};


const emit = defineEmits(['toggle-sidebar'])


onMounted(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en'; // Get from storage or default
    setLanguagePreference(savedLanguage);
    currentLanguage.value = savedLanguage;
});

const navItems = [
    { to: "home", text: "Home" },
    { to: "products", text: "Products" },
    { to: "tools", text: "Tools" },
    { to: "studies", text: "Studies" },
    { to: "contact", text: "Contact Us" },
    { to: "faq", text: "FAQ" },
];

</script>

<style lang="scss" scoped></style>