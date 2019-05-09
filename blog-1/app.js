const querystring = require('querystring')
const HandleBlogRouter = require('./src/router/blog')
const HandleUserRouter = require('./src/router/user')

// 用于处理post data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            console.log(222)
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        // 异步的
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    // 获取 path
    const url = req.url
    req.path = url.split('?')[0]

    //解析 query
    req.query = querystring.parse(url.split('?')[1])

    // 处理postData
    getPostData(req).then(postData => {
        req.body = postData

        // 处理 blog 路由
        const blogData = HandleBlogRouter(req, res)
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return
        }

        // 处理 user 路由
        const userData = HandleUserRouter(req, res)
        if (userData) {
            res.end(
                JSON.stringify(blogData)
            )
            return
        }

        // 未命中路由，返回404
        res.writeHead(404, { "Content-type": "text/plain" })
        res.write("404 Not found")
        res.end()

    })


}

module.exports = serverHandle

    // const resData = {
    //     name: 'Curtin好帅',
    //     site: 'nonentity',
    //     env: process.env.NODE_ENV
    // }
    // //env 用于识别环境 dev为开发环境

    // res.end(
    //     JSON.stringify(resData)
    // )