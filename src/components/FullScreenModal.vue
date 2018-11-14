<template>
  <div class="cover">
    <div class="modal">
      <h1>This is the title</h1>
      <p>This is the remainder</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cover {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  @extend %box-shadow;
  background: $white;
  width: 40%;
  padding: 5em;
  display: flex;
  flex-direction: column;
  border-radius: 2em;
}
</style>
