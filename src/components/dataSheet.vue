<template>
    <div>
        <img :src="imageUrl" alt="">
    </div>
</template>

<script setup>
const props = defineProps({
    image:String
})

// Assuming images are located in '@/assets/products/'
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
const imageUrl = ref('')

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
</script>

<style lang="scss" scoped>


</style>