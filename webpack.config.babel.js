import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: [
    'babel-polyfill',
    './scripts/index.js'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.pug$/,
        loader: 'pug-html',
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
        loader: 'babel'
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
