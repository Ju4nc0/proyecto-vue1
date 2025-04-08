<template>
    <div class="sidebar">
    <h2>Bienbenido</h2>
    <h3> Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
        <li> <router-link to="/contador">Contador</router-link></li>
        <li> <router-link to="/lista-de-tareas">Lista De Tareas</router-link></li>
        <li> <router-link to="/registrar">Registrar</router-link></li>
        <li> <router-link to="/calcular">Calcular</router-link></li>
    </ul>

    </div>

</template>

<script setup>
//todo este code  importa code de registarstore para extraer el nombre
// y correo al registrar, los convierte en un valor que se puede usar en 
//el sidebar y usa el watch para convertirlo en un mensaje que se 
//pueda utilizar arriba en el template como un mensaje
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import {ref, watch} from 'vue';
const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);
watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue
})
watch(() => registrarStore.email, (newValue) =>{
    email.value = newValue
})
</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>