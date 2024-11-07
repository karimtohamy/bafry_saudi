<template>
    <div class="max-w-full overflow-x-hidden px-2 lg:px-4 md:px-3 mt-4">
        <div v-for="item in categories" :key="item.category" class="mb-8">


            <h2 class="text-xl font-semibold mb-2 ms-1">{{ item.category }}</h2>


            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen">
                <div v-for="(product, index) in item.products" :key="index"
                    class="border shadow rounded-lg p-4 flex flex-col items-center justify-center text-center bg-white relative">
                    <span class="font-medium">{{ product.name }}</span>
                    <p class="text-sm text-gray-600 mt-2 hidden md:block">{{ product.desc }}</p>
                    <span v-if="product.label"
                        class="absolute bottom-2 right-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        {{ product.label }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const categories = ref({});
onMounted(async () => {
    // Get the language from localStorage or set default to 'en'
    const lang = localStorage.getItem('preferredLanguage') || 'en';

    try {
        // Dynamically import the JSON file based on language
        const categoriesModule = await import(`@/lang/${lang}/categories.json`);
        categories.value = categoriesModule.default; // Access the imported JSON data
    } catch (error) {
        console.error('Error loading categories:', error);
    }
});

</script>

<style scoped></style>
