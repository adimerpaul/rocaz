<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col-12 col-md-3">
            <q-input v-model="search" label="Buscar" outlined dense class="bg-white" @update:modelValue="searchProducts" :loading="loading">
              <template v-slot:prepend>
                <q-icon name="o_search" />
              </template>
            </q-input>
          </div>
          <div class="col-6 col-md-9 text-right">
          </div>
          <div class="col-4 col-md-3">
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
          <div class="col-12 col-md-2 text-right">
<!--            <q-btn label="Categorias" color="black" icon="o_edit" outline no-caps rounded class="bg-white" @click="categoriesDialog = true" />-->
          </div>
          <div class="col-12">
            <ProductsComponents :products="products" @clickDetalleProducto="clickDetalleProducto" :precio="precio" :almacenSelected="almacenSelected" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section class="q-pa-none q-ma-none ">
            <div class="row">
              <div class="col-6 text-h6 q-pt-xs q-pl-lg">Canasta</div>
              <div class="col-6 text-right"><q-btn class="text-subtitle1 text-blue-10 text-bold" style="text-decoration: underline;" label="Vaciar canasta" @click="vaciarCanasta" no-caps flat outline/></div>
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="q-pa-none q-ma-none" >
            <div v-if="$store.productosVenta.length==0" class="flex flex-center q-pa-lg">
              <q-icon name="o_shopping_basket" color="grey" size="100px"/>
              <div class="q-pa-lg text-grey text-center noSelect">
                Aún no tienes productos en tu canasta. Haz clic sobre un producto para agregarlo.
              </div>
            </div>
            <q-scroll-area v-else style="height: 400px;">
              <q-table dense flat bordered hide-bottom hide-header :rows="$store.productosVenta" :columns="columnsProductosVenta" :rows-per-page-options="[0]">
                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="borrar" :props="props" style="padding: 0px;margin: 0px" auto-width>
                      <q-btn flat dense @click="deleteProductosVenta(props.row,props.pageIndex)" icon="delete" color="red" size="10px" class="q-pa-none q-ma-none" />
                    </q-td>
                    <q-td key="nombre" :props="props" auto-width>
                      <!--                      <div class="row">-->
                      <!--                        <div class="col-3">-->
                      <!--                        </div>-->
                      <!--                        <div class="col-9">-->
                      <div>
                        <q-img :src="props.row.image.includes('http')?props.row.image:`${$url}../images/${props.row.image}`"
                               width="40px" height="40px"
                               style="padding: 0px; margin: 0px; border-radius: 0px;position: absolute; top: 20px; left: 8px"
                        />
                        <div style="padding-left: 42px">
                          <div class="text-caption" style="max-width: 170px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                            {{props.row.nombre}}
                          </div>
                          <div class="text-grey">Disponible: {{props.row.stock}}</div>
                          <q-input v-model="props.row.precioVenta" style="width: 170px" class="super-small" step="0.1" type="number" @update:model-value="precioVenta(props.row)" dense outlined>
                            <template v-slot:prepend>
                              <q-icon name="edit" size="xs" />
                              <div style="font-size: 10px">Bs.</div>
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <!--                          <div>-->
                      <!--                            <div class="row">-->
                      <!--                              <div class="col-8">-->
                      <!--                              </div>-->
                      <!--                              <div class="col-2 text-bold flex flex-center">-->
                      <!--                                x und-->
                      <!--                              </div>-->
                      <!--                            </div>-->
                      <!--                          </div>-->
                      <!--                        </div>-->
                      <!--                      </div>-->
                    </q-td>
                    <q-td key="cantidadVenta" :props="props">
                      <q-input dense outlined bottom-slots min="1" class="super-small" v-model="props.row.cantidadVenta" @update:model-value="cambioNumero(props.row,props.pageIndex)" :rules="ruleNumber" type="number" input-class="text-center" required>
                        <template v-slot:prepend>
                          <q-btn style="cursor: pointer" dense flat icon="remove_circle_outline" @click="removeCantidad(props.row,props.pageIndex)"/>
                        </template>
                        <template v-slot:append>
                          <q-btn style="cursor: pointer" dense flat icon="add_circle_outline" @click="addCantidad(props.row,props.pageIndex)"/>
                        </template>
                      </q-input>
                      <div class="text-grey">= Bs {{redondeo(props.row.cantidadVenta*props.row.precioVenta)}}</div>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </q-scroll-area>
          </q-card-section>
          <q-card-section >
            <q-list padding bordered dense class="rounded-borders full-width q-pa-none q-ma-none">
              <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="Total"
              >
                <template v-slot:header>
                  <q-item-section>
                    Total
                  </q-item-section>
                  <q-item-section side>
                    <div class="text-right text-grey-8 text-bold"> <u> Bs {{total}}</u></div>
                  </q-item-section>
                </template>
                <q-card>
                  <q-card-section>
                    <div class="row">
                      <div class="col-7 text-grey">Cantidades de referencia</div>
                      <div class="col-5 text-right">{{$store.productosVenta.length}}</div>
                      <div class="col-7 text-grey">
                        Ganancia
                        <q-icon name="o_info">
                          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                            Para calcular la ganancia correctamente, deberás cargar el costo unitario de todos los productos desde tu Inventario.
                          </q-tooltip>
                        </q-icon>
                      </div>
                      <div class="col-5 text-right text-green">{{totalganancia}} Bs</div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-btn @click="clickSale" class="full-width" no-caps label="Confirmar venta" :color="$store.productosVenta.length==0?'grey':'warning'" :disable="$store.productosVenta.length==0?true:false"/>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>
<script>
import ProductsComponents from 'components/ProductsComponents.vue'
export default {
  name: 'ProductosPage',
  components: {
    ProductsComponents
  },
  data () {
    return {
      precio: 'PRECIO 1',
      almacenSelected: 'Todo',
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
      medidas: [],
      products: [],
      productsAll: []
    }
  },
  mounted () {
    this.categoriesGet()
    this.productsGet()
    this.medidasGet()
  },
  methods: {
    redondeo (n) {
      return Math.round(n * 100) / 100
    },
    clickDetalleProducto (product) {
      const search = this.$store.productosVenta.find(p => p.id === product.id)
      if (search) {
        search.cantidadVenta += 1
      } else {
        this.$store.productosVenta.push({
          id: product.id,
          nombre: product.nombre,
          cantidadVenta: 1,
          precioVenta: product.precioVenta,
          costoUnitario: product.costoUnitario,
          stock: product.stock,
          image: product.image
        })
      }
    },
    clickSale () {
      // this.$store.productosVenta.forEach(p => {
      //   this.$store.ventas.push({
      //     product_id: p.id,
      //     cantidad: p.cantidadVenta,
      //     precio: p.precioVenta,
      //     total: p.cantidadVenta * p.precioVenta
      //   })
      // })
      // this.$store.productosVenta = []
      // this.$router.push('/ventas')
    },
    vaciarCanasta () {
      this.$store.productosVenta = []
    },
    searchProductsOrder (order) {
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
      if (categoryId === '') {
        this.products = this.productsAll
      } else {
        this.products = this.productsAll.filter(p => p.category_id === categoryId)
      }
    },
    medidasGet () {
      this.$axios.get('medidas').then(response => {
        this.medidas = this.medidas.concat(response.data)
      })
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
    total () {
      return this.$store.productosVenta.reduce((acc, p) => acc + p.cantidadVenta * p.precioVenta, 0)
    },
    totalganancia () {
      return this.$store.productosVenta.reduce((acc, p) => acc + (p.cantidadVenta * p.precioVenta - p.costoUnitario) * p.cantidadVenta, 0)
    },
    columnsProductosVenta () {
      return [
        {
          name: 'borrar',
          align: 'center',
          label: 'Borrar',
          field: 'borrar'
        },
        {
          name: 'nombre',
          align: 'center',
          label: 'Nombre',
          field: 'nombre'
        },
        {
          name: 'cantidadVenta',
          align: 'center',
          label: 'Cantidad',
          field: 'cantidadVenta'
        }
      ]
    },
    ruleNumber () {
      return [
        val => !!val || 'Campo requerido',
        val => (val && val > 0) || 'Debe ser mayor a 0'
      ]
    }
  }
}
</script>
