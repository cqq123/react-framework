module.exports = {
  webpackDev: require('./webpack.dev.js'),
  webpackProd: require('./webpack.prod.js'),
  api: {
    '/api/(.*)': {
      proxy: 'http://192.168.0.111',
    },
  },
};
