<template>
<h3>La temperatura es {{ weatherStore.temperatura }}°</h3>
</template>

<script setup>
import {useWeather} from '../Composables/useWeather';
import { onMounted } from 'vue';
import { useWhatherStore } from  '../stores/weatherStore';

const weatherStore = useWhatherStore();

onMounted(()=>{
    useWeather();
})
</script>

<style scoped>
</style>