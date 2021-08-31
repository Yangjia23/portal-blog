当项目越来越大，`webpack` 的瓶颈就体现在两个方面，分别是：
- 构建过程耗时太长
- 打包产物体积太大

所以，webpack 的性能优化需要从这两个痛点下手

## 一、构建过程提速

### 1.1、耗时分析

使用`SpeedMeasureWebpackPlugin` 插件可统计打包构建过程中每个 `loader`、`plugin` 所消耗的时间

```js
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smw = new SpeedMeasureWebpackPlugin();
module.exports =smw.wrap({
  // config 配置
});
```

### 1.2、缩小范围

- **extensions**: 指定 `extensions` 后导入文件不需要添加文件扩展名，`webpack` 会依次尝试添加扩展名进行尝试

- **alias**: 配置别名，可加快 `webpack` 查找模块速度

- **exclude / include**: 确保转译尽可能少的文件, 
  `exclude`指定要排除的文件，`include` 指定要包含的文件，`exclude` 的优先级高于 `include`

- **external**: 当引入一个库，但又不想让 `webpack` 打包，并且不影响正常导入使用，可在 `external` 中进行配置

- **noParse**:  `module.noParse ` 字段用于配置哪些模块文件的内容不需要进行解析，过滤的文件中不能使用 `import`, `require` 等语法

### 1.3、利用缓存

利用缓存可以提升重复构建的速度

- **babel-loader**: `Babel` 在转译JS文件时性能消耗高，可将 `babel-loader` 执行的结果进行缓存，当重新打包时会尝试读取缓存。

  默认存放位置是 `node_modules/.cache/babel-loader`
  ```js
  {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true
    }
  }
  ```

- **cache-loader**: 在一些性能开销大的 `loader` 之前添加 `cache-loader` ，可以将`loader`处理结果缓存到磁盘中

  默认保存在 `node_modules/.cache/cache-loader` 目录下

  ```js
  {
    test: /\.css$/,
    use: [
      'cache-loader',
      'logger-loader',
      'style-loader',
      'css-loader'
    ]
  }
  ```

- **hard-source-webpack-plugin** : 为模块提供中间缓存，节约第二次构建时间。（ `webpack5`中内置 ）


### 1.4、多进程处理
- **`thread-loader`**: 放在其它 `loader` 之前，后置的 `loader` 就会在一个单独的 `worker` 池中运行

## 二、压缩打包体积

### 2.1、体积分析

使用`webpack-bundle-analyzer` 插件可以可视化展示打包出的文件包含哪些，大小占比如何，模块包含关系，依赖项等等，有利于我们进行优化。

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

### 2.2、代码压缩

- JS 文件：`TenserWebpackPlugin` 插件
- CSS 文件：`OptimizeCssAssetsWebpackPlugin`
- Images：`image-webpack-loader` 对图片进行压缩和优化

### 2.3、删除无用代码
- JS: `TreeShaking`, 没有使用到方法不会打进 `bundle` 里面，利用`es6` 模块的特点
- CSS: `PurgecssWebpackPlugin`

### 2.4、代码分割

#### 2.4.1、入口点分割：`Entry Point`

```js
entry: {
  index: "./src/index.js",
  login: "./src/login.js"
}
```

**缺点**：
- 若两个入口 `chunk` 都引用了重复模块(`lodash`),那么重复模块会被引入到每个 `bundle` 中
- 不够灵活，不能对核心代码做进一步拆分

#### 2.4.2、动态导入和懒加载

**按需加载**：根据用户当前需要用什么功能就只加载该功能对应的代码

**拆分原则**:
- 按照网站功能(或路由)拆分，一类功能对应一个 `chunk`
- 首页需要的功能模块直接加载，展示给用户
- 被分割出去的代码需要一个按需加载的时机

都是使用 `import()` 关键字来实现的

#### 2.4.3、提取公共代码

**拆分准则**:
- 各种类库，适合长期存储
- 页面之间的公共代码
- 每个页面单独生成的文件

**splitChunks**

```js
splitChunks: {
  chunks: "all", //默认作用于异步chunk，值为 all/initial/async
  minSize: 0, //默认值是30kb,代码块的最小尺寸
  minChunks: 1, //被多少模块共享, 在分割之前模块的被引用次数
  maxAsyncRequests: 2, //限制异步模块内部的并行最大请求数的，可以理解为是每个import()它里面的最大并行请求数量
  maxInitialRequests: 4, //限制入口的拆分数量
  name: true, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
  automaticNameDelimiter: "~", //默认webpack将会使用入口名和代码块的名称生成命名,比如 'vendors~main.js'
  cacheGroups: {
    //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
    vendors: {
      chunks: "all",
      test: /node_modules/, //条件
      priority: -10, ///优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中,为了能够让自定义缓存组有更高的优先级(默认0),默认缓存组的priority属性为负值.
    },
    commons: {
      chunks: "all",
      minSize: 0, //最小提取字节数
      minChunks: 2, //最少被几个chunk引用
      priority: -20
    }
  }
}
```

### 2.5、设置CDN

`CDN` 又叫内容分发网络，通过将资源部署到全球各地，用户在访问时按照就近原则从最近的服务器上下载资源，从而加速获取资源的速度

**缓存设置**：
- `HTML` 文件不设置缓存，放到自己服务器上
- 静态 `JS`、`CSS` 文件开启 `CDN` 和缓存，并且文件名带上 `hash` 值
- 为了并行不加塞，把不同资源的文件部署到不同的`CDN`服务器上


