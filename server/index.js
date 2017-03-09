//Simple server node.js es6

import express from 'express';
import path from 'path';


//Imports necesario para que funcione webpack en ambiente de desarrollo
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';


let app = express();


//Webpack Specific Server 

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    },
}));

app.use(webpackHotMiddleware(compiler));


//End Webpack Specific Server 



app.use('/public', express.static(__dirname + '/public'));

app.use('/lib', express.static('node_modules'));


app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})

app.listen(3001,()=>console.log('Listening on port 3001'));
