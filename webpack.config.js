var webpack = require('webpack');
var path = require('path');

// if(ENV == 'web'){
//     otherLibs = {
//         sanitize:'lib/angular-sanitize',
//         //uiSelect:'lib/select',
//         uiRouter:'lib/angular-ui-router.min',
//         uiBootstrap:'lib/ui-bootstrap-tpls-2.5.0.min',
//         angularAnimate:'lib/angular-animate.min',
//         angularTouch: 'lib/angular-touch.min',
//         templates:'templates'
//     };
//
//     plugins = [
//         // new webpack.ProvidePlugin({
//         //     angular: __dirname + '/dev_' + ENV + '/js/lib/angular.min'
//         // })
//         // new webpack.optimize.UglifyJsPlugin({
//         //     compress: {
//         //         warnings: false,
//         //         drop_console: false
//         //     },
//         //     mangle: false
//         // })
//     ];
// } else if( ENV == 'mobile') {
//     otherLibs = {
//         templates:'templates',
//         roundProgress: 'lib/roundProgress.min'
//     };
//
//     plugins =[];
// }

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
        //otherLibs
    },
    watch: true,
    watchOptions:{
        aggregateTimeout: 100
    },
    plugins: [],
    //plugins: plugins,
    module:{
        loaders:[{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                plugins: ['transform-runtime']
            }
        }]
    }
    ,

    devtool:'cheap-inline-module-source-map'
};
