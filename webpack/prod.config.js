const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  output: {
    publicPath: 'dist/',
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css?module&localIdentName=[path]__[local]__[hash:base64:3]!postcss',
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};