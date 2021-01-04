<template>
    <div class="bgc" :style="{background:'url('+imgUrl+')'}">
        <div class="login_contnet">
            <div class="user_admin">
                <el-input v-model="userName" placeholder="请输入用户名" size="small"></el-input>

            </div>
            <div class="user_password">
                <el-input v-model="passWord" placeholder="请输入密码" show-password size="small" @native.enter="login"></el-input>

            </div>
            <el-button type="primary" @click="login" size="small" style="margin-top:1rem">登录</el-button>
        </div>

    </div>
</template>

<script>
    import { AjaxTool } from '../request/ajaxUtil'
    import local from '../toolUtil/local'
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
                AjaxTool.login({ "userName": this.userName, "passWord": this.passWord, }).then(
                    res => {
                        //本地存储
                        if (res.success) {
                            local('backMng_token', res.token)
                            this.$message({
                                type: 'success',
                                message: res.msg
                            })
                            this.$router.push('/')
                        } else {
                            this.$message.error(res.msg)
                        }
                    }
                )
            }
        },
        mounted() {
            var self = this
            $.ajax({
                type: "GET",
                url: '/img/acgurl.php?return=json',
                success: res => {
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
    .login_contnet {
        position: relative;
        width: 10%;
        border: 1px solid #fff;
        border-radius: 10px;
        padding: 1% 3%;
        background-color: rgba(255, 255, 255, 0.4);
        left: 65%;
        top: 40%;
    }

    .bgc {
        width: 100%;
        height: 100%;
    }

    .user_admin,
    .user_password {
        margin-bottom: 5%;
    }
</style>