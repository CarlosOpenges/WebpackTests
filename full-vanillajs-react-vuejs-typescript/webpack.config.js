const { Module } = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        js: './src/index.js',
        vanilla: './src/index_vanilla.js',
        react: './src/index_react.js'
    },
    output: {
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js|jsx$/i,
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
            // https://www.taniarascia.com/how-to-use-webpack/
            // asset options
            // asset/resource emits a separate file and exports the URL
            // asset/inline exports a data URI of the asset
            // asset/source exports the source code of the asset
            // asset automatically chooses between exporting a data URI and emitting a separate file.
            // Images
            {
                test: /\.(?:ico|gif|png|jpe?g|webp)$/i,
                type: 'asset/resource',
            },
            // SVGs
            {
                test: /\.(svg)$/,
                type: 'asset/inline',
            },
            // Videos
            {
                test: /\.(mp3|mp4|avi)$/i,
                type: 'asset/resource',
            },
            // Fonts
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/inline',
            },
            // Other
            {
                test: /\.(pdf|txt|avi)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true,
                        mozjpeg: {
                            progressive: true,
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                            quality: 75
                        }
                    },
                    },
                ],
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
                        loader: "postcss-loader",
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
            title: 'Webpack Tutorial JS',  // Not working
            template: './src/template.html',
            filename: './index.html',
            hash: true,
            //chunks:['js', 'vanilla']
            chunks:['js']
        }),
        new HtmlWebPackPlugin({
            title: 'Webpack Tutorial Vanilla',  // Not working
            template: './src/template.html',
            filename: './index_vanilla.html',
            hash: true,
            chunks:['vanilla']
        }),
        new HtmlWebPackPlugin({
            title: 'Webpack Tutorial React',  // Not working
            template: './src/template.html',
            filename: './index_react.html',
            hash: true,
            chunks:['react']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}