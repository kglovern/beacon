<template>
  <div id="login-form">
    <Alert v-show="authFailed" alertType="danger">Your username or password is incorrect!</Alert>
    <h1>Login</h1>
    <form @submit.prevent.stop="login()">
      <div class="field">
        <input name="username" v-model="username" placeholder="Username">
      </div>
      <div class="field">
        <input name="password" v-model="password" placeholder="Password" type="password">
      </div>
      <button type="submit" class="login" v-on:click="login()">Sign in</button>
      <div class="recovery">
        <a v-on:click="$emit('forgotEnabled', 'true')">Forgot your username/password?</a>
      </div>
    </form>
  </div>
</template>

<script>
// import store from '@/store'
import Alert from '@/components/Alert.vue'
import { API } from '@/api'

export default {
  name: 'LoginForm',
  components: {
    Alert
  },
  data: () => ({
    username: '',
    password: '',
    authFailed: false,
    recoverPassword: false
  }),
  methods: {
    /**
     * Login handler - fudged for now but this will eventually call an actual login route
     * On success: emits has-auth event with token payload
     * On failure: emits no-auth event
     */
    login: function () {
      API.post('login',
        {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data && response.data.token) {
            this.$store.dispatch('loginInit', response.data.userId, response.data.token)
              .then(() => {
                this.$router.push('/projects')
              })
          } else {
            this.$emit('no-auth')
            this.authFailed = true
          }
        })
        .catch(err => {
          this.$emit('no-auth', err)
          this.authFailed = true
        })
    }
  }
}
</script>

<style scoped lang="scss">
#login-form {
  padding: 0 1em;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

h1 {
  color: $primary-lightest;
  font-size: 1em;
  text-decoration: none;
}

input {
  width: 100%;
  background: transparent;
  border: none;
  padding: 0.75em 0.5em;
}

form {
  width: 100%;
}

.field {
  border-bottom: solid 1px $primary-lightest;
  margin-bottom: 1em;
  width: 100%;
  &:focus {
    outline: none;
  }
}

.recovery {
  padding-top: 1em;
  margin-top: 1em;
  a {
    text-decoration: none;
    color: $highlight;
    font-size: 1em;
    width: 100%;
  }
  a:hover {
    cursor: pointer;
  }
}

.login {
  padding: 0.5em 2em;
  color: $primary;
  border: solid 1px $primary;
  background: $white;
  border-radius: 2em;
  &:hover {
    background: $primary;
    color: $white;
  }
}
</style>
