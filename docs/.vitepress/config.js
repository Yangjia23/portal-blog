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
  return sidebar && sidebar.items
}

const parseFolder = (folder, baseRoot) => {
  const root = `${baseRoot}/${folder}/`
  let res = fs.readdirSync(root)
  let files = []
  let hasReadme = false
  res.forEach(file => {
    if (isFolder(path.join(root, file))) {
      files.push(parseFolder(file, root))
    } else if (file.indexOf('README') === 0) {
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

const generateChildrenRoutes = (config, folder = '') => {
  const { name, files, hasReadme } = config
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
    items: children,
    collapsible: true,
    collapsed: true,
  }
  if (hasReadme) {
    result.link = `${folder}/${name}/README`
  }
  return result
}


export default {
  title: '前端壹甲壹',
  description: 'Focus on Yourself!',
  base: '/portal-blog/',
  themeConfig: {
    logo: '/avatar.png',
    nav: [
      { text: '前端图谱', link: '/frontend-graph/README', activeMatch: "^/frontend-graph/" },
      { text: '项目实战', link: '/project-develop/README', activeMatch: "^/project-develop/" },
      { text: '学习总结', link: '/source-analysis/README', activeMatch: "^/source-analysis/" },
      { text: '关于', link: '/about/', activeMatch: "^/about/" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yangjia23' },
    ],
    sidebar: {
      "/frontend-graph/": genFolderTree('frontend-graph'),
      "/project-develop/": genFolderTree('project-develop'),
      "/source-analysis/": genFolderTree('source-analysis'),
    },
  }
}
