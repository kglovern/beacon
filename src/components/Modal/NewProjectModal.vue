<template>
  <full-screen-modal>
    <modal>
      <div slot="modal-name">New Project</div>
      <div id="new-project-div" slot="modal-content">
        <form id="new-project-form">
          <div id="project-name">
            <div>Project Name:</div>
            <input type="text">
          </div>
          <div>
            <div>Display Resolution (Pixels):</div>
            <div id="project-resolution">
              <div id="input-res">
                <div id="input-width">Width: <input id="x-res" type="text"></div>
                <div id="input-height">Height: <input id="y-res" type="text"></div>
              </div>
            </div>
          </div>
        </form>
        <div id="project-action">
          <button id="cancel-project">Cancel</button>
          <button id="submit-project">Submit</button>
        </div>
      </div>
    </modal>
  </full-screen-modal>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue'
import FullScreenModal from '@/components/Modal/FullScreenModal.vue'

export default {
  name: 'NewProjectModal',
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
  border-color: purple;
}
#new-project-div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-style: none;
  border-color: blue;
  form {
    border-style: none;
    border-color: yellow;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-around;

    input {
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: $white;
    }
    #project-name {
      display: flex;
    }
    #project-resolution {
      display: flex;
      flex-direction: row;
      #input-res {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        margin-top: 2px;
        border-style: none;
        border-color: purple;
      }
      #input-width {
        display: flex;
        margin-left: 5px;
        margin-right: 20px;
      }
      #input-height {
        display: flex;
        // width: 50%;
      }
      #x-res {
        margin-left: 5px;
        // width: 20%;
      }
      #y-res {
        margin-left: 5px;
        // width: 20%;
      }
    }
  }
  #project-action {
    display: flex;
    margin: auto;
  }
  #cancel-project {
    display: block;
    margin: auto;
    width: 110px;
    bottom: 0;
    margin-right: 10px;
  }
  #submit-project {
    display: block;
    margin: auto;
    width: 110px;
    bottom: 0;
  }
}
</style>
