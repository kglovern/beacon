<template>
  <div id="a-wind">
    <asset-box v-for="asset in assets" :key="asset.id">{{asset.name}}</asset-box>
  </div>
</template>

<script>
import AssetBox from '@/components/AssetBox.vue'

export default {
  name: 'AssetWindow',
  data: function () {
    return {
      assets: [
        {
          id: '1',
          name: 'Asset 1'
        },
        {
          id: '2',
          name: 'Asset 2'
        },
        {
          id: '3',
          name: 'Asset 3'
        },
        {
          id: '4',
          name: 'Asset 4'
        },
        {
          id: '5',
          name: 'Asset 5'
        }
      ]
    }
  },
  components: {
    AssetBox
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
