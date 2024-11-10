<template>
    <div
        class=" transistion-all fixed min-w-[240px] transition-all z-10 flex justify-start px-3 bg-primary h-screen top-0 lg:relative lg:h-auto">
        <div class="lg:pt-14 flex flex-col w-full mt-14 justify-between">
            <div>

                <SidebarLinks v-for="item in navItems" @click="emit('toggle-sidebar')" 
                    :to="item.to" />
            </div>
        </div>
    </div>
</template>

<script setup>
import SidebarLinks from './sidebarLinks.vue';
import { ref, onMounted, onUnmounted } from 'vue';
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




onMounted(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en'; // Get from storage or default
    setLanguagePreference(savedLanguage);
    currentLanguage.value = savedLanguage;
});
const navItems = [
    { to: "home"},
    { to: "products"},
    { to: "studies"},
    { to: "contact"},
    { to: "tools"},
    { to: "faq"},
];

const emit = defineEmits(['toggle-sidebar']);

</script>
<style scoped>
/* Additional styles can be added here if needed */
</style>
