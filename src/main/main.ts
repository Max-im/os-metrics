import { app } from 'electron';
import App from './App';
import AppTray from './AppTray';
import AppWindow from './AppWindow';
import Config from './Config';

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  const config = new Config();
  const appWindow = new AppWindow(config.htmlFile, config.windowData);
  const tray = new AppTray(appWindow, config);

  new App(tray, appWindow);
});
