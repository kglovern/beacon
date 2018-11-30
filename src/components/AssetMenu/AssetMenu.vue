<template>
  <div class="inner-asset-menu">
    <add-asset-button @click.native="$emit('showAssetForm', 'true')"/>
    <!-- <button @click="$emit('showAssetForm', 'true')">Add Asset</button> -->
    <asset-listings />
  </div>
</template>

<script>
import AssetListings from '@/components/AssetMenu/AssetListings.vue'
import AddAssetButton from '@/components/AssetMenu/AddAssetButton.vue'

export default {
  name: 'AssetMenu',
  components: {
    AssetListings,
    AddAssetButton
  }
}
</script>

<style>
.inner-asset-menu {
  padding-top: 1em;
}
</style>
