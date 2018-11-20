<template>
    <div id="project-page-container">
        <projects-home />
    </div>
</template>

<script>
import ProjectsHome from '@/components/ProjectsHome.vue'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectsHome
  }
}
</script>

<style lang="scss">
  #project-page-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient($primary-dark, $primary-darkest);
    background-size: cover;
  }
</style>
