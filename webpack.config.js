const path = require('path')

module.exports = {
  entry: './src/App.js',

  output: {
    path: path.resolve('build'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/    
      }
    ]
  }
}