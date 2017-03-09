import webpack from 'webpack';
import webpackConfig from './webpack.config.prod.js'; // <-- Contains ES6+

const bundler = webpack(webpackConfig);

//console.log(bundler);

bundler.run((err,stats)=>{

    if (err) {
        console.log(err);
    }



});