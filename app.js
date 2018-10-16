// 导入koa, 在koa2中， 我们导入的是一个class，因此用大写的Koa表示：
const Koa = require('koa');

// 导入koa-bodyparser:
const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller('controllers'));

//在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');