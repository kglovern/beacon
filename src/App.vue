<template>
  <div id="app">
    <transition name="page" mode="out-in" duration="200">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">

@for $i from 1 through 5 {
  $enter-delay: 200ms;

  .page-enter-active {
    overflow: hidden;
    transition: transform $enter-delay cubic-bezier(0.4, 0.1, 0.7, 0.95);

    .enter-#{$i} {
      transition: 200ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
      transition-property: opacity, transform;
      transition-delay: #{120ms * $i + $enter-delay};
    }
  }

  .page-enter {
    transform: translateX(100%);

    .enter-#{$i} {
      opacity: 0;
      transform: translateX(50px);
    }
  }

  .page-leave-active {
    display: block;
  }
}
</style>
