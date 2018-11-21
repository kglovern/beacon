<template>
  <!-- Dummy projects in place of real projects -->
  <div id="projects-container" class="style-1">
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
      projects: [
        {
          id: '1',
          name: 'Project 1'
        },
        {
          id: '2',
          name: 'My cool Project'
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: scroll;
  height: 100%;
  max-width: 85vw;
  margin-top: 10px;
  padding: 2em;
}
.style-1::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.style-1::-webkit-scrollbar
{
  width: 12px;
  border-radius: 10px;
  background-color: #F5F5F5;
}

.style-1::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}
</style>
