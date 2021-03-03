import express from 'express';
import webpack from 'webpack';
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
  res.send(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fly App</title>
        <link rel="stylesheet" href="assets/app.css" type="text/css"/> 
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="assets/app.js" type="text/javascript"></script>
    </html>`);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port}`);
});
