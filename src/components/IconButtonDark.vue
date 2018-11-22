<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'IconButtonDark'
}
</script>

<style scoped lang="scss">
  button {
    border: solid 1px $dark-light;
    background: $dark;
    color: $white;
    width: 100%;
    padding: 1em;
    font-weight: bold;

    &:hover {
      background: darken($dark, 5%);
    }
  }
</style>
