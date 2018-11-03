import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import ManagementSystem from './views/ManagementSystem.vue'
import Client from './views/Client.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/manage',
      name: 'manage',
      component: ManagementSystem
    },
    {
      path: '/client',
      name: 'client',
      component: Client
    }
  ]
})
