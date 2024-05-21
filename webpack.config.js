const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',  // The output filename for the bundled JavaScript
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',  // The public URL of the output directory when referenced in a browser
  },
  devtool: 'eval-source-map',  // Source map mode for development
  plugins: [
    new ESLintPlugin(),  // Plugin for linting JavaScript
    new CleanWebpackPlugin({ verbose: true }),  // Clean the output directory before emit
    new HtmlWebpackPlugin({
      title: 'Sport Sync App',  // The title of the generated HTML page
      template: './src/index.html',  // Template file for the HTML
      inject: 'body'  // Inject all assets into the body element
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|avif|jpe?g)$/,  // Test for image files
        type: 'asset/resource',  // The type of module created
        generator: {
          filename: 'assets/images/[name][ext]',  // Output path and filename for images
        },
      },
      {
        test: /\.html$/,  // Test for HTML files
        use: [
          'html-loader'  // Exports HTML as a string
        ]
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Directory for static files
    },
    port: 9000,  // Port for the development server
    historyApiFallback: true,  // Enable support for history API fallback
    open: true,  // Open the browser after server starts
  },
};
