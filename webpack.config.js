const glob = require('glob');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    bundle: glob.sync('./src/js/**/*.js')
  },
  output: {
    filename: "[name]-[contentHash].js",
    path: __dirname + "/dist",
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
