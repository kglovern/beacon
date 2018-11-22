<template>
<div class="bounding">
  <div class="rounded-container">
    <input :placeholder="placeholder" type="text">
    <button>Search</button>
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
}
.rounded-container {
  display: flex;
  align-items: center;
  background: $white;
  border-radius: 1em;
  width: 100%;
  border: solid 1px $primary;
}

button {
  display: flex;
  flex-shrink: 0;
  border: transparent;
  background: $primary;
  color: $dark;
  border-radius: 1em;
  padding: 0.3em 0.6em;
  margin-right: 0.5em;
}

input {
  border: none;
  width: 1000%;
  padding: 0.5em 0.4em;
  appearance: none;
  background: transparent;
  margin-right: 0.75em;
  color: $dark;

  &:focus {
    outline: none;
  }
}
</style>
