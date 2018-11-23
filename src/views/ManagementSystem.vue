
<template>
<div class="full-size manage">
  <management-menu />
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
import ManagementMenu from '@/components/ManagementMenu/ManagementMenu.vue'

export default {
  name: 'ManagementSystem',
  components: {
    ManagementMenu
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
