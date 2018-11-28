<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AvailableProjects',
  components: {}
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    h2 {
      border-bottom: solid 1px $primary-alt;
      margin: 0;
      padding: 1em 0.5em;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
