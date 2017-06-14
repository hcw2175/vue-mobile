/**
 * 环境变量定义: 仿真测试环境
 * @type {{NODE_ENV: string}}
 */
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"stage"',
  
  HOST_BASE: '"http://apitest.xohaa.net"',
  API_HOST_BASE: '"http://apitest.xohaa.net/api/v1"',
  API_HOST_UA: '"http://apitest.xohaa.net/api/v1/ua"',
  API_HOST_WOS: '"http://apitest.xohaa.net/api/v1/wos"'
});
