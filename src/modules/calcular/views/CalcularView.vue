<template>
    <h3>Propiedades computasdas</h3>
    <input type="text"  v-model="valor">
    {{ valorCalculado }}
    <resultadoseccion :resultado="valorCalculado * 5"></resultadoseccion>
</template>

<script setup>
import {ref, computed} from 'vue';
import resultadoseccion from '../components/resultadoseccion.vue';
const valor = ref('');
const valorCalculado = computed(()=>{
    return valor.value * 2
})
</script>

<style scoped>
</style>