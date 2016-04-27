var config = require('./webpack.common.config');
var webpack = require('webpack');

config.plugins = [
    new webpack.DefinePlugin({
        PROD: false
    })
].concat(config.plugins);

config.devtool = "#source-map";

module.exports = config;