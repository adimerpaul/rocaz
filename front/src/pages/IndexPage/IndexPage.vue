<template>
  <q-page class="index-page q-pa-sm">
    <q-card flat bordered class="q-mb-sm page-block">
      <q-card-section class="q-pa-sm">
        <div class="row q-col-gutter-sm items-start">
          <div class="col-6 col-md-2">
            <q-input v-model="fechaInicioSemana" label="Fecha inicio" dense outlined type="date" class="bg-white" @update:model-value="salesGet('todo')" />
          </div>
          <div class="col-6 col-md-2">
            <q-input v-model="fechaFinSemana" label="Fecha fin" dense outlined type="date" class="bg-white" @update:model-value="salesGet('todo')" />
          </div>
          <div class="col-12 col-md-3">
            <q-input
              v-model="concepto"
              label="Buscar por concepto"
              dense
              outlined
              class="bg-white"
              debounce="300"
              clearable
              placeholder="Buscar por concepto"
              @update:model-value="salesGet('todo')"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-2" v-if="$store.user.type=='ADMINISTRADOR'">
            <q-select v-model="user" label="Usuario" dense outlined class="bg-white" :options="users" map-options emit-value @update:model-value="salesGet('todo')" />
          </div>
          <div class="col-12 col-md-2" v-if="$store.user.type=='ADMINISTRADOR'">
            <q-select v-model="metodo" label="Metodo" dense outlined class="bg-white" :options="[ 'Todos',...$metodos]" @update:model-value="salesGet('todo')" />
          </div>
          <div class="col-12 col-md-2 col-lg-2" v-if="$store.user.type=='ADMINISTRADOR'">
            <q-btn-dropdown
              unelevated
              dense
              no-caps
              color="primary"
              icon="get_app"
              label="Exportar"
              dropdown-icon="expand_more"
              class="full-width"
            >
              <q-list dense style="min-width: 180px">
                <q-item v-for="option in exportOptions" :key="option.value" clickable v-close-popup @click="exportar(option.value)">
                  <q-item-section avatar>
                    <q-icon :name="option.icon" :color="option.color" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ option.label }}</q-item-label>
                    <q-item-label caption>{{ option.caption }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="col-12 col-md-2 col-lg-2">
            <q-btn dense label="Nuevo Gasto" color="red" icon="add_circle_outline" no-caps rounded @click="gastoDialog = true" size="11px" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="row q-col-gutter-sm q-mb-sm" v-if="$store.user.type=='ADMINISTRADOR'">
      <div class="col-12 col-sm-6 col-md-3">
        <CardComponent class="cursor-pointer summary-card" :monto="ganancia" color="blue" title="Ganancia" icono="o_trending_up" @click="salesGet('todo')" />
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <CardComponent class="cursor-pointer summary-card" :monto="balance" color="grey" title="Balance" icono="o_trending_up" @click="salesGet('todo')" />
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <CardComponent class="cursor-pointer summary-card" :monto="ingreso" color="green" title="Ventas" icono="o_trending_up" @click="salesGet('ingreso')" />
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <CardComponent class="cursor-pointer summary-card" :monto="gasto" color="red" title="Gastos" icono="o_trending_down" @click="salesGet('egreso')" />
      </div>
    </div>

    <q-card flat bordered class="page-block">
      <q-card-section class="q-pa-none">
        <q-table
          :columns="columns"
          :rows="sales"
          dense
          flat
          :rows-per-page-options="[0]"
          :filter="filter"
          :loading="loading"
          wrap-cells
          no-data-label="No hay ventas"
          no-results-label="No hay ventas"
        >
          <template v-slot:top-right>
            <q-input outlined v-model="filter" debounce="300" placeholder="Buscar" dense class="q-ma-sm search-input">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="opcion" :props="props" auto-width>
<!--                <q-btn-group v-if="props.row.estado=='ACTIVO'">-->
<!--                  <q-btn dense label="Anular" color="red-4" size="10px"-->
<!--                         no-caps no-wrap icon="o_highlight_off" @click="saleAnular(props.row.id)">-->
<!--                    <q-tooltip>Anular venta</q-tooltip>-->
<!--                  </q-btn>-->
<!--                </q-btn-group>-->
                <q-btn-dropdown dense icon="more_vert" align="right" label="Opciones" no-caps
                                :color="props.row.tipo_venta=='INGRESO'?'green-9':'red-9'"
                                size="10px" v-if="props.row.estado=='ACTIVO'">
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Anular" color="red-4" size="10px" class="full-width"
                           no-caps no-wrap icon="o_highlight_off" @click="saleAnular(props.row.id)">
                      <q-tooltip>Anular venta</q-tooltip>
                    </q-btn>
                  </q-item>
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Imprimir" color="green-4" size="10px" class="full-width"
                           no-caps no-wrap icon="print" @click="reimprimirNota(props.row)">
                      <q-tooltip>Imprimir nota</q-tooltip>
                    </q-btn>
                  </q-item>
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Descargar" color="blue-4" size="10px" class="full-width"
                           no-caps no-wrap icon="get_app" @click="descargarDpf(props.row)">
                      <q-tooltip>Descargar nota</q-tooltip>
                    </q-btn>
                  </q-item>
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Comentario Credito" color="orange-4" size="10px" class="full-width"
                           no-caps no-wrap icon="o_edit" @click="modificarComentarioMetodo(props.row)">
                      <q-tooltip>Comentario Credito</q-tooltip>
                    </q-btn>
                  </q-item>
                </q-btn-dropdown>
                <div v-else>
                  <q-btn dense label="Anulado" color="grey-4" size="10px" no-caps no-wrap icon="o_highlight_off" />
                </div>
              </q-td>
              <q-td key="proveedorcliente" :props="props">
                <div class="text-grey-8 text-weight-medium" v-if="props.row.client">{{ props.row.name==null?(props.row.client.id==28?'SN':props.row.client.nombre):props.row.name }}</div>
              </q-td>
              <q-td key="montoTotal" :props="props" style="min-width: 120px">
                <span :class="`text-${props.row.descuento>0?'red':'green'}`" v-if="props.row.descuento > 0">
                  {{ props.row.descuento }}Bs -
                </span>
                <span class="text-black text-weight-medium">{{ getSaleNetTotal(props.row) }}Bs</span>
                <span v-if="$store.user.type=='ADMINISTRADOR'">
                  / <span :class="`text-${props.row.tipo_venta=='INGRESO'?'green':'red'}`">{{ getSaleProfit(props.row) }}Bs</span>
                </span>
              </q-td>
              <q-td key="fechayhora" :props="props" style="min-width: 150px">
                {{ $filters.dateDmYHis(props.row.fecha_emision) }}
              </q-td>
              <q-td key="concepto" :props="props" class="">
                <div>
                  <q-btn icon="o_local_atm" size="15px" :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-7`"
                         :class="`bg-${props.row.tipo_venta=='INGRESO'?'green':'red'}-2`" dense flat
                         style="padding: 0px; margin: 0px; border-radius: 0px;position: absolute;top: 5px;left: 0px;"/>
                  <div style="padding-left: 15px">
                    <div class=" q-ml-xs" style="width: 200px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">{{ props.row.concepto }}</div>
                  </div>
                </div>
              </q-td>
              <q-td key="comentario" :props="props">
                <div class="" style="width: 200px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">{{ props.row.comentario }}</div>
              </q-td>
              <q-td key="egresoingreso" :props="props">
                <q-chip :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-5`" text-color="white" dense flat :label="props.row.tipo_venta"/>
              </q-td>
              <q-td key="metodo" :props="props">
                <q-chip :color="`${props.row.metodo=='EFECTIVO'?'blue':'orange'}-5`" text-color="white" dense flat :label="props.row.metodo"/>
              </q-td>
              <q-td key="user" :props="props">
                <span class="text-grey-8">{{ props.row.user?.name }}</span>
              </q-td>
              <q-td key="lugar" :props="props">
                <span class="text-grey-8">{{ props.row.lugar }}</span>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
  <q-dialog v-model="gastoDialog" position="right" maximized>
    <DialogGasto @gastoCreated="gastoCreated"/>
  </q-dialog>
  <q-dialog v-model="comentarioMetodoDialog" >
    <q-card style="width: 400px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Modificar Credito</div>
        <q-space />
        <q-btn flat round dense icon="close" @click="comentarioMetodoDialog = false"/>
      </q-card-section>
      <q-card-section>
<!--        <q-card>-->
<!--          <q-card-section>-->
            <q-input v-model="sale.comentario" label="Comentario" outlined dense type="textarea"/>
<!--          </q-card-section>-->
<!--          <q-card-section>-->
<!--            <q-select v-model="sale.metodo" label="Metodo" outlined dense :de-->
            <q-select dense outlined v-model="sale.metodo" label="Metodo de pago"
                      :options="$metodos" hint="Metodo de pago del gasto" >
              <template v-slot:prepend>
                <q-icon name="o_payment" />
              </template>
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section :class="scope.opt == 'CREDITO' ? 'bg-red text-white' : ''">
                    <q-item-label>
                      {{ scope.opt }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
<!--          </q-card-section>-->
          <q-card-actions align="right">
            <q-btn label="Cancelar" color="red" @click="comentarioMetodoDialog = false" :loading="loading"/>
            <q-btn label="Guardar" color="green" @click="updateSaleComentarioEfectivo" :loading="loading"/>
          </q-card-actions>
<!--        </q-card>-->
      </q-card-section>
    </q-card>
  </q-dialog>
  <div id="myElement" class="hidden"></div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import moment from 'moment'
import CardComponent from 'components/CardComponent.vue'
import DialogGasto from 'pages/IndexPage/DialogGasto.vue'
import { Imprimir } from 'src/addons/Imprimir'
import { Excel } from 'src/addons/Excel'
export default {
  name: 'IndexPage',
  components: { DialogGasto, CardComponent },
  data () {
    return {
      metodo: 'Todos',
      gastoDialog: false,
      fechaInicioSemana: moment().startOf('isoWeek').format('YYYY-MM-DD'),
      fechaFinSemana: moment().endOf('isoWeek').format('YYYY-MM-DD'),
      concepto: '',
      columns: [
        { name: 'opcion', label: 'Opcion', align: 'left', field: 'opcion' },
        { name: 'proveedorcliente', label: 'Proveedor / cliente', align: 'left', field: 'proveedor / cliente', sortable: true },
        { name: 'montoTotal', label: 'Monto total', align: 'left', field: 'montoTotal', sortable: true },
        { name: 'fechayhora', label: 'Fecha y hora', align: 'left', field: 'fechayhora', sortable: true },
        { name: 'concepto', label: 'Concepto', align: 'left', field: 'concepto', sortable: true },
        { name: 'comentario', label: 'Comentario', align: 'left', field: 'comentario', sortable: true },
        // { name: 'agencia', label: 'Agencia', align: 'left', field: 'agencia', sortable: true },
        // { name: 'metodoPago', label: 'Metodo de pago', align: 'left', field: 'metodoPago', sortable: true },
        { name: 'egresoingreso', label: 'Egreso / ingreso', align: 'left', field: 'egreso / ingreso', sortable: true },
        { name: 'metodo', label: 'Metodo', align: 'left', field: 'metodo', sortable: true },
        { name: 'user', label: 'Usuario', align: 'left', field: (row) => row.user.name, sortable: true },
        { name: 'lugar', label: 'lugar', align: 'left', field: (row) => row.user.lugar, sortable: true }
      ],
      sales: [],
      loading: false,
      filter: '',
      users: [],
      user: 0,
      comentarioMetodoDialog: false,
      sale: {}
    }
  },
  mounted () {
    this.usersGet()
    this.salesGet()
  },
  methods: {
    getSaleNetTotal (sale) {
      return Math.round(((sale.total || 0) - (sale.descuento || 0)) * 100) / 100
    },
    getSaleProfit (sale) {
      if (sale.tipo_venta !== 'INGRESO' || sale.estado === 'ANULADO') return 0
      return Math.round((((sale.ganancia || 0) - (sale.descuento || 0)) * 100)) / 100
    },
    updateSaleComentarioEfectivo () {
      this.loading = true
      this.$axios.post('updateSaleComentarioEfectivo', this.sale)
        .then(response => {
          this.salesGet()
          this.comentarioMetodoDialog = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    modificarComentarioMetodo (sale) {
      this.comentarioMetodoDialog = true
      this.sale = { ...sale }
    },
    usersGet () {
      this.users = [{ label: 'Todos', value: 0 }]
      this.$axios.get('usuarios')
        .then(response => {
          response.data.forEach(user => {
            this.users.push({ label: user.name, value: user.id })
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    exportar (type) {
      if (!type) return

      const exportConfig = this.buildExportConfig(type)
      Excel.export(exportConfig.data, exportConfig.fileName)
      this.exportOption = null
    },
    buildExportConfig (type) {
      const fileBase = `movimientos_${type}_${this.fechaInicioSemana}_${this.fechaFinSemana}`
      const commonColumns = [
        { label: 'Proveedor / Cliente', value: 'cliente' },
        { label: 'Monto total', value: 'monto_total' },
        { label: 'Descuento', value: 'descuento' },
        { label: 'Monto neto', value: 'neto' },
        { label: 'Fecha y hora', value: 'fecha_emision' },
        { label: 'Concepto', value: 'concepto' },
        { label: 'Comentario', value: 'comentario' },
        { label: 'Tipo', value: 'tipo_venta' },
        { label: 'Metodo pago', value: 'metodo' },
        { label: 'Usuario', value: 'usuario' },
        { label: 'Lugar', value: 'lugar' },
        { label: 'Estado', value: 'estado' }
      ]

      if (type === 'ganancias') {
        return {
          fileName: fileBase,
          data: [
            {
              sheet: 'Ganancias',
              columns: [
                { label: 'Proveedor / Cliente', value: 'cliente' },
                { label: 'Monto total', value: 'monto_total' },
                { label: 'Descuento', value: 'descuento' },
                { label: 'Monto neto', value: 'neto' },
                { label: 'Ganancia', value: 'ganancia' },
                { label: 'Fecha y hora', value: 'fecha_emision' },
                { label: 'Concepto', value: 'concepto' },
                { label: 'Metodo pago', value: 'metodo' },
                { label: 'Usuario', value: 'usuario' },
                { label: 'Lugar', value: 'lugar' },
                { label: 'Estado', value: 'estado' }
              ],
              content: this.sales
                .filter(item => item.tipo_venta === 'INGRESO' && item.estado !== 'ANULADO')
                .map(this.mapSaleForExport)
            }
          ]
        }
      }

      const filteredSales = this.sales.filter(item => {
        if (type === 'ventas') return item.tipo_venta === 'INGRESO'
        if (type === 'gastos') return item.tipo_venta === 'EGRESO'
        return true
      })

      return {
        fileName: fileBase,
        data: [
          {
            sheet: this.exportOptions.find(option => option.value === type)?.label || 'Movimientos',
            columns: commonColumns,
            content: filteredSales.map(this.mapSaleForExport)
          }
        ]
      }
    },
    mapSaleForExport (sale) {
      const cliente = sale.name == null
        ? (sale.client?.id === 28 ? 'SN' : sale.client?.nombre || '')
        : sale.name

      return {
        cliente,
        monto_total: sale.total,
        descuento: sale.descuento,
        neto: this.getSaleNetTotal(sale),
        ganancia: this.getSaleProfit(sale),
        fecha_emision: sale.fecha_emision,
        concepto: sale.concepto,
        comentario: sale.comentario,
        tipo_venta: sale.tipo_venta,
        metodo: sale.metodo,
        usuario: sale.user?.name || '',
        lugar: sale.lugar || sale.user?.lugar || '',
        estado: sale.estado || ''
      }
    },
    reimprimirNota (sale) {
      Imprimir.nota(sale).then(r => {
        // console.log(r)
      })
    },
    descargarDpf (sale) {
      const element = document.getElementById('myElement')
      element.classList.remove('hidden')
      Imprimir.nota(sale, false).then(r => {
        const element = document.getElementById('myElement')
        const options = {
          margin: 1,
          filename: sale.concepto + '.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().set(options).from(element).save()
        setTimeout(() => {
          element.classList.add('hidden')
        }, 300)
      })
    },
    saleAnular (id) {
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
        this.$axios.post('saleAnular', { id })
          .then(response => {
            this.salesGet()
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    gastoCreated (gasto) {
      // this.sales.push(gasto)
      // colocar al principio
      this.sales.unshift(gasto)
      this.gastoDialog = false
    },
    salesGet (type = 'todo') {
      this.loading = true
      this.$axios.get('sales', {
        params: {
          fechaInicioSemana: this.fechaInicioSemana,
          fechaFinSemana: this.fechaFinSemana,
          concepto: this.concepto,
          user: this.user,
          metodo: this.metodo,
          type
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
    exportOptions () {
      return [
        { label: 'Todo', value: 'todo', icon: 'table_view', color: 'primary', caption: 'Todos los movimientos' },
        { label: 'Ventas', value: 'ventas', icon: 'trending_up', color: 'green', caption: 'Solo ingresos' },
        { label: 'Gastos', value: 'gastos', icon: 'trending_down', color: 'red', caption: 'Solo egresos' },
        { label: 'Ganancias', value: 'ganancias', icon: 'payments', color: 'blue', caption: 'Resumen de utilidad' }
      ]
    },
    ganancia () {
      const total = this.sales.reduce((acc, sale) => {
        return acc + this.getSaleProfit(sale)
      }, 0)
      return Math.round(total * 100) / 100
    },
    balance () {
      const total = this.sales.reduce((acc, sale) => {
        if (sale.estado === 'ANULADO') return acc
        return sale.tipo_venta === 'INGRESO'
          ? acc + this.getSaleNetTotal(sale)
          : acc - this.getSaleNetTotal(sale)
      }, 0)
      return Math.round(total * 100) / 100
    },
    ingreso () {
      const total = this.sales.reduce((acc, sale) => {
        return sale.tipo_venta === 'INGRESO' && sale.estado !== 'ANULADO' ? acc + this.getSaleNetTotal(sale) : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    gasto () {
      const total = this.sales.reduce((acc, sale) => {
        return sale.tipo_venta === 'EGRESO' && sale.estado !== 'ANULADO' ? acc + this.getSaleNetTotal(sale) : acc
      }, 0)
      return Math.round(total * 100) / 100
    }
  }
}
</script>

<style scoped>
.index-page {
  background: #f3f7f4;
}

.page-block {
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.96);
}

.summary-card {
  height: 100%;
}

.search-input {
  min-width: 220px;
}

</style>
