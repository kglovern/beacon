<template>
  <div id="menu-tray">
    <div class="menu-heading">
      <a href="" @click.stop.prevent="toggledOpen = !toggledOpen" class="header">{{name}}</a>
    </div>
    <transition name="slide-in">
      <div v-if="toggledOpen" class="menu-accordion">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ManagementMenuCategory',
  props: {
    name: String,
    icon: String
  },
  data () {
    return {
      toggledOpen: false
    }
  }
}
</script>

<style lang="scss">
.menu-heading {
  border-top: solid 1px $dark-light;
  border-bottom: solid 1px $dark-light;
  color: $primary-alt-lighter;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0em;

  a.header {
    font-size: 1.2em;
    padding: 0.5em 1em;
  }
}

h3 {
  padding-left: 1em;
}

.menu-accordion {
  background: darken($dark, 4%);
}

// Animation code

.slide-in-enter-active {
  transition: all .4s ease;
}

.slide-in-leave-active {
  transition: all .4s; //cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-in-enter, .slide-in-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>
