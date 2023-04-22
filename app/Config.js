const path = require('path');

class Config {
  constructor() {
    const htmlDir = process.env.NODE_ENV === 'production' ? 'build' : 'public';
    this.htmlFile = path.join(__dirname, '..', 'client', htmlDir, 'index.html');
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
