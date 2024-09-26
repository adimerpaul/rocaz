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
          <div class="col-6 col-md-2 text-right">
            <q-toggle model-value="vista" :label="vista" color="primary" dense v-model="vista"
                      false-value="lista" true-value="tabla"
            />
          </div>
          <div class="col-6 col-md-7 text-right">
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
<!--            <q-btn label="Calculos" color="green" icon="o_calculate"  no-caps rounded class="bg-white" @click="calculateDialog = true" />-->
          </div>
          <div class="col-12">
            <ProductsComponents :products="products" @clickDetalleProducto="clickDetalleProducto" :precio="precio" :almacenSelected="almacenSelected" :vista="vista" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section class="q-pa-none q-ma-none ">
            <div class="row">
              <div class="col-6 text-h6 q-pt-xs q-pl-lg text-red">Compra</div>
              <div class="col-6 text-right"><q-btn class="text-subtitle1 text-blue-10 text-bold" style="text-decoration: underline;" label="Vaciar " @click="vaciarCanasta" no-caps flat outline/></div>
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="q-pa-none q-ma-none" >
            <div v-if="$store.productosBuys.length==0" class="flex flex-center q-pa-lg">
              <q-icon name="o_shopping_basket" color="grey" size="100px"/>
              <div class="q-pa-lg text-grey text-center noSelect">
                Aún no tienes productos en tu canasta. Haz clic sobre un producto para agregarlo.
              </div>
            </div>
            <q-scroll-area v-else style="height: 400px;">
              <q-table dense flat bordered hide-bottom hide-header :rows="$store.productosBuys" :columns="columnsProductosVenta" :rows-per-page-options="[0]">
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
<!--                        <q-img :src="props.row.image.includes('http')?props.row.image:`${$url}../images/${props.row.image}`"-->
<!--                               width="40px" height="40px"-->
<!--                               style="padding: 0px; margin: 0px; border-radius: 0px;position: absolute; top: 20px; left: 8px"-->
<!--                        />-->
<!--                        style="padding-left: 42px"-->
                        <div >
                          <div class="text-caption" style="max-width: 170px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                            {{props.row.nombre}}
                          </div>
                          <div class="text-grey">Disponible: {{props.row.stock}}</div>
                          <q-input v-model="props.row.precioVenta" style="width: 170px" class="super-small" step="0.01" type="number" @update:model-value="precioVenta(props.row)" dense outlined>
                            <template v-slot:prepend>
<!--                              <q-icon name="edit" size="xs" />-->
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
<!--              <pre>{{$store.productosBuys}}</pre>-->
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
                    Total ( {{ $store.productosBuys.length }} )
                  </q-item-section>
                  <q-item-section side>
                    <div class="text-right text-grey-8 text-bold"> <u> Bs {{total}}</u></div>
                  </q-item-section>
                </template>
                <q-card>
                  <q-card-section>
                    <div class="row">
                      <div class="col-7 text-grey">Cantidades de referencia</div>
                      <div class="col-5 text-right">{{$store.productosBuys.length}}</div>
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
            <q-btn @click="clickSale" class="full-width" no-caps label="Confirmar compra" :color="$store.productosBuys.length==0?'grey':'deep-orange'" :disable="$store.productosBuys.length==0?true:false"/>
          </q-card-section>
<!--          <pre>{{$store.productosBuys}}</pre>-->
        </q-card>
      </div>
    </div>
    <q-dialog v-model="saleDialog" persistent>
      <q-card style="width: 750px; max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Realizar Compra</div>
          <q-space />
          <q-btn flat round dense icon="close" v-close-popup />
        </q-card-section>
        <q-form @submit.prevent="saleInsert">
          <q-markup-table dense wrap-cells flat bordered>
            <thead>
<!--            "id": 4,-->
<!--            "nombre": "Gypsum 239-G color",-->
<!--            "cantidadVenta": 1,-->
<!--            "precioVenta": 7.2,-->
<!--            "stock": 0,-->
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in $store.productosBuys" :key="product.id">
              <td>{{index + 1}}</td>
              <td>{{product.nombre}}</td>
              <td>{{product.cantidadVenta}}</td>
              <td class="text-right">{{numero2digitosRedondeado(product.precioVenta)}}</td>
              <td class="text-right text-bold">{{numero2digitosRedondeado(product.cantidadVenta * product.precioVenta)}} Bs.</td>
            </tr>
            <tr>
              <td colspan="2" class="text-right text-bold">
                <q-input label="Descuento" v-model="descuento" dense outlined/>
              </td>
              <td colspan="2" class="text-right text-bold">Total</td>
              <td class="text-right text-bold">{{numero2digitosRedondeado(total-descuento)}} Bs.</td>
            </tr>
            </tbody>
          </q-markup-table>
          <div class="row q-pa-xs">
            <div class="col-4">
              <q-select v-model="proveedor_id" :options="proveedores" label="Proveedor" outlined dense class="bg-white" emit-value map-options
                        option-value="id" option-label="nombre" @filter="fnFilter"
                        use-input input-debounce="0" hide-selected fill-input
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No hay resultados
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
<!--              <pre>{{proveedor_id}}</pre>-->
            </div>
            <div class="col-8">
              <q-input outlined dense label="Observaciones" v-model="observacion"/>
            </div>
          </div>
<!--          <q-card-section>-->
<!--            <div class="row">-->
<!--              <div class="col-6 col-md-4">-->
<!--                <q-input outlined dense label="NIT/CARNET" required @update:model-value="searchClient" v-model="client.nit" :loading="loading" :debounce="500" />-->
<!--              </div>-->
<!--              <div class="col-12 col-md-4">-->
<!--                <q-input outlined dense label="Nombre Razon Social" required v-model="client.nombre" style="text-transform: uppercase" />-->
<!--              </div>-->
<!--              <div class="col-4 col-md-4">-->
<!--                <q-select v-model="almacenSelected" :options="['Todo','Almacen 1','Almacen 2']" label="Almacen" outlined dense class="bg-white" emit-value />-->
<!--              </div>-->
<!--            </div>-->
<!--          </q-card-section>-->
<!--          <q-separator/>-->
<!--          <q-card-section>-->
<!--            <div class="row">-->
<!--              <div class="col-6 col-md-2">-->
<!--                <q-input outlined dense label="TOTAL A PAGAR:" readonly v-model="total" />-->
<!--              </div>-->
<!--              <div class="col-6 col-md-3">-->
<!--                <q-input outlined dense label="EFECTIVO BS."  v-model="efectivo" />-->
<!--              </div>-->
<!--              <div class="col-6 col-md-2">-->
<!--                <q-input outlined dense label="CAMBIO:" readonly v-model="cambio" />-->
<!--              </div>-->
<!--              <div class="col-6 col-md-3">-->
<!--                <q-select dense outlined v-model="metodoPago" label="Metodo de pago"-->
<!--                          :options="$metodos" hint="Metodo de pago del gasto" />-->
<!--              </div>-->
<!--            </div>-->
<!--          </q-card-section>-->
          <q-separator/>
          <q-card-section>
            <div class="row">
              <div class="col-6">
                <q-btn type="submit" class="full-width" icon="o_add_circle" label="Realizar Compra" :loading="loading" no-caps color="positive"  />
              </div>
              <div class="col-6">
                <q-btn class="full-width" icon="undo" v-close-popup label="Atras" no-caps color="red" :loading="loading" />
              </div>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="calculateDialog" position="left" full-height>
      <CalculatePage @close="calculateDialog = false" :products="products" />
    </q-dialog>
    <div id="myElement" class="hidden"></div>
<!--    <pre>{{$store.productosBuys}}</pre>-->
  </q-page>
</template>
<script>
import ProductsComponents from 'components/ProductsComponents.vue'
import { Imprimir } from 'src/addons/Imprimir'
import CalculatePage from 'pages/sales/CalculatePage.vue'
export default {
  name: 'ProductosPage',
  components: {
    CalculatePage,
    ProductsComponents
  },
  data () {
    return {
      descuento: '',
      vista: 'tabla',
      calculateDialog: false,
      metodoPago: 'EFECTIVO',
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
      productsAll: [],
      saleDialog: false,
      client: {
        nit: '',
        nombre: ''
      },
      efectivo: '',
      proveedores: [],
      proveedoresAll: [],
      proveedor_id: '',
      observacion: ''
    }
  },
  mounted () {
    this.proveedoresGet()
    this.categoriesGet()
    this.productsGet()
    this.medidasGet()
  },
  methods: {
    fnFilter (val, update) {
      if (val === '') {
        update(() => {
          this.proveedores = this.proveedoresAll
        })
      } else {
        const needle = val.toLowerCase()
        update(() => {
          this.proveedores = this.proveedoresAll.filter(v => v.nombre.toLowerCase().indexOf(needle) > -1)
        })
      }
    },
    proveedoresGet () {
      this.$axios.get('proveedores').then(response => {
        this.proveedores = this.proveedores.concat(response.data)
        this.proveedoresAll = response.data
      })
    },
    numero2digitosRedondeado (n) {
      const num = Math.round(n * 100) / 100
      return num.toFixed(2)
    },
    saleInsert () {
      if (this.$store.productosBuys.length === 0) {
        this.$q.notify({
          color: 'red',
          position: 'top',
          message: 'No hay productos en la canasta',
          icon: 'report_problem'
        })
        return
      }
      if (this.proveedor_id === '') {
        this.$q.notify({
          color: 'red',
          position: 'top',
          message: 'Seleccione un proveedor',
          icon: 'report_problem'
        })
        return
      }
      this.loading = true
      this.$axios.post('buys', {
        proveedor_id: this.proveedor_id,
        observacion: this.observacion,
        productos: this.$store.productosBuys,
        descuento: this.descuento
      }).then(response => {
        this.$q.notify({
          color: 'green',
          position: 'top',
          message: 'Compra realizada',
          icon: 'cloud_done'
        })
        this.saleDialog = false
        this.$store.productosBuys = []
        this.productsGet()
        // console.log(response.data)
        Imprimir.notaCompra(response.data)
      }).finally(() => {
        this.loading = false
      })
    },
    precioVenta (n) {
      if (n.precioVenta === '') {
        n.precioVenta = 1
      }
    },
    cambioNumero (n, i) {
      console.log(n)
      // if (n.cantidadVenta !== '') {
      //   n.cantidad = parseInt(n.cantidadReal) - parseInt(n.cantidadVenta)
      //   n.cantidadPedida = parseInt(n.cantidadVenta)
      // }
      // if (n.cantidadVenta === 0) {
      //   n.cantidad = parseInt(n.cantidadReal) - 1
      //   n.cantidadVenta = 1
      //   n.cantidadPedida = 1
      // }
    },
    removeCantidad (n, i) {
      n.cantidad++
      n.cantidadPedida--
      if (n.cantidadVenta > 1) {
        n.cantidadVenta = parseInt(n.cantidadVenta) - 1
      } else if (n.cantidadVenta === 1) {
        this.$store.productosBuys.splice(i, 1)
      }
    },
    addCantidad (n, i) {
      n.cantidad--
      n.cantidadPedida++
      n.cantidadVenta = parseInt(n.cantidadVenta) + 1
    },
    deleteProductosVenta (product, index) {
      this.$store.productosBuys.splice(index, 1)
    },
    redondeo (n) {
      return Math.round(n * 100) / 100
    },
    clickDetalleProducto (product) {
      const search = this.$store.productosBuys.find(p => p.id === product.id)
      if (search) {
        search.cantidadVenta += 1
      } else {
        if (this.precio === 'PRECIO 1') {
          product.precioVenta = product.precio1
        }
        if (this.precio === 'PRECIO 2') {
          product.precioVenta = product.precio2
        }
        if (this.precio === 'PRECIO 3') {
          product.precioVenta = product.precio3
        }
        if (this.precio === 'PRECIO 4') {
          product.precioVenta = product.precio4
        }
        if (this.precio === 'PRECIO 5') {
          product.precioVenta = product.precio5
        }
        if (this.precio === 'PRECIO 6') {
          product.precioVenta = product.precio6
        }
        this.$store.productosBuys.push({
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
      this.saleDialog = true
      this.efectivo = ''
      this.client = {
        nit: '0',
        nombre: 'SN'
      }
    },
    vaciarCanasta () {
      this.$store.productosBuys = []
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
    },
    searchClient (nit) {
      this.loading = true
      this.$axios.post('searchClient', {
        nit
      }).then(res => {
        if (res.data.nombre !== undefined) {
          this.client.nombre = res.data.nombre
        }
      }).finally(() => {
        this.loading = false
      })
    }
  },
  computed: {
    cambio () {
      const efectivo = parseFloat(this.efectivo === '' ? 0 : this.efectivo)
      const total = parseFloat(this.total === '' ? 0 : this.total)
      return Math.round((efectivo - total) * 100) / 100
    },
    total () {
      const total = this.$store.productosBuys.reduce((acc, p) => acc + p.cantidadVenta * p.precioVenta, 0)
      return Math.round(total * 100) / 100
    },
    totalganancia () {
      return this.$store.productosBuys.reduce((acc, p) => acc + (p.cantidadVenta * p.precioVenta - p.costoUnitario) * p.cantidadVenta, 0)
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
