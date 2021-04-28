import {  RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/jiaju',
      name: 'jiaju',
      meta: { title: '家居市场', auth: 'jiaju' },
      component: import(/* webpackChunkName: "group-pro" */'../../views/Jiaju/index.vue'),
      children:[]
    }
  ]

export default routes
  