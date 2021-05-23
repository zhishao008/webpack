const merge = require('webpack-merge');
const common = require('./webpack.base.config');
const path = require("path");
const BUILD_PATH = path.resolve(__dirname, "./dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
// const HotModuleReplacementPlugin = require("");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");  webpack4以下用
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //webpack4以上使用

module.exports = {
    //devtools:"source-map",
    entry: {
        bundle: ["./src/index.js"]
    },
    output: {
        path: BUILD_PATH,
        filename:"[name].[hash:8].js",
        chunkFilename :"[name].[chunkhash].js",
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
        publicPath: "/"
    },
    module:{
        rules: [
            // {
            //     test:/\.(js|jsx)$/, //以js结尾的文件
            //     loader:"babel-loader", //用babel-loader处理  es6语法
            //     exclude:/node_modules/, //处理node_modules的内容（已经处理过的文件就不再处理） 
            //     //include:path.resolve(__dirname,"src"),  //打包的范围（src文件夹里面的内容需要打包）
            //     query:{
            //         presets:["@babel/preset-env", "@babel/preset-react"] //最新的babel来处理
            //     }
            // },
            {
                test:/\.(js|jsx)$/, //以js结尾的文件
                //loader:"babel-loader", //用babel-loader处理  es6语法
                exclude:/node_modules/, //处理node_modules的内容（已经处理过的文件就不再处理） 
                //include:path.resolve(__dirname,"src"),  //打包的范围（src文件夹里面的内容需要打包）
                use: {
                    loader:"babel-loader",
                   // presets:["@babel/preset-env", "@babel/preset-react"] //最新的babel来处理
                    options: {
                        presets:["@babel/preset-env", "@babel/preset-react"],
                        plugins: [require('@babel/plugin-proposal-class-properties')]
                    }
                }
            },
            {
                test:/\.ts$/,
                use: [
                    "ts-loader"
                ]
            },
            {
                test:/\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.less/,
                // use: ["style-loader",MiniCssExtractPlugin.loader,"css-loader",'less-loader'],
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ],
                // include: path.resolve('./src')
            },
            // {
            //     test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))||woff2?|svg|jpe?g|png|gif|ico)$/,
            //     loader: [
            //         //小于10kb的图片会自动转成dataUrl
            //         "url?limit=1024&name=img/[hash:8].[name].[ext]",
            //         "image?{mypassOnDebug:true, progressive: true,optimizationLevel:3,pngquant:{quality:'65-80',speed:4}}"
            //     ]
            // },
            // {
            //     test: "url?limit=1024&name=img/[hash:8].[name].[ext]",
            //     loader: "url?limit=10000&name=fonts/[hash:8].[name].[ext]"
            // }
        ]
    },
    resolve: {
        extensions: [".js",".jsx",".json"]  //定义了解析模块时候的配置，可以指定模块的后缀，这样在引入的时候可以不需要写后缀，第一个参数为 "" 或者不写
    },
    devServer: {
        contentBase: "./dist",  // 本地服务器所加载的页面所在目录
        historyApiFallback: true,  //不跳转   404 重定向  【很重要】
        inline: true,  // 实时刷新
        port: 3000,
        //open: true, //自动打开浏览器
        hot: true,  //热更新
        compress: true  //开启gzip  会压缩代码
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunk: ["bundle"],
            title: "bundle1",
            //filename: "index.html",  //可以设置HTML输出的路径和文件名
            template: "./template/index.html",  //可以设置哪个index.html为模板
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].[chunkhash:8].css",
            chunkFilename: "[id].css"
        })
        
    ],
    mode: "development"
}
