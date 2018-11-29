<template>
  <a class="add-frame">
    <font-awesome-icon icon="plus" />
    <div>Add Frame</div>
  </a>
</template>

<script>
export default {
  name: 'AddFrame'
}
</script>

<style scoped lang="scss">
.add-frame {
  background: $white;
  height: 3em;
  display: flex;
  align-items: center;
  padding: 0em 0.3em;
  color: $highlight;
  border-right: dotted 1px $primary-alt-lighter;
  div {
    margin-left: 0.6em;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
