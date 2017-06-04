/**
 * vue-loader 配置
 */
let utils = require('./utils');
let config = require('../config');
let isProduction = process.env.NODE_ENV === 'production';

/**
 * 导出配置模块
 *
 * @type {{loaders: 返回css的loader}}
 */
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
};
