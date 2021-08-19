# 需要下载的包
1. webpack
2. webpack-cli
# 运行指令（非config配置文件）
## 开发环境
/*
    webpack ./src/index.js -o ./build/built.js --mode=developent    
    webpack 会以 ./src/index.js为入口文件开始打包，打包后输出到./build/built.js，打包环境为开发环境developent
*/
webpack [入口文件路径] -o [出口文件路径] --mode=[development or production]
## 生产环境
/*
    webpack ./src/index.js -o ./build/built.js --mode=developent    
    webpack 会以 ./src/index.js为入口文件开始打包，打包后输出到./build/built.js，打包环境为开发环境production
*/

`单纯的打包来说 webpack自身可以处理js和json的打包 但是无法处理图片css等格式文件`
# webpack.config.js文件配置
## 处理不同文件需要下载的包
1. css文件
    包1：css-loader 将css文件转换成commonjs模块后引入js文件中
    包2：style-loader 创建style标签将js文件中的css字符串添加到style标签中，并将style标签添加到html页面的head中使样式生效。
