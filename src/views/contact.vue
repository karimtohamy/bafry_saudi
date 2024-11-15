<template>
    <div class="flex justify-center items-center w-full h-full py-10 lg:pt-8 px-4">
        <div
            class="rounded-lg shadow-lg  flex flex-col lg:flex-row lg:mx-10 w-full p-6 sm:p-10 md:p-12 lg:p-20 justify-between items-center  bg-primary overflow-hidden">
            <div class="min-h-full flex items-center order-2 lg:order-1  w-auto lg:w-auto md:w-full">

                <Map class=" w-64 h-64 lg:h-full lg:w-96  md:w-full md:aspect-video rounded-lg overflow-hidden aspect-auto flex items-center" />
            </div>

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