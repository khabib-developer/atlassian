const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: "development",
  entry: { myAppName: path.resolve(__dirname, "./src/index.jsx") },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/addon.js",
  },

  devServer: {
    port: 3001,
    hot: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/addon.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",

          {
            loader: "style-loader",
            options: {
              modules: true,
              sourceMap: !production,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: !production,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !production,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: !production,
            },
          },
        ],
      },
    ],
  },
};
