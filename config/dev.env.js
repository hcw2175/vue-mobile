/**
 * 环境变量定义: 开发
 * @type {{NODE_ENV: string}}
 */
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST_BASE: '"http://192.168.199.248/api/v1/"',
  API_HOST_UA: '"http://192.168.199.248/api/v1/ua"',
  API_HOST_WOS: '"http://192.168.199.248/api/v1/wos"'
});
