<template>
    <div class="list_content">
        <el-table class="list_content_table" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
            <el-table-column label="Name" prop="name">
            </el-table-column>
            <el-table-column label="info" prop="info">
            </el-table-column>
            <el-table-column label="info1" prop="info1">
            </el-table-column>
            <el-table-column label="info2" prop="info2">
            </el-table-column>
            <el-table-column label="info3" prop="info3">
            </el-table-column>
            <el-table-column label="info4" prop="info4">
            </el-table-column>
            <el-table-column label="info5" prop="info5">
            </el-table-column>
            <el-table-column label="info6" prop="info6">
            </el-table-column>
            <!-- <el-table-column label="Name" prop="name">
            </el-table-column>
            <el-table-column label="Name" prop="name">
            </el-table-column>
            <el-table-column label="Name" prop="name">
            </el-table-column>
            <el-table-column label="Name" prop="name">
            </el-table-column>
            <el-table-column label="Name" prop="name">
            </el-table-column> -->
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 每页14个 -->
        <el-pagination background layout="prev, pager, next" :total="totalPages" @current-change="currentPage">
        </el-pagination>
        <el-dialog title="修改信息" :visible.sync="dialogVisible" width="70%">
            <addList :editData="editData"></addList>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { AjaxTool } from '../request/ajaxUtil'
    import addList from './addList'
    export default {
        components: { addList },
        data() {
            return {
                search: '',
                editData: '',
                dialogVisible: false,
                tableData: [],
                pageIndex:1,
                pageSize :14,
                totalPages:0
            }
        },
        watch: {
            pageIndex(n,o){
                if(n!=o){
                    this.getTableList()
                }
            }
        },
        computed: {},
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
                this.dialogVisible = true
                this.editData = row
            },
            handleDelete(index, row) {
                // console.log(index, row);
                this.$confirm('确认删除当前行？', row.name, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    callback: action => {
                        if (action === 'confirm') {
                            // console.log('按下 确定')
                            // localStorage.removeItem('backMng_token')
                            // this.$store.commit('delToken')
                            // this.$router.push('/login')
                            // 调用接口，本地index删除
                            AjaxTool.delTableById({ id: row.id }).then(res => {
                                if (res.success) {
                                    this.$message.success(res.msg)
                                    this.tableData.splice(index, 1)
                                } else {
                                    this.$message.error(res.msg)
                                }
                            })


                        } else {
                            console.log('按下 取消')
                        }
                    }
                })
            },
            currentPage(e){
                // console.log(e);
                this.pageIndex = e
            },
            getTableList() {
                let params ={
                    pageSize = this.pageSize,
                    pageIndex = this.pageIndex
                }
                AjaxTool.getTableData().then(res => {
                    if (res.success) {
                        this.tableData = res.data || []
                        this.totalPages = res.total||0
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.getTableList()
        },
        created() {
        },
    }
</script>
<style lang="less" scoped>
    .list_content {
        width: 100%;
        height: 100%;
    }

    .list_content_table {
        width: 90%;
        margin-left: 5%;
        height: 820px;
        // overflow: scroll;
    }
</style>