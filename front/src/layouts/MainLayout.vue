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
        </q-toolbar-title>

<!--        <div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="220"
    >
      <!--      :breakpoint="400"-->
      <q-layout>
        <q-header class="bg-white">
          <q-list bordered padding class="text-black">
            <div class="q-pl-md q-pb-xs" style="line-height: 0.5">
<!--              <div class="text-bold text-subtitle1 ">-->
<!--                Rocaz-->
<!--              </div>-->
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
            <!--            <q-expansion-item expand-separator icon="o_engineering" label="Siat" >-->
            <!--              <q-expansion-item dense exact :header-inset-level="0.3" expand-separator icon="o_psychology" label="Cuis" default-opened to="/cuis" hide-expand-icon  />-->
            <!--              <q-expansion-item dense exact :header-inset-level="0.3" expand-separator icon="o_business_center" label="sincronizacion" default-opened to="/sincronizacion" hide-expand-icon  />-->
            <!--              <q-expansion-item dense exact :header-inset-level="0.3" expand-separator icon="link" label="Cufd" default-opened to="/cufd" hide-expand-icon  />-->
            <!--              <q-expansion-item dense exact :header-inset-level="0.3" expand-separator icon="list" label="Evento significativo" default-opened to="/eventoSignificativo" hide-expand-icon  />-->
            <!--            </q-expansion-item>-->
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
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/compras">
              <q-item-section avatar><q-icon name="o_storefront" /></q-item-section>
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
                <q-item-label>Clientes</q-item-label>
                <q-tooltip anchor="top middle" self="bottom middle">
                  Administrar clientes
                </q-tooltip>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/proveedores" >
              <q-item-section avatar><q-icon name="o_assignment_ind" /></q-item-section>
              <q-item-section>
                <q-item-label>Proveedores</q-item-label>
                <q-tooltip anchor="top middle" self="bottom middle">
                  Administrar proveedores
                </q-tooltip>
              </q-item-section>
            </q-item>
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
            <!--            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/unidades" >-->
            <!--              <q-item-section avatar><q-icon name="o_vaccines" /></q-item-section>-->
            <!--              <q-item-section>-->
            <!--                <q-item-label>Unidades</q-item-label>-->
            <!--                <q-tooltip anchor="top middle" self="bottom middle">-->
            <!--                  Administrar unidades-->
            <!--                </q-tooltip>-->
            <!--              </q-item-section>-->
            <!--            </q-item>-->
            <!--            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/agencias" >-->
            <!--              <q-item-section avatar><q-icon name="o_apartment" /></q-item-section>-->
            <!--              <q-item-section>-->
            <!--                <q-item-label>Agencias</q-item-label>-->
            <!--                <q-tooltip anchor="top middle" self="bottom middle">-->
            <!--                  Administrar agencias-->
            <!--                </q-tooltip>-->
            <!--              </q-item-section>-->
            <!--            </q-item>-->
            <!--            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/subcategorias" >-->
            <!--              <q-item-section avatar><q-icon name="o_category" /></q-item-section>-->
            <!--              <q-item-section>-->
            <!--                <q-item-label>Subcategorias</q-item-label>-->
            <!--                <q-tooltip anchor="top middle" self="bottom middle">-->
            <!--                  Administrar subcategorias-->
            <!--                </q-tooltip>-->
            <!--              </q-item-section>-->
            <!--            </q-item>-->
            <!--            <q-item clickable v-ripple exact active-class="bg-primary text-white" to="/productosPorVencer">-->
            <!--              <q-item-section avatar><q-icon name="o_warning" /></q-item-section>-->
            <!--              <q-item-section>-->
            <!--                <q-item-label>Productos por vencer</q-item-label>-->
            <!--                <q-tooltip anchor="top middle" self="bottom middle">-->
            <!--                  Productos por vencer-->
            <!--                </q-tooltip>-->
            <!--              </q-item-section>-->
            <!--            </q-item>-->
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
      leftDrawerOpen: true
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
        cancel: true,
        persistent: true
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
  }
}
</script>
