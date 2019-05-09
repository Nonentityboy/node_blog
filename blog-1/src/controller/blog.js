const getList = (author, keyword) => {
    //先返回假数据(格式是正确的)
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1557046721552,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1557046710000,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    // 先返回假数据
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1557046721552,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    console.log(blogData)
    // blogData 是一个博客对象 包含title content属性
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    // id 是更新博客的id
    // blogData 是一个博客对象 包含title content属性
    console.log(id, blogData)
    return true
}

const delBlog = (id) => {
    // id 就是要删除博客的Id
     
    return  id
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}