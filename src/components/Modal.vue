<template>
  <div>
    <div id="modal-background">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="scss">
  #modal-background {
  position: relative;
  width: 50vh;
  height: 50vh;
  z-index: 101;
  background: rgba(255, 255, 255, 1);
  }
</style>
