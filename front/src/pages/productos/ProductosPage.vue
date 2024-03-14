<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <div class="row">
      <div class="col-12 col-md-3">
        <q-input v-model="search" label="Buscar" outlined dense class="bg-white">
          <template v-slot:prepend>
            <q-icon name="o_search" />
          </template>
        </q-input>
      </div>
      <div class="col-6 col-md-3">
        <q-btn label="Descargar reporte" color="primary" icon="cloud_download" flat no-caps />
      </div>
      <div class="col-6 col-md-6 text-right">
        <q-btn label="Crear producto" color="green" icon="add_circle_outline" no-caps rounded />
      </div>
      <div class="col-12 col-md-6 q-pa-xs">
        <cardComponent :color="'grey'" :title="'Total de referencias'" :monto="1000" :icono="'o_store'" />
      </div>
      <div class="col-12 col-md-6 q-pa-xs">
        <cardComponent :color="'green'" :title="'Costo total de inventario'" :monto="1000" :icono="'o_trending_up'" />
      </div>
      <div class="col-4 col-md-3">
        <q-select v-model="categoriSelected" :options="categories" label="Categoría" outlined dense class="bg-white"
          emit-value map-options :option-label="item => item.name" :option-value="item => item.id" />
      </div>
      <div class="col-8 col-md-4">
        <q-select v-model="ordenSelected" :options="ordenes" label="Ordenar por" outlined dense class="bg-white"
          emit-value />
      </div>
      <div class="col-12 col-md-5 text-right">
        <q-btn label="Categorias" color="primary" icon="o_edit" outline no-caps rounded />
      </div>
      <div class="col-12">
        <pre>{{products}}</pre>
      </div>
    </div>
  </q-page>
</template>
<script>
import cardComponent from 'components/CardComponent.vue'
export default {
  name: 'ProductosPage',
  components: {
    cardComponent
  },
  data () {
    return {
      search: '',
      categories: [
        { id: '', name: 'Todas' }
      ],
      categoriSelected: '',
      ordenes: [
        'Alfabético',
        'Producto más vendido',
        'Producto mas rentable',
        'Producto menos vendido',
        'Ultimas unidades disponibles'
      ],
      ordenSelected: 'Alfabético',
      products: []
    }
  },
  mounted () {
    this.categoriesGet()
    this.productsGet()
  },
  methods: {
    categoriesGet () {
      this.$axios.get('categories').then(response => {
        this.categories = this.categories.concat(response.data)
      })
    },
    productsGet () {
      this.$axios.get('products').then(response => {
        this.products = response.data
      })
    }
  }
}
</script>
