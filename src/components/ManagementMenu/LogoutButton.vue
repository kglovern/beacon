<template>
  <div class="logout">
    <a @click="logout">
      <font-awesome-icon icon="sign-out-alt" />
      Close Project
    </a>
  </div>
</template>

<script>
export default {
  name: 'LogoutButton',
  methods: {
    async logout() {
      this.$router.push('/projects')
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
