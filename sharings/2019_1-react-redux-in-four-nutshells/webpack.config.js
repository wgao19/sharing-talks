// webpack.config.js example
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: "css-loader"
      }
    ]
  }
};
