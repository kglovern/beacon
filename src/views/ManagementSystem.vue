
<template>
<div class="full-size manage">
  <management-menu @showAssetForm="showAssetModal" />
  <div id="main" class="full-size">
    <div id="edit-area">
      <sign-canvas/>
    </div>
  </div>
  <add-asset-modal @hideAssetForm="hideAssetModal" v-show="showingAssetModal"/>
</div>
</template>

<script>
import ManagementMenu from '@/components/ManagementMenu/ManagementMenu.vue'
import AddAssetModal from '@/components/Modal/AddAssetModal.vue'
import SignCanvas from '@/components/Canvas/SignCanvas.vue'

export default {
  name: 'ManagementSystem',
  components: {
    ManagementMenu,
    AddAssetModal,
    SignCanvas
  },
  data: function () {
    return {
      showingAssetModal: false
    }
  },
  methods: {
    hideAssetModal: function () {
      this.showingAssetModal = false
    },
    showAssetModal: function () {
      this.showingAssetModal = true
    }
  }
}
</script>

<style lang="scss">
.manage {
  display: flex;
  flex-direction: row;
}

#edit-area {
  background: darken($grey, 20%);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
