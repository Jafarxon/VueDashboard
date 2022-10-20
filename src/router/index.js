import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardLayout,
    children:[
      {
        path: '/posts',
        name: 'Посты',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Posts.vue')
      },
      {
        path: '/users',
        name: 'Пользователи',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Users.vue')
      },
      {
        path: '/test',
        name: 'Тест',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Test.vue')
      },
      {
        path: '/info',
        name: 'Тест',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Info.vue')
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
