const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');   // new line!

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',  // Ensure the output filename matches the path in index.html
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
          publicPath: "assets/images/",
          outputPath: "assets/images/",
        },
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    port: 9000,
    historyApiFallback: true,
    open: true,
  },

};