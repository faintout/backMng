const pool = require("./pool");
const { createToken, decodeToken } = require("./jwt")
let msg = "处理成功";
let success = true;
let code = 200;
let tableName = 'table_one'
function selectTable(value,ctx) {
    return new Promise((res, rej) => {
        pool.getConnection((err, conn) => {
            conn.query("select * from " + value, (e, r) => {
                console.log(r, value, e)
                let resu = {
                    msg: "处理成功",
                    success: true,
                    code: 200
                }
                if (e) {
                    resu.success = false;
                    resu.code = e.code;
                    resu.msg = "处理失败" + e.sqlMessage || "";
                }
                let pageSize = ctx.request.body.pageSize
                let pageIndex = ctx.request.body.pageIndex
                console.log('pageSize',pageSize);
                //数据处理
                let allDataList  = []
                let dataList = []
                for(let i=0;i<r.length;i++){
                    dataList.push(r[i])
                    console.log('i%pageSize',i,r.length);
                    if(dataList.length==pageSize||i==r.length-1){
                        allDataList.push(dataList)
                        dataList = []
                    }
                }
                console.log('allDataList',allDataList);
                resu.data = pageSize==0?r:allDataList[pageIndex-1]
                resu.total = r.length
                
                return res(resu)
            });
            conn.release();
        });
    });
}

// function ifSuccess(res) {
//   return res ? success : !success;
// }
function selectUserInfo(ctx) {
    return new Promise((res, rej) => {
        pool.getConnection((err, conn) => {
            conn.query("select * from " + 'user_info', (e, r) => {
                // let data = await selectTable('user_info')
                console.log(r.some(user => {
                    console.log(JSON.stringify(user), JSON.stringify(ctx.request.body))
                    return JSON.stringify(user) == JSON.stringify(ctx.request.body)
                }))
                // return
                if (r.some(user => JSON.stringify(user) === JSON.stringify(ctx.request.body))) {
                    // if (r.include(user=>JSON.stringify(user))== JSON.stringify(ctx.request.body) ) {
                    //生成token
                    let token = createToken()
                    console.log(token)
                    return res({ success: true, code: 200, token, msg: '登录成功!' })
                } else {
                    return res(new Result({ success: false, code: 404, msg: "账号或密码不正确" }))
                }
                // resu.data = r
                // return res(new Result(resu))
            });
            conn.release();
        });
    });

    // console.log('查询结果', )
}
function addOrEditTable(res) {
    //   console.log("value", res.req.body);
    //   return pool.getConnection((err, conn) => {
    //     if (err) throw err;

    //     conn.query("INSERT INTO students set ?", res.req.body, (e, r) => {
    //       if (e) {
    //         msg = "数据添加失败" + e.sqlMessage || "";
    //         success = false;
    //         code = e.code;
    //       }
    //       res.json(new Result({ msg, success: success }));
    //     });
    //     conn.release();
    //   });
    console.log('res.request.body', res.request.body);
    if (res.request.body.id) {
        console.log('查询到当前有id')
        return updateTable(res)
    }
    console.log('继续执行')
    return new Promise((resolve, rej) => {
        pool.getConnection((err, conn) => {
            conn.query("INSERT INTO " + tableName + " set ?", res.request.body, (e, r) => {
                let resu = {
                    msg: "添加成功",
                    success: true,
                    code: 200
                }
                if (e) {
                    resu.success = false;
                    resu.code = e.code;
                    resu.msg = "添加失败" + e.sqlMessage || "";
                }
                return resolve(new Result(resu))
            });
            conn.release();
        });
    });
}

function updateTable(res) {
    let resArr = {}
    console.log('name', res.request.body.name)
    console.log('id', res.request.body.id)
    // for()
    // console.log('body',res.request.body)
    // res.request.body.map(resItem=>{
    //     console.log(resItem)
    //     return
    // })
    var model_sql = 'update ' + tableName + ' set ';
    for (let key in res.request.body) {
        if (key == 'id') continue
        // resArr.push(res.request.body)
        // resArr.key = res.request.body[key]
        // sqls += mysql.format(model_sql, item) + ';'
        // model_sql+=`${key}='${res.request.body[key]}' `
        model_sql += key + '=' + '"' + res.request.body[key] + '",'
    }
    model_sql = model_sql.substr(0, model_sql.length - 1)
    model_sql += ` where id = ${res.request.body.id}`
    // var sqls = ''

    // 拼接sql语句
    // values.forEach((item, index) => {
    //     sqls += mysql.format(model_sql, item) + ';'
    // })
    // console.log(`UPDATE ${tableName} SET name=${res.request.body.name} WHERE id=${res.request.body.id}`)
    console.log(model_sql)
    return new Promise((resolve, rej) => {
        pool.getConnection((err, conn) => {
            conn.query(model_sql, (e, r) => {
                let resu = {
                    msg: "更新成功",
                    success: true,
                    code: 200
                }
                if (e) {
                    resu.success = false;
                    resu.code = e.code;
                    resu.msg = "更新失败" + e.sqlMessage || "";
                }
                return resolve(new Result(resu))
            });
            conn.release();
        });
    });
}
function delTable(res) {

    // console.log(model_sql)
    let model_sql = `DELETE FROM ${tableName} WHERE ID=${res.request.body.id}`
    return new Promise((resolve, rej) => {
        pool.getConnection((err, conn) => {
            conn.query(model_sql, (e, r) => {
                let resu = {
                    msg: "删除成功",
                    success: true,
                    code: 200
                }
                if (e) {
                    resu.success = false;
                    resu.code = e.code;
                    resu.msg = "删除失败" + e.sqlMessage || "";
                }
                return resolve(new Result(resu))
            });
            conn.release();
        });
    });
}

function Result({ code = 200, msg = "", data = {}, success = ""  }) {
    this.code = code;
    this.msg = msg;
    this.success = success;
    this.data = data;
}
module.exports = { selectTable, Result, addOrEditTable, delTable, selectUserInfo };