<template>
  <div id="this">
    <button>Upload</button>
    <br><br>
    Local
    <asset-window> </asset-window>
    <br>
    Shared
    <asset-window> </asset-window>
  </div>
</template>

<script>
import AssetWindow from '@/components/AssetWindow.vue'

export default {
  name: 'AssetListings',
  components: {
    AssetWindow
  },
  methods: {}
}

</script>

<style>
#this {
  padding: 1.1em 1.1em;
}
button {
  float: right;
}
</style>
