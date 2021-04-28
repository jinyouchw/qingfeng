import {  RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/book',
      name: 'book',
      meta: { title: '图书卖场', auth: 'book' },
      component: import(/* webpackChunkName: "group-pro" */'../../views/Book/index.vue'),
      children:[]
    }
  ]

export default routes
  