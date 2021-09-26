const path = require('path');
module.exports = {
  devServer : {
  //   proxy: {//代理跨域
  //     '/user' : {
  //       target : 'http://10.3.12.181:8000/',// 需要代理的地址
  //       changeOrigin: true,//是否跨域
  //       secure: false, // 如果是https接口，需要配置这个参数
  //       pathRewrite: {//重写接口地址
  //           '^/user': '/user'
  //       },

  //     },

  //   overlay: {
  //     warnings: false,
  //     errors: false
  // },

  // },
  chainWebpack: config => {
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/about(.)+?\.js$/)
      return options
    })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./src/assets/less/theme.less"), path.resolve(__dirname, "./src/assets/less/element.less")]
    }
  },

lintOnSave: false
}
