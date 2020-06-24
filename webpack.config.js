const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    MidiProvider: './src/context/MidiProvider.js',
    MidiDataContext: './src/context/MidiDataContext.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};