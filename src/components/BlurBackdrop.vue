<template>
  <div>
    <div id="blurred-background">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlurBackdrop'
}
</script>

<style lang="scss">
  #blurred-background {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  }
</style>
