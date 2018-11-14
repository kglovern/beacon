import Vue from 'vue'
import Router from 'vue-router'
import ProjectsPage from './views/ProjectsPage.vue'
import LoginPage from './views/LoginPage.vue'
import ManagementSystem from './views/ManagementSystem.vue'
import Client from './views/Client.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/',
      name: 'login',
      component: LoginPage
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
