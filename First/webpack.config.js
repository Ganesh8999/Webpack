const { Module } = require("webpack");

const path = require("path");

module.exports = {
  entry: "./app/index.js",

  module: {
    rules: [
      {
        test: /\.svg$/,
        // loader: "svg-inline-loader",
        use: "svg-inline-loader", // recommend to use"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
