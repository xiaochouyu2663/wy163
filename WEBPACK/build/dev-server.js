var config =require('./webpack.base.conf.js');
var webpack =require('webpack');
var express=require('express');
var opn=require('opn');
var path=require('path');
const webpackMiddleware = require("webpack-dev-middleware");
var compiler = webpack(config);
var port = process.env.PORT || 8080;


var app=express();
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
})
var hotMiddleware = require('webpack-hot-middleware')(compiler,{
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
});
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
// serve webpack bundle output
app.use(devMiddleware);

app.use(hotMiddleware);


app.get('/',function(req,res){
  
  res.send('hello world')
})

app.listen(port, function (err) {
    if (err) {
      console.log(err)
      return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
    opn(uri);                  //在当前应用打开ur
  })


