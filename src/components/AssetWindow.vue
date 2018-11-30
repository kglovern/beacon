<template>
  <div id="a-wind">
    <asset-box v-for="asset in assets" :key="asset.id">{{asset.name}}</asset-box>
  </div>
</template>

<script>
import AssetBox from '@/components/AssetBox.vue'

export default {
  name: 'AssetWindow',
  components: {
    AssetBox
  },
  props: {
    assets: Array
  },
  methods: {}
}

</script>

<style lang="scss">
#a-wind {
  background: $white;
  width: 99%;
  max-height: 100px;
  overflow-y: scroll;
  color: black;
}
</style>
