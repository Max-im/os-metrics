import { Tray, BrowserWindow } from 'electron';
import Config from './Config';

export default class AppTray extends Tray {
  appWindow: BrowserWindow;

  constructor(appWindow: BrowserWindow, config: Config) {
    super(config.iconPath);

    this.appWindow = appWindow;
    this.setToolTip(config.appName);
    this.on('click', (e, bounds) => {
      const { x, y } = bounds;
      const { height, width } = this.appWindow.getBounds();

      if (this.appWindow.isVisible()) {
        this.appWindow.hide();
      } else {
        const yPosition = process.platform === 'darwin' ? y : y - height;
        this.appWindow.setBounds({
          x: x - width / 2,
          y: yPosition,
          height,
          width,
        });
        this.appWindow.show();
      }
    });
  }
}
