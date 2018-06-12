const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: "./index.ts",
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  }
};
