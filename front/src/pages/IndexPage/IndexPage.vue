<template>
  <q-page class="q-pa-xs bg-grey-3">
    <div class="row">
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaInicioSemana" label="Fecha inicio" dense outlined type="date" class="bg-white" @update:model-value="salesGet('todo')"/>
      </div>
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaFinSemana" label="Fecha fin" dense outlined type="date" class="bg-white" @update:model-value="salesGet('todo')"/>
      </div>
      <div class="col-12 col-md-2 q-pa-xs">
        <q-input v-model="concepto" label="Buscar por concepto" dense outlined class="bg-white" debounce="300" clearable
                  placeholder="Buscar por concepto" @update:model-value="salesGet('todo')"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-2 q-pa-xs">
        <q-select v-model="user" label="Usuario" dense outlined class="bg-white" :options="users" map-options emit-value @update:model-value="salesGet('todo')" v-if="$store.user.type=='ADMINISTRADOR'"/>
<!--        <pre>{{user}}</pre>-->
      </div>
      <div class="col-12 col-md-2 q-pa-xs">
        <q-select v-model="metodo" label="Metodo" dense outlined class="bg-white"
                  :options="[ 'Todos',...$metodos]"
                  @update:model-value="salesGet('todo')" v-if="$store.user.type=='ADMINISTRADOR'"/>
        <!--        <pre>{{user}}</pre>-->
      </div>
<!--      <div class="col-12 col-md-1 text-right">-->
<!--        <q-btn class="" flat dense label="Exportar" color="primary"  icon="get_app" no-caps rounded @click="exportar" size="10px"/>-->
<!--      </div>-->
      <div class="col-12 col-md-2 text-right">
<!--        <q-btn dense label="Nuevo Venta" color="green"  icon="add_circle_outline" no-caps rounded to="/sale"/>-->
                <q-btn class="" flat dense label="Exportar" color="primary"  icon="get_app" no-caps rounded @click="exportar" size="10px"/>
        <q-btn dense label="Nuevo Gasto" color="red"  icon="add_circle_outline" no-caps rounded @click="gastoDialog = true"/>
      </div>
      <div class="col-12 col-md-3 q-pa-xs" v-if="$store.user.type=='ADMINISTRADOR'">
        <CardComponent class="cursor-pointer" :monto="ganancia" color="blue" title="Ganancia" icono="o_trending_up" @click="salesGet('todo')"/>
      </div>
      <div class="col-12 col-md-3 q-pa-xs" v-if="$store.user.type=='ADMINISTRADOR'">
        <CardComponent class="cursor-pointer" :monto="balance" color="grey" title="Balance" icono="o_trending_up" @click="salesGet('todo')"/>
      </div>
      <div class="col-12 col-md-3 q-pa-xs" v-if="$store.user.type=='ADMINISTRADOR'">
        <CardComponent class="cursor-pointer" :monto="ingreso" color="green" title="Ventas" icono="o_trending_up" @click="salesGet('ingreso')"/>
      </div>
      <div class="col-12 col-md-3 q-pa-xs" v-if="$store.user.type=='ADMINISTRADOR'">
        <CardComponent class="cursor-pointer" :monto="gasto" color="red" title="Gastos" icono="o_trending_down" @click="salesGet('egreso')"/>
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
                <div class="text-grey" v-if="props.row.client">{{ props.row.name==null?(props.row.client.id==28?'SN':props.row.client.nombre):props.row.name }}</div>
<!--                <pre>{{ props.row }}</pre>-->
              </q-td>
              <q-td key="montoTotal" :props="props" style="min-width: 120px">
<!--                <pre>{{props.row.descuento}}</pre>-->
<!--                si descuento es mayor que cero mostrar en color rojo-->
                <span :class="`text-${props.row.descuento>0?'red':'green'}`">{{ props.row.descuento }}Bs -</span>
                <span class="text-black">{{ props.row.total-props.row.descuento }}Bs</span>
                <span v-if="$store.user.type=='ADMINISTRADOR'">
                  -<span :class="`text-${props.row.tipo_venta=='INGRESO'?'green':'red'}`">{{ props.row.ganancia }}Bs</span>
                </span>
              </q-td>
              <q-td key="fechayhora" :props="props" style="min-width: 150px">
                {{ $filters.dateDmYHis(props.row.fecha_emision) }}
              </q-td>
              <q-td key="concepto" :props="props" class="">
                <div>
<!--                  {{ props.row.tipo_venta}}-->
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
                <p>{{ props.row.user?.name }}</p>
              </q-td>
              <q-td key="lugar" :props="props">
                <p>{{ props.row.lugar }}</p>
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
    exportar () {
      const data = [
        {
          sheet: 'Adults',
          columns: [
            { label: 'Proveedor / cliente', value: 'name' },
            { label: 'Monto total', value: 'total' },
            { label: 'Fecha y hora', value: 'fecha_emision' },
            { label: 'Concepto', value: 'concepto' },
            { label: 'Comentario', value: 'comentario' },
            { label: 'Egreso / ingreso', value: 'tipo_venta' },
            { label: 'Usuario', value: 'user.name' },
            { label: 'Lugar', value: 'lugar' }
          ],
          content: this.sales
        }
      ]

      Excel.export(data, 'ventas')
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
    ganancia () {
      const total = this.sales.reduce((acc, sale) => {
        return sale.tipo_venta === 'INGRESO' && sale.estado !== 'ANULADO' ? acc + sale.ganancia : acc
      }, 0)
      const totalDescuento = this.sales.reduce((acc, sale) => {
        return sale.tipo_venta === 'INGRESO' && sale.estado !== 'ANULADO' ? acc + sale.descuento : acc
      }, 0)
      // return Math.round(total * 100) / 100
      return Math.round((total - totalDescuento) * 100) / 100
    },
    balance () {
      const total = this.sales.reduce((acc, sale) => {
        // y que no se anulado
        // return sale.tipo_venta === 'INGRESO' ? acc + sale.total : acc - sale.total
        return sale.estado !== 'ANULADO' ? sale.tipo_venta === 'INGRESO' ? acc + sale.total : acc - sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    ingreso () {
      const total = this.sales.reduce((acc, sale) => {
        // y que no sea anulado
        return sale.tipo_venta === 'INGRESO' && sale.estado !== 'ANULADO' ? acc + sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    gasto () {
      const total = this.sales.reduce((acc, sale) => {
        // return sale.tipo_venta === 'EGRESO' ? acc + sale.total : acc
        // y que su estado no se anulado
        return sale.tipo_venta === 'EGRESO' && sale.estado !== 'ANULADO' ? acc + sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    }
  }
}
</script>
