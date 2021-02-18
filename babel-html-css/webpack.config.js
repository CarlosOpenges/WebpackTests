const { Module } = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // entry: {},
    // output: {},
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: [/node_modules/, /dist/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
            // To minimize css use CssMinimizerWebpackPlugin
            // https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Webpack Tutorial',  // Not working
            template: './src/template.html',
            filename: './index.html' // output file
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}