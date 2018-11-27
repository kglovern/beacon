import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects.vue'
import LoginPage from './views/LoginPage.vue'
import ManagementSystem from './views/ManagementSystem.vue'
import Client from './views/Client.vue'
import Library from '@/views/Library.vue'
import CreateProject from '@/components/ProjectListing/CreateProject.vue'
import ProjectListings from '@/components/ProjectListing/ProjectListings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/projects',
    name: 'projects',
    component: Projects,
    children: [{
      path: 'create',
      component: CreateProject
    },
    {
      path: '/',
      component: ProjectListings
    }]
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
  },
  {
    path: '/library',
    name: 'library',
    component: Library
  }
  ]
})
