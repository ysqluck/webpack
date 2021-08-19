// webpack 配置文件
const { resolve } = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        // 输出文件名称
        filename: 'built.js',
        // 输出文件路径
        // __dirname 代表当前文件 webpack.config.js 的目录绝对路径
        path: resolve(__dirname, 'dist')
    },
    // loader配置
    module:{
        rules:[
            // 详细的loader配置
            // 每一条规则是一个对象
            {
                // 正则表达式匹配文件后缀
                test:/\.css$/,
                // 使用那些loader处理，use数组的执行顺序 从后向前执行
                use:[
                    // 创建style标签，将js中的css模块添加到style标签中并将style标签添加到页面head中使之生效 
                    'style-loader',
                    // 将css文件变成commonjs的模块，引入script文件中，里面内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    // 插件
    plugins:[],
    // 模式
    mode:'development'

}