var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  externals: {
    clappr: 'Clappr'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
            compact: true,
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    filename: 'public/streamroot-playback.js',
    library: 'StreamrootPlayback',
    libraryTarget: 'umd',
  },
};
