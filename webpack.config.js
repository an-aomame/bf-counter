var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './scripts/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.pug$/,
        loader: 'pug-html-loader',
        query: {
          pretty: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'templates/index.pug'
    })
  ],
  devtool: 'source-map'
};
