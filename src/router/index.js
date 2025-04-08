import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/contador',//router link del sidebar, significa lo mismo 
      //que en name pero este le cambiaron el formato para que se diferencie del otro
      name: 'Contador',//archivo de components

      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',//router link del sidebar, significa lo mismo 
      //que en name pero este le cambiaron el formato para que se diferencie del otro
      name: 'ListaDeTareas',//archivo de components

      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/registrar',//router link del sidebar, significa lo mismo 
      //que en name pero este le cambiaron el formato para que se diferencie del otro
      name: 'registrar',//archivo de components

      component: () => import('../modules/registro/views/Registrarview.vue'),
    }
  ],
})

export default router
