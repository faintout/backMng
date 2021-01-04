<template>
    <div>
        <div style="width:20%"></div>
        <div style="width:80%"></div>
        <header-top></header-top>
    </div>
</template>

<script>
import headerTop from './headerTop'
    export default {
        components: {
            headerTop
        },
        data() {
            return {
                isCollapse:true
            }
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