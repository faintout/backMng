<template>
  <div class="bgc">
      <div class="login_contnet">
          <div class="user_admin">
              <el-input v-model="userName" placeholder="请输入用户名"></el-input>

          </div>
          <div class="user_password">
              <el-input v-model="passWord" placeholder="请输入密码" show-password></el-input>

          </div>
          <el-button type="primary" @click="login">登录</el-button>
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
        userName:'',
        passWord:''
    }
  },
  watch:{},
  computed:{},
  methods:{
      login(){
          
      }
  },
  mounted(){},
  created(){
  },
}
</script>
<style lang="less" scoped>
</style>