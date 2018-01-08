var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var glob = require('glob');
var entries = getEntry(['./src/module/*.js', './src/module/**/*.js']); // 获得入口js文件
var webpack=require("webpack")
const vuxLoader = require('vux-loader')


var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)    //是否在 dev 环境下开启 cssSourceMap ，在 config/index.js 中可配置
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)   //是否在 production 环境下开启 cssSourceMap ，在 config/index.js 中可配置 
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd     //最终是否使用 cssSourceMap

const webpackConfig = {
  entry: entries,         // 配置webpack编译入口
  output: {               // 配置webpack输出路径和命名规则
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],       //自动补全的扩展名
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {                             // 创建import或require的别名，一些常用的，路径长的都可以用别名
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'common': path.resolve(__dirname, '../src/common'),
      'components': path.resolve(__dirname, '../src/components'),
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: useCssSourceMap
    }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
    jQuery: "jquery",
    $: "jquery"
    })
    ]
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  if (typeof (globPath) != "object") {
    globPath = [globPath]
  }
  globPath.forEach((itemPath) => {
    glob.sync(itemPath).forEach(function (entry) {
      basename = path.basename(entry, path.extname(entry));
      if (entry.split('/').length > 4) {
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
      } else {
        entries[basename] = entry;
      }
    });
  });
  return entries;
}
