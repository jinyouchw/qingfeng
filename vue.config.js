module.exports = {
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