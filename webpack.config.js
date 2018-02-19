/*tslint:disable */
const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const config = require(`./config/${env}`);

const appConfig = {
  context: path.join(__dirname, './src'),
  entry: {
    tsx: './index.tsx'
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "./dist"),
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    inline: true,
    compress: true,
    port: 9000
  },
  module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader"},
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        { test: /\.css$/, use: ['to-string-loader', 'style-loader', 'raw-loader']},
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              },
              'sass-loader'
            ]
          })
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React redux boiler",
      template: './index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) },
      'process': {
        config: JSON.stringify(config)
      }
    }),
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
  ]
}

module.exports = [appConfig];
  
