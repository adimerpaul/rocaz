<template>
  <div class="row q-pt-xs" v-if="vista === 'lista'">
      <div class="col-4 col-md-2" v-for="p in products" :key="p.id" >
        <q-card @click="clickDetalleProducto(p)" :class="{ 'stock-zero-card': isOutOfStock(p) }">
          <q-img :src="p.image.includes('http')?p.image:`${$url}../images/${p.image}`" width="100%" height="100px">
            <div class="absolute-bottom text-center text-subtitle2" style="padding: 0px 0px;line-height: 1;">
              {{p.nombre}}
            </div>
          </q-img>
          <q-card-section class="q-pa-none q-ma-none">
            <div class="text-center text-subtitle2">{{
                precio === 'PRECIO 1' ? p.precio1 :
                  precio === 'PRECIO 2' ? p.precio2 :
                    p.precio3
              }} Bs.</div>
            <div :class="`text-center text-bold text-${(p.stock)<=p.minStock?'red':(p.stock)<=p.minStock*2?'yellow-9':'green'}`">
              {{ getDisplayStock(p) }}
              {{ $q.screen.lt.md?'Dis':'Disponible' }}
            </div>
          </q-card-section>
        </q-card>
      </div>
  </div>
    <q-table :rows="products" :columns="columns" :rows-per-page-options="[0]"
             dense wrap-cells no-data-label="No hay productos" no-results-label="No hay resultados"
             :filter="search" title="Productos"  :loading="false" v-else>
      <template v-slot:top-right>
        <q-input v-model="search" dense outlined label="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr
          :props="props"
          :class="{ 'stock-zero-row': isOutOfStock(props.row) }"
          class="cursor-pointer"
          @click="clickDetalleProducto(props.row)"
        >
          <q-td key="codigo" :props="props">
            {{ props.row.codigo }}
          </q-td>
          <q-td key="nombre" :props="props">
            {{ props.row.nombre }}
          </q-td>
          <q-td key="precio1" :props="props">
            {{ props.row.precio1 }}
          </q-td>
          <q-td key="precio2" :props="props">
            {{ props.row.precio2 }}
          </q-td>
          <q-td key="precio3" :props="props">
            {{ props.row.precio3 }}
          </q-td>
          <q-td key="stock" :props="props">
            <div :class="stockTextClass(props.row)">
              {{ getDisplayStock(props.row) }}
            </div>
          </q-td>
          <q-td key="category" :props="props">
            {{ props.row.category?.name }}
          </q-td>
          <q-td key="costo" :props="props">
            <div :class="`text-${props.row.costo === 0 ? 'red text-bold' : 'black'}`" v-if="$store.user.type === 'ADMINISTRADOR'">
              {{ props.row.costo }} Bs.
            </div>
          </q-td>
        </q-tr>
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
        { name: 'precio1', label: 'Precio 1 (Cliente)', align: 'left', field: row => row.precio1 },
        { name: 'precio2', label: 'Precio 2 (Tecnico)', align: 'left', field: row => row.precio2 },
        { name: 'precio3', label: 'Precio 3 (Distribuidor)', align: 'left', field: row => row.precio3 },
        { name: 'stock', label: 'Stock', align: 'left', field: row => row.stock },
        { name: 'category', label: 'Category', align: 'left', field: row => row.category?.name },
        { name: 'costo', label: 'Costo', align: 'left', field: row => row.costo }
      ]
    }
  },
  methods: {
    getDisplayStock (product) {
      if (this.almacenSelected === 'Almacen 1') return product.stock1
      if (this.almacenSelected === 'Almacen 2') return product.stock2
      return product.stock
    },
    isOutOfStock (product) {
      return Number(this.getDisplayStock(product) || 0) <= 0
    },
    stockTextClass (product) {
      if (this.isOutOfStock(product)) return 'text-red text-bold'
      return `text-${(product.stock) <= product.minStock ? 'red' : (product.stock) <= product.minStock * 2 ? 'yellow-9' : 'green'}`
    },
    clickDetalleProducto (product) {
      this.$emit('clickDetalleProducto', product)
    }
  }
}
</script>
<style scoped>
.stock-zero-card {
  background: #ffebee;
}

:deep(.stock-zero-row) {
  background: #ffebee;
}

:deep(.stock-zero-row:hover) {
  background: #ffcdd2;
}
</style>
