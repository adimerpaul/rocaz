<template>
  <q-page class="q-pa-xs bg-grey-3">
    <div class="row">
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaInicioSemana" label="Fecha inicio" dense outlined type="date" class="bg-white" @update:model-value="salesGet"/>
      </div>
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaFinSemana" label="Fecha fin" dense outlined type="date" class="bg-white" @update:model-value="salesGet"/>
      </div>
      <div class="col-12 col-md-3 q-pa-xs">
        <q-input v-model="concepto" label="Buscar por concepto" dense outlined class="bg-white" debounce="300" clearable
                  placeholder="Buscar por concepto" @update:model-value="salesGet"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-5 text-right">
        <q-btn label="Nuevo Venta" color="green"  icon="add_circle_outline" no-caps rounded to="/sale"/>
        <q-btn label="Nuevo Gasto" color="red"  icon="add_circle_outline" no-caps rounded @click="gastoDialog = true"/>
      </div>
      <div class="col-12 col-md-4 q-pa-xs">
        <CardComponent :monto="balance" color="grey" title="Balance" icono="o_trending_up" />
      </div>
      <div class="col-12 col-md-4 q-pa-xs">
        <CardComponent :monto="ingreso" color="green" title="Ventas" icono="o_trending_up" />
      </div>
      <div class="col-12 col-md-4 q-pa-xs">
        <CardComponent :monto="gasto" color="red" title="Gastos" icono="o_trending_down" />
      </div>
      <div class="col-12">
        <q-table :columns="columns" :rows="sales" dense :rows-per-page-options="[0]" :filter="filter" :loading="loading" wrap-cells
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
                <q-btn-group v-if="props.row.estado=='ACTIVO'">
                  <q-btn dense label="Anular" color="red-4" size="10px"
                         no-caps no-wrap icon="o_highlight_off" @click="saleDelete(props.row.id)">
                    <q-tooltip>Anular venta</q-tooltip>
                  </q-btn>
                </q-btn-group>
                <div v-else>
                  <q-btn dense label="Anulado" color="grey-4" size="10px" no-caps no-wrap icon="o_highlight_off" />
                </div>
              </q-td>
              <q-td key="concepto" :props="props" class="">
                <div>
                  <q-btn icon="o_local_atm" size="15px" :color="`${props.row.tipoVenta=='Ingreso'?'green':'red'}-7`"
                         :class="`bg-${props.row.tipoVenta=='Ingreso'?'green':'red'}-2`" dense flat
                         style="padding: 0px; margin: 0px; border-radius: 0px;position: absolute;top: 5px;left: 0px;"/>
                  <div style="padding-left: 15px">
                    <div class="text-grey q-ml-xs" style="width: 400px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">{{ props.row.concepto }}</div>
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
                <p>{{ $filters.dateDmYHis(props.row.fecha_emision) }}</p>
              </q-td>
              <q-td key="egresoingreso" :props="props">
                <q-chip :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-5`" text-color="white" dense flat :label="props.row.tipo_venta"/>
              </q-td>
              <q-td key="user" :props="props">
                <p>{{ props.row.user?.name }}</p>
              </q-td>
            </q-tr>
          </template>
        </q-table>
<!--        <pre>{{sales}}</pre>-->
      </div>
    </div>
  </q-page>
  <q-dialog v-model="gastoDialog" position="right" maximized>
    <DialogGasto @gastoCreated="gastoCreated"/>
  </q-dialog>
</template>

<script>
import moment from 'moment'
import CardComponent from 'components/CardComponent.vue'
import DialogGasto from 'pages/IndexPage/DialogGasto.vue'
export default {
  name: 'IndexPage',
  components: { DialogGasto, CardComponent },
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
        { name: 'egresoingreso', label: 'Egreso / ingreso', align: 'left', field: 'egreso / ingreso', sortable: true },
        { name: 'user', label: 'Usuario', align: 'left', field: (row) => row.user.name, sortable: true }
      ],
      sales: [],
      loading: false,
      filter: ''
    }
  },
  mounted () {
    this.salesGet()
  },
  methods: {
    gastoCreated (gasto) {
      // this.sales.push(gasto)
      // colocar al principio
      this.sales.unshift(gasto)
      this.gastoDialog = false
    },
    salesGet () {
      this.loading = true
      this.$axios.get('sales', {
        params: {
          fechaInicioSemana: this.fechaInicioSemana,
          fechaFinSemana: this.fechaFinSemana,
          concepto: this.concepto
        }
      })
        .then(response => {
          this.sales = response.data
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
      return this.sales.reduce((acc, sale) => {
        return sale.tipo_venta === 'INGRESO' ? acc + sale.total : acc - sale.total
      }, 0)
    },
    ingreso () {
      return this.sales.reduce((acc, sale) => {
        return sale.tipo_venta === 'INGRESO' ? acc + sale.total : acc
      }, 0)
    },
    gasto () {
      return this.sales.reduce((acc, sale) => {
        return sale.tipo_venta === 'EGRESO' ? acc + sale.total : acc
      }, 0)
    }
  }
}
</script>
