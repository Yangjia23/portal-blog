const fs = require('fs-extra')
const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../'); // 项目根目录
const isFolder = (pathUrl) => { // 判断是否为文件夹
  const stat = fs.lstatSync(pathUrl);
  return stat.isDirectory()
}

const genFolderTree = (folder) => {
  let config = parseFolder(folder, ROOT_PATH);
  const sidebar = generateChildrenRoutes(config)
  return sidebar && sidebar.children
}

const parseFolder = (folder, baseRoot) => {
  const root = `${baseRoot}/${folder}/`
  let res = fs.readdirSync(root)
  let files = []
  let hasReadme = false
  res.forEach(file => {
    if(isFolder(path.join(root, file))){
      files.push(parseFolder(file, root))
    } else if (file.indexOf('README') === 0){
      hasReadme = true
    } else {
      files.push(file)
    }
  })
  return {
    hasReadme,
    name: folder,
    files
  }
}

const generateChildrenRoutes= (config, folder = '') => {
  const {name, files, hasReadme} = config
  const children = files.map(item => {
    if (Array.isArray(item.files)) {
      return generateChildrenRoutes(item, `${folder}/${name}`)
    } else {
      const text = item.split('.md')[0]
      return {
        text,
        link: folder ? `${folder}/${name}/${text}` : `/${name}/${text}`
      }
    }
  })
  const result = {
    text: name,
    children
  }
  if (hasReadme){
    result.link = `${folder}/${name}/README`
  }
  return result
}

module.exports = {
  lang: "zh-CN",
  //  base: '/portal-blog/',
  title: "前端壹甲壹",
  description: "Focus on Yourself!",
  shouldPrefetch: () => false,
  // 主题配置
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "前端图谱", link: "/frontend-graph/README", activeMatch: "^/frontend-graph/" },
      { text: "项目实战", link: "/project-develop/README", activeMatch: "^/project-develop/" },
      { text: "学习总结", link: "/source-analysis/README", activeMatch: "^/source-analysis/" },
      { text: "关于", link: "/about/README", activeMatch: "^/about/" },
      { text: "Github", link: "https://github.com/Yangjia23" },
    ],
    sidebarDepth: 0,
    sidebar: {
      "/frontend-graph/": genFolderTree('frontend-graph'),
      "/project-develop/": genFolderTree('project-develop'),
      "/source-analysis/": genFolderTree('source-analysis'),
    },
  },
};
