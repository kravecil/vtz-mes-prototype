export default [
  { path: '/', redirect: '/orders' },
  { path: '/orders', component: () => import('@/pages/OrderList.vue') },
  { path: '/workshops', component: () => import('@/pages/WorkshopList.vue') },
  { path: '/warehouse', component: () => import('@/pages/WarehouseList.vue') },
  { path: '/invoices', component: () => import('@/pages/InvoiceList.vue') },
]