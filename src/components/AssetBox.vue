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
  border-radius: 0.5px;
  border-style: solid;
  border-color: $primary;
  height: 30%;
}

</style>
