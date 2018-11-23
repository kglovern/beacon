<template>
  <button>
    <font-awesome-icon :icon="icon" class="margin-right"/>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'IconButtonDark',
  props: {
    icon: String
  }
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
    text-align: left;

    &:hover {
      background: darken($dark, 5%);
    }
  }

  .margin-right {
    margin-right: 0.8em;
  }
</style>
