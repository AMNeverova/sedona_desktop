const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'main.js': "./src/index.js",
        'app': './src/main.scss',
        'style480': './src/style480.scss'
    },
    output: {
      path: __dirname + '/public/',
      filename: "[name]" ,
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
      // {
      //     test: /\.css$/,
      //     use: [
      //       MiniCssExtractPlugin.loader,
      //       'css-loader'
      //     ]
      // }
  ]
  },
  devServer: {
      overlay: true
  },
  plugins: [
      new MiniCssExtractPlugin
  ],
};