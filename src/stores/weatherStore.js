import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useWhatherStore = defineStore('weather',()=> {
    const temperatura = ref(0);
    const setTemperatura = (temp) => { //cambia o altera temperatura
        temperatura.value = temp;
    }
    return {temperatura, setTemperatura};
});