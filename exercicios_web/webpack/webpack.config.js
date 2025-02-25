const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const css_minimizer_webpack_plugin = require("css-minimizer-webpack-plugin");
const terser_webpack_plugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/principal.js",
  output: { filename: "principal.js", path: __dirname + "/public" },

  devServer: {
    static: "./public",
    port: 9000,
  },

  optimization: {
    minimize: true,
    minimizer: [
      new terser_webpack_plugin(),
      new css_minimizer_webpack_plugin({}),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
