<template>
    <div>
        <div class="menu_list" style="width:20%;float:left">
            <!-- <header-top></header-top> -->
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="2" >
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div style="width:80%;float:left">
            <header-top></header-top>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        
        
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