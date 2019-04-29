const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./public"),
        publicPath: "/public"
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false }
            }
          ]
      },
      {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'url-loader'
    }]
  },
  devServer: {
      overlay: true
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
  ],
};