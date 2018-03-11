var webpack = require('webpack');
var path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var BUILD_PATH = path.resolve(__dirname, 'dist');
var LIB_NAME = "bundle";

module.exports = {
  
  entry: {
    pts: path.resolve( BUILD_PATH, `${LIB_NAME}.js` )
  },

  output: {
    library: `${LIB_NAME}`,
    libraryTarget: 'umd',    
    path: BUILD_PATH,
    filename: `${LIB_NAME}.min.js`
  },

  resolve: {
    extensions: ['.js']
  },

  plugins: [
    
    new MinifyPlugin({}, {
      comments: false
    })
  ]

};