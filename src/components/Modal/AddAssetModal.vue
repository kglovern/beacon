<template>
  <full-screen-modal>
    <modal>
      <div slot="modal-name">Upload New Asset</div>
        <form method="post" @submit.stop.prevent="uploadAsset" enctype="application/x-www-form-urlencoded" id="new-project-form" slot="modal-content">
          <div id="asset-file">
            <label for="file">File:</label>
            <input name="file" type="file" value="Click Upload to select a file...">
          </div>
          <div id="asset-name">
            <label for="name">Asset Name:</label>
            <input name="name" v-model="name" type="text" placeholder="Identifier">
          </div>
          <div class="share-container">
            <label for="isShared">Share this asset with other projects?</label>
            <input type="checkbox" name="isShared" v-model="isShared">
          </div>
          <div id="asset-action">
          <button @click="uploadAsset" class="button-primary" type="submit">Upload</button>
          <button @click.stop.prevent="$emit('hideAssetForm', 'true')" class="button">Cancel</button>
        </div>
        </form>

    </modal>
  </full-screen-modal>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue'
import FullScreenModal from '@/components/Modal/FullScreenModal.vue'

export default {
  name: 'AddAssetModal',
  data() {
    return {
      isShared: false,
      name: ''
    }
  },
  components: {
    Modal,
    FullScreenModal
  },
  methods: {
    uploadAsset() {
      console.log('nah')
    }
  }
}
</script>

<style scoped lang="scss">

#add-asset-div {
  width: 100%;
}

#asset-action {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 1em 0;
}

.share-container {
  display: flex;
  justify-content: flex-start;
}

form {
  padding: 1em;
  box-sizing: border-box;
  color: $dark;
  width: 100%;
  input {
    border: none;
    width: 100%;
  }
}

label {
  width: 100%;
  margin: 0 1em 0.8em 0;
  display: inline-block;
  color: $primary;
}

#asset-name {
  border-bottom: solid 1px $primary-alt;
  margin: 1em 0em;
}

.button {
  color: $primary;
  background: none;
  border: solid 1px $primary;
  padding: 0.8em;
  border-radius: 1em;
  min-width: 30%;
}

.button-primary {
    @extend .button;
    border: solid 1px $white;
    background: $primary;
    color: $white;
    font-weight: bold;
}
</style>
