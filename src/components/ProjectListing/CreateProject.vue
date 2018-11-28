<template>
  <form id="new-project-form">
    <h1 class="sub-header">Create Project</h1>
    <div id="project-name">
      <label>Project Name</label>
      <input type="text" name="name" placeholder="Enter your new project name!">
    </div>
    <div>
      <label>Display Resolution</label>
      <div id="project-resolution">
        <div class="half-res">
          <label for="width">Width (px)</label>
          <input type="text" name="width" placeholder="1920">
        </div>
        <div class="half-res">
          <label for="height">Height (px)</label>
          <input type="text" name="height" placeholder="1080">
        </div>
      </div>
      <div class="actions">
        <button id="submit-project">Create</button>
        <button @click.prevent.stop="cancel" id="cancel-project">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CreateProject',
  methods: {
    cancel() {
      this.$router.push('/projects')
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
