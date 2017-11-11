const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const resolve = (file) => path.resolve(__dirname, file)

module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: {
    path: resolve('../public/assets'),
    publicPath: '/assets',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'api': resolve('../api'),
      'assets': resolve('../assets'),
      'components': resolve('../components'),
      'filters': resolve('../filters'),
      'examples': resolve('../pages/examples'),
      'layouts': resolve('../layouts'),
      'mixins': resolve('../mixins'),
      'pages': resolve('../pages'),
      'public': resolve('../public'),
      'router': resolve('../router'),
      'store': resolve('../store'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }),
        new ExtractTextPlugin({
          filename: 'common.[chunkhash].css'
        }),
      ]
    : [
        new FriendlyErrorsPlugin()
      ]
}
