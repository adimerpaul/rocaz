<template>
<q-page class="page-ui q-pa-sm">
  <div class="row">
    <div class="col-12 col-md-5">
      <q-input v-model="search" outlined label="Search" dense class="bg-white" @update:model-value="clientGet" debounce="300" :loading="loading" clearable />
    </div>
    <div class="col-6 col-md-2">
      <q-select v-model="type" outlined label="Selecionar Tipo" dense class="bg-white" :options="['TODO','CLIENTE', 'PROVEEDOR']" @update:model-value="clientGet" :loading="loading" />
    </div>
    <div class="col-6 col-md-2">
      <q-select v-model="precioPreferidoFiltro" outlined label="Precio" dense class="bg-white" :options="priceFilterOptions" @update:model-value="clientGet" :loading="loading" />
    </div>
    <div class="col-12 col-md-3 text-right">
      <q-btn color="green" label="Nuevo Cliente" @click="clientNew" no-caps icon="add_circle_outline" :loading="loading" />
    </div>
    <div class="col-12 flex flex-center">
      <q-pagination
        v-model="current"
        :max="total"
        :max-pages="6"
        boundary-numbers
        @update:model-value="clientGet"
      />
    </div>
  </div>
  <q-markup-table dense>
    <thead>
      <tr>
        <th>#</th>
        <th>Opcion</th>
        <th>Nombre</th>
        <th>Compania</th>
        <th>NIT</th>
        <th>Email</th>
        <th>Telefono</th>
        <th>Direccion</th>
        <th>Precio</th>
        <th>Tipo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in clients" :key="index" @click="client = item" style="cursor: pointer;">
        <td>{{index + 1}}</td>
        <td>
          <q-btn-dropdown dense no-caps color="primary" label="Opciones" size="11px" auto-close>
            <q-list dense style="min-width: 150px">
              <q-item clickable v-ripple @click="clientEdit(item)">
                <q-item-section avatar>
                  <q-icon name="edit" color="primary" />
                </q-item-section>
                <q-item-section>Editar</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="clientDelete(item)">
                <q-item-section avatar>
                  <q-icon name="delete" color="negative" />
                </q-item-section>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </td>
        <td>{{item.nombre}}</td>
        <td>{{item.compania}}</td>
        <td>{{item.nit}}</td>
        <td>{{item.email}}</td>
        <td>{{item.telefono}}</td>
        <td>{{item.direccion}}</td>
        <td>
          <q-chip :label="item.precio_preferido || 'PRECIO 1'" :color="priceColor(item.precio_preferido)" dense text-color="white" />
        </td>
        <td>
          <q-chip :label="item.tipo" :color="item.tipo === 'CLIENTE' ? 'primary' : 'secondary'" dense text-color="white" />
        </td>
      </tr>
    </tbody>
  </q-markup-table>
  <q-dialog v-model="clientDialog" persistent>
    <q-card style="width: 350px;max-width: 100vw;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-bold" v-if="client.id">Editar Cliente</div>
        <div class="text-bold" v-else>Nuevo Cliente</div>
        <q-space />
        <q-btn flat round dense icon="close" @click="clientDialog = false" />
      </q-card-section>
      <q-card-section>
        <q-form @submit="clientSave">
          <q-input v-model="client.nombre" outlined label="Nombre" dense :rules="[val => !!val || 'Campo requerido']" />
          <q-input v-model="client.nit" outlined label="NIT" dense type="number" :rules="[val => !!val || 'Campo requerido']" />
          <q-input v-model="client.compania" outlined label="Compania" dense :hint="client.tipo" />
          <q-input v-model="client.email" outlined label="Email" dense hint="" />
          <q-input v-model="client.telefono" outlined label="Celular" dense type="number" hint="" />
          <q-input v-model="client.direccion" outlined label="Direccion" dense hint="" />
          <q-select v-model="client.tipo" outlined label="Tipo" dense :options="['CLIENTE', 'PROVEEDOR']" />
          <q-select v-model="client.precio_preferido" outlined label="Precio preferido" dense :options="priceOptions" />
          <q-card-actions align="right">
            <q-btn label="Cancelar" color="negative" @click="clientDialog = false" no-caps :loading="loading" />
            <q-btn :label="client.id ? 'Actualizar' : 'Guardar'" color="primary" type="submit" :loading="loading" no-caps />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
<!--  <pre>{{clients}}</pre>-->
<!--  <pre>{{client}}</pre>-->
</q-page>
</template>
<script>
export default {
  data () {
    return {
      clients: [],
      client: {},
      type: 'CLIENTE',
      search: '',
      clientOption: '',
      clientDialog: false,
      loading: false,
      current: 1,
      total: 0,
      precioPreferidoFiltro: 'TODOS'
    }
  },
  mounted () {
    this.clientGet()
  },
  methods: {
    clientShowSales (item) {
      // this.$router.push({ name: 'sales', query: { client: item.id } })
    },
    priceColor (price) {
      const colorMap = {
        'PRECIO 1': 'grey-7',
        'PRECIO 2': 'blue-7',
        'PRECIO 3': 'green-7',
        'PRECIO 4': 'orange-7',
        'PRECIO 5': 'deep-orange-7',
        'PRECIO 6': 'purple-7'
      }
      return colorMap[price || 'PRECIO 1'] || 'grey-7'
    },
    clientDelete (item) {
      this.$q.dialog({
        title: 'Eliminar Cliente',
        message: 'Esta seguro de eliminar el cliente ' + item.nombre,
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
        this.loading = true
        this.$axios.delete('clients/' + item.id).then(response => {
          this.$alert.success(response.data.message)
          this.clientGet()
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    clientEdit (item) {
      this.client = item
      this.clientDialog = true
    },
    clientSave () {
      this.loading = true
      if (this.client.id) {
        this.$axios.put('clients/' + this.client.id, this.client).then(response => {
          this.$alert.success(response.data.message)
          this.clientDialog = false
          this.clientGet()
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('clients', this.client).then(response => {
          this.$alert.success(response.data.message)
          this.clientDialog = false
          this.clientGet()
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    clientNew () {
      this.client = {
        nombre: '',
        compania: '',
        nit: '',
        email: '',
        telefono: '',
        direccion: '',
        tipo: 'CLIENTE',
        precio_preferido: 'PRECIO 1'
      }
      this.clientDialog = true
    },
    clientGet () {
      this.loading = true
      this.clients = []
      this.$axios.get('clients', {
        params: {
          type: this.type,
          precio_preferido: this.precioPreferidoFiltro,
          search: this.search,
          page: this.current
        }
      }).then(response => {
        this.clients = response.data
        // response.data.data.forEach(r => {
        //   if (r.tipo === 'CLIENTE') {
        //     this.clients.push(r)
        //   }
        // })
        // this.total = response.data.last_page
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    }
  },
  computed: {
    priceFilterOptions () {
      return ['TODOS', ...this.priceOptions]
    },
    priceOptions () {
      return ['PRECIO 1', 'PRECIO 2', 'PRECIO 3', 'PRECIO 4', 'PRECIO 5', 'PRECIO 6']
    }
  }
}
</script>
<style scoped>
.page-ui {
  background: #f3f7f4;
}

.page-ui :deep(.q-field__control),
.page-ui :deep(.q-markup-table) {
  border-radius: 12px;
  background: #fff;
}
</style>
