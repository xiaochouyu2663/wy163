//webpack 配置文件
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{   //唯一入口文件
        'login': path.resolve(__dirname,'./app/js/index.js'),
        'register':path.resolve(__dirname,'./app/js/home.js')
    },    
    output:{                            //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
        path:__dirname+'/public/static',       //打包后的文件存放的地方
        publicPath:'./static',
        filename:'[name][hash:8].js'            //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } , 
    plugins: [
        //html-webpack-plugin的一个实例生成一个html文件如果单页应用中需要多个页面入口，或者多页应用时配置多个html时，那么就需要实例化该插件多次
        //指定生成的html文件内容中的link和script路径是相对于生成目录下的，写路径的时候请写生成目录下的相对路径，即publicPath要写相对路径
        new HtmlWebpackPlugin({//new 一个这个插件的实例，并传入相关的参数
            filename:'../index.html',  
            title:'xx商城',
            template: __dirname + "/app/index.html" ,
            inject:'head',      //所有JavaScript资源插入到head元素中,true或者body：所有JavaScript资源插入到body元素的底部,false： 所有静态资源css和JavaScript都不会注入到模板文件中
            hash:true ,   //是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
            
        }),
        new HtmlWebpackPlugin({
            filename: '../list.html',
            template:  __dirname + "/app/index.html",
        }), 
    ],
}