# web前端React项目环境
## 脚手架
`npm install th-react-cli -g`

`th-react-cli init`

input template name: react

input your projectName:

and wait…… successful!

`cd yourproject`

`npm run dev`

注意项目目录中 **norice.config.js .confont**
## icon工具讲解
`npm install th-icon -g`

修改.iconfont里的参数 参数为你iconfont 账号内容

在项目目录下运行 `icon fetch` 观察 src/components/Icon/icons.json

## norice 服务讲解
`npm run dev`命令运行的是 norice server -p $prot 详情查看package.json script

norice 是node代理服务 主要功能是集成webpack config,以及反向代理

配置文件 norice.config.js

```
const hostMap = {
  bus: 'http://192.168.0.112',
  metro: 'http://192/168.0.113',
  base: 'http://192.168.0.114;,
}
{
  webpackDev: require('./webpack.dev.js'),
  webpackProd: require('./webpack.prod.js'),
  api: {
    '/get/person/list': {
      get: {
        file: path.resolve(__dirname, './data/person.json'),   // file 文件用法
      }
    },
    '/proxy/string' : {
      proxy: 'http://192.168.0.111', //将会访问 http://192.168.111/proxy/string GET,POST,PUT,DELETE
    },
    '/proxy/function': (ctx) => ({
      url: 'http://192.168.0.111/proxy/function', //将会访问http://192.168.0.111/proxy/function,GET,POST,PUT,DELETE
      body: ctx.req,
    }),
    ...Object
      .entries(hostMap)
      .reduce((acc, [key, value]) => ({
        ...acc,
        [`/${key}/(.*)`]: {
          proxy: (ctx) => ({
            url: `${value}/${key}/${ctx.matchs[1]}?${ctx.querystring}`,
            body: ctx.req,
            headers: {
              ...ctx.headers,
            }
          })
        },
      }))
  }
}
```