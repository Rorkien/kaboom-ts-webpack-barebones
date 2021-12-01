/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Game</title>
          <style>
            body {
              margin: 0;
              overflow: hidden;
            }
          </style>
        </head>
        <body>
          <div id="game"></canvas>
        </body>
      </html>
      `,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets/**/*",
          to: "./",
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};