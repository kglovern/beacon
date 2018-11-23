<template>
<div class="bounding">
  <div class="rounded-container">
    <input :placeholder="placeholder" type="text">
  </div>
</div>
</template>

<script>
export default {
  name: 'NestedSearch',
  props: {
    placeholder: String
  }
}
</script>

<style scoped lang="scss">

.bounding {
  padding: 1em 0.25em;
  box-sizing: border-box;
}
.rounded-container {
  display: flex;
  align-items: center;
  background: $white;
  border-radius: 1em;
  width: 100%;
  box-sizing: border-box;
}

input {
  border: none;
  width: 1000%;
  padding: 0.5em 0.4em;
  appearance: none;
  background: transparent;
  margin-right: 0.75em;
  color: $dark-light;

  &:focus {
    outline: none;
  }
}
</style>
