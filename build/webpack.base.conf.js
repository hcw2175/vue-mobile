/**
 * webpack 构建基本配置
 */
let path = require('path');

let utils = require('./utils');
let config = require('../config');
let vueLoaderConfig = require('./vue-loader.conf');

/**
 * 获取目录绝对路径
 *
 * @param dir 目录
 * @returns 目录绝对路径
 */
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  // 入口js文件
  entry: {
    app: './src/main.js'
  },

  // 构建输出配置
  output: {
    // 输出目录
    path: config.build.assetsRoot,
    // 输出文件名
    filename: '[name].js',
    // 静态资源文件输出目录
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  // 解析配置
  resolve: {
    // 自动解析以下扩展命的文件
    // 导入时不用跟扩展名，如 import '/routers'
    extensions: ['.js', '.vue', '.json'],

    // 别名配置
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'img': resolve('src/assets/images'),
      'variables': resolve('src/assets/scss/exports.scss'),
      'scripts': resolve('src/assets/scripts')
    }
  },

  // 模块配置
  module: {

    // 规则配置
    rules: [

      // 对js/vue文件进行eslint校验
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },

      // vue-loader，参考：https://vue-loader.vuejs.org/zh-cn/
      // 允许vue文件导出为module
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },

      // babel-loader，参考：https://github.com/babel/babel-loader
      // 允许对js文件进行语法转换
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },

      // url-loader，参考：https://github.com/webpack-contrib/url-loader
      // 对图片文件路径进行MD5序列化，同时限定小于 10kb 将返回 DataUrl
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },

      // url-loader，参考：https://github.com/webpack-contrib/url-loader
      // 对字体图标文件路径进行MD5序列化，同时限定小于 10kb 将返回 DataUrl
      {
        test: /\.(woff2?|eot|ttf|otf|woff)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};

/**
 * 导出webpack配置
 */
//module.exports = webpackConfig;
module.exports = webpackConfig;
