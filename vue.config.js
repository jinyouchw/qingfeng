const webpack = require('webpack'); // 访问内置的插件
const path = require('path');
const resolve = dir => path.join(__dirname, dir);


module.exports = {

    publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_PUBLIC_PATH : '/',

    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@httpService", resolve("src/httpService"))
            .set("@assets", resolve("src/assets"))
            .set("@scss", resolve("src/assets/scss"))
            .set("@components", resolve("src/components"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@utils", resolve("src/utils"))
            .set("@views", resolve("src/views"))
            .set("@layouts", resolve("src/layouts"));

        // // 打包分析
        // config.plugin("webpack-report").use(BundleAnalyzerPlugin, [{
        //     analyzerMode: "static"
        // }]);

        const cdn = {
            css: [],
            js: []
        };

        config.plugin("html").tap(args => {
            // html中添加cdn
            args[0].cdn = cdn;

            // 修复 Lazy loading routes Error
            args[0].chunksSortMode = "none";
            return args;
        });

        return config;
    },
    css: {
        sourceMap: false,
        loaderOptions: {
            scss: {
                prependData: `
                @import "@scss/variables.scss";
                @import "@scss/base.scss";
                `
            }
        }
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