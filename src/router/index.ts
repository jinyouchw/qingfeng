import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import User from '../store/modules/user'
import BaseHeader from '../layout/BaseHeader.vue'
import Phone from './moudle/phone'
import Book from './moudle/book'
import Food from './moudle/food'
import Jiaju from './moudle/jiaju'
import Note from './moudle/note'
import Clothing from './moudle/clothing'

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
				meta: { title: '首页', auth: "all" },
        component:() => import(/* webpackChunkName: "group-pro" */'../views/Home/index.vue')
      },
      ...Phone,
      ...Book,
      ...Food,
      ...Jiaju,
      ...Note,
      ...Clothing,
      {
        path: '/login',
        name: 'login',
        meta: { title: '登录', noLogin: true },
        component:() => import(/* webpackChunkName: "group-pro" */'../views/Login/index.vue')
      },
      {
        path: '/noAuth',
        name: 'noAuth',
        meta: { title: '无权限', noLogin: true },
        component:() => import(/* webpackChunkName: "group-pro" */'../views/NoAuth/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.noLogin) {
    return next()
  }

  // 判断用户是否登录
  if(!User.state.userInfo.name) { //如果用户未登录
    return next('/login')
  } 

  // 判断用户权限
  if(User.state.userInfo.auth === to.meta.auth || to.meta.auth === 'all' || User.state.userInfo.auth === 'all') {
    next()
  }else{
    next('/noAuth')
  }
})


export default router
