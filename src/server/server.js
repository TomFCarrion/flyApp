import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import config from './config';
import helmet from 'helmet';
import React from 'react'; 
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom'; 
import serverRoutes from '../frontend/routes/serverRoutes'
import {rootReducer} from '../frontend/reducers/index'; 
import thunk from 'redux-thunk';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();


if (config.env === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
    app.use(express.static(`${__dirname}/public`));
    app.use(helmet());
    app.use(helmet.permittedCrossDomainPolicies());
    app.disable('x-powered-by');
  }


const setResponse = (html) => {
    return (`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fly App</title>
        <link rel="stylesheet" href="assets/app.css" type="text/css"/> 
    </head>
    <body>
        <div id="root"> ${html}</div>
    </body>
    <script src="assets/app.js" type="text/javascript"></script>
    </html>`);
  };

const renderApp = ( req, res ) => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} contenxt={{}}>
				{renderRoutes(serverRoutes)}
			</StaticRouter>
		</Provider>
	); 

    res.set(
		"Content-Security-Policy",
		"script-src 'self' 'sha256-Xx/mBO5zOQb/jAyWEWppl3dp/QW2st+qLNseeOmUzoU='",
	);
	
	res.send(setResponse(html));
}

  
app.get('*', renderApp);



app.listen(PORT || 3000, (err) => {
    if (err) console.log(err);
    else console.log(`Server running on port ${PORT}`);
  });