const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method //GET POST

    //登录
    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)
        console.log(username, password)
        console.log(result)
        if (result) {
            console.log(1111)
            return new SuccessModel()
        }
        return new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter

// 路由 和 API 的概念
