<template>
  <div class="selector-container">
    <add-frame />
    <frame-selector-tab isActive>1</frame-selector-tab>
    <frame-selector-tab>2</frame-selector-tab>
    <frame-selector-tab>3</frame-selector-tab>
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
