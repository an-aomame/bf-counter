var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './entry.js',
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
