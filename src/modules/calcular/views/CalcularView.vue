<template>
    <h3>Propiedades computasdas</h3>
    <input type="text"  v-model="valor">
    {{ valorCalculado }}
    <resultadoseccion v-if="mostrarElemento" :resultado="valorCalculado "></resultadoseccion>
    <div v-else-if="isNaN(valor)">Debe ser un numero para poder calcular</div>
    <div v-else >Aqui no ve muestra nada</div>
</template>

<!-- a*3*5= a*15 -->
<script setup>
import {ref, computed} from 'vue';
import resultadoseccion from '../components/ResultadoSeccion.vue';
const valor = ref('');
const valorCalculado = computed(()=>{
    return valor.value * 3
})

const mostrarElemento = computed(()=>{
    return valor.value >= 10;
});
</script>

<style scoped>
</style>