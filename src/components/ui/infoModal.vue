<template>
    <TransitionRoot appear :show="show" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10 ">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xxl h-full lg:max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 ">
                                {{ title }}
                            </DialogTitle>

                                <img :src="imageUrl" alt="" class="h-full mt-4">
                            <div class="mt-4">
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    {{ $t("close") }}
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';

const props = defineProps({
    title: String,
    modelValue: Boolean,
    image: String // Image basename with extension (e.g., 'product1.jpg')
});

const emit = defineEmits(['update:modelValue']);

const show = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});
const imageUrl = ref('')
const imageMap = {
    "dhs": () => import('@/assets/products/dhs.png'),
    "dqa": () => import('@/assets/products/dqa.png'),
    "AntiK": () => import('@/assets/products/AntiK.png'),
    "dcloud": () => import('@/assets/products/dcloud.png'),
    "dplus": () => import('@/assets/products/dplus.png'),
    "pdo": () => import('@/assets/products/pdo.png'),
    "pdl": () => import('@/assets/products/pdl.png'),
    "pdn": () => import('@/assets/products/pdn.png'),
    "pdp": () => import('@/assets/products/pdp.png'),
    "ssr": () => import('@/assets/products/ssr.png'),
    "smc": () => import('@/assets/products/smc.png'),
    "hand_saop": () => import('@/assets/products/hand_soap.png'),
    "AB_soap": () => import('@/assets/products/AB_soap.png'),
    "hand_gel": () => import('@/assets/products/hand_gel.png'),
    "hand_li": () => import('@/assets/products/hand_li.png'),
    "dt11": () => import('@/assets/products/dt11.png'),
    "dtc": () => import('@/assets/products/dtc.png'),
    "dtn": () => import('@/assets/products/dtn.png'),
    "n_foam": () => import('@/assets/products/n_foam.png'),
    "ac_foam": () => import('@/assets/products/ac_foam.png'),
    "ak_foam": () => import('@/assets/products/ak_foam.png')
};
watchEffect(() => {
    if (props.image && imageMap[props.image]) {
        imageMap[props.image]()
            .then((mod) => {
                imageUrl.value = mod.default; // URL of the dynamically imported image
            })
            .catch((error) => {
                console.error(`Error loading image for ${props.image}:`, error);
            });
    } else {
        imageUrl.value = null; // Reset if imageName does not match
    }
});

function closeModal() {
    show.value = false;
}
</script>
