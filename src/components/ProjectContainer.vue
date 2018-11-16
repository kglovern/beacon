<template>
  <!-- Dummy projects in place of real projects -->
  <div id="projects-container">
    <general-project><add-project/></general-project>
    <general-project v-for="project in projects" :key="project.id">{{project.name}}</general-project>
  </div>
</template>

<script>
import GeneralProject from '@/components/GeneralProject.vue'
import AddProject from '@/components/AddProject.vue'

export default {
  name: 'ProjectContainer',
  data: function () {
    return {
      projectClicked: false,
      projectUnclicked: true,
      projects: [
        {
          id: '1',
          name: 'Project 1'
        },
        {
          id: '2',
          name: 'My cool Project'
        },
        {
          id: '3',
          name: 'Route 66'
        }
      ]
    }
  },
  components: {
    GeneralProject,
    AddProject
  },
  methods: {}
}
</script>

<style lang="scss">
#projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
  height: 70vh;
  max-width: 85vw;
  margin-top: 10px;
  padding: 2em;
}
</style>
