//Simple server node.js es6

import express from 'express';
import path from 'path';

import webpackConfig from '../webpack.config.dev';

//import webpack from 'webpack';


let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})

app.listen(3001,()=>console.log('Listening on port 3001'));