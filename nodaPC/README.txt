webpack
app文件夹存放原始的数据和javascript模块
pbulic用来存放之后供浏览器读取的文件（包括用webpack打包之后的js文件以及一个index.html文件）
|--public
    |--index.html 这里写最基础的html代码，这个文件的目的在于引入打包之后的js文件，暂定为bundle.js
|-app
    |--main.js   webpack打包的入口文件
|--webpack.config.js  webpack配置文件

webpack-dev-middleware,作用就是，生成一个与webpack的compiler绑定的中间件，然后在express启动的服务app中调用这个中间件。
这个中间件的作用呢，简单总结为以下三点：通过watch mode，监听资源的变更，然后自动打包（如何实现，见下文详解);快速编译，走内存；返回中间件，支持express的use格式。特别注明：webpack明明可以用watch mode，可以实现一样的效果，但是为什么还需要这个中间件呢？
答案就是，第二点所提到的，采用了内存方式。如果，只依赖webpack的watch mode来监听文件变更，自动打包，每次变更，都将新文件打包到本地，就会很慢。

step1: 配置publicPath.

publicPath,熟悉webpack的同学都知道，这是生成的新文件所指向的路径，可以模拟CDN资源引用。那么跟此处的主角webpack-dev-middleware什么关系呢，关系就是，此处采用内存的方式，内存中采用的文件存储write path就是此处的publicPath，因此，这里的配置publicPath需要使用相对路径。

vue-loader:vue-loader 是一个加载器，能把如下格式的 .Vue 组件转化成JavaScript模块

resolve: {
        
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
Webpack 的配置提供了 resolve 和 resolveLoader 参数来设置模块解析的处理细节，resolve 用来配置应用层的模块（要被打包的模块）解析，resolveLoader 用来配置 loader 模块的解析。

当引入通过 npm 安装的 node.js 模块时，可能出现找不到依赖的错误。Node.js 模块的依赖解析算法很简单，是通过查看模块的每一层父目录中的 node_modules 文件夹来查询依赖的。当出现 Node.js 模块依赖查找失败的时候，可以尝试设置 resolve.fallback 和 resolveLoader.fallback 来解决问题。
resolve: { fallback: path.join(__dirname, "node_modules") },
resolveLoader: { fallback: path.join(__dirname, "node_modules") }