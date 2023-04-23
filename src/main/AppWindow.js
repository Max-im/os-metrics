const { BrowserWindow, ipcMain } = require('electron');
const OsData = require('./OsData');

class AppWindow extends BrowserWindow {
  constructor(url, windowData) {
    super(windowData);

    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
    ipcMain.on('get.data', this.onGetData.bind(this));
  }

  onBlur() {
    this.hide();
  }

  onGetData() {
    const data = new OsData();
    this.webContents.send('os:data', data);
  }
}

module.exports = AppWindow;
