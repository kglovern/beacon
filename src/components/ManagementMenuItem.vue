<template>
  <div class="sub-item">
    <div class="header">
      <a :href="link"><slot></slot></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagementMenuItem',
  props: {
    link: String
  }
}
</script>

<style>
.header {
  padding: 0.2em 3em;
}

</style>
