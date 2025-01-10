<template>
  <div
    class="relative flex items-center justify-center h-[96vh] text-center bg-cover bg-center transition-all duration-1000"
    :style="`background-image: url(${slides[currentSlide].image})`">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <!-- Slide Content -->
    <div class="relative text-white">
      <img :src="logo" alt="Company logo"
        class="h-60 mx-auto absolute -top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <p class="text-lg mb-7 md:text-xl text-center w-full md:w-1/2 mx-auto px-4">
        {{ $t('home_p') }}
      </p>
      <router-link :to="{ name: 'products' }" class="mt-6 px-6 py-2 bg-emerald-500/35 text-white rounded-md shadow-lg">
        {{ $t('our') }}
      </router-link>
    </div>

    <!-- Slide navigation -->
    <div class="absolute bottom-4 flex space-x-2">
      <span v-for="(slide, index) in slides" :key="index" class="w-3 h-3 rounded-full mx-1 cursor-pointer"
        :class="{ 'bg-white': currentSlide === index, 'bg-gray-500': currentSlide !== index }"
        @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/images/Logo.png'; // Import logo image for direct use
import image1 from '@/assets/images/iStock-939983060.jpg'; // Import images directly
import image2 from '@/assets/images/iStock-1293325404.jpg';

const slides = ref([
  {
    image: image2,
    title: 'Welcome to Our Platform',
    description:
      'A German Saudi Arabian company leading and specializing in hygiene solutions and disinfectants. With commitment to cleanliness, safety, and innovation, we provide high-quality products designed to protect both personal and public health. Our range of advanced disinfectants and hygiene solutions are formulated to meet the highest industry standards, ensuring effective protection against harmful bacteria, viruses, and germs.',
    buttonText: 'Explore Now',
  },
  {
    image: image1,
    title: 'Stay Connected',
    description:
      'We are a Saudi Arabian company dedicated to environmental solutions, with a mission to create a microbe-free world and elevate environmental health standards. Our vision extends across diverse application fields, aiming to tackle environmental challenges with tailored solutions. We offer an extensive range of products designed to address the unique needs of your applications, making a lasting impact for a cleaner, safer environment.',
    buttonText: 'Explore Now',
  },
]);

const currentSlide = ref(0);
let sliderInterval;

// Function to preload the next image
const preloadNextImage = () => {
  const nextSlideIndex = (currentSlide.value + 1) % slides.value.length;
  const img = new Image();
  img.src = slides.value[nextSlideIndex].image;
};

// Function to change slides
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  preloadNextImage(); // Preload the next slide's image
};

// Start the slider when component is mounted
onMounted(() => {
  sliderInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
  preloadNextImage(); // Preload the first "next" image when mounted
});

// Clear the interval when component is unmounted
onUnmounted(() => {
  clearInterval(sliderInterval);
});

// Manual navigation function
const goToSlide = (index) => {
  currentSlide.value = index;
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 5000);
  preloadNextImage(); // Preload the next slide after manual navigation
};
</script>

<style scoped>
/* Additional styling if necessary */
</style>
