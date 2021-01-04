<template>
    <div>
        <div class="header">
            <div class="user_info">
                <div class="user_pic">
                    <img src="../assets/images/user_pic.png" alt="">
                </div>
                <div class="user_name">1233</div>
            </div>
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
        methods: {},
        mounted() {},
        created() {},
    }
</script>
<style lang="less" scoped>
    .header {
        // display: flex;
        justify-content: space-between;
        height: 64px;
        width: 100%;
        vertical-align: middle;
        display: inline-block;
        // img{
        //     float: left;
        // }
    }

    .user_info div {
        display: inline-block;
        margin-top: 16px;
    }

    .user_info {
        text-align: center;
        margin-right: 10%;
        vertical-align: middle;
        float: right;
    }

    .user_name {
        vertical-align: middle;
        display: inline-block;
    }

    .user_pic {
        vertical-align: middle;
    }
</style>