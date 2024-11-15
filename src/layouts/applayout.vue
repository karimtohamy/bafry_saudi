<template>
    <div class="h-full flex min-w-full">
        <!-- Sidebar -->
        <Sidebar :class="{ '-ms-[240px] transition-all': !sidebarOpen }" @toggle-sidebar="toggleSidebar" />
        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar" class="fixed z-10 w-full " />

            <main class="pt-12 bg-main" @click="handleClickOutside()">
                <router-view></router-view>
            </main>
            <Footer v-if="$route.name !== 'contact'" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from '@/components/ui/navbar/navbar.vue';
import Sidebar from '@/components/ui/sidebar/sidebar.vue';
import Footer from '@/components/footer.vue';
import { useRoute } from 'vue-router';

const sidebarOpen = ref(false);
const sidebar = ref(null); // Create a reference for the sidebar


// Toggle the sidebar state (open/close)
function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
}

// Handle clicks outside the sidebar to close it
const handleClickOutside = (event) => {
    if (sidebar.value && sidebarOpen) {
        sidebarOpen.value = false; // Close the sidebar if the click is outside
    }
};

// Add event listener when mounted

</script>

<style scoped>
* {
    scrollbar-width: thin;
    scrollbar-color: #397524 #ebebeb;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    height: 9px;
    width: 9px;
}

*::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: #ebebeb;
}

*::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #397524;
}

*::-webkit-scrollbar-thumb:hover {
    background-color: #62a34b;
}

*::-webkit-scrollbar-thumb:active {
    background-color: #62a34b;
}
</style>
