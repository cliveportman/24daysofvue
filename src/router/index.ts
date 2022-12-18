import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/routes/Index.vue'

// 24 Days (starting with the pilot)
import Noughts from '@/routes/noughts-crosses/Index.vue'
import GiftSearchBar from '@/routes/gift-search-bar/Index.vue'
import Jokes from '@/routes/jokes/Index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { layout: 'home' } },
    { path: '/noughts-crosses', name: 'noughtscrosses', component: Noughts },
    { path: '/gift-search-bar', name: 'gift-search-bar', component: GiftSearchBar },
    { path: '/jokes', name: 'jokes', component: Jokes },
  ],
})
