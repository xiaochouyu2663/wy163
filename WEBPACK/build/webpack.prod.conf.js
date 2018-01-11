let baseWebpackConfig = require('./webpack.base.conf.js');
let merge = require('webpack-merge');
let webpackConfig = merge(baseWebpackConfig,{
    devtool:  '#source-map' 
});
module.exports=webpackConfig;
