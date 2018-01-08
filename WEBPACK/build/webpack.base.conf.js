//webpack 配置文件
const path=require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:path.resolve(__dirname,'../app/index.js') ,    //唯一入口文件
    output:{                            //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
        path:path.resolve(__dirname,'../app/index.js'),       //打包后的文件存放的地方  只使用dev-middleware 可以忽略本属性
        publicPath:'/assets/',
        filename:'bundle.js'            //打包后输出文件的文件名
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname , "../app/index.html")//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}