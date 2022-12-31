const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.ENV || "development",
  entry: {
    popup: path.resolve(__dirname, "public", "popup.ts"),
    content: path.resolve(__dirname, "src", "content.ts"),
    background: path.resolve(__dirname, "src", "background.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js | ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./public/assets",
          to: "./assets",
          globOptions: { ignore: ["**/readme/**"] },
        },
        { from: "./public/manifest.json", to: "./manifest.json" },
      ],
    }),
    new MiniCssExtractPlugin({ filename: "popup.css" }),
    new HtmlWebpackPlugin({
      title: "popup",
      chunks: ["popup"],
      filename: "popup.html",
      template: "./public/popup.html",
    }),
  ],
};
