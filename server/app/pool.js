// const db = require("./db");
const db = {
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "back_info",
    // database: "student",
    connectTimeout: 5000,
    multipleStatements: false,
};

const mysql = require("mysql");
let pool;
//断线重连
function repool() {
    pool = mysql.createPool({
        ...db,
        waitForConnections: true, //当无连接池可用时，等待 抛出
        connectionLimit: 100, //链接限制数
        queueLimit: 0, //最大链接等待数0 不限制
    });
    pool.on(
        "error", (err) => err.code === "PROTOCAL_CONNECTION_LOST" && setTimeout(repool, 2000)
    );
}
repool();


module.exports = pool