const { app } = require('electron');
const App = require('./App');
const AppTray = require('./AppTray');
const AppWindow = require('./AppWindow');
const Config = require('./Config');

app.on('ready', () => {
  const config = new Config();
  const appWindow = new AppWindow(config.htmlFile, config.windowData);
  const tray = new AppTray(appWindow, config);

  new App(tray, appWindow, config);
});
