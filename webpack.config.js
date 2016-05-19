'use strict'; 

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

function join(dest) { return path.resolve(__dirname, dest); }
function web(dest) { return join('src/' + dest); }

module.exports = {
  entry: { 
    application: [
      web('css/app.scss'),
      web('js/app.js'),
    ],
  },
  output: {
    path: join('dist/'),
    filename: 'js/app.js'
  },

  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-2', 'stage-0']
        },
      }, 
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap&includePaths[]=' + __dirname + '/node_modules')
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('css/app.css'),
  ]
};

 
