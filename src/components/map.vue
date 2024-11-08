<template>
    <div id="map"></div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
 const zoom = ref(window.outerWidth <=768 ? 10 : 13)
onMounted(() => {
    // Initialize the map
    const map = L.map('map').setView([24.683642, 46.6909083], zoom.value); 

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Add a static marker
    const marker = L.marker([24.683642, 46.6909083]).addTo(map)
        .bindPopup('Olaya St، برج التاريم،, Riyadh Saudi Arabia')
        .openPopup();
});
</script>

<style>
/* Add custom height to your map container */
#map {
aspect-ratio: 1/1;
z-index: 1;
}

</style>
