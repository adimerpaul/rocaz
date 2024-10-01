<template>
  <q-card style="width: 500px; max-width: 80vw;">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-subtitle2 text-bold text-grey">
        {{ productAction === 'create' ? 'Nuevo producto' : productAction === 'show' ? 'Detalle de producto' : productAction === 'edit' ? 'Editar producto' : '' }}
        <!--        <pre>{{product}}</pre>-->
      </div>
      <q-space/>
      <q-btn icon="o_highlight_off" flat round dense v-close-popup />
    </q-card-section>
    <q-card-section>
      <q-form @submit="saveProduct" v-if="productAction === 'create' || productAction === 'edit'">
        <div class="row">
          <div class="col-12 text-bold">
            Subir imagen
          </div>
          <div class="col-12 flex flex-center q-pb-xs">
            <q-avatar @click="openFilePicker" size="130px" class="cursor-pointer">
<!--              <img :src="`${$url}../images/${product.image}`">-->
              <img :src="product.image.includes('http')?product.image:`${$url}../images/${product.image}`" width="100%" height="100%" style="border-radius: 10px;">
              <q-badge floating color="grey">
                <q-icon name="o_camera_alt" size="xs"/>
              </q-badge>
            </q-avatar>
            <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" accept="image/*">
          </div>
          <div class="col-5 col-md-4">
            <q-input v-model="product.codigo" label="Código" outlined dense hint="" />
          </div>
          <div class="col-7 col-md-8">
            <q-input v-model="product.nombre" label="Nombre producto*" outlined dense :rules="[val => val.length > 2 || 'El nombre debe tener al menos 3 caracteres']" />
          </div>
          <div class="col-12 col-md-4">
            <q-select v-model="product.medida_id" :options="medidas" label="Medida" outlined dense emit-value map-options :option-label="item => item.nombre" :option-value="item => item.id"
                      :rules="[(val) => val !== null && val !== undefined || 'Selecciona una medida']">
            <template v-slot:after>
                <q-icon name="add_circle_outline" color="green" class="cursor-pointer" @click="openMedidaDialog">
                  <q-tooltip>Crear nueva medida</q-tooltip>
                </q-icon>
              </template>
            </q-select>
          </div>
          <div class="col-6 col-md-8">
            <q-input v-model="product.ubicacion" label="Ubicación" outlined dense :class="$q.screen.lt.md?'':'q-ml-md'" hint="" />
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.minStock" label="Stock mínimo" outlined dense type="number" hint="" />
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.stock1" label="Stock 1" outlined dense type="number" hint="" />
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.stock2" label="Stock 2" outlined dense type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio1" label="Precio 1" outlined dense step="0.01" type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio2" label="Precio 2" outlined dense step="0.01" type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio3" label="Precio 3" outlined dense step="0.01" type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio4" label="Precio 4" outlined dense step="0.01" type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio5" label="Precio 5" outlined dense step="0.01" type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio6" label="Precio 6" outlined dense step="0.01" type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.costo" label="Costo" outlined dense step="0.01" type="number" hint=""/>
          </div>
          <div class="col-6 col-md-8">
            <q-select v-model="product.category_id" :options="categories" label="Categoría" outlined dense emit-value map-options :option-label="item => item.name" :option-value="item => item.id"
                      :rules="[(val) => val !== null && val !== undefined || 'Selecciona una categoría']">
              <template v-slot:after>
                <q-icon name="add_circle_outline" color="green" class="cursor-pointer" @click="openCategoryDialog">
                  <q-tooltip>Crear nueva categoría</q-tooltip>
                </q-icon>
              </template>
            </q-select>
          </div>
          <div class="col-12">
            <q-btn type="submit" :label="`${productAction === 'create' ? 'Crear' : productAction === 'edit' ? 'Guardar' : ''}`"
                   :color="`${productAction === 'create' ? 'green' : productAction === 'edit' ? 'orange' : ''}`"
                   class="full-width" no-caps rounded :loading="loading"/>
          </div>
<!--          <pre>{{product}}</pre>-->
        </div>
      </q-form>
      <div v-else>
        <div class="row">
          <div class="col-12 text-center">
<!--            <q-img :src="`${product.image}`" width="200px">-->
            <q-img :src="product.image.includes('http')?product.image:`${$url}../images/${product.image}`" width="200px" style="border-radius: 10px;">
              <div class="absolute-bottom text-center text-subtitle2" style="padding: 0px 0px;">
                {{product.nombre}}
              </div>
            </q-img>
          </div>
          <div class="col-12">
            <div :class="`text-bold text-${(product.stock)<=product.minStock?'red':(product.stock)<=product.minStock*2?'yellow-9':'black'} text-center`">
              <div>{{ product.stock }} Disponible</div>
              <div>Min Stock: {{ product.minStock }}</div>
            </div>
          </div>
          <div class="col-12">
          <q-card>
            <q-card-section class="row">
                <div class="col-6">
                  <div class="text-bold text-grey">
                    <q-icon name="o_qr_code_2" class="text-grey" size="20px" />
                    Codigo
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-grey text-caption text-right">{{ product.codigo }}</div>
                </div>
                <div class="col-6">
                  <div class="text-bold text-grey">
                    <q-icon name="o_paid" class="text-grey" size="20px" />
                    Precio 1
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-grey text-caption text-right">{{ product.precio1 }} Bs</div>
                </div>
                <div class="col-6">
                  <div class="text-bold text-grey">
                    <q-icon name="o_paid" class="text-grey" size="20px" />
                    Precio 2
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-grey text-caption text-right">{{ product.precio2 }} Bs</div>
                </div>
                <div class="col-6">
                  <div class="text-bold text-grey">
                    <q-icon name="o_paid" class="text-grey" size="20px" />
                    Precio 3
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-grey text-caption text-right">{{ product.precio3 }} Bs</div>
                </div>
                <div class="col-6">
                  <div class="text-bold text-grey">
                    <q-icon name="o_paid" class="text-grey" size="20px" />
                    Precio 4
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-grey text-caption text-right">{{ product.precio4 }} Bs</div>
                </div>
                <div class="col-6">
                  <div class="text-bold text-grey">
                    <q-icon name="o_paid" class="text-grey" size="20px" />
                    Precio 5
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-grey text-caption text-right">{{ product.precio5 }} Bs</div>
                </div>
                <div class="col-6">
                  <div class="text-bold text-grey">
                    <q-icon name="o_paid" class="text-grey" size="20px" />
                    Precio 6
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-grey text-caption text-right">{{ product.precio6 }} Bs</div>
                </div>
              <div class="col-6">
                <div class="text-bold text-grey">
                  <q-icon name="o_shopping_cart" class="text-grey" size="20px" />
                  Stock 1
                </div>
              </div>
              <div class="col-6">
                <div class="text-grey text-caption text-right">{{ product.stock1 }}</div>
              </div>
              <div class="col-6">
                <div class="text-bold text-grey">
                  <q-icon name="o_shopping_cart" class="text-grey" size="20px" />
                  Stock 2
                </div>
              </div>
              <div class="col-6">
                <div class="text-grey text-caption text-right">{{ product.stock2 }}</div>
              </div>
              <div class="col-6">
                <div class="text-bold text-grey">
                  <q-icon name="o_local_mall" class="text-grey" size="20px" />
                  Categoria
                </div>
              </div>
              <div class="col-6">
                <div class="text-grey text-caption text-right">{{ product.category?.name }}</div>
              </div>
              <div class="col-6">
                <div class="text-bold text-grey">
                  <q-icon name="o_local_mall" class="text-grey" size="20px" />
                  Costo
                </div>
              </div>
              <div class="col-6">
                <div class="text-grey text-caption text-right">{{ product.costo }}</div>
              </div>
<!--              <pre>{{product}}</pre>-->
            </q-card-section>
          </q-card>
          <div class="row q-pa-xs">
            <div class="col-6">
              <q-btn label="Editar" color="orange" class="full-width" no-caps rounded @click="productAction = 'edit'" icon="o_edit"/>
            </div>
            <div class="col-6">
              <q-btn label="Eliminar" color="red" class="full-width" no-caps outline rounded @click="productDeleted(product.id)" icon="o_delete"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: 'DialogProducto',
  props: {
    productData: {
      type: Object,
      required: false
    },
    categories: {
      type: Array,
      required: false
    },
    productActionData: {
      type: String,
      required: true
    },
    medidasData: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      loading: false,
      imagen: null,
      productAction: this.productActionData,
      medidas: this.medidasData || [],
      product: this.productData || {
        codigo: '',
        nombre: '',
        image: '',
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
    }
  },
  methods: {
    openCategoryDialog () {
      this.$q.dialog({
        title: 'Nueva categoría',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        this.loading = true
        this.$axios.post('categories', { name: data }).then(response => {
          this.$emit('categoryCreated', response.data)
          this.product.category_id = response.data.id
        }).finally(() => {
          this.loading = false
        })
      })
    },
    productDeleted (id) {
      this.$q.dialog({
        title: 'Eliminar producto',
        message: '¿Estás seguro de eliminar este producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.loading = true
        this.$axios.delete(`products/${id}`).then(() => {
          this.$emit('productDeleted', id)
        }).finally(() => {
          this.loading = false
        }).catch(err => {
          this.$alert.error(err.response.data)
        })
      })
    },
    openMedidaDialog () {
      this.$q.dialog({
        title: 'Nueva medida',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        this.loading = true
        this.$axios.post('medidas', { nombre: data }).then(response => {
          this.medidas.push(response.data)
          this.product.medida_id = response.data.id
        }).finally(() => {
          this.loading = false
        })
      })
    },
    openFilePicker () {
      this.$refs.fileInput.click()
    },
    createProduct () {
      const data = new FormData()
      data.append('file', this.$refs.fileInput.files[0])
      data.append('product', JSON.stringify(this.product))
      this.loading = true
      this.$axios.post('products', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        // console.log(response.data)
        this.$emit('productSaved', response.data)
      }).finally(() => {
        this.loading = false
      }).catch(err => {
        this.$alert.error(err.response.data.message)
      })
    },
    saveProduct () {
      if (this.productAction === 'show') {
        return
      }
      if (this.productAction === 'create') {
        this.createProduct()
      }
      if (this.productAction === 'edit') {
        const data = new FormData()
        data.append('file', this.imagen)
        data.append('product', JSON.stringify(this.product))
        this.loading = true
        this.$axios.post('productsUpdate', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.$emit('productUpdated', response.data)
        }).finally(() => {
          this.loading = false
        }).catch(err => {
          this.$alert.error(err.response.data.message)
        })
      }
    },
    handleFileChange () {
      const file = event.target.files[0]

      if (file) {
        this.imagen = file
        this.product.image = URL.createObjectURL(file)
      }
    }
  }
}
</script>
