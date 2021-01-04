<template>
    <div class="list_content">
        <el-table class="list_content_table" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
            <el-table-column label="Date" prop="date">
            </el-table-column>
            <el-table-column label="Name" prop="name">
            </el-table-column>
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
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
        <el-dialog title="修改信息" :visible.sync="dialogVisible" width="70%">
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import addList from './addList'
    export default {
        components: {},
        data() {
            return {
                dialogVisible:false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                search: ''
            }
        },
        watch: {},
        computed: {},
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
                this.dialogVisible = true
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            addData() {
                for (let i = 0; i < 100; i++) {
                    this.tableData.push({
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    })
                }
            }
        },
        mounted() {},
        created() {
            this.addData()
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
        overflow: scroll;
    }
</style>