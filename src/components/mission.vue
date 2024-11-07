<template>
    <div class="h-screen">
        <div class=" w-full h-[100vh]">
            <div class=" h-1/2  w-full flex items-center relative overflow-hidden ">
                <img :src="mountainImage" alt=""
                    class="w-full img1 overflow-hidden h-auto object-cover  object-bottom " />
                <div class="absolute right-0 top-1/2">
                    dndhu dughghg yf trvtybtrv
                </div>

            </div>
            <div class="h-1/2 flex justify-end w-full  overflow-hidden relative ">
                <div class="absolute left-0 top-1/2">
                    dndhu dughghg yf trvtybtrv
                </div>
                <img :src="beachImage" alt="" class="w-full  object-cover object-bottom img2 " />

            </div>
        </div>
    </div>
</template>

<script setup>
import mountainImage from '@/assets/images/mountain.jpg';
import beachImage from '@/assets/images/beach_big_copped.jpg';
</script>

<style scoped>
.img1 {
clip-path: polygon(40.2% 100%, 0% 100%, 0% 0%, 70% 0%);



}



.img2 {
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 40% 100%);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        /* Custom shadow */
}
</style>
