//本文件模拟根目录的响应数据（类似index.html的作用）
var fs = require('fs')
module.exports = {
    disabled: 0,
    headers: {
        'Content-Type': 'text/html'
    },
    body: function (query, post) {
        return fs.readFileSync('root/_index.html', 'utf-8')
    }
}
