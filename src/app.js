const Koa = require('koa');
const removeTrailingSlashes = require('koa-remove-trailing-slashes');
const router = require('./routes/router');

const app = new Koa();
app.use(removeTrailingSlashes());
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;