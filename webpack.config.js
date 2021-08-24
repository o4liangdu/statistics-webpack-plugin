const path = require('path');
const FileListPlugin = require('./my-plugin/index')

module.exports = {
    mode: "development",
    entry: './src/app.js', //打包文件入口
    output: {               //打包文件出口
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
        ],
        
    },
    plugins: [
        new FileListPlugin({
            filename: 'fileList.md'
        }),
    ]
}