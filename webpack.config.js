const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    MidiProvider: './src/context/MidiProvider.js',
    MidiDataContext: './src/context/MidiDataContext.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    // libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};