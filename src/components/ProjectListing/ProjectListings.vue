<template>
  <div>
    <div class="sub-header">
      <h1>Open Existing Project</h1>
    </div>
  <div class="container">
    <project-listing
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :role="project.owner_id"
      :width="project.width"
      :height="project.height"
      :lastModified="project.updated_at"
      @opened-project="openProject"
    />
  </div>
  </div>
</template>

<script>
import { API } from '@/api'
import ProjectListing from '@/components/ProjectListing/ProjectListing.vue'

export default {
  name: 'ProjectListings',
  components: {
    ProjectListing
  },
  data() {
    return {
      projects: []
    }
  },
  methods: {
    async fetchProjects() {
      const userId = this.$store.getters.userId
      const url = `user/${userId}/projects`
      const results = await API.get(url)
      this.projects = results.data
    },
    async openProject(key) {
      this.$store.commit('setCurrentProject', key)
      this.$router.push('/manage')
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<style scoped lang="scss">
.sub-header {
  color: $dark;
  border-bottom: solid 1px $primary-alt;
  margin: 1em;

  h1 {
    margin: 0;
    color: $dark;
  }
}
.container {
  width: 100%;
  color: $dark;
}
</style>
