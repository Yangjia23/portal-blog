function assign(target, ...args){
  if (target == undefined) {
    throw new TypeError('target can not be null or undefined')
  }
  return args.reduce((pre,cur) => {
    const keys = Object.keys(cur)
    for(let i=0; i< keys.length; ++i){
      const key = keys[i]
      pre[key] = cur[key]
    }
    return pre
  }, target)
}

console.log(assign({a: 23}, {b:2,c:23}, {b:22, c: 3}))
