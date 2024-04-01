import { defineStore } from 'pinia'
export const useClientStore = defineStore('client', {
  state: () => ({
    clients: [],
    client: {},
    loading: false
  })
})
