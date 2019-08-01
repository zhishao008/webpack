const webpack = require("webpack");
const path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports ={
    entry: {
        bundle: path.join(__dirname, 'src/index.js')  // app.js作为打包的入口
    },
    // 输出目录
    output: {
        path: path.join(__dirname, './dist'), // 打包好之后的输出路径
        filename: 'js/[name].[hash].js',  //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
        chunkFilename: 'js/[name].[hash].js',
        //publicPath: '/dist' // 静态资源文件引用时的路径（加在引用静态资源前面的）
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/, //以js结尾的文件
                loader:"babel-loader", //用babel-loader处理  es6语法
                exclude:/node_modules/, //处理node_modules的内容（已经处理过的文件就不再处理） 
                //include:path.resolve(__dirname,"src"),  //打包的范围（src文件夹里面的内容需要打包）
                query:{
                    presets:["@babel/preset-env", "@babel/preset-react"] //最新的babel来处理
                }
            },
            // {
            //     test:/\.css$/, //以css结尾的文件
            //     loader:"style-loader!css-loader"
            // },
            // {
            //     test:/\.html$/, //以html结尾的文件
            //     loader:"html-loader"
            // }
        ]
    },
    // devServer: {
    //     contextBase: "./dist",  // 本地服务器所加载的页面所在目录
    //     // historyApiFallback: true,  //不跳转
    //     // inline: true,  // 实时刷新
    //     // host:"localhost",
    //     port: 3000,
    //     open: true, //自动打开浏览器
    //     hot: true,  //热更新
    //     compress: true  //开启gzip  会压缩代码
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // filename: "index.html",
            template: "./template/index.html",  //可以设置哪个index.html为模板
        }),
        new CleanWebpackPlugin()
    ],
}
