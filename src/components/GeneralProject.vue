<template>
    <div>
        <button id="gen-project" class="btn" v-on:click="message()">
            <div v-show="displayMessage">Open</div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'GeneralProject',
    data: () => ({
        displayMessage: false
    }),
    methods: {
        message: function () {
            this.displayMessage = true
            // setTimeout(() => {
            //     this.$data.displayMessage = false
            // }, 2000)
        }
    }
}
</script>

<style>
    #gen-project {
        text-align: right;
        background-color: white;
        color: black;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 200px;
        height: 150px;
    }
</style>


