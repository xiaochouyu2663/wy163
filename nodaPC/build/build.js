var webpackConfig = require('./webpack.prod.conf');
var config = require('../config');
var path = require('path')
var webpack = require('webpack')
require('shelljs/global')
var ora= require('ora');            //在终端显示的旋转器插件
console.log(                         //  输出提示信息 ～ 提示用户请在 http 服务下查看本页面，否则为空白页
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  )
var spinner=ora('building for production...');
spinner.start()

var assetsPath= path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
rm('-rf', assetsPath)         //删除这个文件夹 （递归删除）
mkdir('-p', assetsPath)        //创建此文件夹
cp('-R', './static/*', assetsPath)     //将static文件夹下的文件复制到assetsPath

webpack(webpackConfig,function(err,stats){
    spinner.stop();
    if(err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})
