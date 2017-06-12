/**
 * 项目配置文件入库
 */

// path模块用于解析对应文件的绝对路径
const path = require('path');
const merge = require('webpack-merge');

module.exports = {

  // 生产环境构建配置
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  
  // 测试环境构建配置
  stage: {
    env: require('./stage.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },

  // 开发环境构建配置
  dev: {
    env: require('./dev.env'),
    port: 8000,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/baseUrl": {
        target: "http://localhost:8081",
        changeOrigin: true,
        pathRewrite: {
          '^/baseUrl': ''
        }
      },
      "/api": {
        target: "http://localhost:8081/api/v1",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      "/api/ua": {
        target: "http://localhost:8081/api/v1/ua",
        changeOrigin: true,
        pathRewrite: {
          '^/api/ua': ''
        }
      },
      "/api/wos": {
        target: "http://localhost:8081/api/v1/wos",
        changeOrigin: true,
        pathRewrite: {
          '^/api/wos': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
};
