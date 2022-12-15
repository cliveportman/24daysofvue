import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/routes/Index.vue'
import About from '@/routes/About/Index.vue'
import Ox from '@/routes/Ox/Index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { layout: 'home' } },
    { path: '/about', name: 'about', component: About },
    { path: '/ox', name: 'ox', component: Ox },
  ],
})
