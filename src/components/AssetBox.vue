<template>
  <div id="a-box">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'AssetBox'
}

</script>

<style lang="scss">
#a-box {
  color: black;
  border-style: inset;
  border-color: $primary;
}

</style>
