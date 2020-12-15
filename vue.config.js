module.exports = {
  pluginOptions: {
    electronBuilder: {
      // outputDir: '/dist',
      removeElectronJunk: false,
      builderOptions: {
        publish: ['github']

      }

    }
  }
}
