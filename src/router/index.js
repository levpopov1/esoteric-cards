import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'
import Decklist from '../views/Decklist.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/playing-cards/:category',
    name: 'Decklist',
    component: Decklist
  }
]

const router = new VueRouter({
  routes
})

export default router
