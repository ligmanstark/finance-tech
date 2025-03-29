import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('@/pages/index/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/auth/index.vue'),
    },
  ],
})

export default router
