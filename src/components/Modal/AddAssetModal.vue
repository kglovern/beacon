<template>
  <full-screen-modal>
    <modal>
      <div slot="modal-name">Add Asset</div>
      <div id="add-asset-div" slot="modal-content">
        <form id="new-project-form">
          <div id="asset-file">
            <div>File:</div>
            <input type="text" value="Click Upload to select a file..." readonly>
            <button class="button" v-on:click="$event.preventDefault()">Upload</button>
          </div>
          <div id="asset-name">
            <div>Asset Name:</div>
            <input type="text">
          </div>
          <div>
            <div>Do you want to share this asset globally?</div>
            <div id="asset-sharing">
              <div id="yesRadio">
                <input type="radio" id="yes-share" name="share" value="yes-share" checked>
                <label for="yes-share">Yes</label>
              </div>
              <div id="noRadio">
                <input type="radio" id="no-share" name="share" value="no-share">
                <label for="no-share">No</label>
              </div>
            </div>
          </div>
        </form>
        <div id="asset-action">
          <button @click="$emit('hideAssetForm', 'true')" class="button" id="cancel-asset">Cancel</button>
          <button class="button" id="submit-asset">Submit</button>
        </div>
      </div>
    </modal>
  </full-screen-modal>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue'
import FullScreenModal from '@/components/Modal/FullScreenModal.vue'

export default {
  name: 'AddAssetModal',
  components: {
    Modal,
    FullScreenModal
  }
}
</script>

<style lang="scss">
.fill-row {
  flex-grow: 1;
  border-style: none;
}
.button {
  color: black;
}
#add-asset-div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-style: none;
  form {
    border-style: none;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-around;

    input {
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: $white;
    color: black;
    }
    #asset-file {
      display: flex;
      margin-bottom: 5px;
      input {
        background-color: gray;
        margin-left: 5px;
      }
      input:hover {
        cursor: auto;
      }
    }
    #asset-name {
      display: flex;
      margin-bottom: 5px;
    }
    #asset-sharing {
      display: flex;
      flex-direction: row;
      width: 80%;
      margin: auto;
      justify-content: space-around;
      #yes-share {
        margin-left: 5px;
        // width: 20%;
      }
      #no-share {
        margin-left: 5px;
        // width: 20%;
      }
    }
  }
  #asset-action {
    display: flex;
    margin: auto;
  }
  #cancel-asset {
    display: block;
    margin: auto;
    width: 110px;
    bottom: 0;
    margin-right: 10px;
  }
  #submit-asset {
    display: block;
    margin: auto;
    width: 110px;
    bottom: 0;
  }
}
</style>
