export default [
  { path: '/', redirect: '/statistics' },
  { path: '/statistics', component: () => import('@/pages/Statistics.vue') },
  { path: '/warehouse', component: () => import('@/pages/Warehouse.vue') },
  { path: '/manufacturing', component: () => import('@/pages/Manufacturing.vue') },
]