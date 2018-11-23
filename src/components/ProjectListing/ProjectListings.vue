<template>
  <div class="container">
    <project-listing
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :role="project.owner_id"
      :lastModified="project.updated_at"
      @opened-project="openProject"
    />
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
      const url = `user/${6}/projects`
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
.container {
  width: 100%;
  color: $dark;
}
</style>
