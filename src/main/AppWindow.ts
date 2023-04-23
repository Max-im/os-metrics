import { BrowserWindow, ipcMain, app } from 'electron';
import OsData from './OsData';

export default class AppWindow extends BrowserWindow {
  constructor(url: string, windowData: Object) {
    super(windowData);

    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
    ipcMain.on('get.data', this.onGetData.bind(this));
    ipcMain.on('exit.app', app.quit);
  }

  onBlur() {
    this.hide();
  }

  onGetData() {
    const data = new OsData();
    this.webContents.send('os.data', data);
  }
}
