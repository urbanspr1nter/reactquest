const path = require('path');

module.exports = {
  context: __dirname,
  entry: './index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, ''),
    filename: 'game.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  devServer: {
    inline: true,
    port: 8081
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
