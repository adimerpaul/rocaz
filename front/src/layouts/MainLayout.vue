<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <q-header class="main-header" elevated>
      <q-toolbar class="toolbar-shell">
        <div class="row items-center no-wrap">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            class="header-menu-btn"
            @click="toggleLeftDrawer"
          />
          <div class="brand-block q-ml-md">
            <q-avatar rounded size="52px" class="brand-avatar">
              <q-img src="logo.png" fit="contain" />
            </q-avatar>
            <div class="brand-copy">
              <q-chip dense square class="brand-chip" text-color="white">
                {{ branchLabel }}
              </q-chip>
              <div class="brand-title">{{ rutaTitle }}</div>
            </div>
          </div>
        </div>

        <q-space />

        <div class="toolbar-user row items-center no-wrap">
          <q-btn
            flat
            dense
            round
            icon="notifications"
            aria-label="Notificaciones"
            class="header-icon-btn q-mr-xs"
          >
            <q-badge v-if="unreadNotifications > 0" color="red" floating rounded>
              {{ unreadNotifications }}
            </q-badge>
            <q-menu anchor="bottom right" self="top right" @show="handleNotificationsOpen">
              <q-list class="notification-list">
                <q-item-label header class="text-weight-bold">
                  Notificaciones
                </q-item-label>
                <q-item v-if="notifications.length === 0">
                  <q-item-section>
                    <q-item-label>No hay notificaciones nuevas</q-item-label>
                    <q-item-label caption>Solo se muestran compras del ultimo dia</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-for="item in notifications" :key="item.id" clickable>
                  <q-item-section avatar>
                    <q-avatar size="34px" class="notification-avatar">
                      <q-icon name="o_local_shipping" size="18px" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-medium">{{ item.title }}</q-item-label>
                    <q-item-label caption>{{ item.message }}</q-item-label>
                    <q-item-label caption class="text-grey-7">
                      {{ notificationDate(item.created_at) }}
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side v-if="!item.read_at">
                    <q-badge rounded color="red" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <div class="toolbar-user-copy text-right gt-xs">
            <div class="toolbar-user-name">{{ $store.user?.name || 'Usuario' }}</div>
            <div class="toolbar-user-role">{{ userRoleLabel }}</div>
          </div>
          <q-avatar size="44px" class="toolbar-user-avatar">
            {{ userInitials }}
          </q-avatar>
          <q-btn
            unelevated
            no-caps
            icon="o_logout"
            label="Salir"
            aria-label="Salir"
            class="logout-btn q-ml-sm"
            @click="logout"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="205"
      bordered
      class="main-drawer"
    >
      <div class="drawer-shell column no-wrap fit">
        <div class="drawer-top">
          <div class="drawer-user-card">
            <div class="row items-center no-wrap">
              <q-avatar size="62px" class="drawer-user-avatar">
                {{ userInitials }}
              </q-avatar>
              <div class="q-ml-md">
                <div class="drawer-greeting">Bienvenido</div>
                <div class="drawer-user-name">{{ $store.user?.name || 'Usuario' }}</div>
                <q-chip
                  dense
                  class="drawer-role-chip"
                  text-color="white"
                  :label="userRoleLabel"
                  icon="o_verified_user"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="drawer-nav">
          <div class="drawer-section-label">Navegacion</div>
          <q-list class="menu-list" padding>
            <q-item
              v-for="item in menuItems"
              :key="item.to"
              clickable
              v-ripple
              exact
              :to="item.to"
              active-class="menu-item-active"
              class="menu-item"
            >
              <q-item-section avatar>
                <div class="menu-icon-wrap">
                  <q-icon :name="item.icon" />
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="menu-label">{{ item.label }}</q-item-label>
                <q-item-label caption class="menu-caption">{{ item.caption }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="drawer-footer">
          <q-btn
            unelevated
            no-caps
            icon="o_logout"
            label="Cerrar sesion"
            class="full-width drawer-logout-btn"
            @click="logout"
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container class="page-shell">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      notifications: [],
      unreadNotifications: 0
    }
  },
  mounted () {
    this.loadNotifications()
  },
  computed: {
    rutaTitle () {
      const ruta = this.$route.path
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
          return 'Proveedores'
        case '/users':
          return 'Usuarios'
        case '/compra':
          return 'Compras'
        case '/compraHistory':
          return 'Historial de compras'
        case '/reportes':
          return 'Reportes'
        case '/graficos':
          return 'Graficos'
        default:
          return 'Movimientos'
      }
    },
    userRoleLabel () {
      return this.$store.user?.type === 'ADMINISTRADOR' ? 'Administrador' : 'Usuario'
    },
    branchLabel () {
      return (import.meta.env.VITE_BRANCH_LABEL || 'CENTRAL').toUpperCase()
    },
    userInitials () {
      const name = this.$store.user?.name || 'Usuario'
      return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part.charAt(0).toUpperCase())
        .join('')
    },
    menuItems () {
      const isAdmin = this.$store.user?.type === 'ADMINISTRADOR'
      return [
        {
          to: '/',
          label: 'Movimientos',
          caption: 'Movimientos de caja',
          icon: 'o_store',
          show: true
        },
        {
          to: '/sale',
          label: 'Venta',
          caption: 'Venta de productos',
          icon: 'o_shopping_cart',
          show: true
        },
        {
          to: '/compra',
          label: 'Compras',
          caption: 'Compra de productos',
          icon: 'o_local_shipping',
          show: true
        },
        {
          to: '/compraHistory',
          label: 'Historial compras',
          caption: 'Historial de compras',
          icon: 'o_file_copy',
          show: isAdmin
        },
        {
          to: '/productos',
          label: 'Productos',
          caption: 'Administrar productos',
          icon: 'o_local_mall',
          show: isAdmin
        },
        {
          to: '/clientes',
          label: 'Clientes',
          caption: 'Administrar clientes',
          icon: 'o_face',
          show: true
        },
        {
          to: '/provedores',
          label: 'Proveedores',
          caption: 'Administrar proveedores',
          icon: 'o_assignment_ind',
          show: true
        },
        {
          to: '/reportes',
          label: 'Reportes',
          caption: 'Consultar reportes',
          icon: 'o_print',
          show: true
        },
        {
          to: '/users',
          label: 'Usuarios',
          caption: 'Administrar usuarios',
          icon: 'o_manage_accounts',
          show: isAdmin
        },
        {
          to: '/graficos',
          label: 'Graficos',
          caption: 'Analitica visual',
          icon: 'bar_chart',
          show: isAdmin
        }
      ].filter(item => item.show)
    }
  },
  methods: {
    notificationDate (value) {
      return moment(value).format('DD/MM/YYYY HH:mm')
    },
    loadNotifications () {
      this.$axios.get('notifications')
        .then(({ data }) => {
          this.notifications = data.items || []
          this.unreadNotifications = data.unread || 0
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleNotificationsOpen () {
      if (this.unreadNotifications === 0) return

      this.$axios.post('notifications/read-all')
        .then(() => {
          this.notifications = this.notifications.map(item => ({
            ...item,
            read_at: item.read_at || new Date().toISOString()
          }))
          this.unreadNotifications = 0
        })
        .catch(error => {
          console.log(error)
        })
    },
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    logout () {
      this.$q.dialog({
        title: 'Cerrar sesion',
        message: '¿Esta seguro que desea cerrar sesion?',
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
  }
}
</script>

<style scoped>
.main-layout {
  background:
    radial-gradient(circle at top left, rgba(111, 255, 190, 0.14), transparent 28%),
    radial-gradient(circle at bottom right, rgba(10, 96, 63, 0.12), transparent 26%),
    linear-gradient(180deg, #edf8f1 0%, #f7fbf8 100%);
}

.main-header {
  background: linear-gradient(135deg, #0d6b3c 0%, #11844a 55%, #169855 100%);
  color: #fff;
}

.toolbar-shell {
  min-height: 68px;
  padding: 8px 14px;
  gap: 12px;
}

.header-menu-btn {
  color: #fff;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-avatar {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.16);
}

.brand-copy {
  line-height: 1.1;
}

.brand-chip {
  min-height: 18px;
  padding: 0 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.brand-title {
  font-size: 1.05rem;
  font-weight: 700;
}

.toolbar-user {
  padding: 5px 7px 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 8px 18px rgba(5, 41, 24, 0.18);
}

.header-icon-btn {
  color: #fff;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 999px;
}

.toolbar-user-copy {
  margin-right: 8px;
}

.toolbar-user-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
}

.toolbar-user-role {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.78);
}

.toolbar-user-avatar,
.drawer-user-avatar {
  background: linear-gradient(145deg, #dff7e8, #ffffff);
  color: #11613d;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.48);
  box-shadow: 0 6px 14px rgba(9, 58, 35, 0.18);
}

.logout-btn {
  color: #fff;
  min-height: 34px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  font-weight: 700;
  padding: 0 12px;
  font-size: 0.8rem;
}

.notification-list {
  min-width: 300px;
  max-width: 360px;
  max-height: 420px;
}

.notification-avatar {
  background: rgba(19, 128, 74, 0.12);
  color: #0d6b3c;
}

.main-drawer {
  background: linear-gradient(180deg, #0d6b3c 0%, #13804a 100%);
  color: #effcf3;
}

.main-drawer :deep(.q-drawer) {
  background: linear-gradient(180deg, #0d6b3c 0%, #13804a 100%) !important;
}

.main-drawer :deep(.q-drawer__content) {
  background: linear-gradient(180deg, #0d6b3c 0%, #13804a 100%) !important;
}

.drawer-shell {
  padding: 8px 6px 10px;
  background: linear-gradient(180deg, #0d6b3c 0%, #13804a 100%);
}

.drawer-top {
  padding: 1px 1px 6px;
}

.drawer-user-card {
  padding: 10px;
  border-radius: 14px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 24px rgba(1, 25, 13, 0.16);
}

.drawer-greeting {
  font-size: 0.64rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(227, 250, 235, 0.72);
}

.drawer-user-name {
  margin-top: 2px;
  font-size: 0.86rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.drawer-role-chip {
  margin-top: 6px;
  font-size: 0.64rem;
  background: rgba(255, 255, 255, 0.14);
}

.drawer-nav {
  flex: 1;
  min-height: 0;
  background: transparent;
}

.drawer-section-label {
  padding: 0 8px 3px;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(240, 252, 243, 0.72);
}

.menu-list {
  padding-top: 2px;
  background: transparent;
}

.main-drawer :deep(.q-list),
.main-drawer :deep(.q-item),
.main-drawer :deep(.q-item__section) {
  background: transparent;
}

.menu-item {
  min-height: 42px;
  margin-bottom: 2px;
  padding: 3px 5px;
  border-radius: 10px;
  color: rgba(239, 252, 243, 0.92);
  transition: all 0.2s ease;
}

.menu-item:hover {
  background: #fff;
  color: #13623e;
  box-shadow: 0 8px 18px rgba(4, 28, 15, 0.16);
}

.menu-icon-wrap {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 0.98rem;
}

.menu-label {
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.1;
}

.menu-caption {
  margin-top: 1px;
  font-size: 0.63rem;
  color: rgba(231, 249, 237, 0.74);
}

.menu-item:hover .menu-icon-wrap {
  background: linear-gradient(145deg, #e2f8ea, #c7f1d5);
  color: #10653f;
}

.menu-item:hover .menu-label,
.menu-item:hover .menu-caption {
  color: #13623e;
}

.menu-item-active {
  background: #fff;
  color: #13623e;
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(4, 28, 15, 0.18);
}

.menu-item-active .menu-icon-wrap {
  background: linear-gradient(145deg, #e2f8ea, #c7f1d5);
  color: #10653f;
}

.menu-item-active .menu-label,
.menu-item-active .menu-caption {
  color: #13623e;
}

.drawer-footer {
  padding: 8px 2px 0;
}

.drawer-logout-btn {
  min-height: 42px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-weight: 700;
  font-size: 0.84rem;
}

.page-shell {
  position: relative;
}

@media (max-width: 599px) {
  .toolbar-shell {
    min-height: 62px;
    padding: 8px 10px;
  }

  .brand-title {
    font-size: 0.94rem;
  }

  .toolbar-user {
    padding-left: 8px;
  }

  .logout-btn {
    min-width: 0;
    padding: 0 8px;
    font-size: 0.72rem;
  }
}
</style>
