const Router = require('koa-router');
const router = new Router();
const PasswordGenerator = require('./PasswordGenerator');
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
    const indexPage = await readFile('./index.html');
    const template = Handlebars.compile(indexPage.toString('utf8'));
    const passwordGenerator = new PasswordGenerator(8);
    ctx.type = 'html';
    ctx.body = template({ password: passwordGenerator.getPassword() });
  } catch (e) {
    fail(ctx, e);
  }
});

module.exports = router;
