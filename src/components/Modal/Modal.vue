<template>
  <div>
    <div id="modal-main">
      <div id="modal-header-bar">
        <slot name="modal-name">Insert Modal Header</slot>
      </div>
      <div id="modal-content-box">
        <slot name="modal-content">Insert Modal Conent</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="scss">
#modal-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  min-width: 30vw;
  // height: 50vh;
  z-index: 101;
  background: $dark-light;
  border-radius: 10px;
  overflow: hidden;
  color: $white;
}
#modal-header-bar {
  width: 100%;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: $dark;
}
#modal-content-box {
  flex-grow: 1;
  display: flex;
  border-style: none;
  border-color: red;
  padding: 10px;
  padding-bottom: 15px;
}
</style>
