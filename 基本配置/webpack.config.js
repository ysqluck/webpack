// webpack 配置文件
const { resolve } = require('path')
// 引入html的插件包
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        // 输出文件名称
        filename: 'built.js',
        // 输出文件路径
        // __dirname 代表当前文件 webpack.config.js 目录的绝对路径
        path: resolve(__dirname, 'dist')
    },
    // loader配置
    module: {
        rules: [
            // 详细的loader配置
            // 每一条规则是一个对象
            {
                // 正则表达式匹配文件后缀
                test: /\.css$/,
                // 使用那些loader处理，use数组的执行顺序 从后向前执行
                use: [
                    // 创建style标签，将js中的css模块添加到style标签中并将style标签添加到页面head中使之生效 
                    'style-loader',
                    // 将css文件变成commonjs的模块，引入script文件中，里面内容是样式字符串
                    'css-loader',
                ]
            },
            {
                // scssloader配置
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    // 'resolve-url-loader'
                ]
            },
            {
                // 处理图片资源 webpack4
                test:/\.(png|jpg|jpeg|gif)/,
                // 只是用一个loader，不许要写use后面可以直接loader：字符串
                loader:'url-loader',
                options:{
                    // limit设置图片大小，当图片小于设置的大小时，会转成base64处理
                    // 优点：减小请求次数，减轻服务器压力
                    // 缺点：就是图片体积会变得更大（包会变大，文件请求速度会变慢）
                    // 正常来说8~12kb左右的图片用来转为base64
                    limit:100*1024
                },
                type: 'javascript/auto'
            }
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            //     // generator: {
            //     //     dataUrl: content => {
            //     //         content = content.toString();
            //     //         return svgToMiniDataURI(content);
            //     //     }
            //     // }
            // },
        ]
    },
    // 插件
    plugins: [
        // 默认输出的是没有结构的html文件，需要在配置项中设置html的结构
        new HtmlWebPackPlugin({
            // 复制template选定的html资源，并自动引入打包后的其他资源
            template: "./src/index.html"
        })
    ],
    // 模式
    mode: 'development'

}