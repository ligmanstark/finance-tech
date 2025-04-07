import { guard, guardAdmin } from '@/shared/utils.js'

const routes = [
  {
    path: import.meta.env.VITE_APP_ROUTE_HOMEPAGE,
    name: 'home',
    component: () => import('@/pages/index/index.vue'),
  },
  {
    path: import.meta.env.VITE_APP_ROUTE_LOGIN,
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: import.meta.env.VITE_APP_ROUTE_DAILY,
    name: 'daily',
    component: () => import('@/pages/daily/index.vue'),
    beforeEnter: (to, from, next) => guard(to, from, next),
  },
  {
    path: import.meta.env.VITE_APP_ROUTE_ADMIN_PANEL,
    name: 'admin-panel',
    component: () => import('@/pages/adminPanel/index.vue'),
    beforeEnter: (to, from, next) => guardAdmin(to, from, next),
  },
]

export default routes
