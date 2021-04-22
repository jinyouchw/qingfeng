import {  RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/note',
      name: 'note',
      meta: { title: '笔记本卖场', auth: 'note' },
      component: import(/* webpackChunkName: "group-pro" */'../../views/Note/index.vue'),
      children:[]
    }
  ]

export default routes
  