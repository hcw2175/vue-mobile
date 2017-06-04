/**
 * 开发环境构建服务配置
 */
require('./check-versions')();

let opn = require('opn');
let path = require('path');
let express = require('express');
let webpack = require('webpack');
let proxyMiddleware = require('http-proxy-middleware');

// 配置相关
const webpackConfig = require('./webpack.dev.conf');
const config = require('../config');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

// 本地服务端口号，默认8000，也可通过 `--PORT`参数定义
const port = process.env.PORT || config.dev.port;
// 是否默认打开浏览器
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
// API访问地址代理配置
// 参考：https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;

// node 网络框架
let app = express();
let compiler = webpack(webpackConfig);

// node 小型服务器，本地服务模拟资源访问
let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

// 文件更新热替换服务
let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});

// 当html文件更新时，强制刷新页面
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'});
    cb()
  });
});

// api代理访问配置
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
});

// 对HTML5历史记录的回退处理
app.use(require('connect-history-api-fallback')());

// 提供webpack包输出
app.use(devMiddleware);

// 启用热重新加载和状态保存，同时显示编译错误
app.use(hotMiddleware);

// 提供静态资源输出
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

// 本地访问地址
const uri = 'http://localhost:' + port;

// Promise 定义
let _resolve;
let readyPromise = new Promise(resolve => {
  _resolve = resolve
});

// 启动本地服务
console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
});

// 导出模块
let server = app.listen(port);
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
};
