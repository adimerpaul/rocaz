<template>
<q-page class="q-pa-xs bg-grey-3">
  <q-card>
    <q-card-section class="q-pa-md">
      <q-item clickable @click="reporteVentas">
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
      fechaFinSemana: moment().endOf('isoWeek').format('YYYY-MM-DD')
    }
  },
  methods: {
    reporteVentas () {
      this.$router.push({ name: 'reporte-ventas' })
    }
  }
}
</script>
