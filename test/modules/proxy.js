const http = require('../http')

// https
test('https mock func', () => {
    return http('post', 'https://localhost/api/_func').then(res => {
        expect(res.data).toMatchObject({
            default: 'no data'
        })
    })
})

test('https mock func post data', () => {
    return http('post', 'https://localhost/api/_func', { type: 'test' }).then(res => {
        expect(res.data).toMatchObject({
            b: 'test'
        })
    })
})


test('https mock json delayed', () => {
    var start = new Date()
    return http('post', 'https://localhost/api/_json', { type: 'test' }).then(res => {
        expect(res.data).toMatchObject({
            ok: true
        })
        expect(new Date() - start).toBeGreaterThanOrEqual(500)
    })
})


test('https mock json options', () => {
    return http.axios.options('https://localhost/api/_json').then(res => {
        expect(res.headers['access-control-allow-credentials']).toMatch(/true/)
        expect(res.data).toMatch(/OPTIONS OK/)
    })
})

test('https DELETE dynamic url', () => {
    return http('delete', 'http://localhost:8037/api/delete/' + Math.random()).then(res => {
        expect(res.data || res).toMatch(/successfully deleted/)
    })
})
