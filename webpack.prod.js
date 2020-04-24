const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const NullPlugin = require('webpack-null-plugin');

const common = require('./webpack.common.js');

const ANALYZER = process.env.ANALYZER;

module.exports = merge(common, {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  plugins: [
    ANALYZER === 'true' ? new BundleAnalyzerPlugin() : new NullPlugin(),
  ]
});