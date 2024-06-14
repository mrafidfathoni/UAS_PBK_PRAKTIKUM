// router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'

// Mendefinisikan rute-rute
const routes = [
  { path: '/', component: Home },
  { path: '/task', component: Task }
]

// Membuat dan mengkonfigurasi instance router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Mengekspor instance router
export default router
