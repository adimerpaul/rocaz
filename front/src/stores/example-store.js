import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user: {},
    tab: '',
    area2PisoFlotante8mm: '',
    area2PisoFlotante8mmConstante: 0.241164,
    area2PisoFlotante12mm: '',
    area2PisoFlotante12mmConstante: 0.241164,
    pvcTablilla: '',
    pvcTablillaConstante: 1.4875,
    pvcTablillaConstanteCorinsa: (4 / 3),
    cieloDrywall: '',
    cieloDrywallConstantePlaca: 2.88,
    cieloDrywallConstantePerimetralAngulo: (4 / 3),
    cieloDrywallConstanteOmega: 1.8,
    cieloDrywallConstanteMontante: 3.6,
    muroDrywall: '',
    muroDrywallConstantePlaca: 2.88,
    muroDrywallConstanteSolera: (4 / 3),
    muroDrywallConstanteMontante: 1.8,
    cieloFalsoDesmontable: '',
    cieloFalsoDesmontableConstantePlaca: 0.36,
    cieloFalsoDesmontableConstanteAngular: (4 / 3),
    cieloFalsoDesmontableConstanteTransversal360: 2.7 / 12.96,
    cieloFalsoDesmontableConstanteTransversal120: 17.5 / 12.96,
    cieloFalsoDesmontableConstanteTransversal060: 17.52 / 12.96,
    pisoFlotante8mm: '',
    pisoFlotante8mmConstante: 0.244,
    pisoFlotanteSPC: '',
    pisoFlotanteSPCConstante: 0.22204,
    pisoFlotante12mm: '',
    pisoFlotante12mmConstante: 0.244,
    isLogin: !!localStorage.getItem('tokenRocaz'),
    productosVenta: [],
    productosBuys: [],
    env: {
      razon: 'ROCAZ ECO HOME',
      direccion: 'Velasco Galvarro esquina Caro\n' +
          '–\n' +
          'Caro, Velasco Galvarro y Pagador',
      telefono: ' 69592090\n' +
          '– 70481871\n' +
          '-\n' +
          '71881768\n'
    },
    productoCal1: '',
    productoCal2: '',
    productoCal3: '',
    productoCal4: '',
    productoCal5: '',
    productoCal6: '',
    productoCal7: '',
    productoCal8: '',
    productoCal9: '',
    productoCal10: '',
    productoCal11: '',
    productoCal12: '',
    productoCal13: '',
    productoCal14: '',
    productoCal15: '',
    productoCal16: '',
    productoCal17: '',
    productoCal18: '',
    productoCal19: '',
    productoCal20: '',
    productoCal21: '',
    productoCal22: ''
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment () {
      this.counter++
    }
  }
})
