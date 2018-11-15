<template>
  <div>
    <nested-search />
    <asset-listings />
  </div>
</template>

<script>
import NestedSearch from '@/components/NestedSearch.vue'
import AssetListings from '@/components/AssetMenu/AssetListings.vue'

export default {
  name: 'AssetMenu',
  components: {
    NestedSearch,
    AssetListings
  }
}
</script>

<style>

</style>
