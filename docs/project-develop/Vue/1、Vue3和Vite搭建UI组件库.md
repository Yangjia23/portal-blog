# Vue3 + Vite 搭建 UI 组件库

Vue3.0 和 Vite 发布都已经有很长的一段时间了，为了后续在工作中能更快的从 Vue 2.x 切换到 Vue 3, 有必要提前学习掌握，所以将使用 Vue3 + Vite 从 0 搭建一个简单的 UI 组件库。学习完你将了解以下内容

- 组件库开发环境搭建工作
- vite 如何打包整个组件库及单个组件
- 如何搭建一个组件库文档
- vue3.0 如何开发一个强大的组件

## 一、组件库初始化

组件库采用 `monorepo` 策略，将使用 `Lerna` 来管理该项目。首先使用 lerna 进行项目初始化

(PS: 关于什么是 `monorepo` 策略，请参考: [ All in one：项目级 monorepo 策略最佳实践](https://segmentfault.com/a/1190000039157365))

### 1.1、monorepo 项目初始化

```shell
yarn global add lerna
mkdir gt-ui
cd gt-ui
lerna init
```

初始化后，会在根目录生成 `lerna.json` 配置文件，同时为了组件可以相互引用，以及避免重复安装包，减少体积等，还添加其它配置

```json
{
  "packages": ["packages/*"],
  "version": "0.0.0",
  "npmClient": "yarn", // 使用yarn管理
  "useWorkspaces": true // 使用workspace,需要配置 package.json
}
```

在 `package.json` 文件中，也需要设置 `workspaces` 属性

```json
{
  "name": "gt-ui",
  "private": true,
  "devDependencies": {
    "lerna": "^4.0.0"
  },
  "workspaces": ["packages/*"]
}
```

## 二、组件初始化

### 2.1、lerna 初始化组件

接着，会对单个组件进行初始化，每个组件相当于是一个子项目，子项目命名统一以 `@<repo_name>/` 开头，这是一种社区最佳实践。`Lerna` 提供了 `lerna create` 命令来初始化子项目

```shell
$: lerna create button
lerna notice cli v4.0.0
lerna WARN ENOREMOTE No git remote found, skipping repository property
package name: (button) @gt-ui/button
version: (0.0.0)
description:
keywords:
homepage:
license: (ISC)
entry point: (lib/button.js)
git repository:
About to write to /Users/yangjay/learn/playground/packages/button/package.json:

{
  "name": "@gt-ui/button",
  "version": "0.0.0",
  "description": "> TODO: description",
  "author": "yangjay <yj960203only@gmail.com>",
  "homepage": "",
  "license": "ISC",
  "main": "lib/button.js",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "publishConfig": {
    "registry": "https://registry.npm.taobao.org/"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1"
  }
}


Is this OK? (yes)
lerna success create New package @gt-ui/button created at ./packages/button
```

此时，整个项目目录结果如下

### 2.2、引入 vue3、typescript

```shell
yarn add vue@next typescript -W
npx tsc --init
```

此时，会在根目录生成 `tsconfig.json` 配置文件, 我们进行如下如下设置

```json
{
  "compilerOptions": {
    "target": "ESNext", // 打包的目标语法
    "module": "ESNext", // 模块转化后的格式
    "esModuleInterop": true, // 支持模块转化
    "skipLibCheck": true, // 跳过类库检测
    "forceConsistentCasingInFileNames": true, // 强制区分大小写
    "moduleResolution": "node", // 模块解析方式
    "jsx": "preserve", // 不转化jsx
    "declaration": true, // 生成声明文件
    "sourceMap": true // 生成映射文件
  }
}
```

### 2.3、设置组件出入口

设置 `Button` 组件出入口，以及对应的 `install` 方法

`packages/button/src/index.vue` 文件

```vue
<template>
  <button>按钮</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MnButton',
})
</script>
```

`packages/button/index.ts` 文件

```js
import { App } from 'vue'
import Button from './src/index.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}
export default Button
```

此时，项目会报错，是因为默认无法解析`.vue`文件后缀的文件，需要增加`typings`

根目录创建 `typings/vue-shim.d.ts` 文件

```js
declare module '*.vue' {
  import {App,defineComponent} from 'vue';
  const component: ReturnType<typeof defineComponent> & {
      install(app:App):void
  };;
  export default component
}
```

### 2.4、整合所有组件

当初始化 Button 组件后，在项目根目录执行 `yarn install`, 此时，在 `node_modules ` 目录下会包含了我们的子项目

```
.
├── package.json
└── node_modules/
    ├── @gt-ui/button/
    │   ├── index.js
    │   └── package.json
    ├── └── src/
    │       └── index.vue

```

因此，可以通过各自模块引入机制引入其它的子项目代码。

使用 `lerna create gt-ui` 创建一个子项目作为组件库的总入口，汇总所有组件。

`package/gt-ui/index.ts` 文件

```js
import Button from '@gt-ui/button'
import { App } from 'vue'
const components = [Button]
const install = (app: App): void => {
  components.forEach((component) => {
    if (component.install) {
      app.use(component)
    } else if (component.name) {
      app.component(component.name, component)
    }
  })
}
export default {
  install,
}
```

(ps: 后续 `index.ts`文件需通过脚本自动生成,避免手动引入 )

## 三、搭建展示文档

用户对组件库的第一印象就是看组件文档是否好看，齐全等，可选择现成的 `VitePress` 进行搭建，也可自己动手从 0 搭建。

根目录运行 `yarn create @vitejs/app website --template vue` 命令初始化文档项目，项目目录结构如下

```
.
├── package.json
└── website/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    ├── src/
    │   ├── main.js
    │   └── App.vue
```

`index.html` 作为文档项目入口，接下来会测试 `mono-ui` 组件库是否能正常渲染

`website/src/main.js` 文件

```js
import { createApp } from 'vue'
import GtUI from 'gt-ui'
import App from './App.vue'

createApp(App).use(GtUI).mount('#app')
```

`website/src/App.vue` 文件

```vue
<template>
  <gt-button></gt-button>
</template>

<script setup></script>
```

根目录 `package.json` 文件中增加 `script` 脚本

```json
{
  "scripts": {
    "docs:dev": "vite build --config ./website/vite.config.js"
  }
}
```

运行 `yarn docs:dev` 就看看到 `gt-button` 组件正常渲染了。

## 四、组件库打包

我们将使用 vite 来打包组件库，需要先安装一些依赖

```shell
yarn add @vitejs/plugin-vue rollup-plugin-typescript2 -D -W
```

### 4.1、打包整个组件库

新建 `build/vite.config.build.js` 文件

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from 'rollup-plugin-typescript2'
const path = require('path')

export default defineConfig({
  plugins: [
    vue(),
    {
      ...typescript({
        tsconfigOverride: {
          include: ['packages/**/*', 'typings/vue-shim.d.ts'],
          exclude: ['node_modules', 'packages/**/__tests__/*', 'website'],
        },
      }), // 默认会调用 tsconfig.json, 帮助我们生成声明文件
      apply: 'build', // 仅作用与 build 阶段
    },
  ],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, '../packages/index.ts'),
      name: 'gt-ui',
      formats: ['es', 'umd'],
    },
  },
})
```

根目录 `package.json` 文件中增加 `script` 脚本

```json
{
  "scripts": {
    "build": "vite build -c ./build/vite.config.build.js"
  }
}
```

运行命令 `yarn build` 默认会在 `dist` 目录下输出打包文件，根据配置，也就是 `gt-ui.es.js` 和 `gt-ui.umd.js` 两个文件，同时，还会调用 `tsconfig.json`, 帮助我们生成声明文件

```
dist
├── button
│   ├── index.d.ts
│   └── src
│       └── index.vue.d.ts
├── gt-ui
│   └── index.d.ts
├── gt-ui.es.js
└── gt-ui.umd.js
```

可在 `website/src/main.js` 文件中，以相对路径的方式，导入组件库，测试组件能否正常使用

### 4.2、打包每个单独组件

每个组件都是一个子项目，子项名称约定为 `@mono-ui/xxx`, 所以首先需要筛选中所以的组件，并且此打包任务存在多个 `entry`

新建 `build/vite.config.build.disperse.js` 文件

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { getPackagesSync } from '@lerna/project'
const path = require('path')

// 筛选出所有的组件
const inputs = getPackagesSync()
  .map((pkg) => pkg.name)
  .filter((name) => name.includes('@gt-ui'))

export default defineConfig({
  plugins: [
    vue({
      target: 'browser',
    }),
    {
      ...typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false, // 无需再次生成 ts声明文件
          },
          exclude: ['node_modules'],
        },
      }), // 默认会调用 tsconfig.json, 帮助我们生成声明文件
      apply: 'build',
    },
  ],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue'],
      input: inputs.map((name) => {
        const pkgName = name.split('@gt-ui/')[1]
        return path.resolve(__dirname, `../packages/${pkgName}/index.ts`)
      }),
      output: inputs.map((name) => {
        const pkgName = name.split('@gt-ui/')[1]
        return {
          dir: path.resolve(__dirname, `../dist/${pkgName}/`),
          entryFileNames: 'index.js',
          format: 'es',
        }
      }),
    },
    lib: {
      entry: path.resolve(__dirname, '../packages/**/index.ts'),
      name: 'index',
    },
  },
})
```

根目录 package.json 文件中增加 script 脚本

```json
{
  "scripts": {
    "build": "vite build -c ./build/vite.config.build.js && build:disperse",
    "build:disperse": "vite build -c ./build/vite.config.build.disperse.js"
  }
}
```

此时运行命令 `yarn build`, 会先打包组件库整体，再打包每个单独的组件，`dist` 目录结果如下

```
dist
├── button
│   ├── index.d.ts
│   ├── index.js
│   └── src
│       └── button.vue.d.ts
├── gt-ui
│   └── index.d.ts
├── gt-ui.es.js
└── gt-ui.umd.js
```

也可在 `website/src/main.js` 文件中，以相对路径的方式，导入单个组件，测试能否正常渲染

## 五、组件库样式处理

### 5.1、样式库初始化

在 `monorepo` 策略下，组件库样式也可作为子项目存在，组件的样式将与逻辑进行拆分，
通过 `lerna create theme` 创建样式项目, 将使用 `sass` 预处理器来编写样式。

整个项目目录结构如下

```
theme
├── README.md
├── package.json
└── src
    ├── commons
    │   ├── config.scss
    │   └── variables.scss
    ├── fonts
    │   ├── iconfont.css
    │   ├── iconfont.ttf
    │   ├── iconfont.woff
    │   └── iconfont.woff2
    ├── index.scss
    ├── mixins
    │   ├── bem-mixins.scss
    │   └── index.scss
    └── packages
        ├── gt-button.scss
        └── index.scss
```

采用 `BEM` 命名规范来定义组件的类名，首先需要定义好一些分隔符

`src/commons/config.scss` 文件

```scss
$namespace: 'gt'; // scss 变量，命名空间  gt-button
$element-separator: '__'; //元素分隔符 gt-button__label
$modifier-separator: '--'; // 类型修饰 gt-button--mini
$state-prefix: 'is-'; // 状态 is-plain
```

`src/mixins/bem-mixins.scss` 文件

```scss
@import '../commons/config.scss';

// .gt-button{}
@mixin b($block) {
  $B: $namespace + '-' + $block;
  .#{$B} {
    @content;
  }
}

// &__label => .gt-button__label {}
@mixin e($element) {
  @at-root {
    #{& + $element-separator + $element} {
      @content;
    }
  }
}

// &--mini => .gt-button--mini {}
@mixin m($modifier) {
  @at-root {
    #{& + $modifier-separator + $modifier} {
      @content;
    }
  }
}

// .gt-button.is-xxx
@mixin when($state) {
  @at-root {
    $S: $state-prefix + $state;
    &.#{$S} {
      @content;
    }
  }
}
```

当定义好这些 mixin 函数后，编写组件的样式就可以少写很多重复代码

```scss
@import '../mixins/index.scss';

@include b(button) {
  display: inline-block;
  padding: 12px 20px;
  font-size: 14px;
  @include m(mini) {
    padding: 7px 15px;
    font-size: 12px;
  }
  @include when(disabled) {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
```

### 5.2、样式库打包处理

样式库打包只需要将样式文件拷贝到输出目录即可，
`build/generate-theme.js`

```js
const path = require('path')
const fs = require('fs-extra')

const tasks = []

tasks.push(
  fs.copy(
    path.resolve(__dirname, '../packages/theme/src'),
    path.resolve(__dirname, '../dist/theme')
  )
)

Promise.all(tasks).then((res) => {
  // logger.success(`copy 成功`);
})
```

根目录 package.json 文件中增加 script 脚本

```json
{
  "scripts": {
    "build": "vite build -c ./build/vite.config.build.js && build:disperse && generate:theme",
    "build:disperse": "vite build -c ./build/vite.config.build.disperse.js",
    "generate:theme": "node ./build/generate-theme.js"
  }
}
```

此时，运行 `yarn build` 就会一次性打包整个组件库、每个单独的组件以及样式库

## 六、编写 Button 组件
