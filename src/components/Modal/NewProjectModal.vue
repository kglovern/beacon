<template>
  <modal>
    <div slot="modal-name">New Project</div>
    <div slot="modal-content">
      <input type="text"/>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue'

export default {
  name: 'NewProjectModal',
  components: {
    Modal
  }
}
</script>

<style lang="scss">
  input {
    border-color: $white;
  }
</style>
