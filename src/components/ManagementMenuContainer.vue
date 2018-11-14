<template>
  <div id="menu">
    <div id="top-menu">
      <management-menu-header/>
      <management-menu-category name="Project Settings">
        <management-menu-item>Manage Editors</management-menu-item>
        <management-menu-item>Remove Project</management-menu-item>
        <management-menu-item>View Statistics</management-menu-item>
      </management-menu-category>
      <management-menu-category name="Assets">
        ASSET WINDOW COMPONENT GOES HERE
      </management-menu-category>
      <management-menu-category name="Text and Shapes">
        SHAPE MENU COMPONENT GOES HERE
      </management-menu-category>
      <management-menu-category name="Widgets">
        WIDGET MENU COMPONENT GOES HERE
      </management-menu-category>
    </div>
    <div id="bottom-menu">
      <a href="">bottom</a>
    </div>
  </div>
</template>

<script>
import ManagementMenuHeader from '@/components/ManagementMenuHeader.vue'
import ManagementMenuCategory from '@/components/ManagementMenuCategory.vue'
import ManagementMenuItem from '@/components/ManagementMenuItem.vue'

export default {
  name: 'ManagementMenuContainer',
  components: {
    ManagementMenuHeader,
    ManagementMenuCategory,
    ManagementMenuItem
  }
}
</script>

<style lang="scss">
#menu {
  width: 22%;
  height: 100%;
  background: $dark;
  color: $primary-alt;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: space-between;

  a {
    color: $primary-alt;
    text-decoration: none;
  }

  #top-menu {
    display: flex;
    flex-direction: column;
  }
}
</style>
