module.exports = {
    pwa: {
      name: 'Cardinal',
      startUrl: '/',
      themeColor: '#4faad1',
      backgroundColor: '#4faad1',
      msTileColor: '#4faad1',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black-translucent',
      iconPaths: {
        appleTouchIcon: 'img/icons/apple-touch-icon.png',
        msTileImage: 'img/icons/mstile-144x144.png'
      },
  
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        exclude: [/_redirects/, /.map$/],
      }
    }
  }