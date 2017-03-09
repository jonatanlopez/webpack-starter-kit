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
    entry: {
        app: path.join(__dirname, '/client/index.js'),
        //vendor: ['moment'] //Manual vendor bundling
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/public/'
    },

    //Webpack 2.0
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            }
        ]
    },


    plugins: [
        //Automatic vendor bundling
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: 2, // if you have any modules that get loaded 2 or more times 
        })
    ]
}