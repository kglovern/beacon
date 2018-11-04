
<template>
<div class="full-size manage">
  <div id="menu">
    <div id="top-menu">
      <a href="">This</a>
      <a href="">Is</a>
      <a href="">The</a>
      <a href="">Top</a>
      <a href="">Menu</a>
    </div>
    <div id="bottom-menu">
      <a href="">bottom</a>
    </div>
  </div>
  <div id="drawer">
    Drawer
  </div>
  <div id="main" class="full-size">
    <div id="edit-area">
      <div id="canvas">
        Edit me
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ManagementSystem'
}
</script>

<style lang="scss">
.manage {
  display: flex;
  flex-direction: row;
}

#menu {
  width: 6%;
  height: 100%;
  background: $dark;
  color: $primary-alt;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: space-between;

  a {
    color: $primary;
    text-decoration: none;
  }

  #top-menu {
    display: flex;
    flex-direction: column;
  }
}

#drawer {
  background: $primary;
  width: 16%;
  color: $white;
}

#edit-area {
  background: darken($grey, 20%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
