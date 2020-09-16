const path = require('path')

module.exports = {
  outputDir: "wwwroot/public",

  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: true
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/*.scss')
      ]
    }
  }
  // chainWebpack: config => {
  //   config.module
  //       .rule('fonts')
  //       .test(/\.(woff2?|eot|ttf)$/)
  //       .use('file-loader')
  //       .loader('file-loader')
  //       .options({
  //         name: 'fonts/[name]/[name].[ext]'
  //       })
  //       .end()
  // }
}

/*
configureWebpack: {
    test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: {
        loader: "file-loader",
            options: {
            name: "fonts/[name].[ext]",
        },
    },
}*/
