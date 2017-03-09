/**
 * @file 
 * Webpack configuration file for webpack 2.0 
 *
 * Archivo de configuracion para desarrollo.
 * 
 * 
 */
import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'source-map',
    entry: {
        'webpack': 'webpack-hot-middleware/client',
        'app': path.join(__dirname, '/client/index.js'),
        //vendor: ['moment'] //Manual vendor bundling
},
    output: {
        path: '/',
        publicPath: '/'
    },

    //Webpack 2.0
    resolve: {
        extensions: ['.js', '.jsx']
    },


    // stats: {
    //     colors: true
    // },

    // devServer: {
    //     hot: true,
    //     // enable HMR on the server

    //     contentBase: path.join(__dirname, 'dist'),
    //     // match the output path

    //     publicPath: '/'
    //     // match the output `publicPath`
    // },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'client'),
                exclude: [/node_modules/],
                use: 'babel-loader'
            }
        ]
    },


    plugins: [

        new webpack.NoEmitOnErrorsPlugin,  //Using NoErrorsPlugin is deprecated
        new webpack.optimize.OccurrenceOrderPlugin, //typo fixed OccurenceOrderPlugin 
        new webpack.HotModuleReplacementPlugin(),
        //Automatic vendor bundling
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            //minChunks: 2, // if you have any modules that get loaded 2 or more times 
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ]
}