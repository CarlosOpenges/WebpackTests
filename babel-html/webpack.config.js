const { Module } = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
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
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Webpack Tutorial',  // Not working
            template: './src/template.html',
            filename: './index.html' // output file
        })
    ]
}