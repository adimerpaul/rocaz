<template>
<q-page class="q-pa-xs bg-grey-3">
  <q-card>
    <q-card-section class="q-pa-md">
      <q-item clickable >
        <q-item-section>
          <q-item-label class="text-subtitle2">Reporte de ventas</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="insert_chart" />
        </q-item-section>
      </q-item>
      <div class="row">
        <div class="col-12 col-md-2">
          <q-input v-model="fechaInicioSemana" label="Fecha inicio semana" type="date" outlined dense />
        </div>
        <div class="col-12 col-md-2">
          <q-input v-model="fechaFinSemana" label="Fecha fin semana" type="date" outlined dense />
        </div>
        <div class="col-12 col-md-2 flex flex-center">
          <q-btn @click="reporteVentas" label="Generar" color="primary" no-caps icon-right="send" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 q-pa-md">
          <q-card>
            <q-card-section class="q-pa-xs">
              <label class="text-bold">Total Ingresos</label>
              <div class="text-right">{{ingresos}} Bs.</div>
              <label class="text-bold">Total Egresos</label>
              <div class="text-right">{{egresos}} Bs.</div>
              <label class="text-bold">Total Ganancia</label>
              <div class="text-right text-bold text-red">{{ingresos-egresos}} Bs.</div>
              <label class="text-bold">Total Ganancia</label>
              <div class="text-right text-blue text-bold">{{ganancia}} Bs.</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <apexchart type="bar" :options="options" :series="series"></apexchart>
        </div>
        <div class="col-12 col-md-4">
          <apexchart width="400px" type="donut" :options="options2" :series="series2"></apexchart>
        </div>
        <div class="col-12 col-md-6 q-pa-xs">
          <div class="text-bold text-center text-green">Ingresos</div>
          <q-markup-table flat bordered dense>
            <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(res, i) in resIngresos" :key="res.id">
                <td>{{++i}}</td>
                <td>{{res.name}}</td>
                <td>{{res.fecha_emision}}</td>
                <td class="text-right text-bold">{{res.total}}</td>
              </tr>
              <tr>
                <td colspan="3" class="text-right text-bold">Total</td>
                <td class="text-right text-bold">{{ingresos}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
        <div class="col-12 col-md-6 q-pa-xs">
          <div class="text-bold text-center text-red">Egresos</div>
          <q-markup-table flat bordered dense>
            <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(res, i) in resEgresos" :key="res.id">
              <td>{{++i}}</td>
              <td>{{res.client.nombre}}</td>
              <td>{{res.fecha_emision}}</td>
              <td class="text-right text-bold">{{res.total}}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right text-bold">Total</td>
              <td class="text-right text-bold">{{egresos}}</td>
            </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </q-card-section>
  </q-card>
</q-page>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      fechaInicioSemana: moment().startOf('isoWeek').format('YYYY-MM-DD'),
      fechaFinSemana: moment().endOf('isoWeek').format('YYYY-MM-DD'),
      options: {
        chart: {
          type: 'bar',
          distributed: true
        },
        colors: ['#21BA45', '#C10015', '#31CCEC'],
        plotOptions: {
          bar: {
            distributed: true,
            // borderRadius: 10,
            dataLabels: {
              position: 'top'
            }
          }
        },
        xaxis: {
          categories: ['Ingresos', 'Egresos', 'Ganancia'],
          labels: {
            style: {
              colors: ['#21BA45', '#C10015', '#31CCEC'],
              fontSize: '12px'
            }
          }
        }
      },
      series: [{
        name: 'series-1',
        data: [0, 0, 0]
      }],
      options2: {
        colors: ['#21BA45', '#C10015', '#31CCEC'],
        chart: {
          type: 'donut'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series2: [0, 0, 0],
      ingresos: 0,
      egresos: 0,
      ganancia: 0,
      resIngresos: [],
      resEgresos: []
    }
  },
  mounted () {
    this.reporteVentas()
  },
  methods: {
    reporteVentas () {
      this.$axios.post('reportProductos', {
        fechaInicioSemana: this.fechaInicioSemana,
        fechaFinSemana: this.fechaFinSemana
      }).then(res => {
        this.ingresos = res.data.ingresos
        this.egresos = res.data.egresos
        this.ganancia = res.data.ganancia
        this.resIngresos = res.data.resIngresos
        this.resEgresos = res.data.resEgresos
        this.series[0].data = [res.data.ingresos, res.data.egresos, res.data.ganancia]
        this.series2 = [res.data.ingresos, res.data.egresos, res.data.ganancia]
        // console.log(response.data)
        // this.chartData = {
        //   labels: response.data.labels,
        //   datasets: [{ data: response.data.data }]
        // }
      })
    }
  }
}
</script>

<!--<template>-->
<!--  <Bar-->
<!--    id="my-chart-id"-->
<!--    :options="chartOptions"-->
<!--    :data="chartData"-->
<!--  />-->
<!--</template>-->

<!--<script>-->
<!--import { Bar } from 'vue-chartjs'-->
<!--// eslint-disable-next-line import/namespace-->
<!--import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'-->

<!--ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)-->

<!--export default {-->
<!--  name: 'BarChart',-->
<!--  components: { Bar },-->
<!--  data () {-->
<!--    return {-->
<!--      chartData: {-->
<!--        labels: ['January', 'February', 'March'],-->
<!--        datasets: [{ data: [40, 20, 12] }]-->
<!--      },-->
<!--      chartOptions: {-->
<!--        responsive: true-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
