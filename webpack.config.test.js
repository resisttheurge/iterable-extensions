'use strict'

const nodeExternals = require('webpack-node-externals')

const target = 'node'

const externals = [nodeExternals()]

const devtool = 'cheap-module-source-map'

const output = {
  // sourcemap support for IntelliJ/Webstorm
  devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
}

const modulesDirectories = [
  'node_modules',
  'lib'
]

const loaders = [{
  test: /.js$/,
  exclude: /node_modules/,
  loader: 'babel'
}]

module.exports = {
  target,
  externals,
  devtool,
  output,
  resolve: {
    modulesDirectories
  },
  module: {
    loaders
  }
}
