<template>
  <div class="padme">
    hi
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Library',
  components: {
    SearchBar
  }
}
</script>

<style lang="scss">
.padme {
  padding: 2em;
}
</style>
