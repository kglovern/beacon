<template>
  <div id="login-form">
    <div class="status-danger" v-show="authFailed">
      <p>Your username or password was incorrect</p>
      </div>
    <h1>Login</h1>
    <div class="field">
      <input name="username" v-model="username" placeholder="Username" />
    </div>
    <div class="field">
      <input name="password" v-model="password" placeholder="Password" type="password" />
    </div>
    <button class="login" v-on:click="login()">Sign in</button>
    <div class="recovery">
      <a @click="recoverPassword=false">Forgot your username/password?</a>
    </div>
    <full-screen-modal v-if="recoverPassword"/>
  </div>
</template>

<script>
import FullScreenModal from '@/components/FullScreenModal.vue'

export default {
  name: 'LoginForm',
  components: {
    FullScreenModal
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
      if (this.username === 'root' && this.password === 'root') {
        // we emit auth notice
        this.authFailed = false
      } else {
        this.$emit('no-auth')
        this.authFailed = true
      }
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
