<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-img src="logo.png" style="width: 100px" />
          <span class="text-white text-subtitle1 text-bold q-pl-md">{{ rutaTitle }}</span>
        </q-toolbar-title>

<!--        <div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
    >
      <!--      :breakpoint="400"-->
      <q-layout>
        <q-header class="bg-white">
          <q-list bordered padding class="text-black">
            <div class="q-pl-md q-pb-xs" style="line-height: 0.5">

              <div>
                <div style="line-height: 1">
                  <b class="text-grey">Bienvenido:</b> <br>
                  <a class="text-caption text-primary">{{ $store.user?.name }}</a>
                </div>
              </div>
            </div>
            <div>
            </div>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/">
              <q-item-section avatar><q-icon name="o_store" /></q-item-section>
              <q-item-section>
                <q-item-label>
                  Movimientos
                  <q-tooltip anchor="top middle" self="bottom middle">
                    Movimientos de caja
                  </q-tooltip>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/sale">
              <q-item-section avatar><q-icon name="o_shopping_cart" /></q-item-section>
              <q-item-section>
                <q-item-label>
                  Venta
                  <q-tooltip anchor="top middle" self="bottom middle">
                    Venta de productos
                  </q-tooltip>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/compra">
              <q-item-section avatar><q-icon name="o_local_shipping" /></q-item-section>
              <q-item-section>
                <q-item-label>
                  Compras
                  <q-tooltip anchor="top middle" self="bottom middle">
                    Compra de productos
                  </q-tooltip>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/productos" >
              <q-item-section avatar><q-icon name="o_local_mall" /></q-item-section>
              <q-item-section>
                <q-item-label>Productos</q-item-label>
                <q-tooltip anchor="top middle" self="bottom middle">
                  Administrar productos
                </q-tooltip>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/clientes" >
              <q-item-section avatar><q-icon name="o_face" /></q-item-section>
              <q-item-section>
                <q-item-label>Cliente</q-item-label>
                <q-tooltip anchor="top middle" self="bottom middle">
                  Administrar clientes
                </q-tooltip>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/provedores" >
              <q-item-section avatar><q-icon name="o_assignment_ind" /></q-item-section>
              <q-item-section>
                <q-item-label>Provedor</q-item-label>
                <q-tooltip anchor="top middle" self="bottom middle">
                  Administrar provedores
                </q-tooltip>
              </q-item-section>
            </q-item>
<!--            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/proveedores" >-->
<!--              <q-item-section avatar><q-icon name="o_assignment_ind" /></q-item-section>-->
<!--              <q-item-section>-->
<!--                <q-item-label>Proveedores</q-item-label>-->
<!--                <q-tooltip anchor="top middle" self="bottom middle">-->
<!--                  Administrar proveedores-->
<!--                </q-tooltip>-->
<!--              </q-item-section>-->
<!--            </q-item>-->
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/reportes" >
              <q-item-section avatar><q-icon name="o_print" /></q-item-section>
              <q-item-section>
                <q-item-label>Reportes</q-item-label>
                <q-tooltip anchor="top middle" self="bottom middle">
                  Consultar reportes
                </q-tooltip>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/users" >
              <q-item-section avatar><q-icon name="o_manage_accounts" /></q-item-section>
              <q-item-section>
                <q-item-label>Usuarios</q-item-label>
                <q-tooltip anchor="top middle" self="bottom middle">
                  Administrar usuarios
                </q-tooltip>
              </q-item-section>
            </q-item>
          </q-list>
        </q-header>
        <q-footer class="bg-white">
          <q-list bordered padding dense class="rounded-borders text-red">
            <q-item clickable v-ripple @click="logout()">
              <q-item-section avatar>
                <q-icon name="o_logout" />
              </q-item-section>
              <q-item-section> Cerrar sesión</q-item-section>
            </q-item>
          </q-list>
        </q-footer>
      </q-layout>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    logout () {
      this.$q.dialog({
        title: 'Cerrar sesión',
        message: '¿Está seguro que desea cerrar sesión?',
        ok: {
          label: 'Si',
          color: 'negative',
          push: true
        },
        cancel: {
          label: 'No',
          color: 'primary',
          push: true
        }
      }).onOk(() => {
        this.$q.loading.show()
        this.$axios.post('logout')
          .then(() => {
            this.$store.user = {}
            this.$store.isLogin = false
            this.$router.push('/login')
          })
          .finally(() => {
            this.$q.loading.hide()
          })
      })
    }
  },
  computed: {
    rutaTitle () {
      // { path: '', component: () => import('pages/IndexPage/IndexPage.vue'), meta: { requiresAuth: true } },
      // { path: '/productos', component: () => import('pages/productos/ProductosPage.vue'), meta: { requiresAuth: true } },
      // { path: '/sale', component: () => import('pages/sales/SalePage.vue'), meta: { requiresAuth: true } },
      // { path: '/clientes', component: () => import('pages/clientes/ClientIndex.vue'), meta: { requiresAuth: true } },
      // { path: '/provedores', component: () => import('pages/clientes/ProveedorIndex.vue'), meta: { requiresAuth: true } },
      // { path: '/users', component: () => import('../pages/users/UsersIndex.vue'), meta: { requiresAuth: true } },
      // { path: '/compra', component: () => import('../pages/compra/CompraPage.vue'), meta: { requiresAuth: true } }
      const ruta = this.$route.path
      // return 'asa'
      switch (ruta) {
        case '/':
          return 'Movimientos'
        case '/productos':
          return 'Productos'
        case '/sale':
          return 'Venta'
        case '/clientes':
          return 'Clientes'
        case '/provedores':
          return 'Provedores'
        case '/users':
          return 'Usuarios'
        case '/compra':
          return 'Compras'
        case '/reportes':
          return 'Reportes'
        default:
          return 'Movimientos'
      }
    }
  }
}
</script>
