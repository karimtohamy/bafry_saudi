<template>
	<div class="h-full flex">

		<Navbar />

		<main class="">
			<div class="min-h-[10vh]">
				<router-view></router-view>
			</div>

		</main>
	</div>
</template>

<script setup>
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

</script>


<style scoped></style>