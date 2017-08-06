'use strict';

const path = require('path');

const webpack = require('webpack');

module.exports = function(env) {
  return [
    {
      entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/src/client/index.js'),
      ],
      output: {
        path: path.join(__dirname, 'public'),
        filename: 'client.js',
        publicPath: '/',
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
      ],
      target: 'web',
    },
  ];
};
