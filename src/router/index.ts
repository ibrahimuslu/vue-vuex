import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Default from '@/views/layouts/default.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/login/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/pages/register/index.vue')
  },
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '/',
        name: 'Post',
        component: () => import('@/views/pages/post/index.vue'),
        meta: {
          authorize: []
        }
      },
      {
        path: '/comment',
        name: 'Comment',
        component: () => import('@/views/pages/comment/index.vue'),
        meta: {
          authorize: []
        }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router