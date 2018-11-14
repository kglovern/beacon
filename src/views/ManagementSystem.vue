
<template>
<div class="full-size manage">
  <management-menu-container />
  <div id="main" class="full-size">
    <div id="edit-area">
      <div id="canvas">
        Edit me
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ManagementMenuContainer from '@/components/ManagementMenuContainer.vue'

export default {
  name: 'ManagementSystem',
  components: {
    ManagementMenuContainer
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
