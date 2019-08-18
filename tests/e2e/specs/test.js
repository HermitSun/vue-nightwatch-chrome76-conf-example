// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
// const chromedriver = require('chromedriver');

module.exports = {
  // selenium: {
  //   cli_args: {
  //     'webdriver.chrome.driver': chromedriver.path
  //   }
  // },
  desiredCapabilities: {
    browserName: "chrome",
    chromeOptions: {
      w3c: false
    }
  },
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js + TypeScript App')
      .assert.elementCount('img', 1)
      .end();
  }
};
