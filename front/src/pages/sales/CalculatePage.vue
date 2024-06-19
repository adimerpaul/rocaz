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
                <div class="col-12 col-md-2">
                  <q-input outlined dense v-model="$store.area2PisoFlotante8mm" label="Area (m2)" class="bg-orange" />
                </div>
                <div class="col-12 col-md-2 hidden">
                  <q-input outlined dense v-model="$store.area2PisoFlotante8mmConstante" label="Constante" class="bg-white" readonly/>
                </div>
                <div class="col-12 col-md-2">
                  <q-input outlined dense :model-value="piezasArea2PisoFlotante8mm" label="Piezas" class="bg-blue" readonly/>
                </div>
                <div class="col-12 col-md-2">
                  <q-input outlined dense :model-value="cajasArea2PisoFlotante8mm" label="Cajas" class="bg-green" readonly/>
                </div>
                <div class="col-12 col-md-6">
                  <q-select v-model="producto" :options="products" label="Producto"  outlined dense class="bg-white"
                            option-value="id" option-label="nombre">
                    <template v-slot:after>
                      <q-btn dense size="14px" color="primary" round icon="add" @click="addProduct(cajasArea2PisoFlotante8mm)"/>
                    </template>
                  </q-select>
<!--                  <pre>{{products}}</pre>-->
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Calculo 2 piso flotante 12 mm">
              <div class="text-h6 q-mb-md">Calculo 2 piso flotante 12 mm</div>
              <div class="row">
                <div class="col-12 col-md-3">
                  <q-input outlined v-model="$store.area2PisoFlotante12mm" label="Area (m2)" class="bg-orange" />
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined v-model="$store.area2PisoFlotante12mmConstante" label="Constante" class="bg-white" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="piezasArea2PisoFlotante12mm" label="Piezas" class="bg-blue" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="cajasArea2PisoFlotante12mm" label="Cajas" class="bg-green" readonly/>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Calculo PVC tablilla rocaz">
              <div class="text-h6">Calculo PVC tablilla rocaz</div>
<!--              <div class="row">-->
<!--                <div class="col-12 col-md-3">-->
                  <q-markup-table>
                    <thead>
                      <tr>
                        <th>Detalle</th>
                        <th>M2</th>
                        <th>Factor</th>
                        <th>Placas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-bold">PLACAS</td>
                        <td>
                          <q-input v-model="$store.pvcTablilla" outlined label="PVC tablilla" class="bg-orange"/>
                        </td>
                        <td>
                          <q-input v-model="$store.pvcTablillaConstante" outlined label="Constante" readonly/>
                        </td>
                        <td>
                          <q-input :model-value="pvcTablillaPlacas" outlined label="Placas" readonly/>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-bold">CORINSA</td>
                        <td>
                          <q-input :model-value="pvcTablillaRaiz" outlined label="PVC tablilla" readonly/>
                        </td>
                        <td>
                          <q-input v-model="pvcTablillaConstanteCorinsa" outlined label="Constante" readonly/>
                        </td>
                        <td>
                          <q-input :model-value="pvcTablillaConrinzaPlaca" outlined label="Placas" readonly/>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-bold">OMEGA</td>
                        <td>
                          <q-input v-model="$store.pvcTablilla" outlined label="PVC tablilla" readonly/>
                        </td>
                        <td>
                          <q-input :model-value="pvcTablilla1_8" outlined label="Constante" readonly/>
                        </td>
                        <td>
                          <q-input :model-value="pvcTablilla1_8" outlined label="Placas" readonly/>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-bold">SOLERA</td>
                        <td>
                          <q-input v-model="$store.pvcTablilla" outlined label="PVC tablilla" readonly/>
                        </td>
                        <td>
                          <q-input v-model="pvcTablilla3_6" outlined label="Constante" readonly/>
                        </td>
                        <td>
                          <q-input :model-value="pvcTablilla3_6" outlined label="Placas" readonly/>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-bold">ANGULAR</td>
                        <td>
                          <q-input v-model="$store.pvcTablilla" outlined label="PVC tablilla" readonly/>
                        </td>
                        <td>
                          <q-input outlined label="Constante" readonly/>
                        </td>
                        <td>
                          <q-input :model-value="pvcTablilla5_4" outlined label="Placas" readonly/>
                        </td>
                      </tr>
                    </tbody>
                  </q-markup-table>
<!--                </div>-->
<!--              </div>-->
            </q-tab-panel>
            <q-tab-panel name="Calculo cielo falso desmontable 0,60 x 0,60">
              <div class="text-h6">Calculo cielo falso desmontable 0,60 x 0,60</div>
              <q-markup-table>
                <thead>
                <tr>
                  <th>Detalle</th>
                  <th>M2</th>
                  <th>Factor</th>
                  <th>Placas</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="text-bold">PLACAS</td>
                  <td>
                    <q-input v-model="$store.cieloFalsoDesmontable" outlined label="PVC tablilla" class="bg-orange"/>
                  </td>
                  <td>
                    <q-input v-model="$store.cieloFalsoDesmontableConstantePlaca" outlined label="Constante" readonly/>
                  </td>
                  <td>
                    <q-input :model-value="cieloFalsoPlaca" outlined label="Placas" readonly/>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">CORINSA</td>
                  <td>
                    <q-input :model-value="cieloFalsoDesmontableRaiz" outlined label="PVC tablilla" readonly/>
                  </td>
                  <td>
                    <q-input v-model="cieloFalsoDesmontableCorinsaConstante" outlined label="Constante" readonly/>
                  </td>
                  <td>
                    <q-input :model-value="cieloFalsoCorinsa" outlined label="Placas" readonly/>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">OMEGA</td>
                  <td>
                    <q-input v-model="$store.cieloFalsoDesmontable" outlined label="PVC tablilla" readonly/>
                  </td>
                  <td>
                    <q-input :model-value="cieloFalsoDesmontableOmegaConstante" outlined label="Constante" readonly/>
                  </td>
                  <td>
                    <q-input :model-value="cieloFalsoOmega" outlined label="Placas" readonly/>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">SOLERA</td>
                  <td>
                    <q-input v-model="$store.cieloFalsoDesmontable" outlined label="PVC tablilla" readonly/>
                  </td>
                  <td>
                    <q-input v-model="cieloFalsoDesmontableSoleraConstante" outlined label="Constante" readonly/>
                  </td>
                  <td>
                    <q-input :model-value="cieloFalsoSolera" outlined label="Placas" readonly/>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">ANGULAR</td>
                  <td>
                    <q-input v-model="$store.cieloFalsoDesmontable" outlined label="PVC tablilla" readonly/>
                  </td>
                  <td>
                    <q-input v-model="cieloFalsoDesmontableAngularConstante" outlined label="Constante" readonly/>
                  </td>
                  <td>
                    <q-input :model-value="cieloFalsoAngular" outlined label="Placas" readonly/>
                  </td>
                </tr>
                </tbody>
              </q-markup-table>
            </q-tab-panel>
            <q-tab-panel name="Calculo piso flotante 8 mm">
              <div class="text-h6 q-mb-md">Calculo piso flotante 8 mm</div>
              <div class="row">
                <div class="col-12 col-md-3">
                  <q-input outlined v-model="$store.pisoFlotante8mm" label="Area (m2)" class="bg-orange" />
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotante8mmConstante,3)" label="Constante" class="bg-white" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotante8mm/$store.pisoFlotante8mmConstante)" label="Piezas" class="bg-blue" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotante8mm/$store.pisoFlotante8mmConstante/10)" label="Cajas" class="bg-green" readonly/>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Calculo piso flotante SPC">
              <div class="text-h6 q-mb-md">Calculo piso flotante SPC</div>
              <div class="row">
                <div class="col-12 col-md-3">
                  <q-input outlined v-model="$store.pisoFlotanteSPC" label="Area (m2)" class="bg-orange" />
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotanteSPCConstante,3)" label="Constante" class="bg-white" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotanteSPC/$store.pisoFlotanteSPCConstante)" label="Piezas" class="bg-blue" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotanteSPC/$store.pisoFlotanteSPCConstante/8)" label="Cajas" class="bg-green" readonly/>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Calculo piso flotante 12 mm">
              <div class="text-h6 q-mb-md">Calculo piso flotante 12 mm</div>
              <div class="row">
                <div class="col-12 col-md-3">
                  <q-input outlined v-model="$store.pisoFlotante12mm" label="Area (m2)" class="bg-orange" />
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotante12mmConstante,3)" label="Constante" class="bg-white" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotante12mm/$store.pisoFlotante12mmConstante)" label="Piezas" class="bg-blue" readonly/>
                </div>
                <div class="col-12 col-md-3">
                  <q-input outlined :model-value="redondear($store.pisoFlotante12mm/$store.pisoFlotante12mmConstante/10)" label="Cajas" class="bg-green" readonly/>
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

import { Alert } from 'src/addons/Alert'

export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      producto: '',
      splitterModel: 20
      // area2PisoFlotante8mm: ''
    }
  },
  methods: {
    addProduct (cajas) {
      if (!this.producto) {
        Alert.error('Seleccione un producto')
        return false
      }
      this.$emit('addProduct', {
        producto: this.producto,
        cantidad: cajas
      })
    },
    redondear (value, decimals = 1) {
      return value.toFixed(decimals)
    }
  },
  computed: {
    piezasArea2PisoFlotante8mm () {
      const calculate = this.$store.area2PisoFlotante8mm / this.$store.area2PisoFlotante8mmConstante
      const redondear = Math.ceil(calculate)
      return redondear.toFixed(1)
    },
    cajasArea2PisoFlotante8mm () {
      const calculate = (this.$store.area2PisoFlotante8mm / this.$store.area2PisoFlotante8mmConstante) / 10
      const redondear = Math.ceil(calculate)
      return redondear.toFixed(1)
    },
    piezasArea2PisoFlotante12mm () {
      const calculate = this.$store.area2PisoFlotante12mm / this.$store.area2PisoFlotante12mmConstante
      const redondear = Math.ceil(calculate)
      return redondear.toFixed(1)
    },
    cajasArea2PisoFlotante12mm () {
      const calculate = (this.$store.area2PisoFlotante12mm / this.$store.area2PisoFlotante12mmConstante) / 10
      const redondear = Math.ceil(calculate)
      return redondear.toFixed(1)
    },
    pvcTablillaPlacas () {
      const calculate = this.$store.pvcTablilla / this.$store.pvcTablillaConstante
      return calculate.toFixed(1)
    },
    pvcTablillaRaiz () {
      const raizcudrada = Math.sqrt(this.$store.pvcTablilla, 2)
      return raizcudrada.toFixed(1)
    },
    pvcTablillaConrinzaPlaca () {
      const raizcudrada = Math.sqrt(this.$store.pvcTablilla, 2)
      const pvcTablillaConstanteCorinsa = this.$store.pvcTablillaConstanteCorinsa
      const calculate = (raizcudrada * pvcTablillaConstanteCorinsa) / 2
      return calculate.toFixed(1)
    },
    pvcTablillaConstanteCorinsa () {
      const calculate = this.$store.pvcTablillaConstanteCorinsa
      return calculate.toFixed(1)
    },
    pvcTablilla1_8 () {
      const calculate = this.$store.pvcTablilla / 1.8
      return calculate.toFixed(1)
    },
    pvcTablilla3_6 () {
      const calculate = this.$store.pvcTablilla / 3.6
      return calculate.toFixed(1)
    },
    pvcTablilla5_4 () {
      const calculate = this.$store.pvcTablilla / 5.4
      return calculate.toFixed(1)
    },
    cieloFalsoPlaca () {
      const calculate = this.$store.cieloFalsoDesmontable / this.$store.cieloFalsoDesmontableConstantePlaca
      return calculate.toFixed(1)
    },
    cieloFalsoDesmontableRaiz () {
      const raizcudrada = Math.sqrt(this.$store.cieloFalsoDesmontable, 2)
      return raizcudrada.toFixed(1)
    },
    cieloFalsoDesmontableCorinsaConstante () {
      const calculate = this.$store.cieloFalsoDesmontableConstanteAngular
      return calculate.toFixed(1)
    },
    cieloFalsoDesmontableOmegaConstante () {
      const calculate = this.$store.cieloFalsoDesmontableConstanteTransversal360
      return calculate.toFixed(1)
    },
    cieloFalsoDesmontableSoleraConstante () {
      const calculate = this.$store.cieloFalsoDesmontableConstanteTransversal120
      return calculate.toFixed(1)
    },
    cieloFalsoDesmontableAngularConstante () {
      const calculate = this.$store.cieloFalsoDesmontableConstanteTransversal060
      return calculate.toFixed(1)
    },
    cieloFalsoCorinsa () {
      const raizcudrada = Math.sqrt(this.$store.cieloFalsoDesmontable, 2)
      const cieloFalsoDesmontableConstanteAngular = this.$store.cieloFalsoDesmontableConstanteAngular
      const calculate = (raizcudrada * cieloFalsoDesmontableConstanteAngular)
      return calculate.toFixed(1)
    },
    cieloFalsoOmega () {
      const cieloFalsoDesmontableConstanteTransversal360 = this.$store.cieloFalsoDesmontableConstanteTransversal360
      const calculate = (this.$store.cieloFalsoDesmontable * cieloFalsoDesmontableConstanteTransversal360)
      return calculate.toFixed(1)
    },
    cieloFalsoSolera () {
      const cieloFalsoDesmontableConstanteTransversal120 = this.$store.cieloFalsoDesmontableConstanteTransversal120
      const calculate = (this.$store.cieloFalsoDesmontable * cieloFalsoDesmontableConstanteTransversal120)
      return calculate.toFixed(1)
    },
    cieloFalsoAngular () {
      const cieloFalsoDesmontableConstanteTransversal060 = this.$store.cieloFalsoDesmontableConstanteTransversal060
      const calculate = (this.$store.cieloFalsoDesmontable * cieloFalsoDesmontableConstanteTransversal060)
      return calculate.toFixed(1)
    }
  }
}
</script>
