const Router = require('koa-router');
const router = new Router();
const Password = require('../Password');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const Handlebars = require("handlebars");

const fail = (ctx, e) => {
  ctx.status = 500;
  ctx.body = {
    code: -1,
    message: e.message
  };
};

router.get('/', async ctx => {
  try {
    const indexPage = await readFile(`${__dirname}/../templates/index.html`);
    const template = Handlebars.compile(indexPage.toString('utf8'));
    const password = new Password(8);
    ctx.type = 'html';
    ctx.body = template({ password: password.generate() });
  } catch (e) {
    fail(ctx, e);
  }
});

module.exports = router;
