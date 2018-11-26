<template>
  <transition name="auth">
    <div v-bind:class="{'auth': loginFailed}" id="login-container">
      <LoginHomeHero />
      <LoginForm @forgotEnabled="$emit('forgotEnabled', 'true')" @no-auth="toggleFailAnimation"/>
    </div>
  </transition>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import LoginHomeHero from '@/components/LoginHomeHero.vue'

export default {
  name: 'LoginHome',
  components: {
    LoginForm,
    LoginHomeHero
  },
  data: function () {
    return {
      loginFailed: false
    }
  },
  methods: {
    toggleFailAnimation () {
      this.$data.loginFailed = true
      setTimeout(() => {
        this.$data.loginFailed = false
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
#login-container {
  @extend %box-shadow;
  background: $white;
  display: flex;
  align-items: center;
  width: 50%;
}

#forgot-creds-modal {
  display: block;
}

.form {
  padding: 0em 2em;
  width: 60%;
}

// Animation Keyframes and Classes
.auth {
  animation: shake 1s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(3px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-6px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(5px, 0, 0);
  }
}
</style>
