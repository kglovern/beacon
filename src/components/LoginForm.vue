<template>
  <div id="login-form">
    <h1>Login</h1>
    <div class="field">
      <input name="username" v-model="username" placeholder="Username" />
    </div>
    <div class="field">
      <input name="password" v-model="password" placeholder="Password" type="password" />
    </div>
    <button class="login" v-on:click="login()">Sign in</button>
    <div class="recovery">
      <a href="#">Forgot your username/password?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login () {
      if (this.username === 'root' && this.password === 'root') {
        console.log('right')
      } else {
        console.log('wrong')
      }
    }
  }
}
</script>

<style scoped lang="scss">

#login-form {
  padding: 0 0;
  width: 100%;
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
