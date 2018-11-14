<template>
  <div id="menu-tray">
    <div class="menu-heading">
      <a href="" @click.stop.prevent="toggledOpen = !toggledOpen" class="header">{{name}}</a>
    </div>
    <div class="menu-accordion">
      <slot v-if="toggledOpen"></slot>
    </div>
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
</style>
