const loginCheck = (username, password) => {
    // 用假数据
    if (username === 'lkt' && password === '123456') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}