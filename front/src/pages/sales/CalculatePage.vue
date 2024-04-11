<template>
  <q-card style="width: 900px;max-width: 100%">
    <q-card-section class="row items-center">
      <div class="text-h6">Calculos</div>
      <q-icon name="calculate" />
      <q-space />
      <q-btn flat @click="$emit('close')" icon="close" />
    </q-card-section>
    <q-card-section>
      <q-splitter
        v-model="splitterModel"
      >

        <template v-slot:before>
          <q-tabs
            v-model="$store.tab"
            vertical
          >
            <q-tab name="Calculo 2 piso flotante 8 mm" icon="functions" no-caps :class="{'bg-grey-6 text-white': $store.tab === 'Calculo 2 piso flotante 8 mm'}">
              Calculo 2 piso <br> flotante 8 mm
            </q-tab>
            <q-tab name="Calculo 2 piso flotante 12 mm" icon="analytics" no-caps :class="{'bg-grey-6 text-white': $store.tab === 'Calculo 2 piso flotante 12 mm'}">
              Calculo 2 piso <br> flotante 12 mm
            </q-tab>
            <q-tab name="Calculo PVC tablilla rocaz" icon="insights" no-caps :class="{'bg-grey-6 text-white': $store.tab === 'Calculo PVC tablilla rocaz'}">
              Calculo PVC <br> tablilla rocaz
            </q-tab>
            <q-tab name="Calculo cielo falso desmontable 0,60 x 0,60" icon="table_chart" no-caps :class="{'bg-grey-6 text-white': $store.tab === 'Calculo cielo falso desmontable 0,60 x 0,60'}">
              Calculo cielo falso <br> desmontable 0,60 x 0,60
            </q-tab>
            <q-tab name="Calculo piso flotante 8 mm" icon="account_tree" no-caps :class="{'bg-grey-6 text-white': $store.tab === 'Calculo piso flotante 8 mm'}">
              Calculo piso <br> flotante 8 mm
            </q-tab>
            <q-tab name="Calculo piso flotante SPC" icon="assessment" no-caps :class="{'bg-grey-6 text-white': $store.tab === 'Calculo piso flotante SPC'}">
              Calculo piso <br> flotante SPC
            </q-tab>
            <q-tab name="Calculo piso flotante 12 mm" icon="leaderboard" no-caps :class="{'bg-grey-6 text-white': $store.tab === 'Calculo piso flotante 12 mm'}">
              Calculo piso <br> flotante 12 mm
            </q-tab>
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="$store.tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
            class="bg-grey-3"
          >
            <q-tab-panel name="Calculo 2 piso flotante 8 mm">
              <div class="text-h6 q-mb-md">Calculo 2 piso flotante 8 mm</div>
              <div class="row">
                <div class="col-12 col-md-3">
                  <q-input outlined v-model="$store.area2PisoFlotante8mm" label="Area (m2)" class="bg-orange" />
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined v-model="$store.area2PisoFlotante8mmConstante" label="Constante" class="bg-white" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="piezasArea2PisoFlotante8mm" label="Piezas" class="bg-blue" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="cajasArea2PisoFlotante8mm" label="Cajas" class="bg-green" readonly/>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  data () {
    return {
      splitterModel: 30
      // area2PisoFlotante8mm: ''
    }
  },
  computed: {
    piezasArea2PisoFlotante8mm () {
      const calculta = this.$store.area2PisoFlotante8mm / this.$store.area2PisoFlotante8mmConstante
      return calculta.toFixed(1)
    },
    cajasArea2PisoFlotante8mm () {
      const calculta = (this.$store.area2PisoFlotante8mm / this.$store.area2PisoFlotante8mmConstante) / 10
      return calculta.toFixed(1)
    }
  }
}
</script>
