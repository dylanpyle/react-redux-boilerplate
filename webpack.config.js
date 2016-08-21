const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const imports = require('postcss-import');
const mixins = require('postcss-mixins');
const vars = require('postcss-simple-vars');

const babelConfig = require('./package.json').babel;

const baseConfig = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: babelConfig
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1!postcss'
        )
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url?limit=4096'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  postcss(_webpack) {
    return [
      imports({ addDependencyTo: _webpack }),
      autoprefixer,
      vars,
      mixins
    ];
  }
};

if (process.env.NODE_ENV === 'production') {
  baseConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
} else { // Development
  baseConfig.devtool = 'source-map';
}

module.exports = baseConfig;
