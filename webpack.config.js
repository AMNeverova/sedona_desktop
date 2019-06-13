const path = require("path");

let conf = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "index_bundle.js"
    },
    devServer: {
      contentBase: './',
      publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    {
                        loader: 'sass-loader',
                    },

                ]
            },
        ]
    },
}

module.exports = (env, options) => {
    let mode = options.mode === 'production';
    conf.devtool = mode ? false :
        'cheap-module-source-map';
    return conf;
};