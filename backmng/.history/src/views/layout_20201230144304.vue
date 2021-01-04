<template>
    <div>
        <div class="menu_list">

        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {},
        created() {},
    }
</script>
<style lang="less" scoped>
</style>