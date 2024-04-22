<template>
  <div class="row q-pt-xs" v-if="vista === 'lista'">
      <div class="col-4 col-md-2" v-for="p in products" :key="p.id" >
        <q-card @click="clickDetalleProducto(p)">
          <q-img :src="p.image.includes('http')?p.image:`${$url}../images/${p.image}`" width="100%" height="100px">
            <div class="absolute-bottom text-center text-subtitle2" style="padding: 0px 0px;line-height: 1;">
              {{p.nombre}}
            </div>
          </q-img>
          <q-card-section class="q-pa-none q-ma-none">
            <div class="text-center text-subtitle2">{{
                precio === 'PRECIO 1' ? p.precio1 :
                  precio === 'PRECIO 2' ? p.precio2 :
                    precio === 'PRECIO 3' ? p.precio3 :
                      precio === 'PRECIO 4' ? p.precio4 :
                        precio === 'PRECIO 5' ? p.precio5 : p.precio6
              }} Bs.</div>
            <div :class="`text-center text-bold text-${(p.stock)<=p.minStock?'red':(p.stock)<=p.minStock*2?'yellow-9':'green'}`">
              {{ almacenSelected === 'Todo' ? p.stock:
              almacenSelected === 'Almacen 1' ? p.stock1 : p.stock2
              }}
              {{ $q.screen.lt.md?'Dis':'Disponible' }}
            </div>
          </q-card-section>
        </q-card>
      </div>
  </div>
    <q-table :rows="products" :columns="columns" :rows-per-page-options="[0]"
             dense wrap-cells no-data-label="No hay productos" no-results-label="No hay resultados"
             :filter="search" title="Productos"  :loading="false"
             @row-click="onRowClick" v-else>
      <template v-slot:top-right>
        <q-input v-model="search" dense outlined label="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
<!--    <pre>-->
<!--      {{products}}-->
<!--    </pre>-->
</template>
<script>
export default {
  props: {
    vista: {
      type: String,
      default: 'lista'
    },
    products: {
      type: Array,
      default: () => []
    },
    precio: {
      type: String,
      default: ''
    },
    almacenSelected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      search: '',
      columns: [
        { name: 'codigo', label: 'Codigo', align: 'left', field: row => row.codigo },
        { name: 'nombre', label: 'Nombre', align: 'left', field: row => row.nombre },
        // { name: 'ubicacion', label: 'Ubicacion', align: 'left', field: row => row.ubicacion },
        // { name: 'minStock', label: 'Min Stock', align: 'left', field: row => row.minStock },
        // { name: 'stock1', label: 'Stock 1', align: 'left', field: row => row.stock1 },
        // { name: 'stock2', label: 'Stock 2', align: 'left', field: row => row.stock2 },
        { name: 'precio1', label: 'Precio 1', align: 'left', field: row => row.precio1 },
        { name: 'precio2', label: 'Precio 2', align: 'left', field: row => row.precio2 },
        { name: 'precio3', label: 'Precio 3', align: 'left', field: row => row.precio3 },
        { name: 'precio4', label: 'Precio 4', align: 'left', field: row => row.precio4 },
        { name: 'precio5', label: 'Precio 5', align: 'left', field: row => row.precio5 },
        { name: 'precio6', label: 'Precio 6', align: 'left', field: row => row.precio6 },
        // { name: 'category_id', label: 'Category Id', align: 'left', field: row => row.category_id },
        // { name: 'medida_id', label: 'Medida Id', align: 'left', field: row => row.medida_id },
        { name: 'stock', label: 'Stock', align: 'left', field: row => row.stock },
        { name: 'category', label: 'Category', align: 'left', field: row => row.category?.name }
      ]
    }
  },
  methods: {
    onRowClick (evt, row) {
      // console.log(row)
      this.$emit('clickDetalleProducto', row)
    },
    clickDetalleProducto (product) {
      this.$emit('clickDetalleProducto', product)
    }
  }
}
</script>
