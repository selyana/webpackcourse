const { resolve } = require("path"); // 1

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "build"), // 2
    filename: "main.[contenthash].js", // 3
  },
  module: {
    rules: [
      {
        test: /\.mp3$/i, // 1
        loader: "file-loader", // 2
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
