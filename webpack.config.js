const path = require('path');
const webpack = require('webpack')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = {
  entry: [
    //'./src/js/content.js',
    './src/js/init.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/js'),
    //filename: 'bundle.js'
    filename: 'main.min.js'
  },
  module: {
    loaders: [
      // {
      // test: /\.css$/,
      /* include: [
         path.resolve(__dirname)
       ],
       exclude: [
         path.resolve(__dirname, 'node_modules')
       ],*/
      // loader: 'style-loader!css-loader',
      //include: path.join(__dirname, 'src')
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader!eslint-loader',
        //include: path.join(__dirname, 'src'),
        exclude: /node_modules/
        //include: path.join(__dirname, 'src'),
      }
    ]
  },
  /*eslint: {
    configFile: './.eslintrc'
  },*/
  plugins: [
    /*new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 1,
      chunks: ['entry']
    })*/
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
      // beautify: true
    })
  ],
  watchOptions: {
    poll: 2000,
    ignored: /node_modules/,
    aggregateTimeout: 300
  },
  watch: true,
  devtool: 'eval-source-map'

  /* resolve: {
     extensions: ['.json', '.js', '.jsx', '.css']
   },*/
};