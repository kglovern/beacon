<template>
  <div class="hero">
    <img src="@/assets/images/logoAlt.png" alt="Logo">
    <h1>Beacon</h1>
  </div>
</template>

<script>
export default {
  name: 'LoginHomeHero'
}
</script>

<style lang="scss">

.hero {
  background: $dark;
  min-height: 60%;
  padding: 6em 0em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  img {
    width: 100px;
  }

  h1 {
    color: $white;
    font-weight: normal;
  }
}
</style>
