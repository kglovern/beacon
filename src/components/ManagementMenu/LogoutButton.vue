<template>
  <div class="logout">
    <a @click="logout">
      <font-awesome-icon icon="sign-out-alt" />
      Save and Logout
    </a>
  </div>
</template>

<script>
export default {
  name: 'LogoutButton',
  methods: {
    async logout() {
      await this.$store.logout
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.logout {
  width: 100%;
  display: flex;
  padding: 1em;
  border-top: solid 1px $primary-alt-lighter;
  a {
    color: $primary-alt-lighter !important;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
