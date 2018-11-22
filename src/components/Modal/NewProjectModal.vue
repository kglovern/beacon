<template>
  <full-screen-modal>
    <modal>
      <div slot="modal-name">New Project</div>
      <div slot="modal-content">
        <input type="text">
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
input {
  border-color: $white;
}
</style>
