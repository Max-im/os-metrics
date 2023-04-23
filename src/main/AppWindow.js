const { BrowserWindow, ipcMain, app } = require('electron');
const OsData = require('./OsData');

class AppWindow extends BrowserWindow {
  constructor(url, windowData) {
    super(windowData);

    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
    ipcMain.on('get.data', this.onGetData.bind(this));
    ipcMain.on('exit.app', this.onExit.bind(this));
  }

  onBlur() {
    this.hide();
  }

  onGetData() {
    const data = new OsData();
    this.webContents.send('os.data', data);
  }

  onExit() {
    app.quit();
  }
}

module.exports = AppWindow;
