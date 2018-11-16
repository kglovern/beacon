<template>
    <div class="project-card">
        <h2><slot></slot></h2>
    </div>
</template>

<script>
export default {
  name: 'GeneralProject',
  data: () => ({
    displayMessage: false
  }),
  methods: {}
}
</script>

<style lang="scss">
.project-card {
  @extend %box-shadow;

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
    transform:scale(1.1,1.1);
  }

  h2 {
    font-size: 1.2em;
    font-weight: normal;
  }
}
</style>
