import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'dashboard',
    component: DashboardLayout,
    children:[
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('../pages/Admin.vue')
      },
      {
        path: '/posts',
        name: 'Посты',
        component: () => import('../pages/Posts.vue')
      },
      {
        path: '/users',
        name: 'Пользователи',
        component: () => import('../pages/Users.vue')
      },
      {
        path: '/test',
        name: 'Тест',
        component: () => import('../pages/Test.vue')
      },
      {
        path: '/info',
        name: 'Тест',
        component: () => import('../pages/Info.vue')
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
