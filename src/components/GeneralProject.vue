<template>
    <div>
        <div id="project">
            <button id="gen-project" class="btn">
                <slot></slot>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GeneralProject',
    data: () => ({
        displayMessage: false
    }),
    methods: {

    }
}
</script>

<style>
    #gen-project {
        text-align: center;
        background-color: white;
        color: black;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        width: 250px;
        height: 150px;
    }
    #project {
        margin: 1vw;
        width: 66%;
    }
</style>


