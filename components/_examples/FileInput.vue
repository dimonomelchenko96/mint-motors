<template lang="pug">
label.wrap {{ text }}
    input.input(
        type="file"
        @change="uploadFile"
        accept=".png, .jpg, .jpeg"
    )
</template>

<script>
export default {
    data() {
        return {
            file: null
        }
    },
    methods: {
        uploadFile(e) {
            this.file = e.target.files[0];
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    /* STYLES */
}
.input {
    width: 0;
    height: 0;
    outline: 0;
    opacity: 0;
    pointer-events: none;
    user-select: none;
}
</style>