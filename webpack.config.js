const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  target: "node",
  mode: "production",
  module: {
    rules: [
      { test: /\.([cm]?ts)$/,
        loader: "ts-loader" },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".ts"],
    alias: {
      ["$utils"]: path.resolve(__dirname, "src/utils"),
      ["$constants"]: path.resolve(__dirname, "src/constants"),
    },
  },
};
