const { app, ipcMain } = require('electron');

class App {
  constructor(appTray, appWindow) {
    if (app.dock) {
      app.dock.hide();
    }
    this.appTray = appTray;
    this.appWindow = appWindow;
    ipcMain.on('update-title', this.OnUpdateTitle.bind(this));
  }

  OnUpdateTitle(e, title) {
    this.tray.setTitle(title);
  }
}

module.exports = App;
