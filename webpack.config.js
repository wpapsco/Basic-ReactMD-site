const path = require('path');
module.exports = {
  entry: './src/js/client.js',
  output: {
    path: path.resolve('src'),
    filename: 'app.bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
          plugins: ["transform-class-properties", "transform-es2015-destructuring", "transform-object-rest-spread"],
        }
      },
        {
          test:/\.css$/,
          loader: 'style-loader!css-loader',
        }
    ]
  },
};