<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-table :rows="users" :rows-per-page-options="[0]" dense wrap-cells :columns="columns">
      <template v-slot:top-right>
        <q-btn label="Registrar Usuario" icon="add_circle_outline" dense no-caps color="green" @click="usersNew"></q-btn>
        <q-input v-model="search" label="Buscar" dense outlined>
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-option="props">
        <q-td :props="props" auto-width>
<!--          <q-btn-group>-->
<!--            <q-btn icon="edit" color="orange" @click="userEdit(props.row)"  width="250px" label="Editar" no-caps dense size="12px"></q-btn>-->
<!--            <q-btn icon="login" color="indigo" @click="updatePassword(props.row)"  width="250px" label="Password" no-caps dense size="12px"></q-btn>-->
<!--          </q-btn-group>-->
          <q-btn-dropdown label="Opciones" auto-width size="10px" no-caps color="primary" auto-close>
            <q-item clickable v-ripple @click="userEdit(props.row)">
              <q-item-section avatar>
                <q-icon name="edit" />
              </q-item-section>
              <q-item-section>Editar</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="updatePassword(props.row)">
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>
              <q-item-section>Password</q-item-section>
            </q-item>
          </q-btn-dropdown>
        </q-td>
      </template>
      <template v-slot:body-cell-type="props">
        <q-td :props="props" auto-width>
          <q-chip dense size="10px" :label="props.row.type === 'ADMINISTRADOR' ? 'Administrador' : 'Usuarios'" :color="props.row.type === 'ADMINISTRADOR' ? 'green' : 'orange'" text-color="white" />
        </q-td>
      </template>
    </q-table>
<!--    <pre>{{users}}</pre>-->
    <q-dialog v-model="userDialog" persistent>
      <q-card style="width: 350px;max-width: 100vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-bold" v-if="user.id">Editar Usuario</div>
          <div class="text-bold" v-else>Nuevo Usuario</div>
          <q-space />
          <q-btn flat round dense icon="close" @click="userDialog = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit="clientSave">
            <q-input v-model="user.name" outlined label="Nombre" dense :rules="[val => !!val || 'Campo requerido']" />
            <q-input v-model="user.username" outlined label="Nombre de usuario" dense :rules="[val => !!val || 'Campo requerido']" />
            <q-input v-model="user.email" outlined label="Email" dense :rules="[val => !!val || 'Campo requerido']" />
            <q-input v-if="!user.id" v-model="user.password" outlined label="Password" dense type="password" :rules="[val => !!val || 'Campo requerido']" />
            <q-select v-model="user.lugar" outlined label="Lugar" dense :options="['ORURO', 'COCHABAMBA']" />
            <q-select v-model="user.type" outlined label="Lugar" dense :options="['USUARIO', 'ADMINISTRADOR']" :rules="[val => !!val || 'Campo requerido']" />
            <q-card-actions align="right">
              <q-btn label="Cancelar" color="negative" @click="userDialog = false" no-caps :loading="loading" />
              <q-btn :label="user.id ? 'Actualizar' : 'Guardar'" color="primary" type="submit" :loading="loading" no-caps />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  data () {
    // "name": "Administrator",
    //   "email": "admin@test.com",
    //   "username": "admin",
    //   "lugar": "ORURO"
    return {
      users: [],
      user: {},
      search: '',
      userDialog: false,
      loading: false,
      columns: [
        { name: 'option', label: 'Opcion', align: 'left', field: 'option' },
        { name: 'name', label: 'Nombre', align: 'left', field: 'name' },
        { name: 'username', label: 'Nombre usuario', align: 'left', field: 'username' },
        { name: 'email', label: 'Email', align: 'left', field: 'email' },
        { name: 'lugar', label: 'Lugar', align: 'left', field: 'lugar' },
        { name: 'type', label: 'Tipo', align: 'left', field: 'type' }
      ]
    }
  },
  mounted () {
    this.userGet()
  },
  methods: {
    updatePassword (user) {
      this.user = user
      this.$q.dialog({
        title: 'Ingrese nueva contraseña',
        prompt: {
          type: 'password'
        }
      }).onOk((data) => {
        // updatePassword
        this.$axios.put('updatePassword/' + this.user.id, {
          password: data
        }).then(response => {
        })
      })
    },
    userEdit (item) {
      this.user = item
      this.userDialog = true
    },
    clientSave () {
      this.loading = true
      if (this.user.id) {
        this.$axios.put('users/' + this.user.id, this.user).then(response => {
          this.$alert.success('Usuario modificado correctamente')
          this.userDialog = false
          this.userGet()
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('users', this.user).then(response => {
          this.$alert.success('Usuario creado correctamente')
          this.userDialog = false
          this.userGet()
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    usersNew () {
      this.user = {
        name: '',
        email: '',
        username: '',
        lugar: 'ORURO'
      }
      this.userDialog = true
    },
    userGet () {
      this.loading = true
      this.clients = []
      this.$axios.get('users', {
        params: {
          type: this.type,
          search: this.search,
          page: this.current
        }
      }).then(response => {
        this.users = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
