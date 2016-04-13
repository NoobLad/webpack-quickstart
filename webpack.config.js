var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('styles/styles.css');

module.exports = {
    context: __dirname + "/src",
    entry: './app.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extractCSS.extract(['css-loader'])
            },
            {
                test: /\.html$/,
                loader: 'html-loader' },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff2?|ttf)$/i,
                loaders: [
                    'file?name=[path][name]-[hash].[ext]'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        extractCSS
    ]
};