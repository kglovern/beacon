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
          name: 'Project 1.jpg'
        },
        {
          id: '2',
          name: 'My cool Project.jpg'
        },
        {
          id: '2',
          name: 'Hurray.jpg'
        }
      ]
    }
  },
components: {
  AssetBox,
},
methods: {}
}

</script>

<style lang="scss">
#a-wind {
  background: $white;
  width: 95%;
  height: 100px;
  overflow-y: scroll;
  color: black;
}

</style>
