<template>
    <div class="max-w-full overflow-x-hidden mx-auto px-4 mt-4">
        <div v-for="item in categories" :key="item.category" class="mb-8">
            <h2 class="text-xl font-semibold mb-2">{{ item.category }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <router-link v-for="(product, index) in item.products" :key="index"
                    :to="{ name: 'product', params: { slug: product.slug } }"
                    class="border shadow rounded-lg p-4 flex flex-col items-center justify-center text-center bg-white relative">
                    <span class="font-medium">{{ product.name }}</span>
                    <p class="text-sm text-gray-600 mt-2 hidden md:block">{{ product.desc }}</p>
                    <span v-if="product.label"
                        class="absolute bottom-2 right-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        {{ product.label }}
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import categories from '@/assets/data/categories.json';
</script>

<style scoped></style>
