require('ignore-styles')
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    });

require('./server');

require('asset-require-hook')({
    extensions: ['jpg', 'png'],
    name: '../frontend/assets/[hash].[ext]',
  });