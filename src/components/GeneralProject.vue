<template>
  <div>
    <div id="project">
      <div id="gen-project" @focus="clickProject">
        <slot></slot>
        <div id="open-project" v-show="projectClicked">open</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralProject',
  data: () => ({
    displayMessage: false,
    projectClicked: false
  }),
  methods: {
    clickProject () {
      this.projectClicked = true
    }
  }
}
</script>

<style>
#gen-project {
  text-align: center;
  background-color: white;
  color: black;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  width: 250px;
  height: 150px;
}
#gen-project {
  text-align: center;
  background-color: white;
  color: black;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  width: 250px;
  height: 150px;
}
#project {
  margin: 1vw;
  width: 66%;
}
</style>
