<template>
    <div class="h-full py-10 flex items-center justify-center px-10 ">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-full gap-8">
            <div v-for="tool in tools" :key="tool.id"
                class="shadow-lg rounded flex flex-col items-center justify-center p-5 bg-sec text-white hover:scale-110 transition-all">
                <img :src="tool.imgSrc" alt="">
                <p>{{ tool.name }}</p>
                <div class="text-center mt-1">

                    <p>{{ tool.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const tools_en = [
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

const tools_ar = [
    {
        id: "Dispensers",
        imgSrc: "https://bafry.de/img/dispenser.jpg",
        name: "موزعات",
        details: "موزع الصابون هو جهاز يقوم بصرف الصابون عند تفعيله بشكل مناسب. يمكن تشغيله يدويًا بواسطة مقبض أو تلقائيًا."
    },
    {
        id: "Foaming",
        imgSrc: "https://bafry.de/img/foam.jpg",
        name: "آلات الرغوة",
        details: "مصنوعة من الفولاذ المقاوم للصدأ من الداخل والخارج ومصنعة من قبل Kasselmann، ألمانيا."
    },
    {
        id: "Fogging",
        imgSrc: "https://bafry.de/img/fogging.png",
        name: "آلات الضباب",
        details: "يمكن لهذه المنتجات تطبيق مجموعة واسعة من المواد الكيميائية. الجهد القياسي - 110 فولت. متوفر بجهود كهربائية أخرى وبقوابس بنمط أوروبي عند الطلب. معتمد CE."
    },
    {
        id: "strips50",
        imgSrc: "https://bafry.de/img/acid.png",
        name: "اختبار HP",
        details: "شريط الاختبار هذا مخصص للتحديد السريع والموثوق لحمض البيرأسيتيك في المحاليل. يوفر الإجراء البسيط غمس وقراءة نتائج آمنة في غضون 30 ثانية."
    },
    {
        id: "strips100",
        imgSrc: "https://bafry.de/img/peroxid.png",
        name: "اختبار بيفري",
        details: "شريط الاختبار هذا مخصص للتحديد السريع والموثوق بيروكسيد الهيدروجين في المحاليل. يوفر الإجراء البسيط غمس وقراءة نتائج آمنة في غضون 30 ثانية."
    },
    {
        id: "quat",
        imgSrc: "https://bafry.de/img/quat.png",
        name: "اختبار الكوات",
details: "شريط الاختبار هذا مخصص للتحديد السريع والموثوق لمركبات الأمونيوم الرباعية  (QUAT) في المحاليل. يوفر الإجراء البسيط غمس وقراءة، نتيجة موثوقة خلال 15 ثانية."
    }
];

const currentLanguage = ref(locale.value);

watch(locale, (newLocale) => {
    currentLanguage.value = newLocale;
});

const tools = computed(() => currentLanguage.value === 'ar' ? tools_ar : tools_en);
</script>

<style scoped>
/* Add your styles here */
</style>
