<template>
  <!-- Dummy projects in place of real projects -->
  <div id="projects-container">
    <general-project>Project 1</general-project>
    <general-project>Project 2</general-project>
    <general-project>Project 3</general-project>
    <general-project>Project 4</general-project>
    <general-project>Project 5</general-project>
    <general-project>Project 6</general-project>
    <general-project>Project 7</general-project>
    <general-project>Project 8</general-project>
    <general-project>Project 9</general-project>
    <general-project>Project 10</general-project>
    <general-project>Project 11</general-project>
    <general-project>Project 12</general-project>
  </div>
</template>

<script>
import GeneralProject from '@/components/GeneralProject.vue'

export default {
  name: 'ProjectContainer',
  data: function () {
    return {
      projectClicked: false,
      projectUnclicked: true
    }
  },
  components: {
    GeneralProject
  },
  methods: {}
}
</script>

<style lang="scss">
#projects-container {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  height: 70vh;
  max-width: 85vw;
  margin-top: 10px;
}
</style>
