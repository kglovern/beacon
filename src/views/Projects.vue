<template>
  <div id="project-page">
    <div class="project-container">
      <div class="full-width project-listings">
        <div class="create-container">
          <project-hero/>
          <icon-button-dark icon="plus-square">Create Project</icon-button-dark>
          <icon-button-dark @click.native="logout" icon="sign-out-alt">Logout</icon-button-dark>
          <nested-search placeholder="Search Projects"/>
        </div>
        <div class="available-container">
          <available-projects/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NestedSearch from '@/components/NestedSearch.vue'
import IconButtonDark from '@/components/IconButtonDark.vue'
import AvailableProjects from '@/components/ProjectListing/AvailableProjects.vue'
import ProjectHero from '@/components/ProjectListing/ProjectHero.vue'

export default {
  name: 'ProjectsPage',
  components: {
    NestedSearch,
    IconButtonDark,
    AvailableProjects,
    ProjectHero
  },
  methods: {
    logout() {
      console.log('LOGGING OUT')
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
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
  width: 50%;
  display: flex;
  flex-direction: column;
  max-height: 50%;
}

.available-container {
  width: 70%;
}
.create-container {
  width: 30%;
  background: $dark;
}
</style>
