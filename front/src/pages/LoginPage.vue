<template>
  <q-layout>
      <q-page-container>
        <q-page class="dark-overlay">
          <div class="row">
            <div class="col-12 col-md-4 offset-md-4 ">
              <q-card class="q-ma-md" flat bordered>
                <q-card-section class="flex flex-center">
                  <img
                    alt="Logo"
                    src="logo.png"
                    style="width: 150px;padding-top: 20px"
                  >
                </q-card-section>
                <q-card-section>
                  <q-form @submit.prevent="login">
                    <div class="row">
                      <div class="col-12 text-subtitle1 text-center text-bold " style="line-height: 1.0">
                        <div class="text-subtitle2">Bienvenido a</div>
                        <div class="text-h5 text-bold q-mb-md">
<!--                          Rocaz-->
                          <span class="text-caption text-grey">
                            Control de Acceso
                          </span>
                        </div>
                      </div>
                      <div class="col-12">
                        <q-input v-model="user.username" label="Usuario" outlined rounded type="username"
                                 :rules="[val => val.length > 3 || 'El usuario debe tener al menos 4 caracteres']"
                        >
                          <template v-slot:prepend>
                            <q-icon name="o_person" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-12 ">
                        <q-input v-model="user.password" label="Password" :type="showPassword ? 'text' : 'password'" outlined rounded
                                 :rules="[val => val.length > 5 || 'La contraseña debe tener al menos 6 caracteres']"
                        >
                          <template v-slot:prepend>
                            <q-icon name="o_lock" />
                          </template>
                          <template v-slot:append>
                            <q-icon
                              :name="showPassword ? 'o_visibility' : 'o_visibility_off'"
                              @click="showPassword = !showPassword"
                            />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-12">
                        <q-btn color="primary" label="Ingresar" class="q-mt-md text-bold full-width" rounded type="submit" :loading="loading"/>
                      </div>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-page>
      </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      showPassword: false,
      loading: false
    }
  },
  mounted () {
    if (this.$store.isLogin) {
      this.$router.push('/')
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$axios.post('login', this.user)
        .then(response => {
          this.loading = false
          localStorage.setItem('tokenRocaz', response.data.token)
          this.$store.user = response.data.user
          this.$store.isLogin = true
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + response.data.token
          this.$router.push('/')
          this.$alert.success('Bienvenido ' + response.data.user.name)
        })
        .catch(error => {
          this.loading = false
          this.$alert.error(error.response.data.message)
          // console.log(error)
        })
    }
  }
}
</script>
<style>
.dark-overlay {
  position: relative;
}

.dark-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Color negro con 50% de opacidad */
}

.dark-overlay {
  /* Agrega las propiedades de la imagen de fondo */
  background-image: url('fondoLogin.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
