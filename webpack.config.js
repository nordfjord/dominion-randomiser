module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.js',
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]}
    ]
  }
}
