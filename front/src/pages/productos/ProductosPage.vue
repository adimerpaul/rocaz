<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <div class="row">
      <div class="col-12 col-md-3">
        <q-input v-model="search" label="Buscar" outlined dense class="bg-white" @update:modelValue="searchProducts" :loading="loading">
          <template v-slot:prepend>
            <q-icon name="o_search" />
          </template>
        </q-input>
      </div>
      <div class="col-6 col-md-3">
        <q-btn label="Descargar reporte" color="primary" icon="cloud_download" flat no-caps :loading="loading" />
      </div>
      <div class="col-6 col-md-6 text-right">
        <q-btn label="Crear producto" color="green" icon="add_circle_outline" no-caps rounded @click="clickProducto" :loading="loading" />
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
        <q-btn label="Categorias" color="black" icon="o_edit" outline no-caps rounded class="bg-white" />
      </div>
      <div class="col-12">
        <div class="row q-pt-xs">
          <div class="col-4 col-md-2" v-for="p in products" :key="p.id">
            <q-card @click="clickDetalleProducto(p)">
<!--              <q-img :src="`${$url}../images/${p.image}`" width="100%" height="100px">-->
              <q-img :src="p.image.includes('http')?p.image:`${$url}../images/${p.image}`" width="100%" height="100px">
                <div class="absolute-bottom text-center text-subtitle2" style="padding: 0px 0px;line-height: 1;">
                  {{p.nombre}}
                </div>
              </q-img>
              <q-card-section class="q-pa-none q-ma-none">
                <div class="text-center text-subtitle2">{{ p.precio1 }} Bs</div>
                <div :class="`text-center text-bold text-${(p.stock)<=p.minStock?'red':(p.stock)<=p.minStock*2?'yellow-9':'black'}`">{{ p.stock}} {{ $q.screen.lt.md?'Dis':'Disponible' }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
<!--        <pre>{{products}}</pre>-->
      </div>
    </div>
    <q-dialog v-model="productDialog" position="right" maximized>
      <DialogProducto :productData="product" :categories="categories" :medidasData="medidas" @closeDialog="productDialog = false" :productActionData="productAction"
      @productSaved="productSaved" @productUpdated="productUpdated" @productDeleted="productDeleted"/>
    </q-dialog>
  </q-page>
</template>
<script>
import cardComponent from 'components/CardComponent.vue'
import DialogProducto from 'pages/productos/DialogProducto.vue'
export default {
  name: 'ProductosPage',
  components: {
    cardComponent,
    DialogProducto
  },
  data () {
    return {
      productDialog: false,
      productAction: '',
      search: '',
      categories: [
        { id: '', name: 'Selecciona una categoría' }
      ],
      loading: false,
      categoriSelected: '',
      ordenes: [
        'Alfabético',
        'Producto más vendido',
        'Producto mas rentable',
        'Producto menos vendido',
        'Ultimas unidades disponibles'
      ],
      ordenSelected: 'Alfabético',
      products: [],
      productsAll: [],
      product: {},
      medidas: [],
      medida: {}
    }
  },
  mounted () {
    this.categoriesGet()
    this.productsGet()
    this.medidasGet()
  },
  methods: {
    productDeleted (product) {
      this.productDialog = false
      this.index = this.products.findIndex(p => p.id === product.id)
      this.products.splice(this.index, 1)
    },
    productUpdated (product) {
      this.productDialog = false
      this.products = this.products.map(p => {
        if (p.id === product.id) {
          return product
        }
        return p
      })
    },
    clickDetalleProducto (product) {
      this.productAction = 'show'
      this.product = {
        id: product.id,
        codigo: product.codigo,
        nombre: product.nombre,
        image: product.image,
        ubicacion: product.ubicacion,
        minStock: product.minStock,
        stock1: product.stock1,
        stock2: product.stock2,
        precio1: product.precio1,
        precio2: product.precio2,
        precio3: product.precio3,
        precio4: product.precio4,
        precio5: product.precio5,
        precio6: product.precio6,
        category_id: product.category_id,
        medida_id: product.medida_id
      }
      this.productDialog = true
    },
    productSaved (product) {
      this.productDialog = false
      this.products.push(product)
    },
    medidasGet () {
      this.$axios.get('medidas').then(response => {
        this.medidas = this.medidas.concat(response.data)
      })
    },
    clickProducto () {
      this.productAction = 'create'
      this.product = {
        codigo: '',
        nombre: '',
        image: 'default.png',
        ubicacion: '',
        minStock: '',
        stock1: '',
        stock2: '',
        precio1: '',
        precio2: '',
        precio3: '',
        precio4: '',
        precio5: '',
        precio6: '',
        category_id: 1,
        medida_id: 1
      }
      this.productDialog = true
    },
    searchProducts () {
      if (this.search === '') {
        this.products = this.productsAll
      } else {
        this.products = this.productsAll.filter(p => p.nombre.toLowerCase().includes(this.search.toLowerCase()))
      }
    },
    categoriesGet () {
      this.$axios.get('categories').then(response => {
        this.categories = this.categories.concat(response.data)
      })
    },
    productsGet () {
      this.loading = true
      this.$axios.get('products').then(response => {
        this.loading = false
        this.products = response.data
        this.productsAll = response.data
      })
    }
  }
}
</script>
