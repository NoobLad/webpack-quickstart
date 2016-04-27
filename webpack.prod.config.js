var config = require('./webpack.common.config');
var webpack = require('webpack');

config.plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        PROD: true
    })
].concat(config.plugins);

module.exports = config;