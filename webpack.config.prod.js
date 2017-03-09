/**
 * @file 
 * Webpack configuration file for webpack 2.0 
 *
 * Archivo para distribucion.
 * cli:   babel-node bundle.js
 * npm run build
 */
import path from 'path';
import webpack from 'webpack';

export default {
    entry: {
        app: path.join(__dirname, '/client/index.js'),
        //vendor: ['moment'] //Manual vendor bundling
    },
    output: {
        path: path.join(__dirname, 'wwwroot/js'),
        filename: '[name]-[hash].js',
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
            },

            // {
            //     test: /\.css$/,
            //     exclude: [/node_modules/],
            //     use: ['style-loader','css-loader']
            // }
        ]
    },


    plugins: [
        //Automatic vendor bundling
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].js',
            //minChunks: 2, // if you have any modules that get loaded 2 or more times 
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]
}