const http = require('http');
const app = require('./app');
http.createServer(app.callback()).listen(80);