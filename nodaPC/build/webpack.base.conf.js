//webpack 配置文件
const path=require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
const config=require('../config')
module.exports={
    entry:{ //唯一入口文件
        'main': [hotMiddlewareScript,'./app/main.js'],
    },    
    output:{                            //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
        path:path.resolve(__dirname,'../dist/static'),       //打包后的文件存放的地方  只使用dev-middleware 可以忽略本属性
        publicPath:process.env.NODE_ENV ==='production'?config.build.assetsPublicPath:config.dev.assetsPublicPath,
        filename:'[name][hash:8].js'            //打包后输出文件的文件名
    }, 
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!scss-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader:'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon:path.resolve(__dirname,'../static/favicon.ico'),
            template: path.resolve(__dirname , "../app/index.html")//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.scss','.vue'],
        alias: {
            'vue': 'vue/dist/vue.js',
            'jquery':'jquery',
            'static':path.resolve(__dirname,'../static')
        },
        // fallback: [path.join(__dirname, '../node_modules')]
    },
    resolveLoader: {
        // fallback: [path.join(__dirname, '../node_modules')]
    },
}