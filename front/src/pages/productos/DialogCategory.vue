<template>
  <q-card style="width: 500px; max-width: 80vw;">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-subtitle2 text-bold text-grey">
        Control de categorías
      </div>
      <q-space/>
      <q-btn icon="o_highlight_off" flat round dense v-close-popup />
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col-12">
          <q-table :rows="categories" dense :rows-per-page-options="[0]" :columns="[
            { name: 'name', label: 'Nombre', align: 'left', field: 'name' },
            { name: 'actions', label: 'Acciones', align: 'center', field: 'id' }
          ]" flat bordered :filter="filter">
            <template v-slot:top-right>
              <q-input v-model="filter" label="Buscar" dense outlined >
                <template v-slot:prepend>
                  <q-icon name="o_search" />
                </template>
              </q-input>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn icon="o_edit" flat round dense @click="categoryEdit(props.row)" />
                <q-btn icon="o_delete" flat round dense @click="categoryDelete(props.row)" />
              </q-td>
            </template>
          </q-table>
<!--          <pre>{{categories}}</pre>-->
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filter: '',
      loading: false
    }
  },
  methods: {
    categoryEdit (category) {
      this.$q.dialog({
        title: 'Editar categoría',
        message: 'Ingrese el nombre de la categoría',
        prompt: {
          model: category.name,
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        this.$axios.put(`categories/${category.id}`, { name: data }).then(res => {
          this.$emit('categoryUpdated', res.data)
        }).catch(err => {
          this.$alert.error(err.response.data.message)
        })
      })
    },
    categoryDelete (category) {
      this.$q.dialog({
        title: 'Eliminar categoría',
        message: '¿Está seguro de eliminar la categoría?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`categories/${category.id}`).then(res => {
          this.$emit('categoryDeleted', res.data)
        }).catch(err => {
          this.$alert.error(err.response.data.message)
        })
      })
    }
  }
}
</script>
