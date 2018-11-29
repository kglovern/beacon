<template>
  <form id="new-project-form">
    <h1 class="sub-header">Create Project</h1>
    <alert v-if="createErr" alertType="danger">Error while creating a new project!</alert>
    <alert v-if="createSuccess" alertType="ok">Project created successfully!</alert>
    <div id="project-name">
      <label>Project Name</label>
      <input v-model="projectName" type="text" name="name" placeholder="Enter your new project name!">
    </div>
    <div>
      <label>Display Resolution</label>
      <div id="project-resolution">
        <div class="half-res">
          <label for="width">Width (px)</label>
          <input v-model="width" type="text" name="width" placeholder="1920">
        </div>
        <div class="half-res">
          <label for="height">Height (px)</label>
          <input v-model="height" type="text" name="height" placeholder="1080">
        </div>
      </div>
      <div class="actions">
        <button @click.prevent.stop="createNewProject" id="submit-project">Create</button>
        <button @click.prevent.stop="cancel" id="cancel-project">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { API } from '@/api'
import Alert from '@/components/Alert.vue'

export default {
  name: 'CreateProject',
  components: {
    Alert
  },
  data() {
    return {
      projectName: '',
      width: 0,
      height: 0,
      createErr: false,
      createSuccess: false
    }
  },
  methods: {
    async createNewProject() {
      try {
        const project = await API.post('project', {
          user_id: this.$store.getters.userId,
          name: this.projectName,
          width: this.width,
          height: this.height
        })
        console.log(project)
        this.createSuccess = true
        setTimeout(() => {
          this.$router.push('/projects')
        }, 2000)
      } catch (e) {
        console.log(e)
        this.alertErr()
      }
    },
    cancel() {
      this.$router.push('/projects')
    },
    alertErr() {
      this.createErr = true
    }
  }
}
</script>

<style scoped lang="scss">

.sub-header {
  color: $dark;
  border-bottom: solid 1px $primary-alt;
  margin-bottom: 1em;
}

form {
  padding: 1em;
  box-sizing: border-box;
  input {
    border: none;
    width: 100%;
  }
}
label {
  width: 100%;
  margin: 0 1em 0.8em 0;
  display: inline-block;
  color: $primary;
}

.half-res {
  width: 48%;
  border-bottom: solid 1px $primary-alt;
  display: flex;
  flex-direction: column;
}

#project-name {
  border-bottom: solid 1px $primary-alt;
  margin: 1em 0em;
}

#project-resolution {
  display: flex;
  justify-content: space-between;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  box-sizing: border-box;
  margin-top: 2em;

  button {
    width: 40%;
    padding: 1em;
    border-radius: 1em;
    border: none;
    background: $white;
    color: $primary;
    border: solid 1px $primary;

    &:hover {
      color: $white;
      background: $primary;
    }
  }
}
</style>
