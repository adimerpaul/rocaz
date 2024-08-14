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
        <q-btn label="Descargar reporte" color="primary" icon="cloud_download" flat no-caps :loading="loading" @click="downloadReport" />
<!--        <q-btn label="Refresh" color="primary" icon="refresh" flat no-caps @click="productsGet" :loading="loading" />-->
      </div>
      <div class="col-6 col-md-2 text-right">
        <q-toggle model-value="vista" :label="vista" color="primary" dense v-model="vista"
                  false-value="lista" true-value="tabla"
        />
      </div>
      <div class="col-6 col-md-4 text-right">
        <q-btn label="Crear producto" color="green" icon="add_circle_outline" no-caps rounded @click="clickProducto" :loading="loading" />
      </div>
      <div class="col-12 col-md-6 q-pa-xs">
        <cardComponent :color="'grey'" :title="'Cantidad de productos'" :monto="products.length" icono="o_shopping_cart" />
      </div>
      <div class="col-12 col-md-6 q-pa-xs">
        <cardComponent :color="'green'" title="Ganancias" :monto="ganancias" icono="o_attach_money" />
      </div>
      <div class="col-4 col-md-2">
        <q-select v-model="categoriSelected" :options="categories" label="Categoría" outlined dense class="bg-white"
          emit-value map-options :option-label="item => item.name" :option-value="item => item.id" @update:model-value="searchProductsCategory" />
      </div>
      <div class="col-8 col-md-3">
        <q-select v-model="ordenSelected" :options="ordenes" label="Ordenar por" outlined dense class="bg-white" @update:model-value="searchProductsOrder"
          emit-value />
      </div>
      <div class="col-4 col-md-2">
        <q-select v-model="almacenSelected" :options="['Todo','Almacen 1','Almacen 2']" label="Almacen" outlined dense class="bg-white" emit-value />
      </div>
      <div class="col-12 col-md-2 text-right">
        <q-select v-model="precio" :options="['PRECIO 1','PRECIO 2','PRECIO 3','PRECIO 4','PRECIO 5','PRECIO 6']" label="Precio" outlined dense class="bg-white" emit-value />
      </div>
      <div class="col-12 col-md-3 text-right">
        <q-btn label="Categorias" color="black" icon="o_edit" outline no-caps rounded class="bg-white" @click="categoriesDialog = true" />
      </div>
      <div class="col-12">
        <ProductsComponents :products="products" @clickDetalleProducto="clickDetalleProducto" :precio="precio" :almacenSelected="almacenSelected" :vista="vista" />
<!--        <pre>{{products}}</pre>-->
      </div>
    </div>
    <q-dialog v-model="productDialog" position="right" maximized>
      <DialogProducto :productData="product" :categories="categories" :medidasData="medidas" @closeDialog="productDialog = false" :productActionData="productAction"
      @productSaved="productSaved" @productUpdated="productUpdated" @productDeleted="productDeleted" @categoryCreated="categoryCreated" />
    </q-dialog>
    <q-dialog v-model="categoriesDialog" position="right" maximized>
      <DialogCategory :categories="categories.filter(c => c.id !== '')" @categoryUpdated="categoryUpdated" @categoryDeleted="categoryDeleted"/>
    </q-dialog>
  </q-page>
</template>
<script>
import cardComponent from 'components/CardComponent.vue'
import DialogProducto from 'pages/productos/DialogProducto.vue'
import DialogCategory from 'pages/productos/DialogCategory.vue'
import ProductsComponents from 'components/ProductsComponents.vue'
export default {
  name: 'ProductosPage',
  components: {
    ProductsComponents,
    DialogCategory,
    cardComponent,
    DialogProducto
  },
  data () {
    return {
      vista: 'tabla',
      precio: 'PRECIO 1',
      almacenSelected: 'Todo',
      productDialog: false,
      categoriesDialog: false,
      productAction: '',
      search: '',
      categories: [
        { id: '', name: 'Selecciona una categoría' }
      ],
      loading: false,
      categoriSelected: '',
      ordenes: [
        'Selecciona un orden',
        'Alfabético',
        'Producto más vendido',
        // 'Producto mas rentable',
        'Producto menos vendido',
        'Ultimas unidades disponibles'
      ],
      ordenSelected: 'Selecciona un orden',
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
    downloadReport () {
      const data = [
        {
          sheet: 'Productos',
          columns: [
            { label: 'Código', value: 'codigo' },
            { label: 'Nombre', value: 'nombre' },
            { label: 'Ubicación', value: 'ubicacion' },
            { label: 'Stock', value: 'stock' },
            { label: 'Stock mínimo', value: 'minStock' },
            { label: 'Precio 1', value: 'precio1' },
            { label: 'Precio 2', value: 'precio2' },
            { label: 'Precio 3', value: 'precio3' },
            { label: 'Precio 4', value: 'precio4' },
            { label: 'Precio 5', value: 'precio5' },
            { label: 'Precio 6', value: 'precio6' },
            { label: 'Categoría', value: 'category_id' },
            { label: 'Medida', value: 'medida_id' }
          ],
          content: this.products
        }
      ]
      this.$excel.export(data)
    },
    categoryDeleted (category) {
      this.categories = this.categories.filter(c => c.id !== category.id)
    },
    categoryUpdated (category) {
      this.categories = this.categories.map(c => {
        if (c.id === category.id) {
          return category
        }
        return c
      })
    },
    categoryCreated (category) {
      this.categories.push(category)
    },
    searchProductsOrder (order) {
      // console.log(order)
      if (order === '') {
        this.products = this.productsAll
      }
      if (order === 'Alfabético') {
        this.products = this.productsAll.sort((a, b) => a.nombre.localeCompare(b.nombre))
      }
      if (order === 'Producto más vendido') {
        this.products = this.productsAll.sort((a, b) => b.cantidadVentas - a.cantidadVentas)
      }
      if (order === 'Producto menos vendido') {
        this.products = this.productsAll.sort((a, b) => a.cantidadVentas + b.cantidadVentas)
      }
      if (order === 'Ultimas unidades disponibles') {
        this.products = this.productsAll.sort((a, b) => a.stock - b.stock)
      }
    },
    searchProductsCategory (categoryId) {
      console.log(categoryId)
      if (categoryId === '') {
        this.products = this.productsAll
      } else {
        this.products = this.productsAll.filter(p => p.category_id === categoryId)
      }
    },
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
      this.product = { ...product }
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
  },
  computed: {
    ganancias () {
      if (this.products.length === 0) {
        return 0
      }
      const total = this.products.reduce((acc, product) => {
        return acc + (product?.stock * product?.costo)
      }, 0)
      return total.toFixed(2)
    }
  }
}
</script>
