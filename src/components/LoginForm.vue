<template>
  <div id="login-form">
    <h1>Login</h1>
    <div class="field">
      <input placeholder="Username" />
    </div>
    <div class="field">
      <input placeholder="Password" type="password" />
    </div>
    <button class="login">Sign in</button>
    <div class="recovery">
      <a href="#">Forgot your username/password?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped lang="scss">

#login-form {
  padding: 2em 0em;
  width: 100%;
}

h1 {
  color: $primary-lightest;
  font-size: 1em;
  text-decoration: none;

}

input {
  width: 100%;
  appearance: none;
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
    color: $primary-alt;
    font-size: 1em;
    width: 100%;
  }
}

.login {
    appearance: none;
    padding: 0.5em 2em;
    border: none;
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
