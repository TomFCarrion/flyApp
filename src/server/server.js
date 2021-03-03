import express from 'express';
import webpack from 'webpack'
import config from './config';

const { env, port } = config;

const app = express();
if (config.env === 'development') {
    console.log('Development config');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const { publicPath } = webpackConfig.output;
    const serverConfig = { serverSideRender: true, publicPath };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
    res.send({ hello: 'express'}).end();
});


app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`Server running on port ${port}`);
});