<template>
    <div class="max-w-full overflow-x-hidden px-2 lg:px-4 md:px-3 pt-10">
        <div v-for="item in categories" :key="item.category" class="mb-8">
            <h2 class="text-xl font-semibold mb-2 ms-1">{{ item.category }}</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen">
                <div v-for="(product, index) in item.products" :key="index"
                    class="border shadow rounded-lg p-4 flex flex-col items-center justify-center text-center bg-white relative">

                    <span class="font-medium">{{ product.name }}</span>

                    <!-- Toggle Description and Open Modal on 'More Info' Click -->
                    <button @click="toggleDesc(index)" class="text-blue-500 text-xs lg:hidden mt-2">
                        {{ showDesc === index ? $t('hide') : $t('more_info') }}
                    </button>

                    <!-- Description and 'More Info' Link -->
                    <span v-if="showDesc === index || !isSmallOrMediumScreen"
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
    </div>

    <!-- Info Modal -->
    <InfoModal v-model="showModal" :title="selectedProduct?.name" :image="selectedProduct?.image"/>
</template>

<script setup>
import InfoModal from '@/components/ui/infoModal.vue';
import { onMounted, onUnmounted, ref } from 'vue';

// Reactive variables for toggling descriptions
const showDesc = ref(null);
function toggleDesc(index) {
    showDesc.value = showDesc.value === index ? null : index;
}

// Screen size reactive state
const isSmallOrMediumScreen = ref(window.innerWidth < 1024);
function updateScreenSize() {
    isSmallOrMediumScreen.value = window.innerWidth < 1024;
}

// Load categories from a JSON file based on language preference
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

// Modal state and selected product data
const showModal = ref(false);


const selectedProduct = ref(null);

function openModal(product) {
    selectedProduct.value = product;
    showModal.value = true;
    console.log(selectedProduct.value);

}

function closeModal() {
    isInfoModalOpen.value = false;
}
</script>

<style scoped></style>
