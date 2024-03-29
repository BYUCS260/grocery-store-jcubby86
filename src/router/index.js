import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import CartView from '../views/CartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/browse',
    name: 'BrowseView',
    component: BrowseView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
