module.exports = {
  selenium: {
    check_process_delay: 5000
  },
  test_settings: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--headless', '--no-sandbox', '--disable-gpu'],
          w3c: false
        }
      }
    }
  }
};
