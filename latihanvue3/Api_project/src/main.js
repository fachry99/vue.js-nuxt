import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/homePage.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/loginPage.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/userPage.vue')
    },
    {
      path: '/user/:name',
      component: () => import('@/views/userDetailPage.vue')
    }
  ],
  history: createWebHashHistory()
})
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
