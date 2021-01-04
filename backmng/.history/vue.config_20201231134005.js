// see http://vuejs-templates.github.io/webpack for documentation.
// path是node.js的路径模块，用来处理路径统一的问题
// var path = require("path");


// 将此模块下的东西进行导出
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//         "windows.jQuery": "jquery",
//       }),
//     ],
//   },
//   dev: {
//     // 导入模块,用来指明开发环境
//     // env: require("./dev.env"),
//     // 这是 本地项目启用的时候监听的端口号 可自行修改
//     port: 8080,
//     // 项目启动的时候自行打开浏览器  接受一个 布尔值
//     autoOpenBrowser: true,
//     // assetsSubDirectory: "static",
//     // assetsPublicPath: "/",
//     // 下面是代理表，作用是用来，建一个虚拟api服务器用来代理本机的请求，只能用于开发模式
//     proxyTable: {
//       "/": {
//         target: "http://101.201.57.179",
//         pathRewrite: {
//           "^/": "",
//         },
//       },
//       // "/admin": {
//       //     // target: "http://wwww.baidu.com",
//       //     target: "123",
//       //     pathRewrite: {
//       //         "^/api": "/api"
//       //     }
//       // },
//     },
//     // CSS Sourcemaps off by default because relative paths are "buggy"
//     // with this option, according to the CSS-Loader README
//     // (https://github.com/webpack/css-loader#sourcemaps)
//     // In our experience, they generally work as expected,
//     // just be aware of this issue when enabling this option.
//     cssSourceMap: false,
//   },
// };

const path = require("path");
const webpack = require("webpack");
// const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引用
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 打包分析
// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
// const resolve = (dir) = >path.join(__dirname, dir);
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/site/vue-demo/': '/',
  // 公共路径
  // indexPath: 'index.html',
  // 相对于打包路径index.html的路径
  // outputDir: process.env.outputDir || 'dist',
  // 'dist', 生产环境构建文件的目录
  // assetsDir: 'static',
  // 相对于outputDir的静态资源(js、css、img、fonts)目录
  // lintOnSave: false,
  // // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  // runtimeCompiler: true,
  // // 是否使用包含运行时编译器的 Vue 构建版本
  // productionSourceMap: !IS_PROD,
  // // 生产环境的 source map
  // parallel: require("os").cpus().length > 1,
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
//   pwa: {},
  // 向 PWA 插件传递选项。
  chainWebpack: (config) => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      },
    ]);
    // config.resolve.symlinks(true); // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    // config.plugin("html").tap((args) => {
    //   // 修复 Lazy loading routes Error
    //   args[0].chunksSortMode = "none";
    //   return args;
    // });
    // config.resolve.alias // 添加别名
    //   .set("@", resolve("src"))
    //   .set("@assets", resolve("src/assets"))
    //   .set("@components", resolve("src/components"))
    //   .set("@views", resolve("src/views"))
    //   .set("@store", resolve("src/store"));
    // 压缩图片
    // 需要 npm i -D image-webpack-loader
    // config.module
    //   .rule("images")
    //   .use("image-webpack-loader")
    //   .loader("image-webpack-loader")
    //   .options({
    //     mozjpeg: {
    //       progressive: true,
    //       quality: 65,
    //     },
    //     optipng: {
    //       enabled: false,
    //     },
    //     pngquant: {
    //       quality: [0.65, 0.9],
    //       speed: 4,
    //     },
    //     gifsicle: {
    //       interlaced: false,
    //     },
    //     webp: {
    //       quality: 75,
    //     },
    //   });
    // 打包分析, 打包之后自动生成一个名叫report.html文件(可忽视)
    // if (IS_PROD) {
    //   config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
    //     {
    //       analyzerMode: "static",
    //     },
    //   ]);
    // }
  },
//   configureWebpack: (config) => {
//     // 开启 gzip 压缩
//     // 需要 npm i -D compression-webpack-plugin
//     const plugins = [];
//     // if (IS_PROD) {
//     //   plugins.push(
//     //     new CompressionWebpackPlugin({
//     //       filename: "[path].gz[query]",
//     //       algorithm: "gzip",
//     //       test: productionGzipExtensions,
//     //       threshold: 10240,
//     //       minRatio: 0.8,
//     //     })
//     //   );
//     // }
//     config.plugins = [...config.plugins, ...plugins];
//   },
//   css: {
//     // extract: IS_PROD,
//     requireModuleExtension: false,
//     // 去掉文件名中的 .module
//     loaderOptions: {
//       // 给 less-loader 传递 Less.js 相关选项
//       less: {
//         // `globalVars` 定义全局对象，可加入全局变量
//         globalVars: {
//           primary: "#333",
//         },
//       },
//     },
//   },
  devServer: {
    // overlay: {
    //   // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true,
    // },
    host: "0.0.0.0",
    port: 8080,
    // 端口号
    https: false,
    // https:{type:Boolean}
    open: false,
    //配置自动启动浏览器
    hotOnly: true,
    // 热更新
    // proxy: 'http://localhost:8080' // 配置跨域处理,只有一个代理
    proxy: {
      //配置多个跨域
      "/img": {
        target: "https://acg.loli.ma",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/img": "",
        },
      },
      "/server": {
        target: "http://172.17.35.25:9706",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/server": "",
        },
      },
    //   "/api2": {
    //     target: "http://172.12.12.12:2018",
    //     changeOrigin: true,
    //     //ws: true,//websocket支持
    //     secure: false,
    //     pathRewrite: {
    //       "^/api2": "/",
    //     },
    //   },
    },
  },
};
