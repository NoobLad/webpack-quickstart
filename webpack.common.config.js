var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// var extractCSS = new ExtractTextPlugin('styles/styles.css');

var devServerPort = 8080;

module.exports = {
    context: __dirname + "/src",
    entry: './app.js',
    output: {
        path: __dirname + "/dist",
        filename: "[name].[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['ng-annotate', 'babel?presets[]=es2015&plugins[]=transform-runtime']
            },
            { 
                test: /\.css$/,
                exclude: /app\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&camelCase&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            },
            {
                test: /app\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff2?|ttf)$/i,
                loaders: [
                    'file?name=[path][name]-[hash].[ext]'
                ]
            }
        ]
    },

    postcss: [
        require('autoprefixer-core')
    ],
    devServer: {
        port: devServerPort
    },
    plugins: [
        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:' + devServerPort + '/'
            },
            {
                reload: false
            }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        new ExtractTextPlugin('style.css', { allChunks: true })
    ]
};