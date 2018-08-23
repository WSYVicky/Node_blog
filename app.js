var express = require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()


//配置路径：相对路径改成绝对路径
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置模版template
app.engine('html',require('express-art-template'))

//设置默认读取文件的路径
app.set('views',path.join(__dirname,'./views/')) //默认就是 ./views 目录

//配置session
app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))

//引用路由：一定要在所有配置之后
app.use(router)

app.listen(3000,function () {
  console.log('running...')
})