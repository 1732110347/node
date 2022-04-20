const express = require('express')
const app = express()
const joi = require('joi')
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())


app.use(express.urlencoded({ extended: false }))

// 响应数据的中间件
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
        res.send({
            // 状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})


const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({
secret:config.jwtSecretKey
}).unless({path: [/^\/api/] }))


// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)


const userinfoRouter =require('./router/userinfo')
app.use('/my',userinfoRouter)





// 导入并使用文章分类路由模块
const artCateRouter = require('./router/artcate')
// 为文章分类的路由挂载统一的访问前缀 /my/article
app.use('/my/article', artCateRouter)




// 导入并使用文章路由模块
const articleRouter = require('./router/article')
// 为文章的路由挂载统一的访问前缀 /my/article
app.use('/my/article', articleRouter)


// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))






app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)

    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知的错误
    res.cc(err)
})

app.listen(3001, () => {
    console.log('http://127.0.0.1:3009');
})