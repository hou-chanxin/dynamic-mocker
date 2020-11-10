// 实现将本地80端口代理到8092端口，配合hosts配置，用于调试微信（因为微信必须使用域名）
// 用法原理：https://www.cnblogs.com/hz-blog/p/wechat-local-debug-domain.html
/**
### proxy
命令：`npm run proxy80`(win) or `sudo npm run proxy80`(linux,mac)
- 代理转向。将一个服务地址代理到另一个服务地址。比如代理到80或443端口，结合系统hosts配置，模拟用域名访问本地。
- 本例为 `https://localhost` 的请求代理到 将上述`mock_proxy`的服务`http://localhost:8080`
###

npm run proxy80`(win)

 */

const config = {
    mockEnabled: false, // 设置mock失效，仅使用proxy功能
    proxyTarget: function (urlPart) {
        return 'http://localhost:8081'
    },
    isHttps: false, // 是否https
    port: 80 // 端口
}
module.exports = config
