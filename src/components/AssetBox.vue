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
  font-size: 1.25vw;
  border-style: solid;
  border-width: thin;
  border-color: $primary;
  height: 15px;
  padding: 0.4em 0.4em;
}

</style>
