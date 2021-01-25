const { selectTable,  addOrEditTable,delTable,selectUserInfo } = require("./module");
const Router = require("koa-router");
const router = new Router();
const { createToken,decodeToken} = require("./jwt")

router.get("/", (ctx, next) => {
  ctx.body = "<h1>服务器请求成功</h1>";
});
// router.get("/get/:id", (ctx, next) => {
//   // ctx.body = 'hello Koa!'
//   let id = ctx.params.id;
//   ctx.body = id;
// });

//vaildToken

router.post('/vaildToken',async(ctx,next)=>{
    ctx.body = await decodeToken(ctx.request.body.token)
    // ctx.body = await selectTable("student_item")
})

router.post('/getToken',async(ctx,next)=>{
    ctx.body = await createToken()
    // ctx.body = await selectTable("student_item")
})
router.post('/login',async(ctx,next)=>{
    ctx.body = await selectUserInfo(ctx)
    // ctx.body = await selectTable("student_item")
})
router.post('/getTableData',async(ctx,next)=>{
    ctx.body = await selectTable("table_one",ctx)
    // ctx.body = await selectTable("student_item")
})
router.post('/addOrEditTableData',async(ctx,next)=>{
    ctx.body = await addOrEditTable(ctx)
    // ctx.body = await selectTable("student_item")
})
router.post('/delTableById',async(ctx,next)=>{
    ctx.body = await delTable(ctx)
    // ctx.body = await selectTable("student_item")
})
module.exports = router;
