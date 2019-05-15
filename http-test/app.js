const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])
    // 设置返回格式为 JSON
    res.setHeader('Content-type', 'application/json')


    const resData = {
        method,
        url,
        path,
        query
    }

    // 返回 
    if (method === 'GET') {
        res.end(
            JSON.stringify(resData)
        )
    }
    if (method === 'POST') {
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        // 异步的
        req.on('end', () => {
            resData.postData = postData
            // 返回
            console.log(resData.postData)
            res.end(
                JSON.stringify(resData)
            )
        })
    }
})

server.listen(8000)