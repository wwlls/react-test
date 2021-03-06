const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');
const compress = require('compression');
const config = require('./config');

vconstar app = express();

app.use(compress()); // compression([options])   根据给定的options 参数, 将所有请求的response进行压缩

// 是否处于开发环境
const isDevMode = (app.get('env') === 'development') ? true : false;
app.locals.isDevMode = isDevMode;


app.use(express.static(__dirname + '/build', {
  maxAge: 3600 * 1000
}));


app.use('/api', proxy(config.api, {
  proxyReqPathResolver: (req, res) => {
    console.log('api', req.url);
    return '/api' + req.url;
  }
}));

app.use('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

module.exports = app.listen(config.port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('App is running on port %s', config.port);
})