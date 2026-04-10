<template>
  <q-page class="page-ui q-pa-sm">
    <q-table
      :rows="notifications"
      :columns="columns"
      row-key="id"
      :loading="loading"
      :rows-per-page-options="[0]"
      dense
      wrap-cells
    >
      <template v-slot:top-left>
        <div>
          <div class="text-h6 text-weight-bold">Administrador de notificaciones</div>
          <div class="text-caption text-grey-7">
            Aqui el administrador ve sus notificaciones y puede gestionar las manuales.
          </div>
        </div>
      </template>

      <template v-slot:top-right>
        <q-btn
          color="green"
          icon="add_circle_outline"
          label="Nueva notificacion"
          no-caps
          dense
          size="10px"
          @click="openCreate"
        />
      </template>

      <template v-slot:body-cell-option="props">
        <q-td :props="props" auto-width>
          <q-btn-dropdown
            v-if="props.row.is_manual"
            label="Opciones"
            color="primary"
            no-caps
            dense
            size="10px"
            auto-close
          >
            <q-list dense>
              <q-item clickable v-ripple dense @click="openEdit(props.row)">
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Modificar</q-item-section>
              </q-item>
              <q-item clickable v-ripple dense @click="removeNotification(props.row)">
                <q-item-section avatar>
                  <q-icon name="delete" color="negative" />
                </q-item-section>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-chip
            v-else
            dense
            size="10px"
            color="grey-6"
            text-color="white"
            label="Sistema"
          />
        </q-td>
      </template>

      <template v-slot:body-cell-type="props">
        <q-td :props="props">
          <q-chip dense size="10px" color="primary" text-color="white" :label="props.row.type" />
        </q-td>
      </template>

      <template v-slot:body-cell-origin="props">
        <q-td :props="props">
          <q-chip
            dense
            size="10px"
            :color="props.row.is_manual ? 'green' : 'orange'"
            text-color="white"
            :label="props.row.is_manual ? 'Manual' : 'Automatica'"
          />
        </q-td>
      </template>

      <template v-slot:body-cell-target="props">
        <q-td :props="props">
          {{ targetLabel(props.row) }}
        </q-td>
      </template>

      <template v-slot:body-cell-created_at="props">
        <q-td :props="props">
          {{ notificationDate(props.row.created_at) }}
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="dialog" persistent>
      <q-card style="width: 560px; max-width: 95vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-bold">{{ form.batch_key ? 'Editar notificacion' : 'Nueva notificacion' }}</div>
          <q-space />
          <q-btn flat round dense icon="close" @click="dialog = false" />
        </q-card-section>

        <q-card-section>
          <q-form @submit="saveNotification" class="q-gutter-md">
            <q-input
              v-model="form.title"
              outlined
              dense
              label="Titulo"
              :rules="[val => !!val || 'Campo requerido']"
            />

            <q-input
              v-model="form.message"
              outlined
              dense
              type="textarea"
              autogrow
              label="Mensaje"
              :rules="[val => !!val || 'Campo requerido']"
            />

            <q-select
              v-model="form.type"
              outlined
              dense
              label="Tipo"
              :options="typeOptions"
              :rules="[val => !!val || 'Campo requerido']"
            />

            <q-select
              v-model="form.target_scope"
              outlined
              dense
              label="Destino"
              :options="targetScopeOptions"
              :rules="[val => !!val || 'Campo requerido']"
            />

            <q-select
              v-if="form.target_scope === 'SUCURSAL'"
              v-model="form.target_branch"
              outlined
              dense
              label="Sucursal"
              :options="branchOptions"
              :rules="[val => !!val || 'Campo requerido']"
            />

            <q-card-actions align="right">
              <q-btn label="Cancelar" color="negative" no-caps dense size="10px" @click="dialog = false" :loading="saving" />
              <q-btn :label="form.batch_key ? 'Actualizar' : 'Guardar'" color="primary" no-caps dense size="10px" type="submit" :loading="saving" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import moment from 'moment'

const emptyForm = () => ({
  batch_key: null,
  title: '',
  message: '',
  type: 'GENERAL',
  target_scope: 'TODOS',
  target_branch: null
})

export default {
  name: 'NotificationsAdminPage',
  data () {
    return {
      notifications: [],
      loading: false,
      saving: false,
      dialog: false,
      form: emptyForm(),
      typeOptions: ['GENERAL', 'AVISO', 'PROMOCION', 'NOVEDAD'],
      targetScopeOptions: ['TODOS', 'SUCURSAL'],
      branchOptions: ['ORURO', 'COCHABAMBA'],
      columns: [
        { name: 'option', label: 'Opcion', align: 'left', field: 'option' },
        { name: 'title', label: 'Titulo', align: 'left', field: 'title' },
        { name: 'message', label: 'Mensaje', align: 'left', field: 'message' },
        { name: 'type', label: 'Tipo', align: 'left', field: 'type' },
        { name: 'origin', label: 'Origen', align: 'left', field: 'origin' },
        { name: 'target', label: 'Destino', align: 'left', field: 'target' },
        { name: 'created_at', label: 'Fecha', align: 'left', field: 'created_at' }
      ]
    }
  },
  mounted () {
    this.loadNotifications()
  },
  methods: {
    notificationDate (value) {
      return moment(value).format('DD/MM/YYYY HH:mm')
    },
    targetLabel (row) {
      if (!row.is_manual) return 'Sistema'
      return row.target_scope === 'SUCURSAL'
        ? `Sucursal ${row.target_branch}`
        : 'Todos los usuarios'
    },
    loadNotifications () {
      this.loading = true
      this.$axios.get('notifications-admin')
        .then(({ data }) => {
          this.notifications = data
        })
        .catch(error => {
          this.$alert.error(error.response?.data?.message || 'No se pudieron cargar las notificaciones')
        })
        .finally(() => {
          this.loading = false
        })
    },
    openCreate () {
      this.form = emptyForm()
      this.dialog = true
    },
    openEdit (row) {
      this.form = {
        batch_key: row.batch_key,
        title: row.title,
        message: row.message,
        type: row.type,
        target_scope: row.target_scope,
        target_branch: row.target_branch
      }
      this.dialog = true
    },
    removeNotification (row) {
      this.$q.dialog({
        title: 'Eliminar notificacion',
        message: '¿Esta seguro de eliminar esta notificacion?',
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
        this.$axios.delete(`notifications-admin/${row.batch_key}`)
          .then(() => {
            this.$alert.success('Notificacion eliminada correctamente')
            this.loadNotifications()
          })
          .catch(error => {
            this.$alert.error(error.response?.data?.message || 'No se pudo eliminar la notificacion')
          })
      })
    },
    saveNotification () {
      this.saving = true

      const payload = {
        title: this.form.title,
        message: this.form.message,
        type: this.form.type,
        target_scope: this.form.target_scope,
        target_branch: this.form.target_scope === 'SUCURSAL' ? this.form.target_branch : null
      }

      const request = this.form.batch_key
        ? this.$axios.put(`notifications-admin/${this.form.batch_key}`, payload)
        : this.$axios.post('notifications-admin', payload)

      request.then(() => {
        this.$alert.success(this.form.batch_key ? 'Notificacion actualizada correctamente' : 'Notificacion creada correctamente')
        this.dialog = false
        this.loadNotifications()
      }).catch(error => {
        this.$alert.error(error.response?.data?.message || 'No se pudo guardar la notificacion')
      }).finally(() => {
        this.saving = false
      })
    }
  }
}
</script>

<style scoped>
.page-ui {
  background: #f3f7f4;
}

.page-ui :deep(.q-table__container),
.page-ui :deep(.q-field__control) {
  border-radius: 12px;
  background: #fff;
}
</style>
