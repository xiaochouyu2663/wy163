//webpack 配置文件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:__dirname+'/app/index.js' ,    //唯一入口文件
    output:{                            //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
        path:__dirname+'/public',       //打包后的文件存放的地方
        publicPath:__dirname+'/public',
        filename:'bundle.js'            //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } , 
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}