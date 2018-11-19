
<template>
  <div  @click="clickProject" class="project-card">
    <h2>
      <slot></slot>
    </h2>
    <div class="open-div" v-bind:class="{ hiddenDiv: isActive }">
      <div class="open-text">Open</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralProject',
  data: () => ({
    isActive: true
  }),
  methods: {
    clickProject: function () {
      // console.log(this.$el.childNodes[1])
      this.$parent.$children.isActive = true
      this.isActive = false
      // console.log(this.$parent.$children)
      setTimeout(() => {
        this.isActive = true
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
.project-card {
  @extend %box-shadow;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  max-height: 35%;
  background: $white;
  padding: 0em 1em;
  border-radius: 1em;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
  h2 {
    font-size: 1.2em;
    font-weight: normal;
  }
}
.open-div {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 1em;
}
.open-text {
  color: $white;
  position: absolute;
  bottom: 5%;
  right: 5%;
}
.hiddenDiv {
  display: none;
}
</style>
