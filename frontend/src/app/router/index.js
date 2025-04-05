import { createRouter, createWebHistory } from 'vue-router'

const isAuth = () => {
  return !!localStorage.getItem('user')
}

const guard = (to, from, next) => {
  if (isAuth()) {
    next()
  } else {
    next('/login')
  }
}

const guardAdmin = (to, from, next) => {
  if (JSON.parse(isAuth()).role === 'admin') {
    next()
  } else {
    return null
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('@/pages/index/index.vue'),
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('@/pages/daily/index.vue'),
      beforeEnter: (to, from, next) => guard(to, from, next),
    },
    {
      path: '/admin-panel',
      name: 'admin-panel',
      component: () => import('@/pages/adminPanel/index.vue'),
      beforeEnter: (to, from, next) => guardAdmin(to, from, next),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/index.vue'),
    },
  ],
})

export default router
