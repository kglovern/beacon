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
  background: $white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
}

.form {
  padding: 0em 8em;
}

.hero {
  background: $primary;
  min-height: 60%;
  padding: 6em 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100px;
  }

  h1 {
    color: $dark;
    font-weight: normal;
  }
}
</style>
