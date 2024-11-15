<template>
    <div class=" flex justify-between flex-wrap items-center bg-primary text-white  py-10   px-5 relative ">
        <a class="flex items-center order-2 mt-5"
            href="https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A5%D8%AA%D9%82%D8%A7%D9%86+%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%A6%D9%84+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8+%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%E2%80%AD/@24.683642,46.6909083,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2ee354bf0c8bd3:0xbb53668849a37616!8m2!3d24.683642!4d46.6909083!16s%2Fg%2F11fk17hj9l?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 me-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            Olaya St, برج التاريم, Riyadh Saudi Arabia
        </a>

        <div class="absolute lg:inset-0 md:inset-0 end-6 top-5  select-none items-center justify-center  lg:flex md:flex">
            <img src="@/assets/images/logo.png" alt="" class="w-32 h-32">
        </div>


        <div class="order-1">
            <ul>
                <li>Contacts</li>
                <li class="my-2">
                    <div class="flex items-center">
                        <EnvelopeIcon class="w-5 h-5 mr-4" />
                        <a href="mailto:Gm@jabal.sa" class="text-white-500 hover:underline">
                            Gm@jabal.sa
                        </a>
                    </div>

                </li>
                <li>
                    <div class="flex">
                        <PhoneIcon class="size-5 me-4" />
                        <a :href="currentLanguage == 'ar' ? 'tel:+966536611411' : 'tel:+966536611411'"
                            class="text-white">
                            {{ currentLanguage == 'ar' ? '٩٦٦٥٣٦٦١١٤١١+' : '+966 53 661 1411' }}
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
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/outline';
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