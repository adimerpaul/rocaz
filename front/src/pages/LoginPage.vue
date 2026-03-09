<template>
  <q-layout>
    <q-page-container>
      <q-page class="login-page flex flex-center q-pa-md">
        <q-card class="login-card" flat>
          <div class="row no-wrap">
            <div class="col-12 col-md-5 login-brand column justify-between">
              <div>
<!--                logo-->
                <q-img src="/logo.png" contain class="q-mb-lg" style="max-width: 100px" />
<!--                <q-chip square color="white" text-color="primary" icon="o_store">-->
<!--                  Rocaz-->
<!--                </q-chip>-->
                <div class="text-h4 text-weight-bold q-mt-md">Control de Acceso</div>
                <div class="text-subtitle2 q-mt-sm text-grey-3">
                  Gestion de ventas, productos y clientes desde un solo panel.
                </div>
              </div>
              <q-list dense class="q-mt-lg">
                <q-item>
                  <q-item-section avatar><q-icon name="o_check_circle" /></q-item-section>
                  <q-item-section>Inicio de sesion rapido</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar><q-icon name="o_check_circle" /></q-item-section>
                  <q-item-section>Interfaz optimizada para caja</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar><q-icon name="o_check_circle" /></q-item-section>
                  <q-item-section>Reportes y seguimiento diario</q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="col-12 col-md-7 login-form-panel">
              <q-card-section class="q-pa-xl">
                <div class="row items-center q-col-gutter-sm q-mb-lg">
                  <div class="col-auto">
                    <q-avatar size="52px" color="primary" text-color="white" icon="o_login" />
                  </div>
                  <div class="col">
                    <div class="text-h6 text-weight-bold">Bienvenido</div>
                    <div class="text-caption text-grey-7">Ingresa tus credenciales para continuar</div>
                  </div>
                </div>

                <q-form class="q-gutter-md" @submit.prevent="login">
                  <q-input
                    v-model="user.username"
                    label="Usuario"
                    outlined
                    dense
                    autocomplete="username"
                  >
                    <template v-slot:prepend>
                      <q-icon name="o_person" />
                    </template>
                  </q-input>

                  <q-input
                    v-model="user.password"
                    label="Contrasena"
                    :type="showPassword ? 'text' : 'password'"
                    outlined
                    dense
                    autocomplete="current-password"
                  >
                    <template v-slot:prepend>
                      <q-icon name="o_lock" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        class="cursor-pointer"
                        :name="showPassword ? 'o_visibility' : 'o_visibility_off'"
                        @click="showPassword = !showPassword"
                      />
                    </template>
                  </q-input>

                  <q-btn
                    color="primary"
                    icon-right="o_arrow_forward"
                    label="Ingresar"
                    class="q-mt-sm full-width text-weight-bold"
                    size="lg"
                    unelevated
                    rounded
                    type="submit"
                    :loading="loading"
                  />
                </q-form>
              </q-card-section>
            </div>
          </div>
        </q-card>
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
    validateLogin () {
      const username = this.user.username?.trim() || ''
      const password = this.user.password?.trim() || ''

      if (!username) {
        this.$alert.warning('Ingrese su usuario')
        return false
      }

      if (username.length < 3) {
        this.$alert.warning('El usuario debe tener al menos 3 caracteres')
        return false
      }

      if (!password) {
        this.$alert.warning('Ingrese su contrasena')
        return false
      }

      if (password.length < 3) {
        this.$alert.warning('La contrasena debe tener al menos 3 caracteres')
        return false
      }

      return true
    },
    login () {
      if (!this.validateLogin()) {
        return
      }

      this.loading = true
      this.$axios.post('login', this.user)
        .then(response => {
          localStorage.setItem('tokenRocaz', response.data.token)
          this.$store.user = response.data.user
          this.$store.isLogin = true
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + response.data.token
          this.$router.push('/')
          this.$alert.success('Bienvenido ' + response.data.user.name)
        })
        .catch(error => {
          this.$alert.error(error.response?.data?.message || 'No se pudo iniciar sesion')
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
.login-page {
  position: relative;
  overflow: hidden;
  background-image:
    radial-gradient(circle at 15% 20%, rgba(70, 117, 255, 0.3), transparent 35%),
    radial-gradient(circle at 85% 75%, rgba(22, 189, 202, 0.25), transparent 40%),
    linear-gradient(140deg, rgba(7, 16, 45, 0.78), rgba(9, 46, 79, 0.72)),
    url('/login.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.login-card {
  width: min(900px, 100%);
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 25px 60px rgba(6, 20, 45, 0.35);
}

.login-brand {
  padding: 2rem;
  color: #fff;
  background: linear-gradient(165deg, rgba(15, 63, 142, 0.96), rgba(7, 101, 134, 0.92));
}

.login-form-panel {
  background: #fff;
}

@media (max-width: 1023px) {
  .login-brand {
    display: none;
  }
}
</style>
