const Koa = require('koa');
const removeTrailingSlashes = require('koa-remove-trailing-slashes');
const serve = require('koa-static');
const router = require('./router');

const app = new Koa();
app.use(removeTrailingSlashes());
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;