<template>
  <div v-bind:class="getAlertClass">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    alertType: String
  },
  computed: {
    getAlertClass: function () {
      if (this.alertType === 'ok') {
        return 'status-ok'
      } else if (this.alertType === 'warning') {
        return 'status-warning'
      } else if (this.alertType === 'danger') {
        return 'status-danger'
      } else {
        return 'status-warning'
      }
    }
  }
}
</script>

<style lang="scss">
</style>
