import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaGeneros from '../views/ListaGeneros.vue'
import VistaGeneros from '../views/VistaGeneros.vue'
import ContactoView from '../views/ContactoView.vue'
import VerDatos from '../views/VerDatos.vue'

Vue.use(VueRouter) //Registra VueRouter como un plugin de Vue usando el método Vue.use(), lo que permite usar el sistema de rutas en la aplicación.

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/generos',
    name: 'generosList',
    component: ListaGeneros
  },
  {
    path: '/generos/:id',
    name: 'generos',
    component: VistaGeneros
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/ver',
    name: 'ver',
    component: VerDatos
  }
  
]

const router = new VueRouter({
  routes
})

export default router
