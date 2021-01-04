<template>
    <div class="bgc" :style="{background:'url('+imgUrl+')'}">
        <div class="login_contnet">
            <div class="user_admin">
                <el-input v-model="userName" placeholder="请输入用户名" size="small"></el-input>

            </div>
            <div class="user_password">
                <el-input v-model="passWord" placeholder="请输入密码" show-password  size="small"></el-input>

            </div>
            <el-button type="primary" @click="login" size="small">登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                userName: '',
                passWord: '',
                imgUrl: ''
            }
        },
        watch: {},
        computed: {},
        methods: {
            login() {

            }
        },
        mounted() {
            var self = this
            $.ajax({
                type: "GET",
                url: '/acgurl.php?return=json',
                success:res=>{
                    console.log(res);
                    // this.$nick()
                    // self.imgUrl = res.imgurl
                }
            })
        },
        created() {

        },
    }
</script>
<style lang="less" scoped>
.login_contnet{
    width: 15%;
    border: 2px solid red;
    border-radius: 10px;
    padding:0 5%
}
.bgc{
    width: 100%;
    height: 100%;
}
.user_admin,.user_password{
    margin-bottom: 5%;
}
</style>