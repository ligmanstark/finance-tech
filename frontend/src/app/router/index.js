import { createRouter, createWebHistory } from 'vue-router'

const isAuth = () => {
  return !!localStorage.getItem('auth')
}

const guard = (to, from, next) => {
  if (isAuth()) {
    next()
  } else {
    next('/login')
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('@/pages/index/index.vue'),
      beforeEnter: (to, from, next) => guard(to, from, next),
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('@/pages/daily/index.vue'),
      beforeEnter: (to, from, next) => guard(to, from, next),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/auth/index.vue'),
    },
  ],
})

export default router
