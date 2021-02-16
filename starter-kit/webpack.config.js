const { Module } = require("webpack");

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
    // plugins: []
}