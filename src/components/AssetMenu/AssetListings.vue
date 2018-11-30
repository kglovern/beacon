<template>
  <div id="this">
    Available Assets:
    <nested-search @searching="filterAssets" placeholder="Filter Assets"/>
    <div class="asset-listings-container">
      <asset-listing
        v-for="asset in filteredAssets"
        :name="asset.name"
        :key="asset.id"
        :is_shared="asset.is_shared"
      />
    </div>

    <!--<br>
    Shared
    <asset-window> </asset-window>-->
  </div>
</template>

<script>
import NestedSearch from '@/components/NestedSearch.vue'
import AssetListing from '@/components/AssetMenu/AssetListing.vue'

export default {
  name: 'AssetListings',
  components: {
    NestedSearch,
    AssetListing
  },
  data() {
    return {
      searchTerm: '',
      assets: [
        {
          id: '1',
          name: 'GRT Logo',
          is_shared: true
        },
        {
          id: '2',
          name: 'Chiquita Banana Ad',
          is_shared: true
        },
        {
          id: '3',
          name: 'Happy Snowman GIF',
          is_shared: true
        },
        {
          id: '4',
          name: 'Dole Banana Ad',
          is_shared: true
        },
        {
          id: '5',
          name: 'UoG Discount Flyer',
          is_shared: true
        },
        {
          id: '6',
          name: 'Go Go GRT!',
          is_shared: true
        }
      ]
    }
  },
  methods: {
    filterAssets(term) {
      this.searchTerm = term
    }
  },
  computed: {
    filteredAssets() {
      return this.assets.filter(obj => {
        return !this.searchTerm ||
        obj.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    }
  }
}

</script>

<style scoped lang="scss">
#this {
  padding: 1.1em 1.1em;
}

.asset-listings-container {
  background: $white;
  padding: 0.2em;
}
</style>
