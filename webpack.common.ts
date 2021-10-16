const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");


module.exports = {
  entry: ["webpack/hot/poll?100", "./src/index.ts"],
  // devtool: 'inline-source-map',
  watch: true,
  target: "node",
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?100"]
    })
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin() ],
  output: {
    path: path.join(__dirname, "dist/webpack"),
    filename: "index.js",
    clean: true
  }
};
