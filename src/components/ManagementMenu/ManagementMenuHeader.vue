<template>
  <div class="menu-header">
    <img class="tinyLogo" src="@/assets/images/logoAlt.png" alt="">
    <h1>Beacon</h1>
  </div>
</template>

<script>
export default {
  name: 'ManagementMenuHeader'
}
</script>

<style scoped lang="scss">

.menu-header {
  display: flex;
  flex-grow: 0;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 0 1em;

  h1 {
    color: $white;
  }
}
.tinyLogo {
  width: 50px;
  margin-right: 1em;
}
</style>
