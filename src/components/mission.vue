<template>
    <div>

    <div
        class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-12 px-12 items-center justify-center w-full py-14">
        <div
            class="shadow-lg py-10 w-full  rounded-lg flex px-3 mx-auto text-center  flex-col bg-slate-300/10 text-black jsutify-center items-center">

            <img src="@/assets/vision.svg" alt="" class="size-10 mb-2" />
            <h1 class="text-2xl font-semibold mb-3">{{$t('vision')}}</h1>


            <p class="text-xl px-1">
                {{ $t('vision_p') }}
            </p>
        </div>
        <div
            class="shadow-lg py-10 w-full h-full rounded-lg flex px-3 mx-auto text-center  flex-col bg-slate-300/10 text-black jsutify-center items-center">
            <img src="@/assets/target-icon.svg" alt="" class="size-10 mb-2">

            <h1 class="text-2xl font-semibold mb-3">{{ $t('mission') }}</h1>
            <p class="text-xl px-1">{{ $t('mission_p') }}</p>
        </div>
    </div>
    <div
            class="shadow-lg py-10 w-1/2 mb-10 rounded-lg flex px-3 mx-auto text-center  flex-col bg-slate-300/10 text-black jsutify-center items-center">
            <img src="@/assets/badge.svg" alt="" class="size-11 mb-2">

            <h1 class="text-2xl font-semibold mb-3">{{ $t('new_sec') }}</h1>
            <p class="text-xl px-1">{{ $t('new_sec_p') }}</p>
        </div>
    </div>

</template>

<script setup>
</script>

<style scoped></style>