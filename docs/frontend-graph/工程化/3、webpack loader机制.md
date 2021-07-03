## 一、什么是 loader
`loader` 直译加载器。`Webpack` 将一切文件视为模块，但 `Webpack` 原生只支持解析 `JS`、`JSON` 文件，如果想打包其它文件，就需要使用的 `loader`, 所以说：

**`loader` 的作用是让 `webpack` 拥有了加载和解析非 `JS`、`JSON` 文件的能力**

## 二、开发中常见的 loader

**处理 `less/css`**

|  loader   | 作用  |
|  ----  | ----  |
| **less-loader**  | 把 `less` 文件编译成 `CSS` |
| **postcss-loader**  | 使用`PostCSS` 处理`CSS`，可配合`autoprefixer`加前缀 |
| **css-loader**  | 处理 `url、@import` 等语法 |
| **style-loader**  | （`dev`）将`CSS`代码通过 `style` 标签以内联方式插入 |
| **MiniCssExtractPlugin.loader**  | （`prod`）将`CSS`代码抽离成单独的 `CSS` 文件，有**缓存**作用 |

**处理图片、字体**

|  loader   | 作用  |
|  --------  | -------  |
| **file-loader** | 把文件拷贝到一个文件夹，在代码中通过相对 `URL` 去引用文件内容，通过设置哈希来获得缓存 |
| **url-loader**  | 设置一个**阀值**，当文件大小小于阀值，以  `base64` 的方式把文件内容注入到代码中（减少`HTTP`请求）; 大于阀值，使用 `file-loader` 处理 |

**处理JS**

|  loader   | 作用  |
|  --------  | -------  |
| **eslint-loader** | 通过 `eslint` 检查 `JS` 代码 |
| **babel-loader** | 将 `ES6+` 代码转化成 `ES5` 代码 |

**处理 Vue**

|  loader   | 作用  |
|  --------  | -------  |
| **vue-loader** | 允许使用**单文件组件**(SFCs)的格式撰写vue 组件 |

**优化性能**
|  loader   | 作用  |
|  --------  | -------  |
| **cache-loader** | 将 `loader` 的结果缓存到磁盘中，有效减少非首次构建时间 |
| **thread-loader** | `thread-loader` 之后的 `loader` 就会在一个单独的 `worker` 池中运行 |



## 三、loader 的工作原理

- `loader` 只是一个导出为**函数**的JS模块，`loader runner`会调用该函数，该函数接受文件资源或上一个loader的处理结果作为入参，多个 `loader` 可组成 `loader chain`

- `complier` 只需要最后一个 `loader` 的处理结果，结果应该是 `String` 或 `Buffer`

### 3.1、`loader-runner`

一个执行 `loader chain` 的模块

### 3.2、`loader`类型

  `post`(后置) + `inline`(内联) + `normal`(普通) + `pre`(前置)

  可通过 `enforce` 设置

### 3.3、特殊配置

可通过设置以下特殊字符来忽略某种类型的 loader

|  符合   | 含义  |
|  --------  | -------  |
| **`-!`** | `noPreAutoLoaders`, 不要前置和普通 loader |
| **`!`** | `noAutoLoaders`, 不要普通 loader |
| **`!!`** | `noPrePostAutoLoaders`, 只要内联 loader |

### 3.4、pitch

一个 `loader` 在内部是由 `loader` 和 `loader.pitch` 组成。

比如 `a!b!c!module`, loader 的调用顺序是 `c -> b -> a`, 但在处理`module`之前，其实执行了 `a(pitch) -> b(pitch) -> c(pitch)`, 如果其中任何一个 `pitching loader` 有返回值就相当于在它及右侧的 `loader` 都执行完毕了。

例如：`b(pitch)` 执行又返回值，接下来`c`不会被执行，只有 `a` 会被执行，并且 `a loader` 接受的参数是 `b(pitch)` 的返回值

![loader pitch](/images/webpack/loader-pitch.png)

## 四、如何手写 loader ？

手写 `loader` 的思路

- `loader` 支持链式调用，所以需要严格遵循 “单一职责”， 每个 `loader` 只处理自己负责的事情

- `Webpack` 传给 `loader` 的原内容都是 `UTF-8` 格式编码的字符串，当某些场景下 `loader` 处理二进制文件时，需要通过 `exports.raw = true` 告诉 `Webpack` 该 `loader` 是否需要二进制数据

- 尽可能异步 `loader`

- `loader` 是无状态的，`loader` 内部不应该保留状态