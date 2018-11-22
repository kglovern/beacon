<template>
  <div @mouseover="hovered=true" @mouseout="hovered=false" class="listing">
    <div class="info">
      <h3>A sample Project</h3>
      <table>
        <tbody>
          <tr>
            <th>Last Modified</th>
            <td>11/12/18</td>
          </tr>
          <tr>
            <th># of Frames</th>
            <td>4</td>
          </tr>
          <tr>
            <th>Role</th>
            <td>Editor</td>
          </tr>
        </tbody>
      </table>
    </div>
    <transition name="slide-fade">
      <div v-show="hovered" class="open">Open</div>
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

  }

  table {
    th {
      text-align: left;
    }
  }

  &:hover {
    background: darken($grey, 2%);
  }
}

.open {
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

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>
