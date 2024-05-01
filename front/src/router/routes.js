const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage/IndexPage.vue'), meta: { requiresAuth: true } },
      { path: '/productos', component: () => import('pages/productos/ProductosPage.vue'), meta: { requiresAuth: true } },
      { path: '/sale', component: () => import('pages/sales/SalePage.vue'), meta: { requiresAuth: true } },
      { path: '/clientes', component: () => import('pages/clientes/ClientIndex.vue'), meta: { requiresAuth: true } },
      { path: '/provedores', component: () => import('pages/clientes/ProveedorIndex.vue'), meta: { requiresAuth: true } },
      { path: '/users', component: () => import('../pages/users/UsersIndex.vue'), meta: { requiresAuth: true } },
      { path: '/compra', component: () => import('../pages/compra/CompraPage.vue'), meta: { requiresAuth: true } },
      { path: '/compraHistory', component: () => import('../pages/compra/CompraHistoryPage.vue'), meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
