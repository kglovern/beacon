<template>
    <div id="login-container">
      <div class="hero">
        <img src="@/assets/images/logo.png" alt="Logo">
        <h1>Beacon</h1>
      </div>
      <div class="form">
        <LoginForm />
      </div>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginHome',
  components: {
    LoginForm
  }
}
</script>

<style scoped lang="scss">
#login-container {
  @extend %box-shadow;
  background: $white;
  display: flex;
  width: 50%;
}

.form {
  padding: 0em 2em;
  width: 60%;
}

.hero {
  background: $primary;
  min-height: 60%;
  padding: 6em 0em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  img {
    width: 100px;
  }

  h1 {
    color: $dark;
    font-weight: normal;
  }
}
</style>
