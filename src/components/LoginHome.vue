<template>
    <div id="login-container">
      <LoginHomeHero />
      <div class="form">
        <LoginForm />
      </div>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import LoginHomeHero from '@/components/LoginHomeHero.vue'

export default {
  name: 'LoginHome',
  components: {
    LoginForm,
    LoginHomeHero
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
</style>
