const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./public"),
        publicPath: ""
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true, url: true }
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'img/[name].[ext]'}  
          }
        ]
      },
      {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
      }
  ]
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