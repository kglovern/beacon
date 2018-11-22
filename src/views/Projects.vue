<template>
  <div id="project-page">
    <div class="project-container">
      <div class="full-width project-listings">
        <div class="create-container">
          <div id="header">Projects</div>
          <icon-button-dark>Create Project</icon-button-dark>
          <nested-search />
        </div>
        <div class="available">
          <available-projects />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NestedSearch from '@/components/NestedSearch.vue'
import IconButtonDark from '@/components/IconButtonDark.vue'
import AvailableProjects from '@/components/ProjectListing/AvailableProjects.vue'

export default {
  name: 'ProjectsPage',
  components: {
    NestedSearch,
    IconButtonDark,
    AvailableProjects
  }
}
</script>

<style lang="scss">
#project-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient($primary-dark, $primary-darkest);
}

#header {
  font-size: 2em;
  padding: 2em 1em;
  text-align: left;
  font-style: italic;
  color: $white;
}

.project-listings {
  display: flex;
  flex-direction: row;
}

.project-container {
  @extend %box-shadow;
  background: $white;
  width: 70%;
  display: flex;
  flex-direction: column;

}

.available {
  width: 70%;
}
.create-container {
  width: 30%;
  background: $dark;
}

</style>
