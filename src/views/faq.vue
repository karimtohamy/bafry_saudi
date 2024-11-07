<template>
   <div class="max-w-4xl lg:mx-auto md:mx-auto mx-3 py-8">
      <h1 class="text-3xl font-bold text-center mb-8">FAQs</h1>
      <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
         <div
            class="flex justify-between items-center bg-gray-100 p-5 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
            @click="toggleFAQ(index)">
            <h2 class="text-lg font-semibold text-gray-800">{{ faq.question }}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-200"
               :class="activeIndex === index ? 'transform rotate-180' : 'transform rotate-0'" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
         </div>
         <transition enter-active-class="transition-opacity duration-400 ease"
            leave-active-class="transition-opacity duration-400 ease" enter-from-class="opacity-0"
            leave-to-class="opacity-0" mode="out-in">
            <div class="mt-3 bg-white p-4 rounded-lg shadow" v-if="activeIndex === index">
               <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
         </transition>

      </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const faqs = ref([]);

// Active index to toggle FAQ answers
const activeIndex = ref(null);

// Access the current locale from vue-i18n
const { locale } = useI18n();
const route = useRoute();

onMounted(async () => {
   // Get the current language (from the route params or i18n locale)
   const lang = route.params.lang || locale.value || 'en';
   
   try {
      // Dynamically import the JSON file based on language
      const categoriesModule = await import(`@/lang/${lang}/faq.json`);
      faqs.value = categoriesModule.default; // Access the imported JSON data
   } catch (error) {
      console.error('Error loading categories:', error);
   }
});

// Function to toggle FAQ answer visibility
const toggleFAQ = (index) => {
   activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Add any additional scoped styles here if necessary */
</style>
