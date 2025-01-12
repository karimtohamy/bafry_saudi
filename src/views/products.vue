<template>
    <div class="max-w-full overflow-x-hidden px-2 lg:px-4 md:px-3 pt-10">
        <!-- Loop through categories -->
        <div v-for="(item, index) in categories" :key="item.category" class="mb-8">
            <div class="flex justify-center items-center hover:text-emerald-400 "@click="toggleCategory(item.category, index)">
                <!-- Category Title with Click -->
                <h2 class="text-xl font-semibold mb-2 text-center cursor-pointer transition-colors duration-300 "
                    >
                    {{ item.category }}
                </h2>
                <!-- Chevron Icon with Rotation -->
                <ChevronDownIcon class="size-6 mb-1 ms-3 transition-transform duration-300 ease-in-out hover:text-emerald-400"
                    :class="{'rotate-180': activeCategories.includes(item.category),'hidden':index == 0}" @click="toggleCategory(item.category, index)" />
            </div>

            <!-- Smooth Drawer Transition for Cards -->
            <transition name="drawer">
                <div v-show="activeCategories.includes(item.category)"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden transition-all duration-500 ease-in-out">
                    <!-- Products -->
                    <div v-for="(product, index) in item.products" :key="`${item.category}-${index}`" @click="toggleDesc(`${item.category}-${index}`)"
                        class="border shadow rounded-lg p-4 select-none flex flex-col items-center justify-center text-center bg-sec text-white relative transition-all ease-in ">
                        <!-- Product Name -->
                        <span class="font-medium select-none ">{{ product.name }}</span>

                        <!-- Toggle Description -->

                        <!-- Description Section for mobile -->
                        <transition name="drawer">
                            <span v-show="activeDesc === `${item.category}-${index}`"
                                class="text-sm text-white mt-2 lg:hidden transition-all duration-500 ease-in-out">
                                {{ product.desc }}
                                <p class="text-xs cursor-pointer text-emerald-500 hover:underline" @click="openModal(product)">
                                    {{ $t('more_info') }}
                                </p>
                            </span>
                        </transition>

                        <!-- Always-visible Description on Large Screens -->
                        <p class="hidden lg:block md:hidden text-sm text-white mt-2 ">
                            {{ product.desc }}
                        </p>

                        <!-- "More Info" Link for Large Screens -->
                        <div class="w-full lg:flex hidden justify-center ">
                            <p class="text-emerald-500 text-right text-xs cursor-pointer hover:underline"
                                @click="openModal(product)">
                                {{ $t('more_info') }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- Info Modal -->
        <InfoModal v-model="showModal" :title="selectedProduct?.name" :image="selectedProduct?.image" />
    </div>
</template>

<script setup>
import InfoModal from '@/components/ui/infoModal.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { onMounted, onUnmounted, ref } from 'vue';

const activeCategories = ref([]); // Track active categories
const activeDesc = ref(null);
const showModal = ref(false);
const selectedProduct = ref(null);
const isSmallOrMediumScreen = ref(window.innerWidth < 1024);
const categories = ref({});

// Toggle selected category, ensuring the first category is always active
function toggleCategory(category, index) {
    if (index === 0) {
        // Don't allow toggling the first category
        return;
    }

    if (activeCategories.value.includes(category)) {
        // Remove the category if it's already active
        activeCategories.value = activeCategories.value.filter((item) => item !== category);
    } else {
        // Add the category if it's not active
        activeCategories.value.push(category);
    }
}

// Toggle description visibility
function toggleDesc(id) {
    activeDesc.value = activeDesc.value === id ? null : id;
}

// Open modal
function openModal(product) {
    selectedProduct.value = product;
    showModal.value = true;
}

// Update screen size
function updateScreenSize() {
    isSmallOrMediumScreen.value = window.innerWidth < 1024;
}

// Load data based on language
const lang = localStorage.getItem('preferredLanguage') || 'en';

onMounted(async () => {
    window.addEventListener('resize', updateScreenSize);
    try {
        const categoriesModule = await import(`@/lang/${lang}/categories.json`);
        categories.value = categoriesModule.default;

        // Ensure the first category is always active
        const categoryKeys = Object.keys(categoriesModule.default);
        if (categoryKeys.length > 0) {
            activeCategories.value = [categoriesModule.default[0].category];
        }
    } catch (error) {
        console.error('Error loading categories:', error);
    }
});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
});
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
    transition: max-height 0.5s ease-in-out, opacity 0.4s ease-in-out;
    overflow: hidden;
}

.drawer-enter-from,
.drawer-leave-to {
    max-height: 0;
    opacity: 0;
}

.drawer-enter-to,
.drawer-leave-from {
    max-height: 500px;
    opacity: 1;
}
</style>
