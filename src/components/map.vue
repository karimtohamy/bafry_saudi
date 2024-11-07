<template>
    <div id="map"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {
    // Initialize the map
    const map = L.map('map').setView([24.683642, 46.6909083], 10); 

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Add a static marker
    const marker = L.marker([24.683642, 46.6909083]).addTo(map)
        .bindPopup('')
        .openPopup();
});
</script>

<style>
/* Add custom height to your map container */
#map {
    height: 20rem;
    
}
</style>
