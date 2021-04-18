const { Module } = require("webpack");

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
};
