<template>
    <div class="max-w-full overflow-x-hidden px-2 lg:px-4 md:px-3 pt-10">
        <div v-for="item in categories" :key="item.category" class="mb-8">


            <h2 class="text-xl font-semibold mb-2 ms-1">{{ item.category }}</h2>


            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen">
                <div v-for="(product, index) in item.products" :key="index"
                    class="border shadow rounded-lg p-4 flex flex-col items-center justify-center text-center bg-white relative">

                    <span class="font-medium">{{ product.name }}</span>

                    <!-- Show 'More Info' only on small devices and toggle description -->
                    <button @click="toggleDesc(index)" class="text-blue-500 text-xs lg:hidden mt-2">
                        {{ showDesc === index ? $t('hide') : $t('more_info') }}
                    </button>

                    <!-- Description, visible on small devices if toggled or always on medium and up -->
                    <p v-if="showDesc === index || !isSmallOrMediumScreen"
                        class="text-sm text-gray-600 mt-2 transition-all lg:hidden ">
                        {{ product.desc }}
                    </p>
                    <p class="text-xs">
                        {{ $t('more_info') }}
                    </p>
                    <p class="hidden lg:block  md:hidden text-sm text-gray-600 mt-2 transition-all">
                        {{ product.desc }}
                    </p>
                    <div class="w-full flex justify-start invisible md:invisible lg:visible">
                        <p class="text-gray-500 text-right text-xs">
                            {{ $t('more_info') }}
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref,computed } from 'vue';
// Toggles the description for the clicked product
const showDesc = ref(null)
function toggleDesc(index) {
    showDesc.value = showDesc.value === index ? null : index;
}
const lang = localStorage.getItem('preferredLanguage') || 'en';

const isSmallOrMediumScreen = ref(window.innerWidth < 1024);

function updateScreenSize() {
    isSmallOrMediumScreen.value = window.innerWidth < 1024;
    console.log(isSmallOrMediumScreen.value)
}
const categories = ref({});
onMounted(async () => {
    window.addEventListener('resize', updateScreenSize())
    
    try {
        // Dynamically import the JSON file based on language
        const categoriesModule = await import(`@/lang/${lang}/categories.json`);
        categories.value = categoriesModule.default; // Access the imported JSON data
    } catch (error) {
        console.error('Error loading categories:', error);
    }
});
onUnmounted(()=>{
    window.removeEventListener('resize', updateScreenSize())
})
</script>

<style scoped></style>
