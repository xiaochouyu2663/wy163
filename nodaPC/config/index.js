var path = require('path');
module.exports={
    build:{   //生产环境
        
        //path
        assetsRoot:path.resolve(__dirname,'../dist'),
        assetsSubDirectory:'static',
        assetsPublicPath:'./'
    },
    dev:{     //开发环境
        //path
        assetsRoot:path.resolve(__dirname,'../dist'),
        assetsSubDirectory:'static',
        assetsPublicPath:'/'
    }
}