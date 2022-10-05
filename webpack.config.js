const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.ENV || "development",
  entry: {
    popup: path.resolve(__dirname, "src", "popup.ts"),
    background: path.resolve(__dirname, "src", "background.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./public/manifest.json", to: "./manifest.json" }],
    }),
    new HtmlWebpackPlugin({
      title: "popup",
      chunks: ["popup"],
      filename: "popup.html",
      template: "./public/popup.html",
    }),
  ],
};
