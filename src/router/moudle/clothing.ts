import {  RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/clothing',
      name: 'clothing',
      meta: { title: '服装大甩卖', auth: 'clothing' },
      component: import(/* webpackChunkName: "group-pro" */'../../views/Clothing/index.vue'),
      children:[]
    }
  ]

export default routes
  