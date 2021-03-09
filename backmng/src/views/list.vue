<template>
    <div class="list_content">
        <div class="tool_bar">
            <el-button size='mini' @click="exportExcel">导出Excel</el-button>
        </div>
        <div class="table_box">
            <el-table class="list_content_table" :data="tableData" style="width: 100%">
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
                        <span style="display: flex;justify-content: space-between;">
                            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                            <el-button size="mini" @click="getTableList(1)">搜索</el-button>
                        </span>
                    </template>
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 每页14个 -->
        <el-pagination background layout="prev, pager, next" :total="totalPages" @current-change="currentPage" :page-size="pageSize">
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
                pageIndex: 1,
                pageSize: 14,
                totalPages: 0
            }
        },
        watch: {
            pageIndex(n, o) {
                if (n != o) {
                    this.getTableList()
                }
            }
        },
        computed: {},
        methods: {
            //导出列表
            exportExcel() {
                console.log('tableData',this.tableData);
                let sheetData = []
                let sheetHeader = ['ID','Name','info','info1','info2','info3','info4','info5','info6']
                this.tableData.map(table=>{
                    let tempArr = []
                    tempArr.push(
                        table.id,
                        table.name,
                        table.info,
                        table.info1,
                        table.info2,
                        table.info3,
                        table.info4,
                        table.info5,
                        table.info6,
                    )
                    sheetData.push(tempArr)
                })
                // 直接导出文件
                const ExportJsonExcel = require("js-export-excel");

                var option = {};

                option.fileName = "listData";

                option.datas = [{
                        sheetData,
                        sheetHeader,
                        columnWidths: [2,5,7,7,7,7,7,7,7],
                    },
                ];

                var toExcel = new ExportJsonExcel(option); //new
                toExcel.saveExcel(); //保存
            },
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
            currentPage(e) {
                // console.log(e);
                this.pageIndex = e
            },
            getTableList(pageIndex) {
                let params = {
                    pageSize: this.pageSize,
                    pageIndex: pageIndex || this.pageIndex,
                    searchName: this.search
                }
                AjaxTool.getTableData(params).then(res => {
                    if (res.success) {
                        this.tableData = res.data || []
                        this.totalPages = res.total || 0
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.getTableList()
        },
        created() {},
    }
</script>
<style lang="less" scoped>
    .list_content {
        width: 100%;
        height: calc(100% - 82px);

        .tool_bar {
            height: 30px;
            padding: 0 50px;
            text-align: left;
        }
    }

    .list_content_table {
        width: 90%;
        // height: 100%;
        // overflow: scroll;
    }

    .table_box {
        width: 94%;
        height: calc(100% - 30px);
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0 3%;
    }

    .list_content_table .el-input {
        width: 58%;
    }
</style>