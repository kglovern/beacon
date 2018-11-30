<template>
    <div class="modal-main">
      <div class="modal-header-bar">
        <slot name="modal-name">Insert Modal Header</slot>
      </div>
      <div class="modal-content-box">
        <slot name="modal-content">Insert Modal Content</slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped lang="scss">

.modal-main {
  @extend %box-shadow;
  display: flex;
  flex-direction: column;
  //flex-grow: 1;
  width: 40%;
  z-index: 101;
  color: $white;
}
.modal-header-bar {
  width: 100%;
  background: $dark;
  font-weight: bold;
  padding: 0.8em;
  box-sizing: border-box;
  border-radius: 0.5em 0.5em 0 0;
}
.modal-content-box {
  background: $white;
  box-sizing: border-box;
  display: flex;
  border-style: none;
  border-color: red;
  padding: 1em;
  padding-bottom: 15px;
  width: 100%;
}
</style>
