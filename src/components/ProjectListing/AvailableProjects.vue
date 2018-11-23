<template>
  <div class="container">
    <h2>Recent projects</h2>
    <!--<project-listings/>-->
    <create-project-form />

  </div>
</template>

<script>
import ProjectListings from '@/components/ProjectListing/ProjectListings.vue'
import CreateProjectForm from '@/components/ProjectListing/CreateProjectForm.vue'

export default {
  name: 'AvailableProjects',
  components: {
    ProjectListings,
    CreateProjectForm
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  h2 {
    border-bottom: solid 1px $primary-alt;
    margin: 0;
    padding: 1em 0.5em;
  }
}
</style>
