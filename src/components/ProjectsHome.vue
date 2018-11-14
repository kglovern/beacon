<template>
  <!-- Dummy projects in place of real projects -->
  <div id="project-search-container">
    <div id="project-header">
      <h1>Projects</h1>
    </div>
    <input id="project-search-bar" type="text" placeholder="Search Projects...">
    <project-container></project-container>
  </div>
</template>

<script>
import ProjectContainer from '@/components/ProjectContainer.vue'

export default {
  name: 'ProjectsHome',
  data: function () {
    return {
      projectClicked: false,
      projectUnclicked: true
    }
  },
  components: {
    ProjectContainer
  },
  methods: {}
}
</script>

<style lang="scss">
#project-header {
  margin-left: 1vw;
}
#project-search-bar {
  margin-left: 1vw;
  top: 3px;
  left: 5px;
  height: 30px;
  width: 200px;
  border-radius: 10px;
  padding-left: 10px;
  border-style: ridge;
  margin-bottom: 20px;
}
#project-search-container {
  margin-left: 100px;
}
input:focus {
  outline: none;
}
</style>
