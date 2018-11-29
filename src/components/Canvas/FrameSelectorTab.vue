<template>
  <div v-bind:class="{ tab: true, active: isActive ||fakeActive,  }" >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FrameSelectorTab',
  data () {
    return {
      fakeActive: false
    }
  },
  props: {
    isActive: Boolean
  },
  created: function() {
    if (this.$vnode.key === 1) {
      this.fakeActive = true
    }
  }
}
</script>

<style scoped lang="scss">
.tab {
  box-sizing: border-box;
  height: 100%;
  min-width: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

}

.active {
  border-bottom: solid 1px $highlight;
  background: $grey;
}
</style>
