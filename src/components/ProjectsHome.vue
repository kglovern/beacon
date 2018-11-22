<template>
  <!-- Dummy projects in place of real projects -->
  <div id="project-search-container">
    <blur-backdrop id="new-project-modal">
      <new-project-modal/>
    </blur-backdrop>
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
import BlurBackdrop from '@/components/BlurBackdrop.vue'
import NewProjectModal from '@/components/Modal/NewProjectModal.vue'

export default {
  name: 'ProjectsHome',
  data: function () {
    return {}
  },
  components: {
    ProjectContainer,
    NestedSearch,
    BlurBackdrop,
    NewProjectModal
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
  height: 100vh;
  justify-content: space-between;
}
input:focus {
  outline: none;
}
#new-project-modal {
  display: none;
}
</style>
