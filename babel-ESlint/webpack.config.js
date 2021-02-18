const path = require('path');
const { Module } = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');

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
            }
        ]
    },
    plugins: [
        new ESLintPlugin(
                {
                //overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
                //context: path.resolve(__dirname, '../src/js'),
                //files: '**/*.js',
            }
        )
    ]
}