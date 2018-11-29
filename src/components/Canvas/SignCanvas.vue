<template>
  <div class="canvas-wrapper">
    <frame-selector />
  </div>
</template>

<script>
import FrameSelector from '@/components/Canvas/FrameSelector.vue'

export default {
  name: 'SignCanvas',
  components: {
    FrameSelector
  }
}
</script>

<style scoped lang="scss">
  .canvas-wrapper {
    @extend %box-shadow;
    background: $white;
    width: 80%;
    min-height: 80%;
  }
</style>
