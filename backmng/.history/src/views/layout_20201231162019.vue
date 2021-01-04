<template>
    <div class="h100">
        <div class="menu_list" style="width:200px;float:left">
            <!-- <header-top></header-top> -->
            <img :src="require('../assets/images/'+(!isCollapse?'7':'7_25px')+'.png')" alt="" @click="isCollapse = !isCollapse" :style="{left:isCollapse?'-64px':0}">
            <!-- <img src="../assets/images/7.png" alt="" @click="isCollapse = !isCollapse" style="cursor:pointer;"> -->
            <el-row class="tac h100">
                <el-col :span="12" class="h100">
                    {{$route}}
                    <el-menu default-active="/_index" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
                        <el-menu-item index="/_index">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item index="/addList">
                            <i class="el-icon-document"></i>
                            <span slot="title">添加</span>
                        </el-menu-item>
                        <el-menu-item index="/list">
                            <i class="el-icon-setting"></i>
                            <span slot="title">列表查看</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div style="width:80%;float:left">
            <header-top></header-top>
            <div class="content">
                <el-breadcrumb separator-class="el-icon-arrow-right"  style="margin: 5px 0 20px 20px;">
                    <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
                </el-breadcrumb>
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
                isCollapse: false
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
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
        // height: calc(100% - 64px);
    }

    .menu_list {
        img {
            cursor: pointer;
            position: relative,
        }
    }
</style>