<template>
	<div>
		<header class="fixed flex w-full items-center justify-center mb-40"
			:class="{ 'bg-slate-400 transition-all ease-out': scrolled }">

			<Navbar />
		</header>
		<main class="">
			<div class="min-h-[100vh]">

				<router-view></router-view>
			</div>

		</main>
	</div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import Navbar from './components/ui/navbar/navbar.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const navigation = [
	{ name: '', href: '', current: true },
	{ name: '', href: '', current: false },
	{ name: '', href: '', current: false },
	{ name: '', href: '', current: false },
]

// Define a reactive variable for tracking scroll state
const scrolled = ref(false);

const handleScroll = () => {
	scrolled.value = window.scrollY > 100; // Change 100 to the scroll value at which you want the color to apply
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>

</style>