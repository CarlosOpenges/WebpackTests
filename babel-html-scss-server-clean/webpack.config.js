const { Module } = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    // entry: {},
    output: {
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
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
                test: /\.s?css$/i,
                use: [
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            }
            // To minimize css use CssMinimizerWebpackPlugin
            // https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers
          // (i.e. `terser-webpack-plugin`), uncomment the next line
          `...`,
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new CleanWebpackPlugin(),
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