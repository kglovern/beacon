<template>
  <a class="upload-container">
    <font-awesome-icon icon="plus" />
    Add New Asset
  </a>
</template>

<script>
export default {
  name: 'AddAssetButton'
}
</script>

<style scoped lang="scss">
  .upload-container {
    margin-left: 1em;
    &:hover {
      cursor: pointer;
    }
  }
</style>
