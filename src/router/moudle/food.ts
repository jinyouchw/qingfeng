import {  RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/food',
      name: 'food',
      meta: { title: '美食专栏', auth: 'food' },
      component: import(/* webpackChunkName: "group-pro" */'../../views/Food/index.vue'),
      children:[]
    }
  ]

export default routes
  