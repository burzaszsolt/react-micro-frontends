const path = require('path');

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve('.', 'src', 'microfrontend.js')]
  },
  resolve: {
    alias: {
      src: path.resolve('.', 'src')
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve('..', 'host-app', 'public', 'microfrontends'),
    filename: 'mf-products.js',
    publicPath: '/images/',
    library: 'mfProducts',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
