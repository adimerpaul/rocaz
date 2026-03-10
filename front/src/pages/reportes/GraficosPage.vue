<template>
  <q-page class="graphics-page q-pa-sm">
    <q-card flat bordered class="page-block q-mb-sm">
      <q-card-section class="q-pa-sm">
        <div class="row q-col-gutter-sm items-end">
          <div class="col-12 col-md-2">
            <q-select
              v-model="rangePreset"
              dense
              outlined
              label="Periodo"
              class="bg-white"
              :options="rangeOptions"
              @update:model-value="applyPreset"
            />
          </div>
          <div class="col-6 col-md-2">
            <q-input v-model="fechaInicioSemana" dense outlined type="date" label="Fecha inicio" class="bg-white" />
          </div>
          <div class="col-6 col-md-2">
            <q-input v-model="fechaFinSemana" dense outlined type="date" label="Fecha fin" class="bg-white" />
          </div>
          <div class="col-12 col-md-2">
            <q-btn unelevated no-caps color="primary" icon="insights" label="Actualizar" class="full-width" :loading="loading" @click="loadAnalytics" />
          </div>
          <div class="col-12 col-md-2">
            <div class="text-caption text-grey-7">
              Resumen visual por rango.
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="row q-col-gutter-sm q-mb-sm">
      <div class="col-6 col-md-4">
        <q-card flat bordered class="kpi-card">
          <q-card-section class="q-pa-xs">
            <div class="text-caption text-grey-7">Ingresos</div>
            <div class="text-subtitle1 text-green text-weight-bold">{{ resumen.ingresos }} Bs</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 col-md-4">
        <q-card flat bordered class="kpi-card">
          <q-card-section class="q-pa-xs">
            <div class="text-caption text-grey-7">Egresos</div>
            <div class="text-subtitle1 text-red text-weight-bold">{{ resumen.egresos }} Bs</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 col-md-4">
        <q-card flat bordered class="kpi-card">
          <q-card-section class="q-pa-xs">
            <div class="text-caption text-grey-7">Ganancia</div>
            <div class="text-subtitle1 text-blue text-weight-bold">{{ resumen.ganancia }} Bs</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 col-md-4">
        <q-card flat bordered class="kpi-card">
          <q-card-section class="q-pa-xs">
            <div class="text-caption text-grey-7">Mejor vendedor</div>
            <div class="text-body2 text-weight-bold">{{ resumen.mejorVendedor?.usuario || 'Sin datos' }}</div>
            <div class="text-caption text-primary">{{ resumen.mejorVendedor?.ventas || 0 }} Bs</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-sm">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="page-block chart-card">
          <q-card-section class="q-pa-sm">
            <div class="text-subtitle2 text-weight-bold q-mb-xs">Ventas y gastos por fecha</div>
            <apexchart height="260" type="bar" :options="barOptions" :series="barSeries" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card flat bordered class="page-block chart-card">
          <q-card-section class="q-pa-sm">
            <div class="text-subtitle2 text-weight-bold q-mb-xs">Ventas por metodo</div>
            <apexchart height="260" type="donut" :options="donutOptions" :series="donutSeries" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-sm q-mt-sm">
      <div class="col-12 col-lg-6">
        <q-card flat bordered class="page-block">
          <q-card-section class="q-pa-sm">
            <div class="text-subtitle2 text-weight-bold q-mb-xs">Ranking de vendedores</div>
            <q-markup-table dense flat>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Vendedor</th>
                  <th>Ventas</th>
                  <th>Ganancia</th>
                  <th>Mov.</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in analytics.vendedores" :key="item.usuario + index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.usuario }}</td>
                  <td class="text-right">{{ item.ventas }}</td>
                  <td class="text-right text-green">{{ item.ganancia }}</td>
                  <td class="text-right">{{ item.cantidad }}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-lg-6">
        <q-card flat bordered class="page-block">
          <q-card-section class="q-pa-sm">
            <div class="text-subtitle2 text-weight-bold q-mb-xs">Productos mas vendidos</div>
            <q-markup-table dense flat>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Ventas</th>
                  <th>Ganancia</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in analytics.productos" :key="item.producto + index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.producto }}</td>
                  <td class="text-right">{{ item.cantidad }}</td>
                  <td class="text-right">{{ item.ventas }}</td>
                  <td class="text-right text-primary">{{ item.ganancia }}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import moment from 'moment'

export default {
  name: 'GraficosPage',
  data () {
    return {
      loading: false,
      rangePreset: 'Mes',
      fechaInicioSemana: moment().startOf('month').format('YYYY-MM-DD'),
      fechaFinSemana: moment().endOf('month').format('YYYY-MM-DD'),
      analytics: {
        resumen: {
          ingresos: 0,
          egresos: 0,
          ganancia: 0,
          mejorVendedor: null
        },
        ventasPorDia: {
          labels: [],
          ventas: [],
          gastos: []
        },
        ventasPorMetodo: {
          labels: [],
          series: []
        },
        vendedores: [],
        productos: []
      },
      rangeOptions: ['Dia', 'Mes', 'Ano', 'Rango libre']
    }
  },
  computed: {
    resumen () {
      return this.analytics.resumen || {}
    },
    barOptions () {
      return {
        chart: {
          toolbar: { show: false }
        },
        colors: ['#1f9d55', '#d64545'],
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '48%'
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.analytics.ventasPorDia.labels
        },
        legend: {
          position: 'top'
        }
      }
    },
    barSeries () {
      return [
        { name: 'Ventas', data: this.analytics.ventasPorDia.ventas },
        { name: 'Gastos', data: this.analytics.ventasPorDia.gastos }
      ]
    },
    donutOptions () {
      return {
        labels: this.analytics.ventasPorMetodo.labels,
        colors: ['#1f9d55', '#2563eb', '#f59e0b', '#dc2626', '#7c3aed'],
        legend: {
          position: 'bottom'
        }
      }
    },
    donutSeries () {
      return this.analytics.ventasPorMetodo.series
    }
  },
  mounted () {
    this.loadAnalytics()
  },
  methods: {
    applyPreset (value) {
      if (value === 'Dia') {
        this.fechaInicioSemana = moment().format('YYYY-MM-DD')
        this.fechaFinSemana = moment().format('YYYY-MM-DD')
      }
      if (value === 'Mes') {
        this.fechaInicioSemana = moment().startOf('month').format('YYYY-MM-DD')
        this.fechaFinSemana = moment().endOf('month').format('YYYY-MM-DD')
      }
      if (value === 'Ano') {
        this.fechaInicioSemana = moment().startOf('year').format('YYYY-MM-DD')
        this.fechaFinSemana = moment().endOf('year').format('YYYY-MM-DD')
      }
      if (value !== 'Rango libre') {
        this.loadAnalytics()
      }
    },
    loadAnalytics () {
      this.loading = true
      this.$axios.post('sales-analytics', {
        fechaInicioSemana: this.fechaInicioSemana,
        fechaFinSemana: this.fechaFinSemana
      }).then(({ data }) => {
        this.analytics = data
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.graphics-page {
  background: #f3f7f4;
}

.page-block,
.kpi-card {
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.96);
}

.chart-card {
  min-height: 320px;
}
</style>
