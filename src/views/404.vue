<template>
    <div class="h-screen bg-slate-400">
        <section class="flex items-center h-full">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-600">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">{{ $t('404_title') }}</p>
                    <p class="mb-4 text-lg font-light text-gray-500">{{ $t('404_body') }}</p>
                    <router-link :to="{name:'home'}"
                        class="inline-flex text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">{{ $t('404_btn') }}</router-link>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>