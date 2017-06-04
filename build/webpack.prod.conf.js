/**
 * webpack 生产环境构建配置
 */

// 相关插件
let path = require('path');
let webpack = require('webpack');
let merge = require('webpack-merge');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

// 导入其它配置
let utils = require('./utils');
let config = require('../config');
let baseWebpackConfig = require('./webpack.base.conf');

// 环境变量：production
let env = config.build.env;

/**
 * 生产环境构建配置，与webpack基础配置合并
 */
let webpackConfig = merge(baseWebpackConfig, {
  // 扩展模块配置
  module: {
    // 生成环境生成sourceMap文件以及允许提取css到独立文件
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },

  // 开发工具：source-map
  devtool: config.build.productionSourceMap ? '#source-map' : false,

  // 输出路径
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },

  // 相关插件
  plugins: [
    // 处理过程可使用环境变量
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),

    // 生成环境进行JS压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      },
      // 删除所有的注释
      comments: false,
      sourceMap: true
    }),

    // 提起css到独立文件
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),

    // 对css文件进行压缩
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    // 对 index.html 中的静态资源引用路径进行hash缓存处理
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),

    // 抽取公共模块到独立文件
    // see http://www.css88.com/doc/webpack2/plugins/commons-chunk-plugin/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),

    // 对vendor公共模块进行缓存，避免app的文件更新时重新打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),

    // 复制独立的静态资源
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
});

// 是否使用gzip压缩
if (config.build.productionGzip) {
  let CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

// 是否打印分析报告
if (config.build.bundleAnalyzerReport) {
  let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

// 导出配置
module.exports = webpackConfig;
