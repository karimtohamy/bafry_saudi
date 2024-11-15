<template>
    <div class="flex justify-center items-center w-full h-[90vh] pt-32 lg:pb-5 lg:pt-12 mb:py-12 px-4">
        <!-- Main container with responsive padding and flex layout -->
        <div
            class="rounded-lg shadow-lg  flex flex-col lg:flex-row lg:mx-10 w-full p-6 sm:p-10 md:p-12 lg:p-20 justify-between items-center lg:items-start bg-primary overflow-hidden">
            <!-- Map component with responsive sizing and position adjustments -->
            <Map class=" w-64 h-64 lg:h-96 lg:w-96 order-2 lg:order-1 rounded-lg overflow-hidden" />

            <!-- Contact Form component -->
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
</script>

<style lang="scss" scoped>


</style>