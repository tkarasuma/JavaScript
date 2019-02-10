const path = require('path');

module.exports = {
  mode:'development',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname,'dist'),
      filename: 'index.js',
      publicPath: path.join(__dirname,'dist')
    },
    devtool: '#source-map',
    devServer: {
      contentBase: './',
      port: 8080
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    }
  };
  