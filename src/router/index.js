import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CarsIndex from "../views/CarsIndex.vue"
import CarsShow from "../views/CarsShow.vue"
import CarsCreate from "../views/CarsCreate.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'CarsIndex',
    component: CarsIndex
  },
  {
    path: '/cars/new',
    name: 'CarsCreate',
    component: CarsCreate
  },
  {
    path: '/cars/:id',
    name: 'CarsShow',
    component: CarsShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
