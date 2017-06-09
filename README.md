# 品智云H5端
---

## 快速开始

``` bash
# 安装依赖，推荐使用淘宝仓库，节省大量时间
npm install --registry=https://registry.npm.taobao.org 

# 本地开发，服务端口: 8000
npm run dev

# 生产环境打包，可加参数 --report 输出详细报告
npm run build-release

# 测试环境打包，可加参数 --report 输出详细报告
npm run build-stage
```


## 开发约定

### 文件夹命名

* 统一小写，禁止大写， _规避跨平台区分大小写导致找不到目录问题_
* 多个单词间 `-` 隔开，禁止驼峰命名，如 `lease-product`
* 业务功能页面文件统一放到 `src/pages` 目录下
* 模块名开头，按模块区分，如 `product`, `lease`

### 文件命名

* 统一小写，禁止大写, _规避跨平台区分大小写导致找不到文件问题_
* 结合文件夹命名，文件命名按模块页面或者按模块功能区分，如`view.js`, `product-form.js`,
* 多个单词间 `-` 隔开，禁止驼峰命名，如 `product-form.js`


### JS规范

请严格遵循ESLint规范进行编码，详细规范参考更目录下文件 `.eslintrc`。

对某个规则若有疑问可提出讨论。


### 模板文件

* 列表视图文件，默认使用 `list` 命名。某些特殊列表视图，使用 `-list` 后缀
* 表单视图文件，默认使用 `form` 命名, 同上特殊视图使用 `-form` 后缀
* 查看视图文件，默认使用 `view` 命名，特殊特殊视图使用 `-view` 后缀


## 目录结构

```bash
app
-- build                      // webpack构建脚本
-- config                     // webpack配置
-- src                       
  -- assets
    -- fonts                  // 字体图标
    -- images                 // 图片
    -- scripts                // app通用脚本封装
    -- scss                   // app样式库，包含通用的工具、组件等
  -- compontents              // vue通用组件
  -- paegs                    // 各业务功能页面，按模块区分
  -- store                    // vue状态管理
  -- app.vue                  // app页面入口
  -- main.js                  // vue入口文件
  -- routers.js               // 路由配置
```


## 通用组件

### app-view

通用页面视图组件，封装了 加载状态、空白页面、错误提示，通过参数可以控制显示页面加载状态、空白页面等

如何使用：

```html
<app-view 
  :isLoading="false" 
  :isEmpty="false"
  :isError="false"
  :errMsg="">
  <!-- 页面内容 -->
</app-view>
```

属性说明:

* `isLoading`：是否显示加载中提示，值为： true|false。
* `isEmpty`: 是否显示空白提示，值为： true|false。若为true，loading隐藏。
* `isError`: 是否显示错误提示，值为： true|false。若为true，loading & empty 隐藏。
* `errMsg`：错误提示，默认为空。
