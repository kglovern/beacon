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
    return {
      projectClicked: false,
      projectUnclicked: true
    }
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
  //margin-left: 1vw;
  padding: 2em
}
#project-search-bar {
  width: 25%;
  padding: 2em
}
#project-search-container {
  margin-left: 100px;
}
input:focus {
  outline: none;
}
</style>
