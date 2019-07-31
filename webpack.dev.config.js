const webpack = require("webpack");
const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(__dirname,"./dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// const ExtractTextPlugin = require("extract-text-webpack-plugin");  webpack4以下用
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //webpack4以上使用

module.export = {
    //devtools:"source-map",
    entry: {
        bundle: ["./index.js"]
    },
    output: {
        path: BUILD_PATH,
        filename:"./js/[name].[hash:8].js",
        chunkFilename :"./js/[name].[chunkhash].js"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    //plugins: ["transform-runtime","transform-decorators-legacy"],
                    presets: ["react", "es2015", "stage-0"]
                }
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
                use: ["style-loader",MiniCssExtractPlugin.loader,"css-loader",'less-loader'],
                include: path.resolve('./src')
            },
            // {
            //     test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))||woff2?|svg|jpe?g|png|gif|ico)$/,
            //     loader: [
            //         //小于10kb的图片会自动转成dataUrl
            //         "url?limit=1024&name=img/[hash:8].[name].[ext]",
            //         "image?{mypassOnDebug:true, progressive: true,optimizationLevel:3,pngquant:{quality:'65-80',speed:4}}"
            //     ]
            // },
            {
                test: "url?limit=1024&name=img/[hash:8].[name].[ext]",
                loader: "url?limit=10000&name=fonts/[hash:8].[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: [".js",".json"]  //定义了解析模块时候的配置，可以指定模块的后缀，这样在引入的时候可以不需要写后缀，第一个参数为 "" 或者不写
    },
    devServer: {
        contextBase: "./dist",  // 本地服务器所加载的页面所在目录
        historyApiFallback: true,  //不跳转
        inline: true,  // 实时刷新
        port: 3000,
        open: true, //自动打开浏览器
        hot: true,  //热更新
        compress: true  //开启gzip  会压缩代码
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunk: ["bundle"],
            title: "bundle1",
            filename: "./index.html",  //可以设置HTML输出的路径和文件名
            template: "./index.html",  //可以设置哪个index.html为模板
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].[chunkhash:8].css",
            chunkFilename: "[id].css"
        }),
        // new CleanWebpackPlugin('dist')
    ],
    mode: "development"
}
