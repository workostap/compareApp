var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        __dirname + '/dev/js/entry.js'
    ],
    output: {
        path: __dirname + '/www',
        filename: 'build.js'
    },
    resolve: {
        root: path.join(__dirname,'dev/js'),
        alias: []
    },
    watch: true,
    watchOptions:{
        aggregateTimeout: 100
    },
    plugins: [],
    module:{
        loaders:[{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                plugins: ['transform-runtime']
            }
        }]
    },
    devtool:'cheap-inline-module-source-map'
};
