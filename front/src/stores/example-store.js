import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user: {},
    tab: '',
    area2PisoFlotante8mm: '',
    area2PisoFlotante8mmConstante: 0.244,
    area2PisoFlotante12mm: '',
    area2PisoFlotante12mmConstante: 0.244,
    pvcTablilla: '',
    pvcTablillaConstante: 1.4875,
    pvcTablillaConstanteCorinsa: (4 / 3),
    cieloFalsoDesmontable: '',
    cieloFalsoDesmontableConstantePlaca: 0.36,
    cieloFalsoDesmontableConstanteAngular: (4 / 3),
    cieloFalsoDesmontableConstanteTransversal360: 2.7 / 12.96,
    cieloFalsoDesmontableConstanteTransversal120: 17.5 / 12.96,
    cieloFalsoDesmontableConstanteTransversal060: 17.52 / 12.96,
    pisoFlotante8mm: '',
    pisoFlotante8mmConstante: 0.241164,
    pisoFlotanteSPC: '',
    pisoFlotanteSPCConstante: 0.22204,
    pisoFlotante12mm: '',
    pisoFlotante12mmConstante: 0.244,
    isLogin: !!localStorage.getItem('tokenRocaz'),
    productosVenta: [],
    env: {
      razon: 'ROCAZ ECO HOME',
      direccion: '6 de octubre y caro',
      telefono: '69592090'
    }
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
