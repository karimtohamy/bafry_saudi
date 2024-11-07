<template>
    <div class="h-full flex min-w-full">
        <Sidebar class="lg:hidden" :class="{ '-ms-[250px] transition-all': !sidebarOpen }" @toggle-sidebar="toggleSidebar" />
        <div class="flex-1 ">
            <Navbar @toggle-sidebar="toggleSidebar" class="fixed z-10 w-full" />


            <main>
                <router-view></router-view>
            </main>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import Navbar from '@/components/ui/navbar/navbar.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from '@/components/ui/sidebar/sidebar.vue';
import Footer from '@/components/footer.vue';
import { useRoute } from 'vue-router';

const sidebarOpen = ref(window.outerWidth <= 768)
onMounted(()=>{
    window.addEventListener('resize',()=>{
        sidebarOpen.value == window.outerWidth >= 768
        console.log('true val:',sidebarOpen.value);
        console.log('reverse val:' , !sidebarOpen.value);
        
    })
})
const route = useRoute();
function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
}
// Define a reactive variable for tracking scroll state

</script>


<style scoped>
* {
  scrollbar-width: thin;
  scrollbar-color: #397524 #EBEBEB;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
    height: 9px;
    width: 9px;
}

*::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: #EBEBEB;
}

*::-webkit-scrollbar-track:hover {
    background-color: #FF0000;
}

*::-webkit-scrollbar-track:active {
    background-color: #C2C2C2;
}

*::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #397524;
}

*::-webkit-scrollbar-thumb:hover {
    background-color: #62A34B;
}

*::-webkit-scrollbar-thumb:active {
    background-color: #62A34B;
}
</style>