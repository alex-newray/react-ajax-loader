const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  mode: NODE_ENV,
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'react-ajax-loader.js',
    libraryTarget: 'commonjs2',
  },
  watch: (NODE_ENV === 'development'),
  watchOptions: {
    aggregateTimeout: 1500,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            "@babel/env",
            "@babel/react"
          ],
          plugins: [
            "lodash"
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new LodashModuleReplacementPlugin,
    new UglifyJsPlugin()
  ],
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'react-redux': {
      root: 'react-redux',
      commonjs2: 'react-redux',
      commonjs: 'react-redux',
      amd: 'react-redux'
    },
  }
};
