import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/datgui',
      name: 'datgui',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../three-components/module2/Module2.vue')
    },
    {
      path: '/cube',
      name: 'cube',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../three-components/module1/Module1.vue')
    },
    {
      path: '/light',
      name: 'light',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../three-components/module3/Module3.vue')
    },
    {
      path: '/texture',
      name: 'texture',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../three-components/module4/Module4.vue')
    },
    {
      path: '/selection',
      name: 'selection',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../three-components/module5/Module5.vue')
    },
    {
      path: '/polygon',
      name: 'polygon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../three-components/module6/Module6.vue')
    },
    {
      path: '/solar',
      name: 'solar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/solar/Solar.vue')
    }
  ]
})

export default router
