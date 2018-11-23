<template>
  <div class="container">
    <img src="@/assets/images/logoAlt.png" class="headerImg" alt="Beacon Logo">
    <div class="heroHeader">Projects</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectHero'
}
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    padding: 1em 0em;
    align-items: center;
  }
  .headerImg {
      width: 50px;
      padding: 0em 1em;
  }
  .heroHeader {
    color: $white;
    font-size: 1.2em;
    font-weight: bold;
  }
</style>
