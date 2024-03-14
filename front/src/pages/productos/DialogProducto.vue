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
          <div class="col-12 flex flex-center">
            <q-avatar @click="openFilePicker" size="100px" class="cursor-pointer">
              <img :src="product.image"/>
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
            <q-input v-model="product.precio1" label="Stock 2" outlined dense type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio2" label="Precio 2" outlined dense type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio3" label="Precio 3" outlined dense type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio4" label="Precio 4" outlined dense type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio5" label="Precio 5" outlined dense type="number" hint=""/>
          </div>
          <div class="col-6 col-md-4">
            <q-input v-model="product.precio6" label="Precio 6" outlined dense type="number" hint=""/>
          </div>
          <div class="col-12">
            <q-btn type="submit" label="Guardar" color="primary" class="full-width" no-caps rounded/>
          </div>
          <pre>{{product}}</pre>
        </div>
      </q-form>
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
    productAction: {
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
        this.$axios.post('medidas', { nombre: data }).then(response => {
          this.medidas.push(response.data)
          this.product.medida_id = response.data.id
        })
      })
    },
    openFilePicker () {
      this.$refs.fileInput.click()
    },
    saveProduct () {
      const data = new FormData()
      data.append('file', this.$refs.fileInput.files[0])
      data.append('product', JSON.stringify(this.product))
      this.$axios.post('products', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response.data)
        // this.$emit('productSaved', response.data)
      })
    },
    handleFileChange () {
      const file = event.target.files[0]

      if (file) {
        this.product.image = URL.createObjectURL(file)
      }
    }
  }
}
</script>
