const express = require('express')
const router = express.Router()


const userinfo_handler = require('../router_handler/userinfo')


// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi')

// 导入需要的验证规则对象
const { update_userinfo_schema } = require('../schema/user')


router.get('/userinfo', userinfo_handler.getUserInfo)


// 更新用户的基本信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)


module.exports = router
