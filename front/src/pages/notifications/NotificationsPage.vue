<template>
  <q-page class="page-ui q-pa-sm">
    <q-card flat bordered>
      <q-card-section class="row items-center q-col-gutter-md">
        <div class="col">
          <div class="text-h6 text-weight-bold">Todas las notificaciones</div>
          <div class="text-caption text-grey-7">
            Aqui se muestra el historial completo de notificaciones del usuario.
          </div>
        </div>
        <div class="col-auto">
          <q-btn
            no-caps
            color="secondary"
            icon="refresh"
            label="Actualizar notificaciones"
            :loading="loading"
            class="q-mr-sm"
            @click="loadNotifications"
          />
          <q-btn
            no-caps
            color="primary"
            icon="done_all"
            label="Marcar todas como leidas"
            :loading="loadingRead"
            @click="markAllRead"
          />
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-list v-if="notifications.length > 0" separator>
          <q-item v-for="item in notifications" :key="item.id" class="notification-item">
            <q-item-section avatar top>
              <q-avatar :color="item.read_at ? 'grey-3' : 'green-1'" :text-color="item.read_at ? 'grey-8' : 'green-8'">
                <q-icon :name="notificationIcon(item.type)" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <div class="row items-center q-col-gutter-sm">
                <div class="col">
                  <q-item-label class="text-weight-medium">{{ item.title }}</q-item-label>
                </div>
                <div class="col-auto">
                  <q-chip
                    dense
                    :color="item.read_at ? 'grey-4' : 'green-6'"
                    text-color="white"
                    :label="item.read_at ? 'Leida' : 'Nueva'"
                  />
                </div>
              </div>
              <q-item-label caption class="q-mt-xs">{{ item.message }}</q-item-label>
              <q-item-label caption class="text-grey-7 q-mt-xs">
                {{ notificationDate(item.created_at) }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <div v-else class="empty-state">
          No hay notificaciones registradas.
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NotificationsPage',
  watch: {
    '$route.path' () {
      this.loadNotifications()
    }
  },
  data () {
    return {
      notifications: [],
      loading: false,
      loadingRead: false
    }
  },
  mounted () {
    this.loadNotifications()
  },
  methods: {
    notificationDate (value) {
      return moment(value).format('DD/MM/YYYY HH:mm')
    },
    notificationIcon (type) {
      if (type === 'BUY_CREATED') return 'o_local_shipping'
      if (type === 'PROMOCION') return 'o_sell'
      if (type === 'NOVEDAD') return 'o_campaign'
      return 'notifications'
    },
    loadNotifications () {
      this.loading = true
      this.$axios.get('notifications', {
        params: {
          all: 1,
          per_page: 100
        }
      }).then(({ data }) => {
        this.notifications = data.items?.data || []
      }).catch(error => {
        this.$alert.error(error.response?.data?.message || 'No se pudieron cargar las notificaciones')
      }).finally(() => {
        this.loading = false
      })
    },
    markAllRead () {
      this.loadingRead = true
      this.$axios.post('notifications/read-all')
        .then(() => {
          this.notifications = this.notifications.map(item => ({
            ...item,
            read_at: item.read_at || new Date().toISOString()
          }))
          this.$alert.success('Notificaciones marcadas como leidas')
        })
        .catch(error => {
          this.$alert.error(error.response?.data?.message || 'No se pudieron actualizar las notificaciones')
        })
        .finally(() => {
          this.loadingRead = false
        })
    }
  }
}
</script>

<style scoped>
.page-ui {
  background: #f3f7f4;
}

.page-ui :deep(.q-card) {
  border-radius: 14px;
  background: #fff;
}

.notification-item {
  border-radius: 12px;
}

.empty-state {
  padding: 32px 12px;
  text-align: center;
  color: #6b7280;
}
</style>
