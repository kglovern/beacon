<template>
  <div id="this">
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
  AssetWindow,
},
methods: {}
}

</script>

<style>
#this{
padding: 1.2em 1.2em;
}
</style>
