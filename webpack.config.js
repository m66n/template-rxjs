module.exports = function (env) {
  return {
    entry: './main.js',
    output: {
      filename: 'bundle.js',
      path: __dirname
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['env'] }
          }]
        }
      ]
    }
  }
}
