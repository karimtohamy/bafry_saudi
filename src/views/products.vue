<template>
    <div class="max-w-full overflow-x-hidden px-2 lg:px-4 md:px-3 pt-10">
        <div v-for="item in categories" :key="item.category" class="mb-8">
            <h2 class="text-xl font-semibold mb-2 ms-1">{{ item.category }}</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen">
                <div v-for="(product, index) in item.products" :key="`${item.category}-${index}`"
                    class="border shadow rounded-lg p-4 flex flex-col items-center justify-center text-center bg-white relative">

                    <span class="font-medium">{{ product.name }}</span>

                    <!-- Toggle Description and Open Modal on 'More Info' Click -->
                    <button @click="toggleDesc(`${item.category}-${index}`)"
                        class="text-blue-500 text-xs lg:hidden mt-2">
                        {{ showDesc === `${item.category}-${index}` ? $t('hide') : $t('more_info') }}
                    </button>

                    <!-- Description and 'More Info' Link -->
                    <span v-if="showDesc === `${item.category}-${index}` || !isSmallOrMediumScreen"
                        class="text-sm text-gray-600 mt-2 transition-all lg:hidden">
                        {{ product.desc }}
                        <p class="text-xs cursor-pointer" @click="openModal(product)">
                            {{ $t('more_info') }}
                        </p>
                    </span>
                    <p class="hidden lg:block md:hidden text-sm text-gray-600 mt-2 transition-all">
                        {{ product.desc }}
                    </p>
                    <div class="w-full flex justify-start invisible md:invisible lg:visible">
                        <p class="text-gray-500 text-right text-xs cursor-pointer" @click="openModal(product)">
                            {{ $t('more_info') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pass selected product data to InfoModal -->
        <InfoModal v-model="showModal" :title="selectedProduct?.name" :image="selectedProduct?.image" />
    </div>
</template>

<script setup>
import InfoModal from '@/components/ui/infoModal.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const showDesc = ref(null);
const showModal = ref(false);
const selectedProduct = ref(null);

function toggleDesc(id) {
    showDesc.value = showDesc.value === id ? null : id;
}

function openModal(product) {
    selectedProduct.value = product;
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

const isSmallOrMediumScreen = ref(window.innerWidth < 1024);
function updateScreenSize() {
    isSmallOrMediumScreen.value = window.innerWidth < 1024;
}

const lang = localStorage.getItem('preferredLanguage') || 'en';
const categories = ref({});

onMounted(async () => {
    window.addEventListener('resize', updateScreenSize);

    try {
        const categoriesModule = await import(`@/lang/${lang}/categories.json`);
        categories.value = categoriesModule.default;
    } catch (error) {
        console.error('Error loading categories:', error);
    }
});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
});
</script>

<style scoped></style>
