const { BrowserWindow } = require('electron');

class AppWindow extends BrowserWindow {
  constructor(url, windowData) {
    super(windowData);

    this.loadFile(url);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur() {
    this.hide();
  }
}

module.exports = AppWindow;
