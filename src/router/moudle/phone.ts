import {  RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/phone',
      name: 'phone',
      meta: { title: '手机卖场', auth: 'phone' },
      component: import(/* webpackChunkName: "group-pro" */'../../views/Phone/index.vue'),
      children:[]
    }
  ]

export default routes
  