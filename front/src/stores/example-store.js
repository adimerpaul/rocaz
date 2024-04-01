import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user: {},
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
