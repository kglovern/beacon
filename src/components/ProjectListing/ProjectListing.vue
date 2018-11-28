<template>
  <div @mouseover="hovered=true" @mouseout="hovered=false" class="listing">
    <div class="info">
      <h3>{{name}}</h3>
      <table>
        <tbody>
          <tr>
            <th>Last Modified</th>
            <td>{{lastModified | localDate}}</td>
          </tr>
          <tr>
            <th># of Frames</th>
            <td>{{this.$vnode.key}}</td>
          </tr>
          <tr>
            <th>Role</th>
            <td>{{getRole}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <transition name="slide-fade">
      <button @click="openSpecificProject" v-show="hovered" class="open">
        <font-awesome-icon icon="external-link-square-alt" />
        Open
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProjectListing',
  data () {
    return {
      hovered: false
    }
  },
  props: {
    name: String,
    lastModified: String,
    frames: Number,
    role: Number
  },
  methods: {
    openSpecificProject () {
      this.$emit('opened-project', this.$vnode.key)
    }
  },
  computed: {
    getRole () {
      return (this.role === 6) ? 'Owner' : 'Editor'
    }
  }
}
</script>

<style scoped lang="scss">
.listing {
  width: 100%;
  border-bottom: solid 1px $primary-alt;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;

  h3 {
    margin: 0.3em 0 0.5em 0;
    padding: 0 0 0 1em;
    color: $primary;
  }

  table {
    color: $dark;
    font-size: 0.8em;
    margin-left: 1.5em;
    margin-bottom: 0.5em;
    width: 100%;

    th {
      text-align: left;
      width: 30%;
    }
  }

  &:hover {
    background: darken($grey, 2%);
  }
}

.open {
  border: none;
  border-left: solid 1px $primary-alt;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $white;
  background: $dark;
  font-weight: bold;
}
.info {
  width: 83%;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(5px);
  opacity: 0;
}
</style>
