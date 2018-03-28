var webpack = require('webpack');
var MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: [
        "./src/index.jsx"
    ],
  output: {
    path: __dirname + "/www",
    filename: "app.js",
    publicPath: "."
  },
   resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".jsx", ".js", ".json"]
    },

    module: {
        rules: [{
                test: /\.s?css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        url: false
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader'
                }
              },

            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
  plugins: [
    new MinifyPlugin()
  ]
};