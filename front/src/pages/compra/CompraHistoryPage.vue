<template>
  <q-page class="q-pa-xs bg-grey-3">
    <div class="row">
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaInicioSemana" label="Fecha inicio" dense outlined type="date" class="bg-white"/>
      </div>
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaFinSemana" label="Fecha fin" dense outlined type="date" class="bg-white"/>
      </div>
      <div class="col-12 col-md-3 q-pa-xs">
        <q-input v-model="concepto" label="Buscar por concepto" dense outlined class="bg-white" debounce="300" clearable
                  placeholder="Buscar por concepto"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-5 flex flex-center ">
        <q-btn label="Buscar" color="primary" @click="buyGet" class="full-width" icon="search" no-caps/>
<!--        <q-btn label="Nuevo Venta" color="green"  icon="add_circle_outline" no-caps rounded to="/buy"/>-->
<!--        <q-btn label="Nuevo Gasto" color="red"  icon="add_circle_outline" no-caps rounded @click="gastoDialog = true"/>-->
      </div>
      <div class="col-12 col-md-6 q-pa-xs">
        <CardComponent :monto="cantidad" color="grey" title="Cantidad" icono="o_trending_up" />
      </div>
      <div class="col-12 col-md-6 q-pa-xs">
        <CardComponent :monto="balance" color="green" title="Gastos" icono="o_trending_up" />
      </div>
<!--      <div class="col-12 col-md-4 q-pa-xs">-->
<!--        <CardComponent :monto="gasto" color="red" title="Gastos" icono="o_trending_down" />-->
<!--      </div>-->
      <div class="col-12">
        <q-table :columns="columns" :rows="buy" dense :rows-per-page-options="[0]" :filter="filter" :loading="loading" wrap-cells
                 no-data-label="No hay ventas" no-results-label="No hay ventas"
        >
          <template v-slot:top-right>
            <q-input outlined v-model="filter" debounce="300" placeholder="Buscar" dense>
              <template v-slot:append>
                <q-btn flat round dense icon="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="opcion" :props="props" auto-width>
                <q-btn-dropdown dense icon="more_vert" align="right" label="Opciones" no-caps color="primary" size="10px" v-if="props.row.estado=='ACTIVO'">
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Anular" color="red-4" size="10px" class="full-width"
                           no-caps no-wrap icon="o_highlight_off" @click="buyAnular(props.row.id)">
                      <q-tooltip>Anular venta</q-tooltip>
                    </q-btn>
                  </q-item>
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Imprimir" color="green-4" size="10px" class="full-width"
                           no-caps no-wrap icon="print" @click="reimprimirNota(props.row)">
                      <q-tooltip>Imprimir nota</q-tooltip>
                    </q-btn>
                  </q-item>
                  <!--                  <q-item clickable v-close-popup class="text-center">-->
                  <!--                    <q-btn dense label="Modificar" color="orange-4" size="10px" class="full-width"-->
                  <!--                           no-caps no-wrap icon="o_edit" @click="modificarNota(props.row)">-->
                  <!--                      <q-tooltip>Modificar nota</q-tooltip>-->
                  <!--                    </q-btn>-->
                  <!--                  </q-item>-->
                </q-btn-dropdown>
                <div v-else>
                  <q-btn dense label="Anulado" color="grey-4" size="10px" no-caps no-wrap icon="o_highlight_off" />
                </div>
              </q-td>
              <q-td key="concepto" :props="props" class="">
                <div>
<!--                  {{ props.row.tipo_venta}}-->
                  <q-btn icon="o_local_atm" size="15px" :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-7`"
                         :class="`bg-${props.row.tipo_venta=='INGRESO'?'green':'red'}-2`" dense flat
                         style="padding: 0px; margin: 0px; border-radius: 0px;position: absolute;top: 5px;left: 0px;"/>
                  <div style="padding-left: 15px">
                    <div class="text-grey q-ml-xs" style="width: 400px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">{{ props.row.observacion }}</div>
                  </div>
                </div>
              </q-td>
              <q-td key="montoTotal" :props="props">
                <span class="text-grey">{{ props.row.total }} Bs</span>
              </q-td>
              <q-td key="proveedorcliente" :props="props">
                <div class="text-grey" v-if="props.row.client">{{ props.row.client.nombre }}</div>
              </q-td>
              <q-td key="fechayhora" :props="props">
                <p>{{ $filters.dateDmYHis(props.row.fecha + ' ' + props.row.hora) }}</p>
              </q-td>
<!--              <q-td key="egresoingreso" :props="props">-->
<!--                <q-chip :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-5`" text-color="white" dense flat :label="props.row.tipo_venta"/>-->
<!--              </q-td>-->
              <q-td key="user" :props="props">
                <p>{{ props.row.user?.name }}</p>
              </q-td>
<!--              <q-td key="lugar" :props="props">-->
<!--                <p>{{ props.row.lugar }}</p>-->
<!--              </q-td>-->
            </q-tr>
          </template>
        </q-table>
        <pre>{{buy}}</pre>
      </div>
    </div>
  </q-page>
  <div id="myElement" class="hidden"></div>
</template>

<script>
import moment from 'moment'
import CardComponent from 'components/CardComponent.vue'
import { Imprimir } from 'src/addons/Imprimir'
export default {
  name: 'CompraHistoryPage',
  components: { CardComponent },
  data () {
    return {
      gastoDialog: false,
      fechaInicioSemana: moment().startOf('isoWeek').format('YYYY-MM-DD'),
      fechaFinSemana: moment().endOf('isoWeek').format('YYYY-MM-DD'),
      concepto: '',
      columns: [
        { name: 'opcion', label: 'Opcion', align: 'left', field: 'opcion' },
        { name: 'concepto', label: 'Concepto', align: 'left', field: 'concepto', sortable: true },
        { name: 'montoTotal', label: 'Monto total', align: 'left', field: 'montoTotal', sortable: true },
        // { name: 'agencia', label: 'Agencia', align: 'left', field: 'agencia', sortable: true },
        // { name: 'metodoPago', label: 'Metodo de pago', align: 'left', field: 'metodoPago', sortable: true },
        { name: 'proveedorcliente', label: 'Proveedor / cliente', align: 'left', field: 'proveedor / cliente', sortable: true },
        { name: 'fechayhora', label: 'Fecha y hora', align: 'left', field: 'fechayhora', sortable: true },
        // { name: 'egresoingreso', label: 'Egreso / ingreso', align: 'left', field: 'egreso / ingreso', sortable: true },
        { name: 'user', label: 'Usuario', align: 'left', field: (row) => row.user.name, sortable: true }
        // { name: 'lugar', label: 'lugar', align: 'left', field: (row) => row.user.lugar, sortable: true }
      ],
      buy: [],
      loading: false,
      filter: ''
    }
  },
  mounted () {
    this.buyGet()
  },
  methods: {
    reimprimirNota (row) {
      Imprimir.notaCompra(row)
    },
    buyAnular (id) {
      this.$q.dialog({
        title: 'Anular venta',
        message: '¿Está seguro de anular la venta?',
        persistent: true,
        ok: {
          label: 'Si',
          color: 'negative',
          push: true
        },
        cancel: {
          label: 'No',
          color: 'primary',
          push: true
        }
      }).onOk(() => {
        this.$axios.post('buyAnular', { id })
          .then(response => {
            this.buyGet()
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    gastoCreated (gasto) {
      // this.buy.push(gasto)
      // colocar al principio
      this.buy.unshift(gasto)
      this.gastoDialog = false
    },
    buyGet () {
      this.loading = true
      this.$axios.get('buys', {
        params: {
          fechaInicioSemana: this.fechaInicioSemana,
          fechaFinSemana: this.fechaFinSemana,
          concepto: this.concepto
        }
      })
        .then(response => {
          this.buy = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  computed: {
    balance () {
      const total = this.buy.reduce((acc, buy) => {
        // y que no se anulado
        // return buy.tipo_venta === 'INGRESO' ? acc + buy.total : acc - buy.total
        return buy.estado !== 'ANULADO' ? buy.tipo_venta === 'INGRESO' ? acc + buy.total : acc - buy.total : acc
      }, 0)
      return (Math.round(total * 100) / 100).toFixed(2)
    },
    cantidad () {
      const total = this.buy.reduce((acc, buy) => {
        // y que no se anulado
        return buy.estado !== 'ANULADO' ? acc + 1 : acc
      }, 0)
      return total
    },
    ingreso () {
      return this.buy.reduce((acc, buy) => {
        // y que no sea anulado
        return buy.tipo_venta === 'INGRESO' && buy.estado !== 'ANULADO' ? acc + buy.total : acc
      }, 0)
    },
    gasto () {
      return this.buy.reduce((acc, buy) => {
        // return buy.tipo_venta === 'EGRESO' ? acc + buy.total : acc
        // y que su estado no se anulado
        return buy.tipo_venta === 'EGRESO' && buy.estado !== 'ANULADO' ? acc + buy.total : acc
      }, 0)
    }
  }
}
</script>
