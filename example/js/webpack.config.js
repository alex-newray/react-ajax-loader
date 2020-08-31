var path = require('path');
var webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: './src/index.js',
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  watch:true,
  watchOptions: {
    aggregateTimeout: 1500,
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            "@babel/env",
            "@babel/react"
          ],
          babelrc: false
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV:JSON.stringify(NODE_ENV)
    })
  ]
};

/*
plugins: [
  ['module-resolver', {
    root:'./src'
  }]
]*/
