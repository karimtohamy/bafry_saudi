<template>
    <div id="map"></div>
</template>

<script setup>
import { onMounted, watch, ref, defineProps } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const props = defineProps({
    lat: Number,
    long: Number,
    add: String
});

// Store the initial map instance and marker
let mapInstance = null;
let marker = null;

const zoom = ref(window.outerWidth <= 768 ? 10 : 13);

// Initialize the map when the component is mounted
onMounted(() => {
    // Initialize the map and set default view
    mapInstance = L.map('map').setView([props.lat, props.long], zoom.value);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mapInstance);

    // Add the marker with the default position and popup
    marker = L.marker([props.lat, props.long]).addTo(mapInstance)
        .bindPopup(props.add)
        .openPopup();
});

// Watch for prop changes and update the map accordingly
watch(
    () => props.lat,
    (newLat) => {
        if (mapInstance && marker) {
            mapInstance.setView([newLat, props.long], zoom.value); // Update map center
            marker.setLatLng([newLat, props.long]); // Update marker position
            marker.setPopupContent(props.add); // Update marker popup content
        }
    }
);

watch(
    () => props.long,
    (newLong) => {
        if (mapInstance && marker) {
            mapInstance.setView([props.lat, newLong], zoom.value); // Update map center
            marker.setLatLng([props.lat, newLong]); // Update marker position
            marker.setPopupContent(props.add); // Update marker popup content
        }
    }
);

watch(
    () => props.add,
    (newAdd) => {
        if (marker) {
            marker.setPopupContent(newAdd); // Update the marker's popup content
        }
    }
);
</script>

<style>
#map {
    aspect-ratio: 1/1;
    z-index: 1;

}
</style>
