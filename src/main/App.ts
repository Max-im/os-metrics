import { BrowserWindow, Tray, app, ipcMain } from 'electron';

export default class App {
  appTray: Tray;

  appWindow: BrowserWindow;

  constructor(appTray: Tray, appWindow: BrowserWindow) {
    if (app.dock) {
      app.dock.hide();
    }

    this.appTray = appTray;
    this.appWindow = appWindow;
    ipcMain.on('update-title', this.OnUpdateTitle.bind(this));
  }

  OnUpdateTitle(e: Event, title: string) {
    this.appTray.setTitle(title);
  }
}
