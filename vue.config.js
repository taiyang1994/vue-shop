module.exports = {
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://www.liulongbin.top:8888/api/private',
        changeOrigin: true
      }
    }
  }
}
