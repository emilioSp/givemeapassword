const Koa = require('koa');
const helmet = require("koa-helmet");
const serve = require('koa-static');
const removeTrailingSlashes = require('koa-remove-trailing-slashes');
const router = require('./routes/router');

const app = new Koa();
app.use(helmet());
app.use(removeTrailingSlashes());
app.use(serve('src/public'));
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;