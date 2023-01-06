import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/routes/Index.vue'

// 24 Days (starting with the pilot)
import Noughts from '@/routes/noughts-crosses/Index.vue'
import GiftSearchBar from '@/routes/gift-search-bar/Index.vue'
import Jokes from '@/routes/jokes/Index.vue'
import Countdown from '@/routes/countdown/Index.vue'

export const routes = [
  { path: '/', name: '', component: Home, meta: { layout: 'home' } },
  { path: '/noughts-crosses', name: 'Noughts & Crosses', component: Noughts },
  { path: '/gift-search-bar', name: 'Gift Search Bar', component: GiftSearchBar },
  { path: '/jokes', name: 'Jokes', component: Jokes },
  { path: '/countdown', name: 'Countdown', component: Countdown },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
