<template>
  <div class="selector-container">
    <add-frame />
    <frame-selector-tab
      v-for="frame in availableFrames"
      :key="frame.position"
    >
      {{frame.position}}
    </frame-selector-tab>
  </div>
</template>

<script>
import FrameSelectorTab from '@/components/Canvas/FrameSelectorTab.vue'
import AddFrame from '@/components/Canvas/AddFrame.vue'

export default {
  name: 'FrameSelector',
  components: {
    FrameSelectorTab,
    AddFrame
  },
  computed: {
    availableFrames() {
      return this.$store.getters.frames
    }
  }
}
</script>

<style scoped lang="scss">
.selector-container {
  width: 100%;
  max-width: 100%;
  background: darken($grey, 5%);
  height: 3em;
  display: flex;
  align-items: center;
  border-bottom: solid 1px $primary-alt;
}
</style>
