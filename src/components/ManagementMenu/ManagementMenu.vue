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
        <asset-menu />
      </management-menu-category>
      <management-menu-category name="Text and Shapes">
        SHAPE MENU COMPONENT GOES HERE
      </management-menu-category>
      <management-menu-category name="Widgets">
        WIDGET MENU COMPONENT GOES HERE
      </management-menu-category>
    </div>
    <div id="bottom-menu">
      <a href="">I'm probably a logout button</a>
    </div>
  </div>
</template>

<script>
import ManagementMenuHeader from '@/components/ManagementMenu/ManagementMenuHeader.vue'
import ManagementMenuCategory from '@/components/ManagementMenu/ManagementMenuCategory.vue'
import ManagementMenuItem from '@/components/ManagementMenu/ManagementMenuItem.vue'
import AssetMenu from '@/components/AssetMenu/AssetMenu.vue'

export default {
  name: 'ManagementMenu',
  components: {
    ManagementMenuHeader,
    ManagementMenuCategory,
    ManagementMenuItem,
    AssetMenu
  }
}
</script>

<style lang="scss">
#menu {
  width: 25%;
  min-height: 100%;
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
