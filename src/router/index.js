import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/LoginIndex.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '../layout/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
