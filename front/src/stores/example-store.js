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
