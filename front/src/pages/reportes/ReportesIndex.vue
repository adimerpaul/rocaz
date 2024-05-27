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
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
            <Bar
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
            />
        </div>
      </div>
    </q-card-section>
  </q-card>
</q-page>
</template>
<script>
import moment from 'moment'
import { Bar } from 'vue-chartjs'
// eslint-disable-next-line import/namespace
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  components: { Bar },
  data () {
    return {
      fechaInicioSemana: moment().startOf('isoWeek').format('YYYY-MM-DD'),
      fechaFinSemana: moment().endOf('isoWeek').format('YYYY-MM-DD'),
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    reporteVentas () {
      this.$router.push({ name: 'reporte-ventas' })
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
