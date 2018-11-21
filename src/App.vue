<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0
}
</style>
