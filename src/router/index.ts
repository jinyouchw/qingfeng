import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/modules/user'
import BaseHeader from '../layout/BaseHeader.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Base',
    redirect: '/home',
    component: BaseHeader,
    children:[
      {
        path: '/home',
				name: 'home',
				meta: { title: '首页' },
        component:() => import(/* webpackChunkName: "group-pro" */'../views/Home/index.vue')
      },
      {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component:() => import(/* webpackChunkName: "group-pro" */'../views/Login/index.vue')
      }
    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
