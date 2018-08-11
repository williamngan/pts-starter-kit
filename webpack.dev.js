var webpack = require('webpack');
var path = require('path');

var APP_PATH = path.resolve(__dirname, 'src/app.js')
var BUILD_PATH = path.resolve(__dirname, 'dist')
var LIB_NAME = "bundle";

module.exports = {
  
  entry: {
    pts: APP_PATH
  },

  output: {
    library: `${LIB_NAME}`,
    libraryTarget: 'var',
    path: BUILD_PATH,
    filename: `${LIB_NAME}.js`
  },

  watchOptions: { poll: true }, // seems to need this for Windows Linux subsystem to watch

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js']
  },

  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: [["env", { "loose": true, "modules": false }]]
            }
          }
      },
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }


    ]
  }

};
