var path=require('path');
var express = require('express');        //用来引入express模块
var opn = require('opn');               
var app=express();                        //创建express应用程序
app.set('port',process.env.PORT || 3000); // 设置端口为3000
app.get('/', function (req, res) {        //  设置首页的路由 用 '/' 表示
    res.send('Hello World!');
});
console.log('当前路径'+__dirname)
// var devMiddleware = require('webpack-dev-middleware')(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     stats: {
//       colors: true,
//       chunks: false
//     }
//   })
console.log(path.resolve(__dirname+'/index.js'))
module.exports =app.listen(app.get('port'), function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
    opn(uri)                      //在当前应用打开uri
})