<template>
  <div class="container">
    <project-listing />
  </div>
</template>

<script>
import ProjectListing from '@/components/ProjectListing/ProjectListing.vue'

export default {
  name: 'ProjectListings',
  components: {
    ProjectListing
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
  }
</style>
