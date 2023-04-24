const { app } = require('electron');
const path = require('path');

export default class Config {
  htmlFile: string;
  windowData: any;
  iconPath: string;
  appName: string;

  constructor() {
    if (process.env.NODE_ENV === 'development') {
      const port = process.env.PORT || 1212;
      const url = new URL(`http://localhost:${port}`);
      url.pathname = 'index.html';
      this.htmlFile = url.href;
    } else {
      this.htmlFile = `file://${path.resolve(
        __dirname,
        '../renderer/index.html'
      )}`;
    }

    this.windowData = {
      height: 420,
      width: 390,
      frame: false,
      // resizable: false,
      show: false,
      webPreferences: {
        backgroundThrottling: false,
        preload: app.isPackaged
          ? path.join(__dirname, 'preload.js')
          : path.join(__dirname, '../../.erb/dll/preload.js'),
      },
    };
    this.iconPath = path.join(
      __dirname,
      'assets',
      '..',
      '..',
      '..',
      'assets',
      'icons',
      '32x32.png'
    );
    this.appName = 'OS Monitor';
  }
}
