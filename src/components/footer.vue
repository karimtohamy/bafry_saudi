<template>
    <div class=" bg-green-500 p-2 ">

    <div class="flex items-center justify-between w-full p-5 bg-white rounded-lg">

            <!-- <Map class="aspect-square rounded-lg h-32 w-32 lg:h-52 lg:w-52" /> -->
            <!-- <div class="flex flex-col justify-center items-center w-1/2">
                <h1>Subscribe to our news letter for updated</h1>
                <form @submit.prevent="subscribe" class="w-full flex flex-col justify-center">
                    
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" v-model="email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                        <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                        address</label>
                    </div>
                    <button type="submit" class="mx-auto border rounded mt-4 p-4">Subscribe</button>
                </form>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Map from './map.vue';
const email = ref('')
function subscribe() {

}
</script>

<style lang="scss" scoped></style>