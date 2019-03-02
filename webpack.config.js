const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    bundle: './src/js/index.js',
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      hash: true,
    })
  ],
  devServer: {
    host: process.env.WEBPACK_HOST
  }
};
