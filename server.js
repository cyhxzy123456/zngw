const express = require ('express')
const apiServer = express()

/*名称apiServer根据项目自定义，避免冲突为原则*/

var bodyParser = require('body-parser')  //express必须要进行的配置
apiServer.use(bodyParser.urlencoded({ extended: true }))  //
apiServer.use(bodyParser.json())
var apiRouter = express.Router()  //配置路由，名称同样可以自拟
var fs = require('fs')
apiRouter.route('/:apiName')    //apiName为接口名称
  .all(function (req, res) {    // .all即支持包括get\post在内的所有xhr请求
    fs.readFile('db.json', 'utf8', function (err, data) {   //db.json 自己配置的模拟数据需要放置到
      if (err) throw err
      var data = JSON.parse(data)   //将从服务器端获取到的json对象转换为普通js对象
      if (data[req.params.apiName]) {
        res.json(data[req.params.apiName])
      }
      else {
        res.send('no such api name')
      }
    })
  })
apiServer.use('/api', apiRouter);   //   配置 '/api'是因为做了服务器代理，所有要指明代理地址
apiServer.listen(3001, function (err) {  //配置接口端口号，为了方便查看，一般取前端口号+1
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + (3001) + '\n')
})
