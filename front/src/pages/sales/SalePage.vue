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
            <q-btn label="Calculos" color="green" icon="o_calculate"  no-caps rounded class="bg-white" @click="calculateDialog = true" />
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
              <div class="col-6 text-h6 q-pt-xs q-pl-lg">
                Canasta
                <q-checkbox v-model="checkAll" dense color="primary" @update:model-value="checkAllClick" />
              </div>
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
            <div v-else>
<!--              <q-table dense flat bordered hide-bottom hide-header :rows="$store.productosVenta" :columns="columnsProductosVenta" :rows-per-page-options="[0]">-->
<!--                <template v-slot:body="props">-->
<!--                  <q-tr :props="props">-->
<!--                    <q-td key="borrar" :props="props" style="padding: 0px;margin: 0px" auto-width>-->
<!--                      <q-btn flat dense @click="deleteProductosVenta(props.row,props.pageIndex)" icon="delete" color="red" size="10px" class="q-pa-none q-ma-none" />-->
<!--                    </q-td>-->
<!--                    <q-td key="nombre" :props="props" auto-width>-->
<!--                      <div>-->
<!--                        <div >-->
<!--                          <div class="text-caption" style="max-width: 170px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">-->
<!--                            {{props.row.nombre}}-->
<!--                          </div>-->
<!--                          <div class="text-grey">Disponible: {{props.row.stock}}</div>-->
<!--                          <q-input v-model="props.row.precioVenta" style="width: 170px" class="super-small" step="0.01" type="number" @update:model-value="precioVenta(props.row)" dense outlined>-->
<!--                            <template v-slot:prepend>-->
<!--                              <q-icon name="edit" size="xs" />-->
<!--                              <div style="font-size: 10px">Bs.</div>-->
<!--                            </template>-->
<!--                            <template v-slot:after>-->
<!--                              <q-checkbox v-model="props.row.visible" dense color="primary" />-->
<!--                            </template>-->
<!--                          </q-input>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </q-td>-->
<!--                    <q-td key="cantidadVenta" :props="props">-->
<!--                      <q-input dense outlined bottom-slots min="1" class="super-small" v-model="props.row.cantidadVenta" @update:model-value="cambioNumero(props.row,props.pageIndex)" :rules="ruleNumber" type="number" input-class="text-center" required>-->

<!--                      </q-input>-->
<!--                      <div class="text-grey">= Bs {{redondeo(props.row.cantidadVenta*props.row.precioVenta)}}</div>-->
<!--                    </q-td>-->
<!--                  </q-tr>-->
<!--                </template>-->
<!--              </q-table>-->
              <q-markup-table dense wrap-cells>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(product, index) in $store.productosVenta" :key="product.id">
                  <td>
                    <q-btn flat dense @click="deleteProductosVenta(product,index)" icon="delete" color="red" size="10px" class="q-pa-none q-ma-none" />{{index + 1}}
                  </td>
                  <td>
                    <div class="text-caption" style="max-width: 100px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                    {{product.nombre}}
                    </div>
                  </td>
                  <td>
<!--                    {{product.cantidadVenta}}-->
                    <input min="1" v-model="product.cantidadVenta" :rules="ruleNumber" type="number"  required style="width: 50px" class="text-center"/>
                  </td>
                  <td class="text-right">
<!--                    {{numero2digitosRedondeado(product.precioVenta)}}-->
                    <input v-model="product.precioVenta" type="number" step="0.01" style="width: 50px" class="text-right"/>
                  </td>
                  <td class="text-right">
                    {{numero2digitosRedondeado(product.cantidadVenta * product.precioVenta)}} Bs.
                    <q-checkbox v-model="product.visible" dense color="primary" />
                  </td>
                </tr>
                </tbody>
              </q-markup-table>
            </div>
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
                    Total ({{ $store.productosVenta.length }} productos)
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
<!--          <pre>{{$store.productosVenta}}</pre>-->
        </q-card>
      </div>
    </div>
    <q-dialog v-model="saleDialog" persistent>
      <q-card style="width: 750px; max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Realizar venta</div>
          <q-space />
          <q-btn flat round dense icon="close" v-close-popup />
        </q-card-section>
        <q-form @submit.prevent="saleInsert">
          <q-card-section>
            <div class="row">
              <div class="col-6 col-md-3">
                <q-input outlined dense label="Numero" required @update:model-value="searchClient" v-model="client.nit" :loading="loading" :debounce="500" />
              </div>
              <div class="col-12 col-md-3">
                <q-input outlined dense label="Nombre Razon Social" required v-model="client.nombre"  list="users" />
                  <datalist id="users">
                    <option v-for="c in clients" :value="c.nombre" :key="c.id"/>
                  </datalist>
              </div>
              <div class="col-12 col-md-3">
                <q-input outlined dense label="Telefono" v-model="client.telefono"  />
              </div>
              <div class="col-12 col-md-3">
                <q-input outlined dense label="Direccion" v-model="client.direccion"  />
              </div>
              <div class="col-12 col-md-12">
                <q-input outlined dense label="Comentario" v-model="client.comentario" style="text-transform: uppercase" type="textarea"></q-input>
              </div>
              <div class="col-12 col-md-6">
                <q-input outlined dense label="Producto" v-model="client.producto"  list="products" />
                <datalist id="products">
                  <option v-for="p in products" :value="p.nombre" :key="p.id"/>
                </datalist>
<!--                <q-select v-model="client.producto" :options="productsMasVacio" label="Producto" outlined dense class="bg-white" emit-value map-options :option-label="item => item.nombre" :option-value="item => item.nombre" />-->
<!--                <pre>{{client.producto}}</pre>-->
              </div>
              <div class="col-12 col-md-6">
                <q-input outlined dense label="Cantidad" v-model="client.cantidad"  />
              </div>
              <div class="col-12 col-md-6">
                <div class="text-bold">Precio</div>
<!--                  {{precioProductoSelected}}-->
                <q-input outlined dense label="Precio" v-model="precioExtra" />
              </div>
              <div class="col-12 col-md-6">
                <div class="text-bold">Total</div>
<!--                <pre>{{ client.cantidad }}</pre>-->
                {{((client.cantidad == '' || client.cantidad == undefined ?0: client.cantidad) * precioExtra).toFixed(2)}}
              </div>
              <!--              <div class="col-4 col-md-4">-->
              <!--                <q-select v-model="almacenSelected" :options="['Todos','Almacen 1','Almacen 2']" label="Almacen" outlined dense class="bg-white" emit-value />-->
              <!--              </div>-->
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section>
            <div class="row">
              <div class="col-6 col-md-2">
                <q-input outlined dense label="TOTAL A PAGAR:" readonly v-model="total" />
              </div>
              <div class="col-6 col-md-3">
                <q-input outlined dense label="EFECTIVO BS."  v-model="efectivo" />
              </div>
              <div class="col-6 col-md-2">
                <q-input outlined dense label="CAMBIO:" readonly v-model="cambio" />
              </div>
              <div class="col-6 col-md-3">
                <q-select dense outlined v-model="metodoPago" label="Metodo de pago"
                          :options="$metodos" hint="Metodo de pago del gasto" >
                  <template v-slot:prepend>
                    <q-icon name="o_payment" />
                  </template>
                  <template v-slot:option="scope">
                    <q-item v-bind="scope.itemProps">
                      <q-item-section :class="scope.opt == 'CREDITO' ? 'bg-red' : ''">
                        <q-item-label>
                          {{ scope.opt }}
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
              <div class="col-6 col-md-2 text-center">
                <q-btn @click="cotizacion" no-caps label="Cotizar" color="indigo" icon="print" size="10px" />
                <q-btn @click="cotizacionPdf" no-caps label="Cotizar PDF" color="indigo" icon="print" size="10px" />
              </div>
            </div>
          </q-card-section>
          <q-markup-table dense wrap-cells>
            <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in $store.productosVenta" :key="product.id">
              <td>{{index + 1}}</td>
              <td>{{product.nombre}}</td>
              <td>{{product.cantidadVenta}}</td>
              <td class="text-right">{{numero2digitosRedondeado(product.precioVenta)}}</td>
              <td class="text-right text-bold">{{numero2digitosRedondeado(product.cantidadVenta * product.precioVenta)}} Bs.</td>
            </tr>
            <tr>
              <td colspan="2" class="text-right text-bold">
<!--                @update:modelValue="totalSale2 = totalSale -descuento"-->
                <q-input label="Descuento" v-model="descuento" dense outlined />
              </td>
              <td colspan="2" class="text-right text-bold">Total</td>
              <td class="text-right text-bold">
                <div>
<!--                  {{totalSale2}}-->
                  <q-input v-model="totalSale2" outlined dense label="Total Bs."/>
                </div>
<!--                {{numero2digitosRedondeado(total-descuento)}} Bs.xxx-->
              </td>
            </tr>
            </tbody>
          </q-markup-table>
          <q-separator/>
          <q-card-section>
            <div class="row">
              <div class="col-6">
                <q-btn type="submit" class="full-width" icon="o_add_circle" label="Realizar venta" :loading="loading" no-caps color="green"  />
              </div>
              <div class="col-6">
                <q-btn class="full-width" icon="undo" v-close-popup label="Atras" no-caps color="red" :loading="loading" />
              </div>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
<!--    <q-dialog v-model="calculateDialog" position="left" full-height>-->
      <CalculatePage @close="calculateDialog = false" :productsAll="products" @addProduct="addProduct"
                     style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;"
                     v-if="calculateDialog"
      />
<!--    </q-dialog>-->
    <div id="myElement" class="hidden"></div>
<!--    <pre>{{$store.productosVenta}}</pre>-->
  </q-page>
</template>
<script>
import ProductsComponents from 'components/ProductsComponents.vue'
import { Imprimir } from 'src/addons/Imprimir'
import CalculatePage from 'pages/sales/CalculatePage.vue'
import html2pdf from 'html2pdf.js'
export default {
  name: 'ProductosPage',
  components: {
    CalculatePage,
    ProductsComponents
  },
  data () {
    return {
      totalSale: 0,
      checkAll: false,
      totalSale2: 0,
      descuento: '',
      vista: 'tabla',
      calculateDialog: false,
      metodoPago: 'EFECTIVO',
      precio: 'PRECIO 1',
      almacenSelected: 'Todo',
      search: '',
      precioExtra: '',
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
      clients: [],
      efectivo: ''
    }
  },
  mounted () {
    this.categoriesGet()
    this.productsGet()
    this.medidasGet()
    this.clientsGet()
  },
  methods: {
    checkAllClick () {
      if (this.checkAll) {
        this.$store.productosVenta.forEach(p => {
          p.visible = true
        })
      } else {
        this.$store.productosVenta.forEach(p => {
          p.visible = false
        })
      }
    },
    clientsGet () {
      this.$axios.get('clients', {
        params: {
          type: 'CLIENTE'
        }
      }).then(response => {
        this.clients = this.clients.concat(response.data)
      })
    },
    addProduct (data) {
      const product = data.producto
      // const cantidad = parseInt(data.cantidad)
      // cantidad redondeado a su superior
      const cantidad = Math.ceil(data.cantidad)
      console.log(product)
      // console.log(cantidad)
      // const search = this.$store.productosVenta.find(p => p.id === product.id)
      // if (search) {
      //   search.cantidadVenta += 1
      // } else {
      //   if (this.precio === 'PRECIO 1') {
      //     product.precioVenta = product.precio1
      //   }
      //   if (this.precio === 'PRECIO 2') {
      //     product.precioVenta = product.precio2
      //   }
      //   if (this.precio === 'PRECIO 3') {
      //     product.precioVenta = product.precio3
      //   }
      //   if (this.precio === 'PRECIO 4') {
      //     product.precioVenta = product.precio4
      //   }
      //   if (this.precio === 'PRECIO 5') {
      //     product.precioVenta = product.precio5
      //   }
      //   if (this.precio === 'PRECIO 6') {
      //     product.precioVenta = product.precio6
      //   }
      //   this.$store.productosVenta.push({
      //     id: product.id,
      //     nombre: product.nombre,
      //     cantidadVenta: 1,
      //     precioVenta: product.precioVenta,
      //     costoUnitario: product.costoUnitario,
      //     stock: product.stock,
      //     image: product.image
      //   })
      // }
      const search = this.$store.productosVenta.find(p => p.id === product.id)
      if (search) {
        search.cantidadVenta += cantidad
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
        this.$store.productosVenta.push({
          id: product.id,
          nombre: product.nombre,
          cantidadVenta: cantidad,
          precioVenta: product.precioVenta,
          costoUnitario: product.costo,
          stock: product.stock,
          image: product.image,
          visible: true
        })
      }
    },
    cotizacionPdf () {
      const element = document.getElementById('myElement')
      element.classList.remove('hidden')
      Imprimir.cotizacion(this.$store.productosVenta, this.client, this.total, this.descuento, false).then(() => {
        const element = document.getElementById('myElement')
        const options = {
          margin: 1,
          filename: 'cotizacion.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().set(options).from(element).save()
        setTimeout(() => {
          element.classList.add('hidden')
        }, 300)
        // element.classList.add('hidden')
      })
    },
    cotizacion () {
      Imprimir.cotizacion(this.$store.productosVenta, this.client, this.total, this.descuento)
    },
    numero2digitosRedondeado (n) {
      const num = Math.round(n * 100) / 100
      return num.toFixed(2)
    },
    saleInsert () {
      this.loading = true
      this.$axios.post('sales', {
        nit: this.client.nit,
        nombre: this.client.nombre,
        telefono: this.client.telefono,
        direccion: this.client.direccion,
        comentario: this.client.comentario,
        total: this.totalSale2,
        metodo: this.metodoPago,
        almacen: this.almacenSelected,
        productos: this.$store.productosVenta,
        descuento: this.descuento,
        producto: this.client.producto,
        cantidad: this.client.cantidad === '' || this.client.cantidad === undefined ? 0 : this.client.cantidad,
        precioProducto: this.precioProductoSelected
      }).then(response => {
        // console.log(response.data)
        Imprimir.nota(response.data)
        Imprimir.nota(response.data)
        this.productsGet()
        this.$alert.success('Venta realizada')
        this.checkAll = false
      }).finally(() => {
        this.loading = false
        this.saleDialog = false
        this.$store.productosVenta = []
      }).catch(() => {
        this.$alert.error('Error al realizar la venta')
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
        this.$store.productosVenta.splice(i, 1)
      }
    },
    addCantidad (n, i) {
      n.cantidad--
      n.cantidadPedida++
      n.cantidadVenta = parseInt(n.cantidadVenta) + 1
    },
    deleteProductosVenta (product, index) {
      this.$store.productosVenta.splice(index, 1)
    },
    redondeo (n) {
      return Math.round(n * 100) / 100
    },
    clickDetalleProducto (product) {
      const search = this.$store.productosVenta.find(p => p.id === product.id)
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
        this.$store.productosVenta.push({
          id: product.id,
          nombre: product.nombre,
          cantidadVenta: 1,
          precioVenta: product.precioVenta,
          costoUnitario: product.costo,
          stock: product.stock,
          image: product.image,
          visible: true
        })
      }
    },
    clickSale () {
      this.saleDialog = true
      this.descuento = ''
      this.efectivo = ''
      this.client = {
        nit: '0',
        nombre: 'SN'
      }
      this.totalSale = 0
      this.$store.productosVenta.forEach(row => {
        this.totalSale = this.totalSale + (parseFloat(row.precioVenta) * parseFloat(row.cantidadVenta))
        this.totalSale2 = this.totalSale
      })
      this.totalSale = this.totalSale.toFixed(2)
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
    },
    searchClient (nit) {
      this.loading = true
      this.$axios.post('searchClient', {
        nit
      }).then(res => {
        if (res.data.nombre !== undefined) {
          this.client.nombre = res.data.nombre
          this.client.telefono = res.data.telefono
          this.client.direccion = res.data.direccion
        }
      }).finally(() => {
        this.loading = false
      })
    }
  },
  computed: {
    precioProductoSelected () {
      var producto = this.products.find(p => p.nombre === this.client.producto)
      if (producto) {
        return producto.precio1
      }
      return 0
    },
    productsMasVacio () {
      var products = this.productsAll
      products.unshift({ nombre: '', id: '' })
      return products
    },
    Imprimir () {
      return Imprimir
    },
    cambio () {
      const efectivo = parseFloat(this.efectivo === '' ? 0 : this.efectivo)
      const total = parseFloat(this.total === '' ? 0 : this.total)
      return Math.round((efectivo - total) * 100) / 100
    },
    total () {
      const total = this.$store.productosVenta.reduce((acc, p) => acc + p.cantidadVenta * p.precioVenta, 0)
      return Math.round(total * 100) / 100
    },
    totalganancia () {
      // return this.$store.productosVenta.reduce((acc, p) => acc + (p.cantidadVenta * p.precioVenta - p.costoUnitario) * p.cantidadVenta, 0)
      let ganancia = 0
      this.$store.productosVenta.forEach(p => {
        ganancia += (p.precioVenta - p.costoUnitario) * p.cantidadVenta
      })
      return Math.round(ganancia * 100) / 100
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
