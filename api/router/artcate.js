// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

const artcate_handler = require('../router_handler/artcate')

// 获取文章分类的列表数据
router.get('/cates', artcate_handler.getArticleCates)
// 向外共享路由对象
module.exports = router