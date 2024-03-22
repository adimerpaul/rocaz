<template>
  <div class="row q-pt-xs">
    <div class="col-4 col-md-2" v-for="p in products" :key="p.id">
      <q-card @click="clickDetalleProducto(p)">
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
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    clickDetalleProducto (product) {
      this.$emit('clickDetalleProducto', product)
    }
  }
}
</script>
