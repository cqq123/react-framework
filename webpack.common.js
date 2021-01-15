/* eslint import/no-extraneous-dependencies: 0 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          'url-loader',
        ],
      },
      {
        test: /\.css$/,
        use: 'raw-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        polyfill: {
          test: ({ resource }) => resource && /[\\/]node_modules[\\/]@babel/.test(resource),
          name: 'polyfill',
          enforce: true,
          priority: 12,
        },
        react: {
          test: ({ resource }) => resource && /[\\/]node_modules[\\/](react(?!\w))/.test(resource),
          name: 'react',
          enforce: true,
          priority: 10,
        },
        lib: {
          test: ({ resource }) => resource && /[\\/]node_modules[\\/](lodash|moment)(?!\w)/.test(resource),
          name: 'lib',
          enforce: true,
          priority: 9,
        },
        d3: {
          test: ({ resource }) => resource && /[\\/]node_modules[\\/]d3(?!\w)/.test(resource),
          name: 'd3',
          enforce: true,
          priority: 8,
        },
        hljs: {
          test: ({ resource }) => resource && /[\\/]node_modules[\\/]highlight\.js/.test(resource),
          name: 'hljs',
          enforce: true,
          priority: 7,
        },
        icons: {
          test: ({ resource }) => resource && resource === path.resolve(__dirname, 'src', 'components', 'Icon', 'icons.json'),
          name: 'icons',
          enforce: true,
          priority: 6,
        },
        vendor: {
          test: ({ resource }) => resource && resource.indexOf(path.join(__dirname, 'node_modules')) === 0,
          name: 'vender',
          enforce: true,
          priority: 5,
        },
      },
    },
    runtimeChunk: true,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src', 'pages'),
      'node_modules',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'src/data/favicon.ico'),
    }),
  ],
};
