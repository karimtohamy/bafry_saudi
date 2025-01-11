<template>
    <div class=" flex justify-between flex-wrap items-center bg-primary text-white  py-10   px-5 relative ">
        <div class="flex items-start flex-col order-1 mt-5">

            <a class="flex items-center "
                href="https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A5%D8%AA%D9%82%D8%A7%D9%86+%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%A6%D9%84+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8+%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%E2%80%AD/@24.683642,46.6909083,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2ee354bf0c8bd3:0xbb53668849a37616!8m2!3d24.683642!4d46.6909083!16s%2Fg%2F11fk17hj9l?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 me-3">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>

                {{ $t('add_off') }}
            </a>
            <a class="flex items-center lg:mt-5 md:mt-2 mt-3 "
            href="https://maps.app.goo.gl/yASb9k97eoUcd1Vc8?g_st=com.google.maps.preview.copy "
                target="_blank" rel="noopener noreferrer">
                <img src="@/assets/factory.svg" alt="" class="size-6 me-3">
                {{ $t('add_fact') }}</a>
        </div>

        <div
            class="absolute lg:inset-0 md:inset-0 end-6 bottom-10  select-none items-center justify-center  lg:flex md:flex">
            <img src="@/assets/images/Logo.png" alt="" class="w-32 h-32">
        </div>

        <div class="order-2 mt-3">
            <ul>
                <li class="">{{ $t('contacts') }}</li>
                <li class="my-2">
                    <div class="flex items-center" style="direction: ltr;">
                        <EnvelopeIcon class="w-5 h-5  me-4" />
                        <a href="mailto:info@bafry.sa" class="text-white-500 hover:underline">
                            info@bafry.sa
                        </a>
                    </div>

                </li>
                <li>
                    <div class="flex" style="direction: ltr;">
                        <PhoneIcon class="size-5 me-4" />
                        <a :href="currentLanguage == 'ar' ? 'tel:+966536611411' : 'tel:+966536611411'"
                            class="text-white" style="direction: ltr;">
                            +966 53 661 1411
                        </a>
                    </div>
                </li>
                <li class="my-2">
                    <div class="flex items-center" style="direction: ltr;">

                        <a href="https://www.instagram.com/bafry_sa?igsh=NXZnYWcwaHE4MGVz" class="flex items-center">
                            <img src="@/assets/insta.svg" alt="" class="size-7 me-4">
                            
                        </a>
                
                        <a href="https://www.facebook.com/profile.php?id=61571853567131" class="flex items-center">
                            <img src="@/assets/facebook-logo.svg" alt="" class="size-7 me-4">
          
                        </a>
                    </div>
                </li>
            </ul>

        </div>




    </div>
</template>

<script setup>

import { ref } from 'vue';
import NavLinks from './ui/navbar/navLinks.vue';
import Map from './map.vue';

import { EnvelopeIcon, MapPinIcon, PhoneIcon, } from '@heroicons/vue/24/outline';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const currentLanguage = ref(locale.value);
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