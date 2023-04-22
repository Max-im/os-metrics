const path = require('path');

class Config {
  constructor() {
    this.htmlFile = path.join(__dirname, '..', 'client', 'build', 'index.html');
    this.windowData = {
      height: 500,
      width: 300,
      frame: false,
      // resizable: false,
      show: false,
      webPreferences: { backgroundThrottling: false },
    };
    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    this.iconPath = path.join(__dirname, 'assets', iconName);
    this.appName = 'OS Monitor';
  }
}

module.exports = Config;
