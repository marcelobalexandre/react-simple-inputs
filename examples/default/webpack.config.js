const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
   extensions: ['.js'],
   alias: {
    'react-simple-inputs': path.join(__dirname, '../../src')
  }
 },
 module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({ template: './src/index.ejs' })
  ],
  devServer: {
    port: 8080
  }
}
