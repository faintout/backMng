<template>
  <div>
      <div class="header">
          <img src="../assets/images/7.png" alt="">
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
  components:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  mounted(){},
  created(){},
}
</script>
<style lang="less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    height: 64px;
    width: 100%;
}
.user_info div{
    display: inline-block;
}
.user_name{
    vertical-align: middle;
}
</style>