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

const DIST_DIR = path.join(__dirname, "dist");
// serve webpack bundle output
app.use(devMiddleware);
app.get('/',function(req,res){
    
    
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


