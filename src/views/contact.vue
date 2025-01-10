<template>
    <div class="flex justify-center items-center w-full h-full py-7 lg:pt-8 px-4">
        <div
            class="rounded-lg shadow-lg flex flex-col lg:flex-row lg:mx-10 w-full p-6 sm:p-10 md:p-12 lg:p-11 justify-between items-center bg-primary overflow-hidden">
            <div class="min-h-full flex items-center order-2 lg:order-1 flex-col w-auto lg:w-96 md:w-full">
                <!-- Buttons to switch between map locations -->
                <div class="mb-6 grid grid-cols-2 gap-4 w-full">
                    <button
                        :class="['text-white p-3 rounded', activeButton === 'fact' ? 'bg-emerald-400' : 'bg-emerald-500/20']"
                        @click="switchmap('fact')">
                        {{ $t('fact') }}
                    </button>
                    <button
                        :class="['text-white p-3 rounded', activeButton === 'office' ? 'bg-emerald-400' : 'bg-emerald-500/20']"
                        @click="switchmap('office')">
                        {{ $t('head_office') }}
                    </button>
                </div>

                <!-- Map Component -->
                <Map :lat="lat" :long="long" :add="add"
                    class="w-64 h-64 lg:h-full lg:w-96 md:w-full md:aspect-video rounded-lg overflow-hidden aspect-auto flex items-center" />
                <div class="mt-5">
                    <a :href="link" class="text-white underline">{{ $t(add_key) }}</a>
                </div>
            </div>
            <!-- Contact Form -->
            <div class="w-full lg:w-1/2 order-1 lg:order-2 mb-6">
                <div class="mb-7 text-white text-xl">{{ $t('contact_email') }}</div>
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<script setup>
import ContactForm from '@/components/contactForm.vue';
import Map from '@/components/map.vue';
import { ref } from 'vue';

const lat = ref(26.2478095);
const long = ref(44.0167588);
const add = ref('5157 Al Yarmouk District, Buraydah, Al Qassim, KSA.');
const activeButton = ref('fact'); // Track the active button
const add_key = ref('add_fact')
const link = ref('https://www.google.com/maps?q=%D9%85%D8%B5%D9%86%D8%B9+%D8%A7%D9%83%D9%84%D9%8A%D9%84+%D8%A7%D9%84%D8%AC%D8%A8%D9%84+%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9+(%D8%A8%D8%A7%D9%81%D8%B1%D9%8A)BAFRY%D8%8C+%D8%B1%D9%88%D8%A7%D9%82+10,+Buraydah+52319,+Saudi+Arabia&ftid=0x1581e30024bebf73:0xb570dce055f2bca9&entry=gps&lucs=,94244543,94246480,94242616,94224825,94227247,94227248,47071704,47069508,94218641,94228354,94233079,94203019,47084304,94208458,94208447&g_ep=CAISEjI0LjQ4LjAuNzAwMTEwNTE5MBgAINeCAyqHASw5NDI0NDU0Myw5NDI0NjQ4MCw5NDI0MjYxNiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIyODM1NCw5NDIzMzA3OSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICRUc%3D&g_st=com.google.maps.preview.copy+')
function switchmap(type) {
    // Update the active button based on the clicked type
    activeButton.value = type;

    if (type === 'fact') {
        lat.value = 26.2478095;
        long.value = 44.0167588;
        add.value = '5157 Al Yarmouk District, Buraydah, Al Qassim, KSA.';
        link.value = "https://www.google.com/maps?q=%D9%85%D8%B5%D9%86%D8%B9+%D8%A7%D9%83%D9%84%D9%8A%D9%84+%D8%A7%D9%84%D8%AC%D8%A8%D9%84+%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9+(%D8%A8%D8%A7%D9%81%D8%B1%D9%8A)BAFRY%D8%8C+%D8%B1%D9%88%D8%A7%D9%82+10,+Buraydah+52319,+Saudi+Arabia&ftid=0x1581e30024bebf73:0xb570dce055f2bca9&entry=gps&lucs=,94244543,94246480,94242616,94224825,94227247,94227248,47071704,47069508,94218641,94228354,94233079,94203019,47084304,94208458,94208447&g_ep=CAISEjI0LjQ4LjAuNzAwMTEwNTE5MBgAINeCAyqHASw5NDI0NDU0Myw5NDI0NjQ4MCw5NDI0MjYxNiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIyODM1NCw5NDIzMzA3OSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICRUc%3D&g_st=com.google.maps.preview.copy+"
        add_key.value = "add_fact"

    } else {
        lat.value = 24.683642;
        long.value = 46.6909083;
        add.value = 'Olaya St, Tarim tower, Riyadh Saudi Arabia';
        link.value = "https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A5%D8%AA%D9%82%D8%A7%D9%86+%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%A6%D9%84+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8+%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%E2%80%AD/@24.683642,46.6909083,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2ee354bf0c8bd3:0xbb53668849a37616!8m2!3d24.683642!4d46.6909083!16s%2Fg%2F11fk17hj9l?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        add_key.value = "add_off"

    }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
