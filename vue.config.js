module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? [, '/support', '/appcenter', '/devops', '/', '/operation', '/audit'][process.env.VUE_APP_SYSTEM] || '/' : '/',
    productionSourceMap: false,
    css: {
        sourceMap: false,
        loaderOptions: {}
    },
    devServer: {
        proxy: {
            '/qingfengs': {
                target: 'https://easy-mock.bookset.io/mock/60768d195e745e625f775bc6/qingfeng',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '/qingfengs': ''
                }
            }
        }
    }
}