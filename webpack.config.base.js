const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    //把文件变成文件路径
                    'file-loader',
                ],
            },
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/i,
                use: [
                    //转化成style标签
                    'style-loader',
                    // 转化成js字符串
                    'css-loader',
                    {
                        //sass-loader 转化css 代码
                        loader:
                            "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
};