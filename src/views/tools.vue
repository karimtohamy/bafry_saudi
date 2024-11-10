<template>
    <div class="h-full my-10 flex items-center justify-center px-10 ">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-full gap-8">
            <div v-for="tool in tools"
                class="shadow-lg rounded flex flex-col items-center justify-center p-5 bg-sec text-white hover:scale-110 transition-all">
                <img :src="tool.imgSrc" alt="">
                {{ tool.name }}
                {{ tool.details }}
            </div>
        </div>
    </div>
</template>

<script setup>
const tools = [
    {
        id: "Dispensers",
        imgSrc: "https://bafry.de/img/dispenser.jpg",
        name: "Dispensers",
        details: "A soap dispenser is a device that, when manipulated or triggered appropriately, dispenses soap. It can be manually operated by means of a handle, or can be automatic."
    },
    {
        id: "Foaming",
        imgSrc: "https://bafry.de/img/foam.jpg",
        name: "Foaming machines",
        details: "Made from stainless-steel inside and outside and manufactured by Kasselmann, Germany processed."
    },
    {
        id: "Fogging",
        imgSrc: "https://bafry.de/img/fogging.png",
        name: "Fogging machines",
        details: "These products can apply a wide variety of chemicals. Standard Voltage - 110AC. Available in other electrical voltages and with European-style plugs on request. CE approved."
    },
    {
        id: "strips50",
        imgSrc: "https://bafry.de/img/acid.png",
        name: "HP test",
        details: "This test strip is for the fast and reliable determination of peracetic acid in solutions. The easy dip-and-read procedure provides safe results within 30 seconds."
    },
    {
        id: "strips100",
        imgSrc: "https://bafry.de/img/peroxid.png",
        name: "Bafry test",
        details: "This test strip is for the fast and reliable determination of peracetic acid in solutions. The easy dip-and-read procedure provides safe results within 30 seconds."
    },
    {
        id: "quat",
        imgSrc: "https://bafry.de/img/quat.png",
        name: "Quat test",
        details: "These test strips are for the rapid and reliable determination of quaternary ammonium compounds (QUAT) in solutions. The easy dip-and-read procedure provides a reliable result within 15 seconds."
    }
];

</script>

<style lang="scss" scoped>


</style>