<template>
  <full-screen-modal>
    <modal id="forgot-creds-modal">
      <div slot="modal-name">Forgot Username/Password</div>
      <div id="forgot-creds-div" slot="modal-content">
        <Alert id="creds-alert" v-show="emailSubmitted" alertType="ok">
          <p>* Email sent!</p>
          <p>If your email address exists in the system, you should receive an email with further instructions.</p>
        </Alert>
        <form id="forgot-creds-form" v-on:submit="sendEmail(); $event.preventDefault()">
          <div>Please Enter Your Email:</div>
          <div id="input-email">
            <input type="text">
          </div>
        </form>
        <div id="project-action">
          <button class="credsAction" id="cancel-project" v-on:click="$emit('forgotCancelled', 'true'); resetEmail();">Cancel</button>
          <button class="credsAction" id="submit-project" v-on:click="sendEmail()">Submit</button>
        </div>
      </div>
    </modal>
  </full-screen-modal>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue'
import FullScreenModal from '@/components/Modal/FullScreenModal.vue'
import Alert from '@/components/Alert.vue'

export default {
  name: 'NewProjectModal',
  components: {
    Modal,
    FullScreenModal,
    Alert
  },
  data: function () {
    return {
      emailSubmitted: false
    }
  },
  methods: {
    sendEmail: function () {
      this.emailSubmitted = true
      setTimeout(() => {
        this.$data.emailSubmitted = false
      }, 4000)
    },
    resetEmail: function () {
      this.emailSubmitted = false
    }
  }
}
</script>

<style lang="scss">
#forgot-creds-modal {
  min-width: 400px;
  max-width: 40%;
}
#forgot-creds-div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-style: none;
  border-color: blue;
  form {
    border-style: none;
    border-color: yellow;
    flex-grow: 1;
    justify-content: space-around;

    input {
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: $white;
    }
    #input-email {
      display: flex;
      color:black;
    }
  }
  #forgot-creds-form {
    margin-bottom: 5px;
  }
  #project-action {
    display: flex;
    margin: auto;
  }
  #creds-alert {
    margin-bottom: 10px;
    text-align: left;
  }
  #cancel-project {
    display: block;
    margin: auto;
    width: 110px;
    bottom: 0;
    margin-right: 10px;
  }
  #submit-project {
    display: block;
    margin: auto;
    width: 110px;
    bottom: 0;
  }
  .credsAction {
    padding: 0.5em 2em;
    color: $primary;
    border: solid 1px $primary;
    background: $white;
    border-radius: 2em;
    &:hover {
      background: $primary;
      color: $white;
    }
  }
}
</style>
