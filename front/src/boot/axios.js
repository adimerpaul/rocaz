import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useCounterStore } from 'stores/example-store'
import { Alert } from 'src/addons/Alert'
import moment from 'moment'
import { Excel } from 'src/addons/Excel'
import HighchartsVue from 'highcharts-vue'
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })

export default boot(({ app, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.use(HighchartsVue)
  app.config.globalProperties.$axios = axios.create({ baseURL: import.meta.env.VITE_BACK })
  app.config.globalProperties.$alert = Alert
  app.config.globalProperties.$excel = Excel
  app.config.globalProperties.$metodos = ['EFECTIVO', 'TRANSFERENCIA', 'QR']
  app.config.globalProperties.$url = import.meta.env.VITE_BACK
  app.config.globalProperties.$store = useCounterStore()
  app.config.globalProperties.$filters = {
    dateDmYHis (value) {
      const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Nov', 'Dic']
      const mes = meses[moment(String(value)).format('MM') - 1]
      if (!value) return ''
      const date = moment(String(value)).format('DD') + ' ' + mes + ' ' + moment(String(value)).format('YYYY') + ' ' + moment(String(value)).format('HH:mm')
      return date
    },
    capitalize (value) {
      if (!value) return ''
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
  const token = localStorage.getItem('tokenRocaz')
  if (token) {
    app.config.globalProperties.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
    app.config.globalProperties.$axios.get('me').then((response) => {
      useCounterStore().user = response.data
    }).catch(() => {
      console.log('error')
      localStorage.removeItem('tokenRocaz')
      useCounterStore().user = null
      useCounterStore().isLogin = false
      router.push('/login')
    })
  }
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
