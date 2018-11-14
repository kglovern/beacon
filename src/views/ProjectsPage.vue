<template>
  <div id="login-screen">
    <LoginHome />
  </div>
</template>

<script>
import LoginHome from '@/components/LoginHome.vue'

export default {
  name: 'HomePage',
  components: {
    LoginHome
  }
}
</script>

<style lang="scss">
#login-screen {
  background-image: linear-gradient($primary-dark, $primary-darkest);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $dark;
}
</style>
