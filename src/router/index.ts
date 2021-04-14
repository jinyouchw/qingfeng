import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
