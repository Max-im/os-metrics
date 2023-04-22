const { Tray, Menu, app } = require('electron');

class AppTray extends Tray {
  constructor(appWindow, config) {
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

    this.on('right-click', () => {
      const menuConfig = Menu.buildFromTemplate([
        {
          label: 'Quit',
          click: () => app.quit(),
        },
      ]);

      this.popUpContextMenu(menuConfig);
    });
  }
}

module.exports = AppTray;
