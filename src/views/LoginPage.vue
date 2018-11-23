<template>
  <div id="login-screen">
    <LoginHome />
    <forgot-creds-modal @abc='showForgot()' @forgotCancelled='hideForgot()' v-show="forgotCreds"/>
  </div>
</template>

<script>
import LoginHome from '@/components/LoginHome.vue'
import ForgotCredsModal from '@/components/Modal/ForgotCredsModal.vue'

export default {
  name: 'HomePage',
  components: {
    LoginHome,
    ForgotCredsModal
  },
  data: function () {
    return {
      forgotCreds: false
    }
  },
  methods: {
    hideForgot: function () {
      this.forgotCreds = false
    },
    showForgot: function () {
      this.forgotCreds = true
    }
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
