const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');


module.exports = {
  entry: "./src/index.js",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist/bundle.js']),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
};