export default {
  clientGet () {
    this.$axios.get('clients').then(response => {
      // this.clients = response.data
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
}
