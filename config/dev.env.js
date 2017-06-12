/**
 * 环境变量定义: 开发
 * @type {{NODE_ENV: string}}
 */
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  
  HOST_BASE: '"/baseUrl"',
  API_HOST_BASE: '"/api"',
  API_HOST_UA: '"/api/ua"',
  API_HOST_WOS: '"/api/wos"'
});
