<template>
  <div class="listing-container">
    <div class="info">
      <div class="thumbnail"><img src="@/assets/images/50.png" alt="thumbnail"></div>
      <div class="title">
        <table>
          <tr>
            <td class="name">{{name}}</td>
          </tr>
          <tr>
            <td class="smaller">image</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="icon">
      <font-awesome-icon v-if="is_shared" icon="globe-americas" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssetListing',
  props: {
    name: String,
    is_shared: Boolean
  }
}
</script>

<style scoped lang="scss">
.listing-container {
  width: 100%;
  box-sizing: border-box;
  color: $dark;
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
  padding: 0.3em;
  border-bottom: solid 1px $primary-alt;
}
.info {
  display: flex;
  align-items: center;
}
.title {
  margin-left: 0.5em;
}
.icon {
  width: 10%;
}

.name {
  font-weight: bold;
}
.smaller {
  font-size: 0.8em;
}
</style>
