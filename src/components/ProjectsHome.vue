<template>
  <!-- Dummy projects in place of real projects -->
  <div id="project-search-container">
    <div id="project-header">
      <h1>Projects</h1>
    </div>
    <div id="project-search-bar">
      <NestedSearch/>
    </div>
    <project-container></project-container>
  </div>
</template>

<script>
import ProjectContainer from '@/components/ProjectContainer.vue'
import NestedSearch from '@/components/NestedSearch.vue'

export default {
  name: 'ProjectsHome',
  data: function () {
    return {}
  },
  components: {
    ProjectContainer,
    NestedSearch
  },
  methods: {}
}
</script>

<style lang="scss">
#project-header {
  margin: none;
  padding: 2em;
  padding-left: 3em;
}
#project-search-bar {
  width: 25%;
  padding: 2em;
  padding-left: 2.5em;
}
#project-search-container {
  margin: auto;
  padding-left: 2em;
  height: 50%;
  justify-content: space-between;
}
input:focus {
  outline: none;
}
</style>
