<template>
  <form id="new-project-form">
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
        <button id="submit-project">Submit</button>
        <button id="cancel-project">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CreateProjectForm'
}
</script>

<style scoped lang="scss">
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
