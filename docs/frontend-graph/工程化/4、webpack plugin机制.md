## 一、什么是 plugin
`plugin` 直译 `插件`。用来扩展 `webpack` 的功能，让 `webpack` 更加灵活，在 `webpack` 生命周期中会**广播**出许多事件，`plugin` 可以监听这些事件，在合适的时机利用 `webpack` 提供的 `api` 修改打包结果



## 二、开发中常见的 plugin

|  plugin   | 作用  |
|  --------  | -------  |
| **ModuleScopePlugin** | 限制所引入的文件范围 |
| **MiniCssExtractPlugin** | 将`CSS`抽离成单独的文件 |
| **OptimizeCssAssetsPlugin** | 对`CSS`代码进行压缩 |
| **SpeedMeasurePlugin** | 统计各个 `loader` 和插件所花费的时间 |
| **TerserWebpackPlugin** | `webpack` 默认使用 `terser` 来压缩 `JS`，可开启多进程 |
| **CleanWebpackPlugin** | 清除文件夹中内容 |
| **webpack.DefinePlugin** | 定义环境变量，保证在`JS`中可获取 |
| **webpack.HotModuleReplacementPlugin** | 模块热更新插件 |
| **webpack-bundle-analyzer** | 借助 `webpack-bundle-analyzer` 可查看打包后每个包的体积较大 |

## 三、如何手写 plugin

`webpack plugin` 由以下部分组成

- `plugin` 通常是一个 `JS` 命名的函数，在其原型上存在 `apply` 方法

- `apply` 方法接收 `complier` 对象作为参数，在方法中注册 `webpack` 自身的事件钩子, 并添加回调方法

- 在回调方法中，可处理 `webpack` 的打包数据，处理结束后通过 `webpack` 自身的回调返回

```js
class DonePlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    // 注册监听事件
    compiler.hooks.done.tapAsync("DonePlugin", (stats, callback) => {
      console.log("Hello ", this.options.name);
      callback();
    });
  }
}
module.exports = DonePlugin;
```


